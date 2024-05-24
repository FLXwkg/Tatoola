const express = require('express');
const db = require('../db');
const { validateInputs } = require('../middlewares/validation');
const { userValidationRules } = require('../middlewares/userValidation');
const { generateToken, verifyToken } = require('../auth');
const bcrypt = require('bcryptjs');

const router = express.Router();

// GET all users
router.get('/', verifyToken, async (req, res) => {
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
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await db.query('INSERT INTO user (name, lastname, email, password, description, is_artist, is_premium) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [name, lastname, email, hashedPassword, description, is_artist, is_premium]);
    res.status(200).json({ message: 'User created successfully', id: result[0].insertId });
  } catch (error) {
    console.error('Error creating new user: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Login user
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const [rows] = await db.query('SELECT * FROM user WHERE email = ?', [email]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    const user = rows[0];
    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
      return res.status(401).json({ error: 'Invalid Password' });
    }
    const token = generateToken({ id: user.id, email: user.email });
    res.status(200).json({ message: 'Login successful', token, user });
  } catch (error) {
    console.error('Error logging in user: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET user by ID
router.get('/:id', verifyToken, async (req, res) => {
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
router.put('/:id', verifyToken, userValidationRules, validateInputs, async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, lastname, email, password, description, is_artist, is_premium } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.query(
      'UPDATE user SET name = ?, lastname = ?, email = ?, password = ?, description = ?, is_artist = ?, is_premium = ? WHERE id = ?',
      [name, lastname, email, hashedPassword, description, is_artist, is_premium, userId]
    );
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    console.error('Error updating user: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE user
router.delete('/:id', verifyToken, async (req, res) => {
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
