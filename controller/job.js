
const jobModel = require('../models/job');
const JobModel = require('../models/job')

const createJob = async(req, res) => {
    console.log(req.body);
    
    try {
    
        const jobObj = req.body;
        const newJob = new JobModel(jobObj);
        const newlyAddedJob = await newJob.save();
        
        res.json({
            success:true,
            msg: 'Created Job Api',
            jobID: newlyAddedJob.id
        })
        
    } catch (err) {
        // console.log(err);
        res.json({
            success: false,
            msg: 'Try Catch Error'
        })
    }

}


const listJob = async(req, res) => {


    try {
        
        const minSalary = req.query.minSalary;
        const maxSalary = req.query.maxSalary;
        
        const readJobs = await JobModel.find({
            $and: [{
                
                salary: {
                    $gte : minSalary,
                    $lte : maxSalary
                }
                // salary: { $gte: minSalary }, salary: { $lte: maxSalary }
            }]
        })
        
        res.json({
            success:true,
            msg: 'Listed all Jobs',
            results: readJobs
            
        })

    } catch (err) {
        // console.log(err);
        res.json({
            success: false,
            msg: 'Try Catch Error'
        })
    }
}

const editJob = async(req, res) => {

    try {

    const jobId = req.params.id;

// JobModel.findByIdAndUpdate(the object searching for, Obect to update)   { only for id } 
await JobModel.findByIdAndUpdate(jobId, req.body)     // you need to make changes while in post METHOD
console.log('Updated a Job');

const findObj = {
    company: 'Microsoft'
}

const updateObj = {
    salary: 160000
}

await JobModel.findOneAndUpdate(findObj, updateObj)
// JobModel.findOneAndUpdate(the object searching for, Obect to update)  { updates the first one encountered }



await JobModel.updateMany(findObj, updateObj)
// JobModel.updateMany(the object searching for, Obect to update)          { updates All }

    res.json({
        success:true,
        msg: 'Edited Job Api'
    })

} catch (err) {
    // console.log(err);
    res.json({
        success: false,
        msg: 'Try Catch Error'
    })
}
}

const deleteJob = async(req, res) => {

    try {
        
    const jobId = req.params.id;

    await JobModel.findByIdAndDelete(jobId)
    console.log('Deleted a Job');
    // await JobModel.findOneAndDelete(jobId)
    // await JobModel.deleteMany(jobId)    { it deletes all the files (AVOID USING THIS)  }



    res.json({
        success:true,
        msg: 'Delete Job Api'
    })

} catch (err) {
    res.json({
        success: false,
        msg: 'Try Catch Error'
    })
}




}


const jobController = {
    createJob, listJob, editJob, deleteJob
}

module.exports = jobController;