import fs from 'fs';

// place input into an array
// loop through input, starting at index 1
// check if current index value is greater than previous
const main = () => {
  const fileContents = fs.readFileSync(`${__dirname}/input`, 'utf8')
  const depthMeasurements = fileContents.split('\n');

  let numberOfDepthMeasurementIncreases = 0;

  for (let i = 1; i < depthMeasurements.length; i++) {
    const currentDepth = parseInt(depthMeasurements[i]);
    const previousDepth = parseInt(depthMeasurements[i - 1]);

    if (currentDepth > previousDepth) {
      numberOfDepthMeasurementIncreases++;
    }
  }

  console.log('numberOfDepthMeasurementIncreases', numberOfDepthMeasurementIncreases);
}

main();
