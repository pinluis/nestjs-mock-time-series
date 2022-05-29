import { Injectable } from '@nestjs/common';
const fs = require('fs');
const path = require('path');

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getMockTimeSeries(a: number,b: number) {
    // Loops function b-times to instantiate more arrays. "Seconds"
    for (var z = 0; z < b; z++){
      // Instantiate array of length a. "Hertz"
      var mockTimeSeries = new Array(a);
      // Making the array two-dimensional by making the array containig arrays.
      for (var i = 0; i < mockTimeSeries.length; i++) {
          mockTimeSeries[i] = new Array(2);
      }
      // Loop to fill in values in every position.
      for (var i = 0; i < a; i++) {
          for (var j = 0; j < 2; j++) {
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
  } return console.log('ok');
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
