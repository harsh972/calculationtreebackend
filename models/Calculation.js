const mongoose = require('mongoose');

const operationSchema = new mongoose.Schema(
    {
        parentId: { 
            type: mongoose.Schema.Types.ObjectId, 
            required: true, 
            refPath: 'parentType'   
        },
        type: { 
            type: String, 
            required: true 
        },
        value: { 
            type: Number, 
            required: true 
        },
    },
    {
        timestamps: true
    }
);

const calculationSchema = new mongoose.Schema(
    {
        startingNumber: { 
            type: Number, 
            required: true 
        },
        currentValue: {
            type: Number,
            default: 0.0,
            required: false
        },
        operations: [operationSchema],
    },
    {
        timestamps: true
    }
);

const Calculation = mongoose.model('Calculation', calculationSchema);
const Operation = mongoose.model('Operation', operationSchema);

module.exports = { Calculation, Operation };
