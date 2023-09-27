const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000 ;

// Parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/menu",(req,res)=>{
    res.status(200).json({msg:"Hello! Im Api of Ramu Ki Sabji"})
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running on port https://localhost:${port}`);
});
