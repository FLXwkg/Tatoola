const express = require('express');
const db = require('../db');
const { validateInputs } = require('../middlewares/validation');
const { addressUserValidationRules } = require('../middlewares/addressUserValidation');

const router = express.Router();

// GET user_addresses
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM user_address');
    if (rows.length === 0) {
      return res.status(404).json({ error: 'No addresses linked to users.' });
    }
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching address: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET user_addresses by ID of user
router.get('/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const [rows] = await db.query('SELECT * FROM user_address WHERE id_user = ?', [userId]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'No addresses found for this user.' });
    }
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching address: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST new user_address
router.post('/', addressUserValidationRules, validateInputs, async (req, res) => {
  try {
    const { id_user, id_address } = req.body;
    const result = await db.query('INSERT INTO user_address (id_user, id_address) VALUES (?, ?)',
      [id_user, id_address]);
    res.status(200).json({ message: 'Address created successfully', id: result[0].insertId });
  } catch (error) {
    console.error('Error creating new address: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT update user_address
router.put('/:id', addressUserValidationRules, validateInputs, async (req, res) => {
  try {
    const userId = req.params.id;
    const { id_user, id_address } = req.body;
    await db.query(
      'UPDATE user_address SET id_user = ?, id_address = ? WHERE id_user = ?',
      [id_user, id_address, userId]
    );
    res.status(200).json({ message: 'Address updated successfully' });
  } catch (error) {
    console.error('Error updating address: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE user_address
router.delete('/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    await db.query('DELETE FROM user_address WHERE id_user = ?', [userId]);
    res.status(200).json({ message: 'Address deleted successfully' });
  } catch (error) {
    console.error('Error deleting address: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;