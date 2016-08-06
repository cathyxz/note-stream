'use strict';

var express = require('express');
var router = express.Router();
var models  = require('../models');


router.get('/courses', function (req, res) {
  models.Course.findAll()
    .then(function(courses) {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({courses}));
  });
});

/* GET all data for one course */

router.get('/courses/:course_id', function (req, res) {
  models.Course.findOne({ 
    where: { id: req.params.course_id},
    include: [{model: models.Lecture, include : [models.Note]}]
  }).then(function (course) {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({course}));
    });
});

router.get('/courses/:course_id/lectures', function (req, res) {
  models.Lecture.findAll({ where: { CourseId: req.params.course_id} })
    .then(function (lectures) {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({lectures}));
  });
});




module.exports = router;
