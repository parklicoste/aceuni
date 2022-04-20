const express = require ("express");
const mongoose = require ("mongoose");

const authenticationRoute = require("./routes/Authentication");


const app = express();
app.use(express.json()); 

const PORT = process.env.PORT || 8080;
const cors = require("cors");

mongoose
 .connect('mongodb+srv://aceuni:Carleton4905@khushalkumar.172pb.mongodb.net/test') 
 .then(()=>console.log("DBConnection successful!"))
 .catch((err)=>{
    console.log(err);
});

app.use(cors());
app.use("/api/Authentication",authenticationRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});