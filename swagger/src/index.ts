import express from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

const port = process.env.PORT || 3000;

import swaggerConfig from './../swagger.config.json';
console.log(swaggerConfig);


const app = express();
/**
 * @swagger
 * /:
 *  get:
 *   summary: api home
 *   tags: [Home]
 *   description: api home endpoint description
 */

app.get('', (req, res) => {
    res.send('API jalando!');
})

/**
 * @swagger
 * /users:
 *  get:
 *   summary: api de usaers
 *   tags: [Users]
 *   parameters:
 *    - in: query
 *     name: buscar
 *   responses:
 *   200:
 *    description: list of users
 *   400: 
 *     description: missing parameters
 *   description: api para jalar usuarios
 */
app.get('/users', (req, res) => {
    res.send('Somos usuarios!');
})


/**
 * @swagger
 * /uers/{id}:
 *  get:
 *   summary: get a user
 *   description: get one user
 *   tags: [Users]
 *   parameters:
 *    - in path:
 *     name: id
 *   responses:
 *   200:
 *      description: list of users
 *   400:
 *      description: missing parameters
 */
app.get('/users/:id', (req, res) => {
    res.send('Somos usuarios!');
})
const swaggerDocs = swaggerJsDoc(swaggerConfig);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});