const mongoose = require('mongoose');
const { Breweries } = require('../src/models');
const {
  page1,
  page2,
} = require('./austinBreweriesData');

const url = 'mongodb://localhost:27017/BrewLab';

mongoose.connect(url, {autoIndex: false}, () => {
  console.log('database connected!');
}, e => console.log('Error while connecting to database: ', e));

const addDummyData = async () => {
  try {
    await Breweries.deleteMany({});

    await Breweries.insertMany(page1);
    await Breweries.insertMany(page2);
    console.log('Data loading complete!');
    process.exit();
  } catch(err) {
    console.warn(err);
    process.exit();
  }
};

addDummyData();