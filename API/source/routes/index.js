const router = require('express').Router();
const authRoutes = require('./auth');
const userRoutes = require('./users');

router.use('/auth',authRoutes);
router.use('/users',userRoutes);

router.get('',(req, res) => {
    res.send('Soy el Rey ,|,');
})



module.exports = router;