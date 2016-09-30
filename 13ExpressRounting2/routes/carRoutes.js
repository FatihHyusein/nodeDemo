var express = require('express');

var carRouter = express.Router();

var carsArray = [
    {
        make: 'Lada',
        model: 'samara',
        year: 1990
    },
    {
        make: 'Nissan',
        model: 'Micra',
        year: 2000
    },
    {
        make: 'Smart',
        model: '4Four',
        year: 2001
    },
];

carRouter.route('/')
    .get(function (req, res) {
        res.render('cars', {cars: carsArray});
    });

carRouter.route('/:id')
    .get(function (req, res) {
        res.render('carDetails', {car: carsArray[req.params.id]});
    });

module.exports = carRouter;