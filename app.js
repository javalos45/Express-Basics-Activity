const express = require("express")
const app = express("Hello World");
//var bodyParser = require('body-parser')


app.get ("/", (req, res) => {
    res.send ("balance");
});

app.get ("/withdraw", (req, res) => {
    res.send ("withdraw");
});

app.get ("/deposit", (req, res) => {
    res.send ("deposit");
});

app.listen(3000); 


//app.listen(port, () => {
  //  console.log(`Example app listening at http://localhost:${3000}`)
  //})