import React, { useState} from 'react';
import './Cast.css';

function Cast({data}) {
    const [ count, setCount ] = useState(5)
    const handleMore = ()=> {
        setCount(data.length)
        document.querySelector('.more').style.display='none'
        document.querySelector('.less').style.display = 'flex'
    }
    const handleLess = ()=> {
        setCount(5)
        document.querySelector('.more').style.display='flex'
        document.querySelector('.less').style.display = 'none'
    }
    
    return (
        <div className="cast-body">
            <h2>Casts</h2>
            <div className="cast-content">
                {data.slice(0,count).map(item => (
                    <div className="cast-card" key={item.id}>
                        <img src={`https://image.tmdb.org/t/p/original${item.profile_path}`} alt='' />
                        <p className='character'> { item.character } </p>
                        <p className="name"> { item.name } </p>
                    </div>
                ))}
            </div>
            <div className="btn">
                <button className='more' onClick={handleMore}> Show More</button>
                <button className='less' onClick={handleLess}> Show less</button>
            </div>
        </div>
    )
}

export default Cast;
