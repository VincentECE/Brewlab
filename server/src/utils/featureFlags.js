// create an object with all the feature flags


const hasFlag = (flagName) => {
  return rootFlag[flagName];
}

const rootFlag = {
  'test': true
}



const test = hasFlag('test');
