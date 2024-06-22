const express = require('express');
const { getCalculations, createCalculation, addOperation } = require('../controllers/calculationController.js');
const { authenticate } = require('../middlewares/authMiddleware.js');
const router = express.Router();

router.get('/', getCalculations);
router.post('/', authenticate, createCalculation);
router.post('/:id/operations', authenticate, addOperation);

module.exports = router;