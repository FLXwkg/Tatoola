// Header.jsx
import React from 'react';
import { Button } from '@nextui-org/react';



function Header () {
    return (
      <header className='main'>
        <nav>
          <a href='/'>Accueil</a>
          <a href='/artisans'>Artisans</a>
          <a href='/about'>About</a>
          <a href='/services'>Services</a>
          <a href='/contact'>Contact</a>
        </nav>
        <a href='/authentication'>
          <Button>
            Connexion
          </Button>
        </a>
      </header>
    )
  }
  
  export default Header;


