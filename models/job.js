// DB Schema 

const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        // unique: true  
    },
    description: {
        type: String,
        required: true

    },
    company: {
        type: String,
        required: true

    },
    location: {
        type: String,
        required: false,
        default: 'Work-From-Home'
    },
    salary: {
        type: Number,
        required: true
    }
});

const jobModel = mongoose.model('jobs', jobSchema)

module.exports = jobModel;


