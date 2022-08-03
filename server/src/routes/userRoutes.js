const userRoutes = require('express').Router();
const { getBreweries } = require('../controllers');
const path = require('path');

userRoutes.get('/listBreweries', (req, res) => {

  getBreweries()
  .then((breweries) => {
    res.send(breweries)
  })
  .catch((err)=>{
    res.send(err);
  })

});

userRoutes.get('*', (req, res) => {

  res.sendFile(path.resolve(__dirname, '../../../client/build', 'index.html'));

});

module.exports = userRoutes;
