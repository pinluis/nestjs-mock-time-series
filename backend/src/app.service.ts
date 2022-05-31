import { Injectable } from '@nestjs/common';
const fs = require('fs');
const path = require('path');

@Injectable()
export class AppService {
  getHello(): string {
    return 'ok';
  }
  getMockTimeSeries(sampleRate: number,duration: number) {
    // Loops function b-times to instantiate more arrays. "Seconds"
    for (let z = 0; z < duration; z++){
      // Instantiate array of length a. "Hertz"
      let mockTimeSeries = new Array(sampleRate);
      // Making the array two-dimensional by making the array containing arrays.
      for (let i = 0; i < mockTimeSeries.length; i++) {
          mockTimeSeries[i] = new Array(2);
      }
      // Loop to fill in values in every position.
      for (let i = 0; i < sampleRate; i++) {
          for (let j = 0; j < 2; j++) {
            // Math.random returns float between 0 and 1 (never reaching 1)
            // Math.round rounds the number -> here used to return either 1 or -1.
            // Multiply with 100 to be in desired range of -100 to 100.
            mockTimeSeries[i][j] = Math.random() * (Math.round(Math.random()) * 2 - 1) * 100;
          } 
      }  
      // AppendFile creates CSV in the folder "data" if there is no file with the specified name
      // else it updates the file by appending the newly created array
      fs.appendFile(path.join(__dirname, 'data', 'MockTimeSeries.csv'), JSON.stringify(mockTimeSeries), (err) => {
      if (err) throw err;
      console.log('done.')
  }); 
  } return "ok";
  }
  // Deletes the CSV File
  deleteMockTimeSeries(){
    const path = './dist/data/MockTimeSeries.csv'
    try {
      fs.unlinkSync(path)
      console.log('done.')
      //file removed
    } catch(err) {
      console.error(err)
    }
  }
}
