const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const calculationRoutes = require('./routes/calculationRoutes');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

const port = 5000;

// Connect to the database
mongoose.connect("mongodb+srv://harshtyagi972:.S-W4-SrsM2%40apn@cluster0.87xhnab.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("Database Connected!!");
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
})
.catch((error) => {
    console.log("Database connection failed -- ", error);
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/calculations', calculationRoutes);
