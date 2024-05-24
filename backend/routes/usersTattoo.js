const express = require('express');
const db = require('../db');
const { validateInputs } = require('../middlewares/validation');
const { tattooUserValidationRules } = require('../middlewares/tattooUserValidation');
const { verifyToken } = require('../auth');

const router = express.Router();

// GET all user_tattoo
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM user_tattoo');
    if (rows.length === 0) {
      return res.status(404).json({ error: 'No tattoos linked to users.' });
    }
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching User_tattoo: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET user_tattoo by ID of user
router.get('/:idUser', async (req, res) => {
  try {
    const userId = req.params.idUser;
    const [rows] = await db.query('SELECT * FROM user_tattoo WHERE id_user = ?', [userId]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'No tattoos found for this user.' });
    }
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching User_tattoo: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST new user_tattoo
router.post('/', verifyToken, tattooUserValidationRules, validateInputs, async (req, res) => {
  try {
    const { id_user, id_tattoo } = req.body;
    const result = await db.query('INSERT INTO user_tattoo (id_user, id_tattoo) VALUES (?, ?)',
      [id_user, id_tattoo]);
    res.status(200).json({ message: 'User_tattoo created successfully', id_user: id_user, 
    id_tattoo: id_tattoo });
  } catch (error) {
    console.error('Error creating new User_tattoo: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT update user_tattoo
router.put('/:idUser/:idTattoo', verifyToken, tattooUserValidationRules, validateInputs, async (req, res) => {
  try {
    const tattooId = req.params.idTattoo;
    const userId = req.params.idUser;
    const { id_user, id_tattoo } = req.body;

    // Check if the record exists
    const [existingRows] = await db.query(
      'SELECT * FROM user_tattoo WHERE id_user = ? AND id_tattoo = ?',
      [userId, tattooId]
    );

    // If the record doesn't exist, return an error
    if (existingRows.length === 0) {
      return res.status(404).json({ error: 'User_tattoo not found' });
    }

    await db.query(
      'UPDATE user_tattoo SET id_user = ?, id_tattoo = ? WHERE id_user = ? AND id_tattoo = ?',
      [id_user, id_tattoo, userId, tattooId]
    );
    res.status(200).json({ message: 'User_tattoo updated successfully' });
  } catch (error) {
    console.error('Error updating User_tattoo: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE user_tattoo
router.delete('/:idUser/:idTattoo', verifyToken, async (req, res) => {
  try {
    const tattooId = req.params.idTattoo;
    const userId = req.params.idUser;

    // Check if the record exists
    const [existingRows] = await db.query(
      'SELECT * FROM user_tattoo WHERE id_tattoo = ? AND id_user = ?',
      [tattooId, userId]
    );

    // If the record doesn't exist, return an error
    if (existingRows.length === 0) {
      return res.status(404).json({ error: 'User_tattoo not found' });
    }

    await db.query('DELETE FROM user_tattoo WHERE id_user = ? AND id_tattoo = ?', [userId, tattooId]);
    res.status(200).json({ message: 'User_tattoo deleted successfully' });
  } catch (error) {
    console.error('Error deleting User_tattoo: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
