import React from 'react';
import useFetch from '../../useFetch';
import './Results.css';
import { Link } from 'react-router-dom';

const Results = ({url})=>{
    const { data } = useFetch(url)
    return (
        <div className="results">
            <div className="result-wrapper">
                {data ?  data.results.map(result=> (
                    <Link to={result.title ? `/movie-details/${result.id}` : `/tvshow-details/${result.id}`} className="result-wrapper" key={result.id}>
                        <img src={`https://image.tmdb.org/t/p/original${result.poster_path}`} alt='' />
                        <p> {result.title ? result.title.split(':')[0] : result.name } </p>
                    </Link>
                )) : (
                    <div>
                        <h2>No results found</h2>
                    </div>
                )}
            </div>
        </div>

    )
}

export default Results;