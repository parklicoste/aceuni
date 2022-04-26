const express = require ("express");
const mongoose = require ("mongoose");

const bodyParser = require('body-parser');
// const path = require('path');
// const crypto = require('crypto');
// const multer = require('multer');
// const GridFsStorage = require('multer-gridfs-storage');
// const Grid = require('gridfs-stream');
// const methodOverride = require('method-override');

const authenticationRoute = require("./routes/Authentication");
const uploadFiles = require("./routes/Uploads")


const app = express();
app.use(express.json()); 
app.use(bodyParser.json());
// app.use(methodOverride('_method'));

const PORT = process.env.PORT || 8080;
const cors = require("cors");

mongoose
 .connect('mongodb+srv://aceuni:Carleton4905@khushalkumar.172pb.mongodb.net/Aceuni') 
 .then(()=>console.log("DBConnection successful!"))
 .catch((err)=>{
    console.log(err);
});

// const uploads = new mongoose.Schema({ });

app.use(cors());
app.use("/api/Authentication",authenticationRoute);

// app.use(bodyParser.json());
// app.use(methodOverride('_method'));
// app.set('view engine', 'ejs');

// const storage = new GridFsStorage({
//     url: 'mongodb+srv://aceuni:Carleton4905@khushalkumar.172pb.mongodb.net/Aceuni',
//     file: (req, file) => {
//       return new Promise((resolve, reject) => {
//         crypto.randomBytes(16, (err, buf) => {
//           if (err) {
//             return reject(err);
//           }
//           const filename = buf.toString('hex') + path.extname(file.originalname);
//           const fileInfo = {
//             filename: filename,
//             bucketName: 'uploads'
//           };
//           resolve(fileInfo);
//         });
//       });
//     }
//   });
//   export const upload = multer({ storage });


// routes for get post and get 
app.use("/api/Authentication",uploadFiles);
app.use("/uploads", express.static('uploads'))


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});