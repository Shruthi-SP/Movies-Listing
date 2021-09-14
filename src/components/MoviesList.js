import React from 'react'
//import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'

const MoviesList = (props) => {
    const { listingMovies } = props

    // const listingMovies = useSelector((state) => {
    //     return state.movies
    // })style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}

    return (
        <div>
            {listingMovies.length === 0 ? <div>
                <p>No movies. Add Movie</p>
            </div> : <div className="row row-cols-1 row-cols-md-2 g-4">
                    {listingMovies.map(movie =>{
                        return <MovieCard key={movie.id} {...movie}/>
                    })}
                </div>
            }
        </div>        
    )
}
export default MoviesList