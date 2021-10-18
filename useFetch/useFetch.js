import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

export const useFetch = (url) => {

    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {

        setState({ data: null, loading: true, error: null });
        
        // fetch(url)
        axios(url)
            // .then(response => response.json())
            .then((data) => {

                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                
                }
        
            })
            .catch( () => {
                setState({
                    data: null,
                    loading: false,
                    error: 'Info could not be charged'
                })
            })


    }, [url])

    return state;

}
