const express = require('express');

const cors = require('cors');

const mongoose = require('mongoose');
const app = express();
const uri = process.env.ATLAS_URI;
mongoose.connect("mongodb+srv://vishnu:Gjmt@1997@cluster0-tvtoe.mongodb.net/test?retryWrites=true&w=majority",{useNewUrlParser:true,useCreateIndex:true});
const port = process.env.PORT || 5000;

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("tttttttttttttttttttt")
})

app.use(express.json());
app.use(cors());


const userRouter = require('./routes/users');
const exerciseRouter = require('./routes/exercises');

app.use('/exercises',exerciseRouter)
app.use('/users',userRouter)



app.listen(port);