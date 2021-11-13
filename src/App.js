import React from 'react';
import './App.css';
import Home from './pages/Home';
import Detail from './pages/Detail';
import SearchResults from './pages/SearchResults';
import Context from './context/StaticContext';

import { Link, Route } from "wouter"

function App() {
  return (
    <Context.Provider value={
      {
        name: 'Hello',
        subscribeteAlCanal: true
      }
    }>
      <div className="App">
        <section className="App-content">
          <Link to='/'>
            <span className="App-logo">Home</span>
          </Link>
          <Route
            component={Home}
            path='/'
          />
          <Route 
            component={SearchResults} 
            path="/search/:keyword" 
          />
          <Route
            component={Detail}
            path='/gif/:id'
          />
          
        </section>
      </div>
    </Context.Provider>
  );
}

export default App;
