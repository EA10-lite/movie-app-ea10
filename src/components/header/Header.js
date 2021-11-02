import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../useFetch';
import './Header.css';
import WatchModal from '../watch/WatchModal';
import { ArrowRightAlt } from '@material-ui/icons';

const truncate = (sentence)=> {
    return sentence.length >= 200 ? sentence.slice(0,200)+'...' : sentence;
}

const Header = ({url})=> {
    const { data } = useFetch(url);
    const [ open , setOpen] = useState(false);
    const handleOpen = ()=> {
        setOpen(!open);
    }
    return (
        <>
        {data && (
            <div className="header" style={{backgroundImage:`url(https://image.tmdb.org/t/p/w1280${data.results[18].backdrop_path})`}}>
                <div className="content">
                    <div className="content-container">
                        <div className="description">
                            <div className="title">
                                <h2>{data.results[18].title? data.results[18].title : data.results[18].name }</h2>
                            </div>
                            <div className="text">
                                <p>{truncate(data.results[18].overview)}</p>
                            </div>
                            <div className="btn">
                                <Link to={`/movie-details/${data.results[18].id}`} className="view"> 
                                    <span>View Movie </span>
                                    <ArrowRightAlt />
                                </Link>
                                <button className="open" onClick={()=> handleOpen()}> Watch trailer </button>
                            </div>
                        </div>
                        <div className="img">
                            <img src={`https://image.tmdb.org/t/p/original${data.results[18].poster_path}`} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        )}
        {open && <WatchModal closeModal={handleOpen} id={data.results[18].id} type='movie' />}
        </>
    )
}

export default Header;