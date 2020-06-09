//import express
const express = require('express');
//execute express
const app = express();
//import mongoose
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const cors = require('cors');


app.use(cors());

app.use(bodyParser.json());



//IMPORT ROUTES
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);



//middlewares (ver 7:30 minutos do vídeo)
/*app.use('/posts', () => {
    console.log('This is a middleware running');
})*/

//routes
//get to get information, post to give information, delete for delete information, and patch for update information
app.get('/', (req,res) => {
    res.send('We are on home');
});


/*
app.get('/posts', (req,res) => {
    res.send('We are on posts')
});*/

//***implementar depois rotas separadas por arquivos...vide 15:49 */

//connect to DB
//***implementar depois o dotenv para ocultar dados da conexão db
mongoose.connect('mongodb+srv://felipe:felipe@cluster0-0rzoo.gcp.mongodb.net/test?retryWrites=true&w=majority', 
{

    
    useUnifiedTopology: true,
    useNewUrlParser: true,
},


() =>  console.log('connected to DB!')
);

//how to we start listening to the server
app.listen(3000);
