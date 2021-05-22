const router = require('express').Router();
const apiRoutes = require('./api');
const statsRoutes = require('./statsRoute');
const exerciseRoutes = require('./exerciseRoutes');

router.use('aqueous-brushlands-30253.herokuapp.com/api', apiRoutes);
router.use('/stats', statsRoutes);
router.use('/exercise', exerciseRoutes);

module.exports = router;