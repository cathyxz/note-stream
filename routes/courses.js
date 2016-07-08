var express = require('express');
var router = express.Router();
var models  = require('../models');

/* GET course page. */

router.get('/:course_id', function(req, res) {
  models.Course.findOne({ where: { id: req.params.course_id} })
    .then(function(course) {
      course.getLectures()
        .then(function(lectures) {
          res.render('course', { title: 'Note Stream', course: course, lectures: lectures  });
        });
    });
});

module.exports = router;
