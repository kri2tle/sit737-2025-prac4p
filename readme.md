Node.js Calculator API with Express.js

This is a simple Node.js web application that serves a calculator API using Express.js. The app provides basic arithmetic operations (addition, subtraction, multiplication, and division) via API requests.

Features

Serves a static index.html file for the calculator UI.

Provides an API endpoint (/calculate) for performing calculations.

Logs requests and errors using Winston.

Implements cache-control to prevent caching of static files.

Requirements

Node.js (version 18+ recommended)

npm (Node Package Manager)

Installation

Clone this repository:

git clone <repository-url>
cd <repository-folder>

Install dependencies:

npm install

Usage

Start the Server

Run the following command to start the server:

node server.js

The server will run at http://localhost:3040.

API Endpoint

The application provides the following API endpoint:

/calculate

Performs basic arithmetic operations.

Query Parameters:

num1 (number) - First number

num2 (number) - Second number

operation (string) - One of add, subtract, multiply, divide

Example Request:

GET http://localhost:3040/calculate?num1=10&num2=5&operation=add

Example Response:

{
  "result": 15
}

Logging

This project uses Winston for logging. Logs include:

Successful calculations

Errors (invalid input, division by zero, etc.)

License

This project is open-source and available under the MIT License.

