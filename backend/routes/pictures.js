const express = require('express');
const db = require('../db');
const { validateInputs } = require('../middlewares/validation');
const { pictureValidationRules } = require('../middlewares/pictureValidation');

const router = express.Router();

// GET all pictures
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM picture');
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching pictures: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET picture by ID
router.get('/:id', async (req, res) => {
  try {
    const pictureId = req.params.id;
    const [rows] = await db.query('SELECT * FROM picture WHERE id = ?', [pictureId]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Picture not found' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error('Error fetching picture: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST new picture
router.post('/', pictureValidationRules, validateInputs, async (req, res) => {
  try {
    const { title, description, image_url, id_user } = req.body;
    const result = await db.query('INSERT INTO picture (title, description, image_url, id_user) VALUES (?, ?, ?, ?)',
      [title, description, image_url, id_user]);
    res.status(200).json({ message: 'Picture created successfully', id: result[0].insertId });
  } catch (error) {
    console.error('Error creating new picture: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT update picture
router.put('/:id', pictureValidationRules, validateInputs, async (req, res) => {
  try {
    const pictureId = req.params.id;
    const { title, description, image_url, id_user } = req.body;
    await db.query(
      'UPDATE picture SET title = ?, description = ?, image_url = ?, id_user = ? WHERE id = ?',
      [title, description, image_url, id_user, pictureId]
    );
    res.status(200).json({ message: 'Picture updated successfully' });
  } catch (error) {
    console.error('Error updating picture: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE picture
router.delete('/:id', async (req, res) => {
  try {
    const pictureId = req.params.id;
    await db.query('DELETE FROM picture WHERE id = ?', [pictureId]);
    res.status(200).json({ message: 'Picture deleted successfully' });
  } catch (error) {
    console.error('Error deleting picture: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
