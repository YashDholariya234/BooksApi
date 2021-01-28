const express = require('express');
const mongoose = require('mongoose');
const route = require('./route');

mongoose.connect("mongodb+srv://Yash:yash123@cluster0.fl0lc.mongodb.net/students?retryWrites=true&w=majoritymongodb+srv://Yash:yash123@cluster0.fl0lc.mongodb.net/students?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(
    mongoose.connect("",{useNewUrlParser:true,useUnifiedTopology:true}).then(
()=>{
    const app = express();
    app.use("/api",route);
    app.listen(process.env.PORT || 3000,()=>{
        console.log("server started..!!");
    })
});