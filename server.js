const express = require('express');
const app = express();
const cors = require('cors');
const port = 3002;
const host = 'localhost';
const mongoose = require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://malindapasindu6:gYQjviqLDd4sZZQx@cluster0.x0ere.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connect = async() =>{
    try{
        await mongoose.connect(uri);
        console.log('Connected to the database');
    }
    catch(e){
        console.log(e);
    }
};

connect();

const server = app.listen(port,host,() => {
    console.log('Server is running on port 3002');
});

app.use('/api',router);

