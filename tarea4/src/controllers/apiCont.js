const axios = require('axios');
const ResponseStatus = require('../utils/response-status'); 



exports.buscarNoticias = async (req, res) => {
    const query = req.query.q; 
    const pageSize = 4; 
    const page = req.query.page || 1;

    try {
        const response = await axios.get(`https://newsapi.org/v2/everything`, {
            params: {
                q: query,
                apiKey: process.env.NEWS_API_KEY,
                pageSize: pageSize,
                page: page
            }
        });
        const noticias = response.data.articles;
        const totalResults = response.data.totalResults;
        const totalPages = Math.ceil(totalResults / pageSize); 
        res.json({ noticias, totalPages }); 
    } catch (error) {
        console.error('Error al buscar noticias:', error);
        res.status(500).json({ error: 'Error al procesar la solicitud' });
    }
};
