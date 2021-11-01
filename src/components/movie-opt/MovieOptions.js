import React from 'react';
import useFetch from '../../useFetch';
import './MovieOptions.css';
import { Link } from 'react-router-dom';

function MovieOptions({url, title}){
    const { data } = useFetch(url);
    return (
        <div className="options">
            <div className="option-title">
                <h4> { title } </h4>
            </div>
            <div className="option-movie">
                {data && data.results.map(res=> (
                    <Link to={res.title ? `/movie-details/${res.id}` : `/tvshow-details/${res.id}`} key={res.id}>
                        <img src={`https://image.tmdb.org/t/p/original${res.poster_path}`} alt='' />
                        <p> {res.title ? res.title: res.name} </p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default MovieOptions;