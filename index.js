
const express = require('express');
const mongoose = require('mongoose')

const jobRoutes = require("./routes/job")

const app = express();

app.use(express.json());

mongoose
.connect('mongodb://localhost:27017/jobapp')
.then(() => {
    console.log("Connected to the DataBase");
})
.catch((err) => {
    console.log('Error_caught_connecting_db = ', err);
})

app.use(jobRoutes)

app.listen(8008, () => {
    console.log('Server is runnning at port 8008')
});


