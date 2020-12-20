const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BoardSchema = new Schema({

    boardName : {
        type: String,
        required: true
    },
    
    boardMembers: {
        type: Array,
        required: false,
    },
    
    boardContent: {
        todo : {
            type: Array,
            required: false
        },
        indevelopment : {
            type: Array,
            required: false
        },
        tobereviewed : {
            type: Array,
            required: false
        },
        finished : {
            type: Array,
            required: false
        }
    }

})

const Board = mongoose.model('board', BoardSchema);
module.exports = Board;