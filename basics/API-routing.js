
/*

Given an app.js file, write two APIs that sends different strings as responses.

Refer to the below table for paths and responses,

Method	Path	Description
GET	/	Will send the text Home Page as response
GET	/about	Will send the text About Page as response
Export the express instance using default export syntax.

Use Common JS module syntax */


const express = require('express');

const app = express();

app.get('/' , (request , response) => {
    response.send('Home Page');
});

app.get('/', (request , response) => {
    response.send("About Page");
}); 

module.exports = app;