import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import TattooInspiration from '../components/tattoo/TattooInspiration';
import LatestArticles from '../components/LatestArticles';
import NearbyTattooists from '../components/NearbyTattooists';
import Footer from '../components/footer/Footer';

const HomePage = () => {
  return (
    <div>
      <SearchBar />
      <div className="container">
        <div className="mt-8 mb-8">
          <h2 className="text-xl font-bold">Trouver votre tatouage</h2>
          <TattooInspiration />
          <Link to="/tatouages" className="text-blue-500">Voir tout</Link>
        </div>
        <div className="mt-8 mb-8">
          <h2 className="text-xl font-bold">Les derniers articles du mag</h2>
          <LatestArticles />
        </div>
        <div className="mt-8 mb-8">
          <h2 className="text-xl font-bold">Les tatoueurs proches de chez vous</h2>
          <NearbyTattooists />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
