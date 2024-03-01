const express = require('express');
const mysql = require('mysql2/promise');

// Création de l'application Express
const app = express();
const PORT = process.env.PORT || 3000;

// Configuration de la connexion à la base de données MySQL
const pool = mysql.createPool({
  host: 'localhost',
  user: 'votre_nom_utilisateur',
  password: 'votre_mot_de_passe',
  database: 'votre_base_de_données',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Définition des routes
app.get('/', async (req, res) => {
  try {
    const [rows, fields] = await pool.query('SELECT * FROM ma_table');
    res.json(rows);
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
    res.status(500).send('Erreur serveur');
  }
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
