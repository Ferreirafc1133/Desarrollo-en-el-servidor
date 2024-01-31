const express = require('express');
require('dotenv').config();
const routes = require('./source/routes');

const app = express();

app.use(routes);

let port = process.env.PORT || 4000;


app.listen(port, () => {
    if(process.env.NODE_ENV === 'dev'){
        console.log('listening on port: ' + port);
    }
    else{
        console.log('listening...');
    }
});
