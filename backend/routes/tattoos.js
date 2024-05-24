const express = require('express');
const db = require('../db');
const { validateInputs } = require('../middlewares/validation');
const { tattooValidationRules } = require('../middlewares/tattooValidation');
const { verifyToken } = require('../auth');

const router = express.Router();

// GET all tattooes
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM tattoo');
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching tattoos: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET tattoo by ID
router.get('/:id', async (req, res) => {
  try {
    const tattooId = req.params.id;
    const [rows] = await db.query('SELECT * FROM tattoo WHERE id = ?', [tattooId]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'tattoo not found' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error('Error fetching tattoo: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST new tattoo
router.post('/', verifyToken, tattooValidationRules, validateInputs, async (req, res) => {
  try {
    const { is_premium, id_user, id_style } = req.body;
    const result = await db.query('INSERT INTO tattoo (is_premium, id_user, id_style) VALUES (?, ?, ?)',
      [is_premium, id_user, id_style]);
    res.status(200).json({ message: 'tattoo created successfully', id: result[0].insertId });
  } catch (error) {
    console.error('Error creating new tattoo: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT update tattoo
router.put('/:id', verifyToken, tattooValidationRules, validateInputs, async (req, res) => {
  try {
    const tattooId = req.params.id;
    const { is_premium, id_user, id_style } = req.body;
    await db.query(
      'UPDATE tattoo SET is_premium = ?, id_user = ?, id_style = ? WHERE id = ?',
      [is_premium, id_user, id_style, tattooId]
    );
    res.status(200).json({ message: 'Tattoo updated successfully' });
  } catch (error) {
    console.error('Error updating tattoo: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE tattoo
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    const tattooId = req.params.id;
    await db.query('DELETE FROM tattoo WHERE id = ?', [tattooId]);
    res.status(200).json({ message: 'Tattoo deleted successfully' });
  } catch (error) {
    console.error('Error deleting tattoo: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
