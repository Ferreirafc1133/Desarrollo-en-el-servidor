const express = require('express');

require('dotenv').config();

const app = express();

let port = process.env.PORT || 3000;

app.listen(port, () => {
    if(process.env.NODE_ENV === 'dev'){
        console.log('listening on port: ' + port);
    }
    else{
        console.log('listening disfuncion ereectil ');
    }
})