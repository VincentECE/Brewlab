const { Breweries } = require('../models');

const getBreweries = async () => {
  try{
    const breweries = await Breweries.find({}).select('-_id');
    return breweries;
  } catch(err) {
    return err;
  }
}

module.exports = getBreweries;