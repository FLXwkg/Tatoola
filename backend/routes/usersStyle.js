const express = require('express');
const db = require('../db');
const { validateInputs } = require('../middlewares/validation');
const { styleUserValidationRules } = require('../middlewares/styleUserValidation');

const router = express.Router();

// GET all user_style
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM user_style');
    if (rows.length === 0) {
      return res.status(404).json({ error: 'No styles linked to users.' });
    }
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching User_style: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET user_style by ID of style
router.get('/:idStyle', async (req, res) => {
  try {
    const styleId = req.params.idStyle;
    const [rows] = await db.query('SELECT * FROM user_style WHERE id_style = ?', [styleId]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'No styles found for this user.' });
    }
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching User_style: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST new user_style
router.post('/', styleUserValidationRules, validateInputs, async (req, res) => {
  try {
    const { id_user, id_style } = req.body;
    const result = await db.query('INSERT INTO user_style (id_user, id_style) VALUES (?, ?)',
      [id_user, id_style]);
    res.status(200).json({ message: 'User_style created successfully', id_user: id_user, 
    id_style: id_style  });
  } catch (error) {
    console.error('Error creating new User_style: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT update user_style
router.put('/:idUser/:idStyle', styleUserValidationRules, validateInputs, async (req, res) => {
  try {
    const userId = req.params.idUser;
    const styleId = req.params.idStyle;
    const { id_user, id_style } = req.body;
    
    // Check if the record exists
    const [existingRows] = await db.query(
      'SELECT * FROM user_style WHERE id_style = ? AND id_user = ?',
      [styleId, userId]
    );

    // If the record doesn't exist, return an error
    if (existingRows.length === 0) {
      return res.status(404).json({ error: 'User_style not found' });
    }
    await db.query(
      'UPDATE user_style SET id_user = ?, id_style = ? WHERE id_style = ? AND id_user = ?',
      [id_user, id_style, styleId, userId]
    );
    res.status(200).json({ message: 'User_style updated successfully' });
  } catch (error) {
    console.error('Error updating User_style: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE user_style
router.delete('/:idUser/:idStyle', async (req, res) => {
  try {
    const userId = req.params.idUser;
    const styleId = req.params.idStyle;
    // Check if the record exists
    const [existingRows] = await db.query(
      'SELECT * FROM user_style WHERE id_style = ? AND id_user = ?',
      [styleId, userId]
    );

    // If the record doesn't exist, return an error
    if (existingRows.length === 0) {
      return res.status(404).json({ error: 'User_style not found' });
    }
    await db.query('DELETE FROM user_style WHERE id_style = ? AND id_user = ?', [styleId, userId]);
    res.status(200).json({ message: 'User_style deleted successfully' });
  } catch (error) {
    console.error('Error deleting User_style: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;