// Router.jsx

import React from 'react'
import {
    BrowserRouter,
    Route,
    Routes
  } from 'react-router-dom'
import HomePage from '../pages/HomePage' // Import de la page d'accueil
import Tattoofinder from '../pages/TattooFinder' // Import de tatouage-finder
import TattooView from '../pages/TattooView'// Import de tatouage-view 
import TattooTalk from '../pages/TattooTalk'
import TattooMag from '../pages/TattooMag'
// Importez ici d'autres pages si nécessaire

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/tattoo-finder' element={<Tattoofinder />} />
        <Route path='/tattoo-view' element={<TattooView />} />
        <Route path='/tattoo-mag' element={<TattooMag/>} />
        <Route path='/tattoo-talk' element={<TattooTalk />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
