import React, { useState } from 'react';
import { Search } from '@material-ui/icons';
import './TvShows.css';
import Results from '../results/Results';
import MovieOptions from '../movie-opt/MovieOptions';

const apiKey = process.env.REACT_APP_MOVIE_API_KEY;

const TvShows = ()=> {
    const [ query, setQuery ] = useState('')
    const [url, setUrl] = useState(null)
    const handleSubmit = (e)=> {
        e.preventDefault();
        setUrl(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&page=1&append_to_response=videos&query=${query}`)
    }
    const handleChange = (e)=> {
        setQuery(e.target.value)
    }
    return (
        <div className="tv-shows">
            <h2>Tv Shows</h2>
            <div className="search">
                <form onSubmit={(e)=> handleSubmit(e)}>
                    <div className="search-area">
                        <input type='text' placeholder='search for a movie' onChange={(e)=> handleChange(e)}  value={query} />
                        <button type='submit'><Search /></button>
                    </div>
                </form>
            </div>
            {url ? ( <Results url={url} /> ) : (
                <>
                    <MovieOptions url={`https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}&language=en-US&page=1`} title='Trending' />
                    <MovieOptions url={`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`} title='Top Rated' />
                    <MovieOptions url={`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`} title='Popular' />
                    <MovieOptions url={`https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}&language=en-US&page=1`} title='Airing' />
                </>
            )}
        </div>
    )
}

export default TvShows;