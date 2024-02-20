const express = require('express');
require('dotenv').config();
const routes = require('./source/routes');
const mongoose = require('mongoose');


const app = express();

app.use(routes);

let port = process.env.PORT || 4000;

//conect to database
const db_url = process.env.DB_URL;

async function connect() {
    try {
        await mongoose.connect(db_url);
        app.listen(port, () => {
            if(process.env.NODE_ENV === 'dev'){
                console.log('listening on port: ' + port);
            }
            else{
                console.log('not listening...');
            }
        });
    }
    catch (e) {
        console.log("fail to connect to database: ", e);
    }
}
connect();