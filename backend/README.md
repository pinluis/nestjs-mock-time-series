
To start the server:

npm run start:dev

Tasks: 

- [x] Bootstrap a backend application with FastAPI or NestJS.
- [x] Create a function called `createMockTimeSeries` that generates a two-dimensional array with random float values ranging from -100 to max 100. One can also define the sample rate of the time series, which is the array's length. Users can also specify the length of the mock time series data in seconds. You parameterize all options.
- [x] Create a simple REST API endpoint where users can send the parameters for the function to create a time series array which they would receive as a return from the API.
- [x] Save the generated time series data as a CSV on the backend. Maybe expose other endpoints to enable CRUD operations on the saved CSV files.

Backend was tested by using the postman requests provided in the file 'Assignment.postman_collection.json'. 

Personal learnings:

Learned to build basic backend with nest.js and to test the endpoints with postman.
Better understanding of the structure of a backend (services, modules and controllers).

Things I want to look into next:

Connect the backend to different types of databases.
Build the backend of a more complex application.
Writing tests.


