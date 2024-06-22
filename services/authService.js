const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.authenticate = async (username, password) => {
    const user = await User.findOne({ username });
    if(!user){ 
        throw new Error('Invalid username or password.');
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword){ 
        throw new Error('Invalid username or password.');
    }
    // Update role to 'registered' if it is 'unregistered'
    if (user.role === 'unregistered') {
        user.role = 'registered';
        await user.save();
    }

    const token = jwt.sign({ _id: user._id, role: user.role }, 'harshTyagi!123', { expiresIn: '1h' });
    return token;
};
