const express = require('express');
const db = require('../db');
const { validateInputs } = require('../middlewares/validation');
const { picturesTattooValidationRules } = require('../middlewares/picturesTattooValidation');

const router = express.Router();

// GET tattoo_pictures
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM tattoo_picture');
    if (rows.length === 0) {
      return res.status(404).json({ error: 'No pictures linked to profiles.' });
    }
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching tattoo_picture: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET tattoo_pictures by ID of tattoo
router.get('/:idTattoo', async (req, res) => {
  try {
    const tattooId = req.params.idTattoo;
    const [rows] = await db.query('SELECT * FROM tattoo_picture WHERE id_tattoo = ?', [tattooId]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'No pictures found for this tattoo.' });
    }
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching tattoo_picture: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST new profile_picture
router.post('/', picturesTattooValidationRules, validateInputs, async (req, res) => {
  try {
    const { id_tattoo, id_picture } = req.body;
    const result = await db.query('INSERT INTO tattoo_picture (id_tattoo, id_picture) VALUES (?, ?)',
      [id_tattoo, id_picture]);
    res.status(200).json({ message: 'Tattoo_picture created successfully', id_tattoo: id_tattoo, 
    id_picture: id_picture  });
  } catch (error) {
    console.error('Error creating new tattoo_picture: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT update tattoo_picture
router.put('/:idTattoo/:idPicture', picturesTattooValidationRules, validateInputs, async (req, res) => {
  try {
    const pictureId = req.params.idPicture;
    const tattooId = req.params.idTattoo;

    // Check if the record exists
    const [existingRows] = await db.query(
      'SELECT * FROM tattoo_picture WHERE id_picture = ? AND id_tattoo = ?',
      [pictureId, tattooId]
    );

    // If the record doesn't exist, return an error
    if (existingRows.length === 0) {
      return res.status(404).json({ error: 'Tattoo_picture not found' });
    }
    const { id_tattoo, id_picture } = req.body;
    await db.query(
      'UPDATE tattoo_picture SET id_tattoo = ?, id_picture = ? WHERE  id_picture = ? AND id_tattoo = ?',
      [id_tattoo, id_picture, pictureId, tattooId]
    );
    res.status(200).json({ message: 'tattoo_picture updated successfully' });
  } catch (error) {
    console.error('Error updating tattoo_picture: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE tattoo_picture
router.delete('/:idTattoo/:idPicture', async (req, res) => {
  try {
    const pictureId = req.params.idPicture;
    const tattooId = req.params.idTattoo;

    // Check if the record exists
    const [existingRows] = await db.query(
      'SELECT * FROM tattoo_picture WHERE id_picture = ? AND id_tattoo = ?',
      [pictureId, tattooId]
    );

    // If the record doesn't exist, return an error
    if (existingRows.length === 0) {
      return res.status(404).json({ error: 'Tattoo_picture not found' });
    }
    await db.query('DELETE FROM tattoo_picture WHERE id_picture = ? AND id_tattoo = ?', [pictureId, tattooId]);
    res.status(200).json({ message: 'tattoo_picture deleted successfully' });
  } catch (error) {
    console.error('Error deleting tattoo_picture: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;