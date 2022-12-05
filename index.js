const express = require('express');
const multer = require ('multer');
const app = express();

const upload = multer({
    storage:multer.diskStorage({
        destination: function (req,file,cb) {
            cb(null, "uploads")
        },
        filename: function (req,file,cb) {
            cb(null,file.filename +".jpg")
        }
    })
}).single("user_file")

app.post("/upload", upload,(req,res)=>{
    res.send("file Upload")
})

app.listen(4000)