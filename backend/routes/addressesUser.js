const express = require('express');
const db = require('../db');
const { validateInputs } = require('../middlewares/validation');
const { addressUserValidationRules } = require('../middlewares/addressUserValidation');
const { verifyToken } = require('../auth');

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
    console.error('Error fetching User_address: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET user_addresses by ID of address
router.get('/:idAddress', async (req, res) => {
  try {
    const addressId = req.params.idAddress;
    const [rows] = await db.query('SELECT * FROM user_address WHERE id_address = ?', [addressId]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'No users found for this address.' });
    }
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching User_address: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST new user_address
router.post('/', verifyToken, addressUserValidationRules, validateInputs, async (req, res) => {
  try {
    const { id_user, id_address } = req.body;
    const result = await db.query('INSERT INTO user_address (id_user, id_address) VALUES (?, ?)',
      [id_user, id_address]);
    res.status(200).json({ message: 'User_address created successfully', id_user: id_user, 
    id_address: id_address  });
  } catch (error) {
    console.error('Error creating new User_address: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT update user_address
router.put('/:idAddress/:idUser', verifyToken, addressUserValidationRules, validateInputs, async (req, res) => {
  try {
    const addressId = req.params.idAddress;
    const userId = req.params.idUser;

    // Check if the record exists
    const [existingRows] = await db.query(
      'SELECT * FROM user_address WHERE id_address = ? AND id_user = ?',
      [addressId, userId]
    );

    // If the record doesn't exist, return an error
    if (existingRows.length === 0) {
      return res.status(404).json({ error: 'User_address not found' });
    }
    const { id_user, id_address } = req.body;
    await db.query(
      'UPDATE user_address SET id_user = ?, id_address = ? WHERE  id_address = ? AND id_user = ?',
      [id_user, id_address, addressId, userId]
    );
    res.status(200).json({ message: 'User_address updated successfully' });
  } catch (error) {
    console.error('Error updating User_address: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE user_address
router.delete('/:idAddress/:idUser', verifyToken, async (req, res) => {
  try {
    const addressId = req.params.idAddress;
    const userId = req.params.idUser;

    // Check if the record exists
    const [existingRows] = await db.query(
      'SELECT * FROM user_address WHERE id_address = ? AND id_user = ?',
      [addressId, userId]
    );

    // If the record doesn't exist, return an error
    if (existingRows.length === 0) {
      return res.status(404).json({ error: 'User_address not found' });
    }
    await db.query('DELETE FROM user_address WHERE id_address = ? AND id_user = ?', [addressId, userId]);
    res.status(200).json({ message: 'User_address deleted successfully' });
  } catch (error) {
    console.error('Error deleting User_address: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;