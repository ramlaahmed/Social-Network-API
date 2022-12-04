const router = require('express').Router();
const apiRoutes = require('./routes/api/index.js');

router.use('routes/api/index.js', apiRoutes);

router.use((req, res) => res.send('this is a wrong route!'));

module.exports = router;