const PORT = process.env.PORT || 8888;
const express = require("express");
const app = express();
const cors =require("cors");

app.use(cors())


app.use('/api/v1', require('./routes'));

app.listen(PORT,()=>{
    console.log(`Application has started on http://localhost:${PORT}`);
})

