const express = require('express');
const db = require('../db');
const { validateInputs } = require('../middlewares/validation');
const { userValidationRules } = require('../middlewares/userValidation');

const router = express.Router();

// GET all users
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM user');
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching users: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST new user
router.post('/', userValidationRules, validateInputs, async (req, res) => {
  try {
    const { name, lastname, email, password, description, is_artist, is_premium } = req.body;
    const result = await db.query('INSERT INTO user (name, lastname, email, password, description, is_artist, is_premium) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [name, lastname, email, password, description, is_artist, is_premium]);
    res.status(200).json({ message: 'User created successfully', id: result[0].insertId });
  } catch (error) {
    console.error('Error creating new user: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET user by ID
router.get('/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const [rows] = await db.query('SELECT * FROM user WHERE id = ?', [userId]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error('Error fetching user: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT update user
router.put('/:id', userValidationRules, validateInputs, async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, lastname, email, password, description, is_artist, is_premium } = req.body;
    await db.query(
      'UPDATE user SET name = ?, lastname = ?, email = ?, password = ?, description = ?, is_artist = ?, is_premium = ? WHERE id = ?',
      [name, lastname, email, password, description, is_artist, is_premium, userId]
    );
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    console.error('Error updating user: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE user
router.delete('/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    await db.query('DELETE FROM user WHERE id = ?', [userId]);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;
