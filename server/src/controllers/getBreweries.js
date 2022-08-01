const { Breweries } = require('../models');

async function getBreweries() {
  try{
    const breweries = await Breweries.find({}).select('-_id');
    return breweries;
  } catch(err) {
    return err;
  }
}

module.exports = getBreweries;