import {useEffect, useState} from 'react'

const useFetch = url => {
    const [state, setState] = useState({data: null, loading: true})
    useEffect(() => {
        setState(state => ({data:state.data, loading:false}))
        fetch(url).then(x => x.json()).then(y => {
            setState({data:y.items, loading:true})
        })
    }, [url])
return state;
}
export default useFetch;
