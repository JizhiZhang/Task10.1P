const express = require("express");
const bodyParser = require("body-parser");
const Requester = require("./models/Requester");
const mongoose = require("mongoose");
const requesterApi = require("./api/requester-api");
const cors = require("cors");

const app = express()

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(cors());
app.use(requesterApi);

mongoose.connect("mongodb://localhost:27017/101Task", {useNewUrlParser: true})
// mongoose.connect("mongodb+srv://zhangjizhi1021:zjz200999@cluster0.zitam.mongodb.net/iCrowdTask101P?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})

app.get('/', (req, res) => {
    res.json('Home');
})

let port = process.env.PORT;
if (port == null || port == '') {
  port = 8080;
}

app.listen(port, (req, res)=>{
    console.log('Server is running successfully on port ' + port);
})