const router = require('express').Router();
const path = require('path');

router.get('/', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/stats.html'));
    } catch(err) {
        res.status(500).json(err.message);
    }
})

module.exports = router;