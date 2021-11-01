import React from 'react';
import { Link } from 'react-router-dom';
import './SimilarMovies.css';

const SimilarMovies = ({movies}) => {
    return (
        <div className="similar-movies">
            <h4>Similar Movies</h4>
            <div className="similar-movies-wrapper">
                {movies.map(movie => (
                    <Link to={`/movie-details/${movie.id}`} key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt='' />
                        <p> { movie.title ? movie.title : movie.name } </p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SimilarMovies;