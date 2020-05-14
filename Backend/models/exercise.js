const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    exercisename:{
        type:String,
        required:true,
        unique:true,
        minlength:3,
        trim:true
    },
    description:{
      type:String,
      required:true,
    },
    duration:{
     type:Number,
    },

    date:{
      type:Date
    },
   
},{
    timestamps:true
}

)


const Exercise = mongoose.model('Exercise',exerciseSchema);

module.exports = Exercise;


