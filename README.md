# Parking Lot API

## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems

  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v14.5.0

    $ npm --version
    6.14.5

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

### Dependencies
- #### Express

  This is a framework for node.js. Run the following command to install it.

      > npm install --save express

- #### Express-Rate-Limit

  It is a basic rate-limiting middleware for Express. Use to limit repeated requests to public APIs and/or endpoints such as password reset.

      > npm install --save express-rate-limit

- #### dotenv

  Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

      > npm install dotenv

### Dev Dependencies
- #### Nodemon

  It is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

      > npm install --save-dev nodemon

- #### Mocha(Testing)

  Mocha is a feature-rich JavaScript test framework running on Node. js and in the browser, making asynchronous testing simple and fun.

      >  npm install mocha --save-dev

- #### Chai(Testing)

  Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

      > npm install chai --save-dev

- #### Request(Testing)

  Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.

      > npm install request --save-dev

## Usage

Set the size of parking lot in .env file.

      -- PARKING_LOT_SIZE = ?

To start the server, run the following command.

      > nodemon start

The server runs on:

      http://localhost:5000

### API Endpoints

#### Park a Car:

  This Endpoint will be given the car number as input and outputs the slot where it is parked. If the parking lot is full, the appropriate error message is returned.

  This is a POST request API endpoint.

      http://localhost:5000/parkCar

  Request: Through Body

      {
          vNumber : "TS 08 GZ 2665" //Vehicle Number
      }

  The above is a request for slot to park vehicle with vNumber - TS 08 GZ 2665

  Response: Three types

  1. Vehicle can park Successfully. The response will return a slot number in which the car can be parked.

      > "V-18"(For example)

  2. No empty slot available. The response will be a message.

      > "Sorry, No empty space available."

  3. Vehicle already parked.

      > "Your car is already parked, if not contact the management. Thank you."

#### Unpark the Car:

  This endpoint takes the slot number from which the car is to be removed from and frees that slot up to be used by other cars.

  This is a DELETE request API endpoint.

      http://localhost:5000/unparkCar/:slot

  Request: Through path parameter

      http://localhost:5000/unparkCar/V-18

  The above request removes the car in V-18 slot.

  Response: Three types

  1. Vehicle unparked successfully.

      > 'Thank you for parking with us :)'

  2. If the requested slot is invalid, i.e, if the slot is empty already then the response will be.

      > 'Sorry, Wrong slot. Please try again.'

  3. If something went wrong during the unparking process, then the response will be.

      > 'Something went wrong' with HTTP status code - 500

#### Get the Car/Slot Information:

  This endpoint can take either the slot number or car number and return both the car number and slot number for the input.

  This is a GET request API endpoint.

      http://localhost:5000/getInfo

  Request: Two Types

  1. Through Slot number

      http://localhost:5000/getInfo?slot=V-18
    
    The above request gives info of the car/slot in V-18 slot.

  2. Through Vehcle Number

      http://localhost:5000/getInfo?vNumber='TS%08%GZ%2665'

    The above request gives info of the car/slot with requested vehicle number.

  Response: Two types

  1. Vehicle and Slot Info.

    {
        vNumber : "TS 08 GZ 2665",
        slot : V-18
    }

  2. Vehicle/Slot not found.

      > 'No Record Found!'

## Future Updates

- Vehicle number validation using regex.
- Slot number validation using regex.

## Testing
- For testing I have used mocha, chai and request. Due to the time constraint I have done three simple tests.

- I have also used Postman for testing API calls.