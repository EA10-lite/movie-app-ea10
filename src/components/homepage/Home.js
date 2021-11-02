import React from 'react';
import Header from '../header/Header';
import MovieOptions from '../movie-opt/MovieOptions';
import './Home.css';
const apiKey = process.env.REACT_APP_MOVIE_API_KEY;


const Home =()=> {
    // const options = ['trending/all/day','movie/top_rated','movie/popular','movie/now_playing'];
    // const path_url = options[Math.floor(Math.random() * options.length)]
    return (
        <div className="home">
            <Header url={`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&append_to_response=videos,images`} />
            <MovieOptions url={`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&append_to_response=videos,images`} title='Trending'/>
            <MovieOptions url={`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`} title='Top Rated' />
            <MovieOptions url={`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`} title='Popular' />
            <MovieOptions url={`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`} title='Now In Cinemas' />
        </div>
    )
}

export default Home;