require('dotenv').config();
const express = require('express');
const userRoutes = require('./source/routes/userRouth'); 
const mongoose = require('mongoose');

const app = express();

app.use(express.json()); 

app.use('/api', userRoutes);


const db_url = process.env.DB_URL;

const PORT = process.env.PORT || 3000;

async function connect() {
    try {
        await mongoose.connect(db_url);
        app.listen(PORT, () => {
            if(process.env.NODE_ENV === 'dev'){
                console.log(`Bien enclochado en el puerto ${PORT}`);
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