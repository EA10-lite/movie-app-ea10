import { useEffect, useState } from 'react';

const useFetch = (url)=> {
    const [ data, setData] = useState(null)
    useEffect(() => {
        const abortConst = new AbortController()
        fetch(url,{ signal : abortConst.signal})
        .then((res)=> {
            if(!res.ok){
                throw Error(' Could not Fetch this resource')
            } else {
                return res.json();
            }
        })
        .then(res => {
            setData(res)
        })
        .catch(err => {
            console.log(err)
        }) 
        return ()=> abortConst.abort();
    }, [url])
    return {
        data,
    }
}

export default useFetch;