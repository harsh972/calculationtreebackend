const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: { 
            type: String, 
            required: true, 
            unique: true 
        },
        password: { 
            type: String, 
            required: true 
        },
        role: { 
            type: String, 
            default: 'unregistered' 
        },
    },
    {
        timestamps: true // Automatically add createdAt and updatedAt fields
    }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
