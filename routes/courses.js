'use strict';

var express = require('express');
var router = express.Router();
var models  = require('../models');

/* GET course page. */

router.get('/:course_id', function (req, res) {
  models.Course.findOne({ where: { id: req.params.course_id} })
    .then(function (course) {
      course.getLectures()
        .then(function (lectures) {
          res.render('course', { title: course.catalog_id, course: course, lectures: lectures  });
        });
    });
});

router.get('/:course_id/notes/:note_id', function (req, res) {
  
});

router.get('/:course_id/notes/create', function (req, res) {
  
});

router.post('/:course_id/notes', function (req, res) {
  
});

router.put('/:course_id/notes/:note_id', function (req, res) {
  
});

router.delete('/:course_id/notes/:note_id', function (req, res) {
  
});



module.exports = router;
