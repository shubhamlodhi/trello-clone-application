const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TaskSchema = new Schema({

    taskName : {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: false
    },
    stage:{
        type: String,
        required: false
    },
    taskMembers: {
        type: Array,
        required: false
    },
    boardName : {
        type: String,
        required: false
    }

})

const Task = mongoose.model('tasks', TaskSchema);
module.exports = Task;
