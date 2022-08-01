const { Breweries } = require('../models');


async function getBreweries(page = 1) {

  try{
    const breweries = await Breweries.find({});
    return breweries;
  } catch(err) {
    return err;
  }
}

module.exports = getBreweries;