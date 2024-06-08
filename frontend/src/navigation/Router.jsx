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
import Map from '../components/map/Map' // Import de la carte
import StylePage from '../pages/StylePage'
import PrivateRoutes from './PrivateRouteMiddleware'
import Dashboard from '../pages/protected/Dashboard'
import Auth from '../pages/Auth'
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
        <Route path='/map' element={<Map />} /> {/* Ajout de la route pour la carte */}
        <Route path='/style/:style' element={<StylePage />} /> {/* Ajout de la route pour la page de style  */}
        <Route path='authentication' element={<Auth />} />
        <Route path='dashboard' element={<PrivateRoutes />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
