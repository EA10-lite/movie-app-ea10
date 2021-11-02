import React, { useState } from 'react';
import './MovieDetails.css'
import { useParams  } from 'react-router-dom';
import useFetch from '../../useFetch';
import SimilarMovies from '../similar-movie/SimilarMovies';
import Cast from '../cast/Cast';
import WatchModal from '../watch/WatchModal';

const apiKey = process.env.REACT_APP_MOVIE_API_KEY;

const TvShowDetails = ()=> {
    const { id } = useParams()
    const { data } = useFetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&append_to_response=credits,similar`);
    const [ open , setOpen] = useState(false);
    const handleOpen = ()=> {
        setOpen(!open);
    }
    return (
        <>
            {data && (
                <div className="details" style={{backgroundImage:`url(https://image.tmdb.org/t/p/w1280${data.backdrop_path})`}}>
                    <div className="details-content">
                        <div className="details-content-wrapper">
                            <div className="img-wrapper">
                                <div className="poster-pic">
                                    <img src={`https://image.tmdb.org/t/p/original${data.poster_path}`} alt='' />
                                </div>
                            </div>
                            <div className="content-wrapper">
                                <div className="details-title">
                                    <h2> { data.title || data.name } </h2>
                                </div>
                                <div className="details-desc">
                                    <p> { data.overview } </p>
                                </div>
                                <div className="btn">
                                    <button onClick={()=> handleOpen()}> Watch Trailer </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {open && <WatchModal closeModal={handleOpen} id={id} type='tv'  />}
            <div className="cast-wrapper">
                {data && (<Cast data={data.credits.cast} /> )}
            </div>
            <div className="similar">
                {data && (<SimilarMovies movies={data.similar.results} />) }                           
            </div>
        </>
    )
}

export default TvShowDetails;