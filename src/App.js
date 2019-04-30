import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Heading } from './components/Heading';
import {Layout }from './components/Layout';
import {Footer} from './components/Footer';

function App() {
  return (
    <div className="App">
      <Heading/>
      <Layout/>
      <Footer/>
    </div>
  );
}

export default App;
