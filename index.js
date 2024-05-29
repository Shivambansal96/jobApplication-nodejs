
const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const jobRoutes = require("./routes/job")

const app = express();

dotenv.config();

app.use(express.json());


mongoose
.connect(process.env.DB_URL)
.then(() => {
    console.log("Connected to the DataBase");
})
.catch((err) => {
    console.log('Error_caught_connecting_db = ', err);
})

app.use(jobRoutes)

app.listen(10000, () => {
    console.log('Server is runnning at port 10000')
});


