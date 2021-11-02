import React, { useState } from 'react';
import './Movie.css';
import { Search } from '@material-ui/icons';
import Results from '../results/Results';
import MovieOptions from '../movie-opt/MovieOptions';

const apiKey = '61e94697e69d736eba1fe20f73879a15';

function Movie() {
    const [ query, setQuery ] = useState('')
    const [url, setUrl] = useState(null)
    const handleSubmit = (e)=> {
        e.preventDefault();
        setUrl(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&append_to_response=videos&query=${query}`);
    }
    const handleChange = (e)=> {
        setQuery(e.target.value)
    }

    return (
        <div className="movie">
            <h2>Movies</h2>
            <div className="search">
                <form onSubmit={(e)=> handleSubmit(e)}>
                    <div className="search-area">
                        <input type='text' placeholder='search for a movie' onChange={(e)=> handleChange(e)} required value={query} />
                        <button type='submit'><Search /></button>
                    </div>
                </form>
            </div>
            {url ? (<Results url={url}  /> ): (
                <>
                    <MovieOptions url={`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&append_to_response=videos,images`} />
                    <MovieOptions url={`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`} />
                    <MovieOptions url={`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`} />
                    <MovieOptions url={`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`} />
                 </>
            )}
        </div>
    )
}

export default Movie;
