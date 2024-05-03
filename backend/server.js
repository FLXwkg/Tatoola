const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users');
const addressesRouter = require('./routes/addresses');
const addressesUserRouter = require('./routes/addressesUser');
const stylesUserRouter = require('./routes/stylesUser');
const usersStyleRouter = require('./routes/usersStyle');
const stylesRouter = require('./routes/styles')
const picturesRouter = require('./routes/pictures')
const tattoosRouter = require('./routes/tattoos')

// Création de l'application Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Définition des routes
app.get('/', async (req, res) => {
  res.send('Welcome to Tatoola API!');
});


app.use('/styles', stylesRouter);
app.use('/styles_users', stylesUserRouter);
app.use('/users', usersRouter);
app.use('/users_styles', usersStyleRouter);
app.use('/addresses_users', addressesUserRouter);
app.use('/addresses', addressesRouter);
app.use('/pictures', picturesRouter);
app.use('/tattoos', tattoosRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
