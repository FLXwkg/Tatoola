import React from 'react';
// import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Footer from '../components/footer/Footer';
import Map from '../components/map/Map';
import Proposals from '../components/Proposals';
import Tattootheque from '../components/tattoo/Tattootheque';
import TatooMag from '../components/tattoo/TattooMag';
import FAQ from '../components/FAQ';
import TattooNearby from '../components/tattoo/TattooNearby';




const HomePage = () => {
  return (
    <div>
      <main className="container mx-auto p-4">
        <Map />
        <SearchBar />
        <TattooNearby />
        <Proposals />
        <Tattootheque />
        <TatooMag />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};


export default HomePage;
