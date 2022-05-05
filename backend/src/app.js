const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const bodyparser = require('body-parser');
let cookieParser = require('cookie-parser');
require('dotenv').config();

app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cookieParser());

// ------------------------ CNX TO DB -----------------------------

mongoose.connect(

    process.env.DB_CONNECTION,
    (err) =>{
        if (err) {
            console.log(err);
        }
        console.log('Okaaaay lesss goooo');
    }

);

// ------------------------ Admin routes ------------------------

const admin = require('./routes/admin.routes')
app.use('/api/admin',admin)

// ------------------------ Admin routes ------------------------

const assitent = require('./routes/Assistent.routes')
app.use('/api/assistent',assitent)

// ------------------------ Port ------------------------

app.listen(process.env.PORT, () => {
    console.log(`up and running at http://localhost:${process.env.PORT}`);
})