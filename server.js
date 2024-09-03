const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const InfoModel = require('./models/Info')

const app = express();
app.use(cors());
app.use(express.json())


mongoose.connect('mongodb://127.0.0.1:27017/test')


app.get('/getuser', (req, res)=>{

    InfoModel.find({}).then((users)=>{
        res.json(users)
    }).catch((err)=> res.json(err))
})


app.post('/create', async(req, res)=>{
    const user = req.body ;
    const newUser = new InfoModel(user);
    await newUser.save();
    res.json(user)
})



app.listen(5000, ()=>{
    console.log('5000 server running...');
    
})