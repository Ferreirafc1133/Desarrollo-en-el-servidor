require('dotenv').config();
const express = require('express');
const userRoutes = require('./source/routes/userRouth'); 

const app = express();

app.use(express.json()); 

app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Bien enclochado en el puerto ${PORT}`));
