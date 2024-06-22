const jwt = require('jsonwebtoken');

exports.authenticate = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if(!authHeader){ 
        return res.status(401).send('Access denied. No token provided.');
    }

    try{
        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, 'harshTyagi!123');
        req.user = decoded;
        next();
    } 
    catch(error){
        res.status(400).send('Invalid token -- ', error);
    }
};