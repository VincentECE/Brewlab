const router = require('express').Router();
const { getBreweries } = require('./controllers');


router.get('/listBreweries', (req, res) => {

  getBreweries('poop')
  .then((breweries) => {
    res.send(breweries)
  })
  .catch((err)=>{
    res.send(err);
  })

});

module.exports = router;