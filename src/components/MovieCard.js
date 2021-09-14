import React from 'react' 
import { useDispatch } from 'react-redux'
import { removeMovie } from '../actions/moviesAction'

const MovieCard = (props) => {
    const { id, movie, imdb } = props

    const dispatch = useDispatch()

    const handleRemove = (id) => {
        dispatch(removeMovie(id))
    }
    //style={{border:'2px solid brown', padding:'10px', margin:'3px'}}
    return (
            <div className='col'>
                <div className="card">
                <div div className="row g-0">        
                    <div className="col-md-6">
                        <svg className="bd-placeholder-img img-fluid rounded-start" width="100%" height="140" xmlns="http://www.w3.org/2000/svg" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="35%" y="50%" fill="#dee2e6">Image</text></svg>
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <p className="card-title">Name: <strong>{movie}</strong></p>
                            <p className="card-text">IMDB Ranking: #<strong>{imdb}</strong></p>
                            <button className='btn btn-primary' onClick={()=>{handleRemove(id)}}>Remove</button>
                        </div>                
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default MovieCard