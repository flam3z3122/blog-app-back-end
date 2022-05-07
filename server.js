const express = require("express");
const app = express();
const cors =require("cors");
const blogRoutes= require('./routes/blogRoutes')

app.use(cors())

const PORT = process.env.PORT || 5000;

app.use("/api/v1", blogRoutes)
app.listen(PORT,()=>{
    console.log("Application has started");
})