const express = require('express');
const db = require('../db');
const { validateInputs } = require('../middlewares/validation');
const { addressValidationRules } = require('../middlewares/addressValidation');
const { verifyToken } = require('../auth');

const router = express.Router();

// GET all addresses
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM address');
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching addresses: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET address by ID
router.get('/:id', async (req, res) => {
  try {
    const addressId = req.params.id;
    const [rows] = await db.query('SELECT * FROM address WHERE id = ?', [addressId]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Address not found' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error('Error fetching address: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST new address
router.post('/', verifyToken, addressValidationRules, validateInputs, async (req, res) => {
  try {
    const { number, label, city, postcode, latitude, longitude } = req.body;
    const result = await db.query('INSERT INTO address (number, label, city, postcode, latitude, longitude) VALUES (?, ?, ?, ?, ?, ?)',
      [number, label, city, postcode, latitude, longitude]);
    res.status(200).json({ message: 'Address created successfully', id: result[0].insertId });
  } catch (error) {
    console.error('Error creating new address: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT update address
router.put('/:id', verifyToken, addressValidationRules, validateInputs, async (req, res) => {
  try {
    const addressId = req.params.id;
    const { number, label, city, postcode, latitude, longitude } = req.body;
    await db.query(
      'UPDATE address SET number = ?, label = ?, city = ?, postcode = ?, latitude = ?, longitude = ? WHERE id = ?',
      [number, label, city, postcode, latitude, longitude, addressId]
    );
    res.status(200).json({ message: 'Address updated successfully' });
  } catch (error) {
    console.error('Error updating address: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE address
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    const addressId = req.params.id;
    await db.query('DELETE FROM address WHERE id = ?', [addressId]);
    res.status(200).json({ message: 'Address deleted successfully' });
  } catch (error) {
    console.error('Error deleting address: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
