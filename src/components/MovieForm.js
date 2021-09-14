import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addMovie } from '../actions/moviesAction'
//import MoviesList from './MoviesList'

const MovieForm = (props) => {
    const [movie, setMovie] = useState('')
    const [imdb, setImdb] = useState('')

    const dispatch = useDispatch()

    const handleMovie = (e) => {
        setMovie(e.target.value)
    }
    const handleImdb = (e) => {
        setImdb(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const movieObj = {
            id: Number(new Date()),
            movie: movie,
            imdb: Number(imdb)
        }
        console.log('movie form=', movieObj)
        dispatch(addMovie(movieObj))
        setMovie('')
        setImdb('')
    }
    
    // const movies = useSelector((state)=>{
    //     return state.movies
    // })

    return (
        <div className='m-3'>
            {//<MoviesList listingMovies={movies}/>
            }
            <h2>Add Movie</h2>
            <form onSubmit={handleSubmit}>
                <input className="form-control" type='text' value={movie} placeholder='Enter movie name' onChange={handleMovie} /><br />
                <input className="form-control" type='text' value={imdb} placeholder='IMDB Ranking' onChange={handleImdb} /><br />
                <input className='btn btn-primary' type='submit' value='Add' />
            </form>
        </div>
    )
}
export default MovieForm