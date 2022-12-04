const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

router.use('./users', userRoutes);
router.use('./thoughts', thoughtRoutes);

router.use((req, res) => res.send('this is a wrong route!'));

module.exports = router;