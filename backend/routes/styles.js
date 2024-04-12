const express = require('express');
const db = require('../db');
const { validateInputs } = require('../middlewares/validation');
const { styleValidationRules } = require('../middlewares/styleValidation');

const router = express.Router();

// GET all styles
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM style');
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching styles: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET style by ID
router.get('/:id', async (req, res) => {
  try {
    const styleId = req.params.id;
    const [rows] = await db.query('SELECT * FROM style WHERE id = ?', [styleId]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Style not found' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error('Error fetching style: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST new style
router.post('/', styleValidationRules, validateInputs, async (req, res) => {
  try {
    const { name, description } = req.body;
    const result = await db.query('INSERT INTO style (name, description) VALUES (?, ?)',
      [name, description]);
    res.status(200).json({ message: 'Style created successfully', id: result[0].insertId });
  } catch (error) {
    console.error('Error creating new style: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT update style
router.put('/:id', styleValidationRules, validateInputs, async (req, res) => {
  try {
    const styleId = req.params.id;
    const { name, description } = req.body;
    await db.query(
      'UPDATE style SET name = ?, description = ? WHERE id = ?',
      [name, description, styleId]
    );
    res.status(200).json({ message: 'Style updated successfully' });
  } catch (error) {
    console.error('Error updating style: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE style
router.delete('/:id', async (req, res) => {
  try {
    const styleId = req.params.id;
    await db.query('DELETE FROM style WHERE id = ?', [styleId]);
    res.status(200).json({ message: 'Style deleted successfully' });
  } catch (error) {
    console.error('Error deleting style: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
