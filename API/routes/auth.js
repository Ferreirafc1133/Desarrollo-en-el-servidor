const router = require('express').Router();

router.get('', (req, res) => {
    res.send('estas autentificado :)');
})

module.exports = router;