const express = require ("express");
 require("./db/conn");
const router = require("./routers/router");
// const Reset = require("./models/datas");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(router);
 
 //port
app.listen(port, () => {
    console.log(`connection successfull to the port no. ${port}`);
})