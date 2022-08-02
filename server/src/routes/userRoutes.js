const userRoutes = require('express').Router();
const { getBreweries } = require('../controllers');

userRoutes.get('/listBreweries', (req, res) => {

  getBreweries()
  .then((breweries) => {
    res.send(breweries)
  })
  .catch((err)=>{
    res.send(err);
  })

});

module.exports = userRoutes;
