const express = require ("express");
const mongoose = require ("mongoose");

const app = express();
app.use(express.json()); 

const PORT = process.env.PORT || 8080;

mongoose
 .connect('mongodb+srv://aceuni:Carleton4905@khushalkumar.172pb.mongodb.net/test') 
//  Replace
//  mongodb+srv://aceuni:<password>@khushalkumar.172pb.mongodb.net/test
// mongodb+srv://aceuni:Carleton4905@khushalkumar.17pb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// https://data.mongodb-api.com/app/data-dbxkx/endpoint/data/beta?
 .then(()=>console.log("DBConnection successful!"))
 .catch((err)=>{
    console.log(err);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});