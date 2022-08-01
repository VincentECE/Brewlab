const userRoutes = require('express').Router();
const { getBreweries } = require('../controllers');
const { page1 } = require('../../db-loader/austinBreweriesData/');


userRoutes.get('/listBreweries', (req, res) => {

  //  res.send(page1)

  console.log(Array.isArray(page1))

  getBreweries()
  .then((breweries) => {
    res.send(breweries)
  })
  .catch((err)=>{
    res.send(err);
  })

});

module.exports = userRoutes;