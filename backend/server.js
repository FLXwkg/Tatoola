const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users');
const addressesRouter = require('./routes/addresses');
const stylesRouter = require('./routes/styles')
const picturesRouter = require('./routes/pictures')

// Création de l'application Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Définition des routes
app.get('/', async (req, res) => {
  res.send('Welcome to Tatoola API!');
});

/*

app.use('/tattoos', tattoosRouter);
*/

app.use('/styles', stylesRouter);
app.use('/users', usersRouter);
app.use('/addresses', addressesRouter);
app.use('/pictures', picturesRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
