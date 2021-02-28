import {useState,useEffect } from 'react';
const useFetch =(url)=>{

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const acont = new AbortController(); 
      
        setTimeout(()=>{
            fetch(url, {signal: acont.signal})
            .then(resp=> {
              if(!resp.ok) {
                throw Error ('Oops! the data is unavailable...');
              }
            return resp.json();
          })
          .then(data=> {
            setData(data);
            setIsLoading(false);
            setError(null);
          })
          .catch(err=> {
            if(err.name === 'AbortError'){
              console.log('Fetch Aborted');
            }
            else{
              setIsLoading(false);
              setError(err.message);
            }
          })
        }, 1000);
        return () => acont.abort();

      }, [url]);  
      return {data, isLoading, error} 
}

export default useFetch;