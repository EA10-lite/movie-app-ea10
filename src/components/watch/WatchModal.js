import React from 'react';
import useFetch from '../../useFetch';
import './WatchModal.css';
import YouTube from 'react-youtube';
import { Cancel } from '@material-ui/icons';

const apiKey = '61e94697e69d736eba1fe20f73879a15'

const WatchModal = ({closeModal, id,type})=> {
    const { data } = useFetch(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${apiKey}`);
    console.log(data)
    const opts = {
        height:"300",
        width:"100%",
        playerVars:{
            autoplay:1,
        }
    }
    function ifTrailer(arr){
        const data = []
        for(let i=0; i<arr.length;i++){
            if(arr[i].type === 'Trailer'){
                data.push(arr[i].key)
            }
        }
        return data[0];
    }
    return (
        
        <div className="watch-modal-overlay">
            {data && (
                <div className="watch-content">
                    <div className="video-responsive">
                        <button onClick={()=> closeModal()}> <Cancel /> </button>
                        <YouTube videoId={ifTrailer(data.results)} opts={opts} />
                    </div>
                </div>
            )}
        </div>
    )
}
export default WatchModal;