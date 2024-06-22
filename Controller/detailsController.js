// controllers/detailsController.js

const Details = require('../modules/Details');

// Controller function to create a new detail
exports.createDetail = async (req, res) => {
  try {
    const newDetail = await Details.create(req.body);
    res.status(201).json(newDetail);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
