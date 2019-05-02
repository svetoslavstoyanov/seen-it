import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import './styles/header.css';
import './styles/site.css';
import Header from './components/common/header';
import Home from './components/home/home';
function App() {
  return (
    <div id='container'>
      <Header />
      <Route path='/' exact component={Home} />
    </div>
  );
}

export default App;
