import React, { Suspense } from 'react';
import './App.css';
import Detail from './pages/Detail';
import SearchResults from './pages/SearchResults';
import Context from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';

import { Link, Route } from "wouter"

const HomePage = React.lazy(() => import('pages/Home'))

function App() {
  return (
    <Context.Provider value={
      {
        name: 'Hello',
        subscribeteAlCanal: true
      }
    }>
      <div className="App">
      <Suspense fallback={null}>
        <section className="App-content">
          <Link to='/'>
            <span className="App-logo">Giffy</span>
          </Link>

          <GifsContextProvider>
            <Route
              component={HomePage}
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
            <Route 
              component={() => <h1>404 ERROR :(</h1>} 
              path='/404'
            />
          </GifsContextProvider>

        </section>
      </Suspense>
      </div>
    </Context.Provider>
  );
}

export default App;
