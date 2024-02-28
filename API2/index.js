const express = require('express');
const routes = require('./src/routes');
const path = require('path');

const app = express();
app.use('/public',express.static(path.join(__dirname, 'public')));
app.use(routes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
})
