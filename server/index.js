const express=require('express');
const bodyParser=require('body-parser');
const  mongoose=require('mongoose');
const cors=require('cors');
const post=require('./route/postroute');
mongoose.connect("mongodb://localhost:27017/Todos",{
    useNewUrlParser:true
})
mongoose.connection.on('connected',()=>{
    console.log("connection is succesfuuly");
});
mongoose.connection.on('connect',()=>{
    console.log('error');

});
const port=5000;
const app=express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send("welcome");
})
app.use('/todo',post)
app.listen(port,console.log(`on${port}`));