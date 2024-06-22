const { Calculation } = require('../models/Calculation');
const calculationService = require('../services/calculationService.js');

exports.getCalculations = async (req, res) => {
  try {
    const calculations = await Calculation.find().populate('operations').sort({ createdAt: -1 });;
    res.send(calculations);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.createCalculation = async (req, res) => {
  try {
    const { startingNumber } = req.body;
    const calculation = await calculationService.createCalculation(startingNumber);
    res.status(201).send(calculation);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.addOperation = async (req, res) => {
  try {
    const { id } = req.params;
    const { type, value } = req.body;
    const operation = await calculationService.addOperation(id, type, value);
    res.status(201).send(operation);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
