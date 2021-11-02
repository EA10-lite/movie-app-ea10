import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import MovieDetails from './components/details/MovieDetails';
import Home from './components/homepage/Home';
import Navbar from './components/navbar/Navbar';
import Movie from './components/movie/Movie';
import TvShows from './components/tvshows/TvShows';
import TvShowDetails from './components/details/TvShowDetails';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/movie" exact>
            <Movie />
          </Route>
          <Route path="/tvshows">
            <TvShows />
          </Route>
          <Route path="/tvshow-details/:id">
            <TvShowDetails />
          </Route>
          <Route path="/movie-details/:id">
            <MovieDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
