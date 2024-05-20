import React from 'react';
import Slider from '../Components/Slider';
import '//Home.css';
import chanelLogo from '../../img/cart-ic.png';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <img src={chanelLogo} alt="Chanel Logo" className="home-logo" />
        <h1 className="home-title">Добро пожаловать в мир CHANEL</h1>
      </header>

      <section className="home-slider">
        <Slider />
      </section>

      

      <footer className="home-footer">
        <p>© {new Date().getFullYear()} CHANEL. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default Home;
