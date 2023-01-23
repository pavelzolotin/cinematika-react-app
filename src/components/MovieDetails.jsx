import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {fetchFromAPI} from '../utils/fetchFromAPI'

import Movies from '../components/Movies'

const MovieDetails = ({searchKey}) => {
    const [movies, setMovies] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        fetchFromAPI(searchKey, `videos?part=snippet,statistics&id=${id}`)
            .then(data => {
                //setMovies(data.items[0])
                console.log(data.data.items)
            })
    }, [])

    return (
        <Movies
            movies={movies}
        />
    )
}

export default MovieDetails