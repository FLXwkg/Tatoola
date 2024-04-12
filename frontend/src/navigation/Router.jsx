// Router.jsx

import React from 'react'
import {
    BrowserRouter,
    Route,
    Routes
  } from 'react-router-dom'
import HomePage from '../pages/HomePage' // Import de la page d'accueil
// Importez ici d'autres pages si nécessaire

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
