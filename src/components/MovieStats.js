import React from 'react'
import { useSelector } from 'react-redux'

const MovieStats = (props) => {

    const movies = useSelector((state)=>{
        return state.movies
    })
    
    const arr = movies.map(ele=>ele.imdb)
    const topRank = Math.min(...arr)
    const movieName = movies.find(ele=> ele.imdb === topRank)
    
    return(
        <div className='mt-5 ml-3'>
            <h2>Movie Stats</h2>
            <h3>Total Movies - {movies.length}</h3>
            {movies.length > 0 && <p>Top ranked movie - <strong>{movieName.movie}</strong>, IMDB Ranking-<strong>{topRank}</strong> </p>}
        </div>
    )
}
export default MovieStats