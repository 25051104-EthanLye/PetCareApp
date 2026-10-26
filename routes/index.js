const express = require('express');
const router = express.Router();

router.use(require('./authRoutes'));
router.use(require('./homeRoutes'));
router.use(require('./adminRoutes'));
router.use(require('./petRoutes'));
router.use(require('./journalRoutes'));

module.exports = router;
