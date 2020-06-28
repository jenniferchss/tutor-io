const mongoose = require("mongoose");

const ModuleSchema = mongoose.Schema({
    moduleCode: {
      type: String,
      required: true
    },
    tutorsTeaching: {
      type:[{ type: Schema.Types.ObjectId, ref: 'Profile' }]
    },
    numOfTutors: {
        type: Number,
        default: 0
    },
    createdAt: {
      type: Date,
      default: Date.now()
    }
  });
  
  
  module.exports = mongoose.model("module", ModuleSchema);