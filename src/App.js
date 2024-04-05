import React from 'react';
import './assets/CSS/style.css';
import {Navbar} from './component/Navbar';
import { Home } from './component/Home';
import { About } from './component/About';
import { Menu } from './component/Menu';
import { Product } from './component/Product';
import { Review } from './component/Review';
import { Contact } from './component/Contact';
import { Blog } from './component/Blog';
import { Footer } from './component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Menu/>
      <Product/>
      <Review/>
      <Contact/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
