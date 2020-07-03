const mongoose = require("mongoose");

const ModuleSchema = mongoose.Schema({
    moduleCode: {
      type: String,
      required: true
    },
    tutorsTeaching: {
      type: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tutor'
      }]
    },
    numOfTutors: {
        type: Number,
        default: 0
    },
    moduleTitle:{
      type: String,
      required: true
    },
    faculty:{
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now() 
    }
  });
  
  
  module.exports = mongoose.model("module", ModuleSchema);