const express = require('express');
const multer = require('multer');
const path = require('path'); 
const ejs = require('ejs')


const storage = multer.diskStorage({
    destination: 'src/uploads/',
    filename: (req, file, cb)=>{
        cb(null, Date.now() + path.extname(file.originalname));
    }
})
const upload = multer({storage: storage})
const app = express();

app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


app.get('/', (req,res)=>{
    res.send(`
        <h1>Cloudy Uploader</h1>
        <form action="/upload" method="POST" enctype="multipart/form-data"   autocomplete="off">
            <label for="name">Nombre</label>
            <input type="text" name="name"> <br>
            <label for="image">Imagen</label>
            <input type="file" name="image" id="image"> <br>
            <button type="submit">Subir</button>
        </form>
    `);
})

app.post('/upload', upload.single('image'), (req, res) =>{
    // const {name, image} = req.body;
    // console.log(req.body);
    // res.send('Name: '+name)    
    res.render('index', {
        message: `Archivo guardado: ${req.file.filename}`
    });
    console.log(`Archivo guardado: ${req.file.filename}`);
})

app.listen('3000', (req,res) => {
    console.log('server in 3000');
})