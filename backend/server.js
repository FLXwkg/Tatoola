const express = require('express');
const bodyParser = require('body-parser');

const usersRouter = require('./routes/users');

const addressesRouter = require('./routes/addresses');
const addressesUserRouter = require('./routes/addressesUser');
const usersAddressesRouter = require('./routes/usersAddress');

const stylesRouter = require('./routes/styles')
const stylesUserRouter = require('./routes/stylesUser');
const usersStyleRouter = require('./routes/usersStyle');

const picturesRouter = require('./routes/pictures')
const picturesUserRouter = require('./routes/picturesUser')
const usersPicturesRouter = require('./routes/usersPicture')

const tattoosRouter = require('./routes/tattoos')
const tattoosUserRouter = require('./routes/tattoosUser')
const usersTattoosRouter = require('./routes/usersTattoo');

const tattoosPictureRouter = require('./routes/tattoosPicture')
const picturesTattooRouter = require('./routes/picturesTattoo')



// Création de l'application Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Définition des routes
app.get('/', async (req, res) => {
  res.send('Welcome to Tatoola API!');
});

app.use('/users', usersRouter);

app.use('/styles', stylesRouter);
app.use('/styles_users', stylesUserRouter);
app.use('/users_styles', usersStyleRouter);

app.use('/addresses', addressesRouter);
app.use('/addresses_users', addressesUserRouter);
app.use('/users_addresses', usersAddressesRouter);

app.use('/pictures', picturesRouter);
app.use('/pictures_users', picturesUserRouter);
app.use('/users_pictures', usersPicturesRouter);

app.use('/tattoos', tattoosRouter);
app.use('/tattoos_users', tattoosUserRouter);
app.use('/users_tattoos', usersTattoosRouter);

app.use('/tattoos_pictures', tattoosPictureRouter)
app.use('/pictures_tattoos', picturesTattooRouter)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
