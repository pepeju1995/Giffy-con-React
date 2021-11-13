import React from 'react';
import './App.css';
import Home from './pages/Home';
import Detail from './pages/Detail';
import SearchResults from './pages/SearchResults';
import { Link, Route } from "wouter"

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to='/'>
          <p className="App-logo">Home</p>
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
  );
}

export default App;
