const express = require('express');
const db = require('../db');
const { validateInputs } = require('../middlewares/validation');
const { picturesUserValidationRules } = require('../middlewares/picturesUserValidation');
const { verifyToken } = require('../auth');

const router = express.Router();

// GET profile_pictures
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM profile_picture');
    if (rows.length === 0) {
      return res.status(404).json({ error: 'No pictures linked to profiles.' });
    }
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching profile_picture: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET profile_pictures by ID of user
router.get('/:idUser', async (req, res) => {
  try {
    const userId = req.params.idUser;
    const [rows] = await db.query('SELECT * FROM profile_picture WHERE id_user = ?', [userId]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'No pictures found for this user.' });
    }
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching profile_picture: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST new profile_picture
router.post('/', verifyToken, picturesUserValidationRules, validateInputs, async (req, res) => {
  try {
    const { id_user, id_picture } = req.body;
    const result = await db.query('INSERT INTO profile_picture (id_user, id_picture) VALUES (?, ?)',
      [id_user, id_picture]);
    res.status(200).json({ message: 'Profile_picture created successfully', id_user: id_user, 
    id_picture: id_picture  });
  } catch (error) {
    console.error('Error creating new profile_picture: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT update user_picture
router.put('/:idUser/:idPicture', verifyToken, picturesUserValidationRules, validateInputs, async (req, res) => {
  try {
    const pictureId = req.params.idPicture;
    const userId = req.params.idUser;

    // Check if the record exists
    const [existingRows] = await db.query(
      'SELECT * FROM profile_picture WHERE id_picture = ? AND id_user = ?',
      [pictureId, userId]
    );

    // If the record doesn't exist, return an error
    if (existingRows.length === 0) {
      return res.status(404).json({ error: 'Profile_picture not found' });
    }
    const { id_user, id_picture } = req.body;
    await db.query(
      'UPDATE profile_picture SET id_user = ?, id_picture = ? WHERE  id_picture = ? AND id_user = ?',
      [id_user, id_picture, pictureId, userId]
    );
    res.status(200).json({ message: 'profile_picture updated successfully' });
  } catch (error) {
    console.error('Error updating profile_picture: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE profile_picture
router.delete('/:idUser/:idPicture', verifyToken, async (req, res) => {
  try {
    const pictureId = req.params.idPicture;
    const userId = req.params.idUser;

    // Check if the record exists
    const [existingRows] = await db.query(
      'SELECT * FROM profile_picture WHERE id_picture = ? AND id_user = ?',
      [pictureId, userId]
    );

    // If the record doesn't exist, return an error
    if (existingRows.length === 0) {
      return res.status(404).json({ error: 'Profile_picture not found' });
    }
    await db.query('DELETE FROM profile_picture WHERE id_picture = ? AND id_user = ?', [pictureId, userId]);
    res.status(200).json({ message: 'profile_picture deleted successfully' });
  } catch (error) {
    console.error('Error deleting profile_picture: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;