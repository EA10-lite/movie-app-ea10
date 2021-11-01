import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../useFetch';
import './Header.css';
import WatchModal from '../watch/WatchModal';
import { ArrowRightAlt } from '@material-ui/icons';

const Header = ({url})=> {
    const { data } = useFetch(url);
    const [ open , setOpen] = useState(false);
    const handleOpen = ()=> {
        setOpen(!open);
    }
    return (
        <>
        {data && (
            <div className="header" style={{backgroundImage:`url(https://image.tmdb.org/t/p/w1280${data.results[4].backdrop_path})`}}>
                <div className="content">
                    <div className="content-container">
                        <div className="description">
                            <div className="title">
                                <h2>{data.results[4].title? data.results[4].title : data.results[4].name }</h2>
                            </div>
                            <div className="text">
                                <p>{data.results[4].overview}</p>
                            </div>
                            <div className="btn">
                                <Link to={`/movie-details/${data.results[4].id}`} className="view"> 
                                    <span>View Movie </span>
                                    <ArrowRightAlt />
                                </Link>
                                <button className="open" onClick={()=> handleOpen()}> Watch trailer </button>
                            </div>
                        </div>
                        <div className="img">
                            <img src={`https://image.tmdb.org/t/p/original${data.results[4].poster_path}`} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        )}
        {open && <WatchModal closeModal={handleOpen} id={data.results[4].id} type='movie' />}
        </>
    )
}

export default Header;