// setup express as router
const router = require('express').Router;

// require models
const Campus = require('../models/campus')
const Student = require('../models/student')

router.param('id', function(req, res, next, id) {
  Campus.findById(id)
  .then(campus => {
    req.campus = campus;
    next()
  })
  .catch(next)
}
)
// ^^need error handler

router.get('/', function (req, res, next) {
  Campus.findAll()
  .then(campus => {
    res.json(campus);
  })
  .catch(next);
});

router.get('/:id', function (req, res, next) {
  req.campus.reload()
  .then(function (campus) {
    res.json(campus);
  })
  .catch(next);
});

router.post('/', function (req, res, next) {
  Campus.create({
        name: req.body.name,
        image: req.body.imageURL
    })
  .then(function (campus) {
    res.status(201).json(campus);
  })
  .catch(next);
});


module.exports = router;