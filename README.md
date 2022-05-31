# IDUN Full-Stack Assessment

This document lists all the tasks for the IDUN full-stack assessment. We try to test the skills required for a full-stack position in our software engineering team using diverse software tasks. It is a vertical stack of questions, each addressing a specific skill. You don't have to solve everything, but we recommend you go as lean as possible. If you have any questions, you can always contact Daniel or Cao. If you finish faster than we told you to, you'll have enough time to complete the optional tasks or refactor your code.

We recommend that you put everything you do in a single repository and commit each step so we can review your steps – remember, we encourage you to learn from mistakes and overcome challenges. We wish you success and fun! 🎊

## Backend

- [x] Bootstrap a backend application with FastAPI or NestJS.
- [x] Create a function called `createMockTimeSeries` that generates a two-dimensional array with random float values ranging from -100 to max 100. One can also define the sample rate of the time series, which is the array's length. Users can also specify the length of the mock time series data in seconds. You parameterize all options.
- [x] Create a simple REST API endpoint where users can send the parameters for the function to create a time series array which they would receive as a return from the API.
- [x] Save the generated time series data as a CSV on the backend. Maybe expose other endpoints to enable CRUD operations on the saved CSV files.

## Frontend

- [x] Bootstrap a frontend application with Next.js.
- [ ] Create a simple UI that makes it possible to create generated time series data (using your function from the API, e.g. via a simple button), and visualize it. Also: display previously recorded time series data as a list and optionally display CRUD operation buttons.

## DevOps

- [ ] Containerize both frontend and backend applications.
- [ ] Describe how you would deploy the application on AWS.

## Optional

- [ ] Write frontend and backend in TypeScript instead of JavaScript (if you've chosedn FastAPI on the backend).
- [ ] Provide a test coverage for the frontend and/or backend.
- [ ] Create a markdown file and argue why a polyglot solution might make sense.
- [ ] Describe how you would turn the application into a real-time application, ergo, having a real-time pub-sub data feed using, e.g. WebSocket.