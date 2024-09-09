const express = require('express');
const cloudinary = require('cloudinary');
const path = require('path');
const multer = require('multer');
const app = express();
require('ejs');
require('dotenv').config();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

// multer config
const multerUpload = multer({storage: multer.memoryStorage()}) 

// cloudinary config 
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})




app.get('/', (req, res) => {
    res.render('index');
})
app.post('/upload', multerUpload.single('my-file'), async(req,res)=>{
    const file = req.file;
    if (!file){
        res.status(400).send('<p>Archivo no encontrado</p>');
    }

    let base_64 = Buffer.from(file.buffer).toString("base64")
    let data_uri = "data:" + file.mimetype + ";base64," + base_64;
    let save = await uploadImage(data_uri);
    if (!save){
        res.send('Error al guardar')
        return;
    }
    console.log(save);
    res.send(`
        <p>Archivo guardado: ${save}</p>
        <a href="/">Volver</a>
    `);
})

async function uploadImage(filePath_){
    const options = {
        use_filename: true,
        unique_filename: false,
        overwrite: true
    }
    const result = await cloudinary.uploader.upload(filePath_, options)
    const id = result.public_id;

    if (!id){
        console.log('Error al obtener imagen');
        return;
    }
    return id;
}


app.listen(process.env.PORT, (req,res)=>{
    console.log(`Live at ${process.env.PORT}`);
})


