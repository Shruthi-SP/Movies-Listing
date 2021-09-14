import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import MovieForm from './MovieForm'
import MoviesList from './MoviesList'
import MovieStats from './MovieStats'

const MoviesContainer = (props) => {
        
    const movies = useSelector((state)=>{
        return state.movies
    })

    const [search, setSearch] = useState('')
    const [sortBy, setSortBy] = useState('')
    const [listingMovies, setListingMovies] = useState([...movies])

    useEffect(()=>{
        setListingMovies(movies)
    }, [movies])

    function sortByfunc(sortValue){
        if(sortValue === 'SortBy'){
            return movies
        }
        else if(sortValue === 'atoz'){
            const arr = movies.map(ele=>ele.movie).sort().map(ele=> movies.find(m=>m.movie=== ele))
            return arr 
        }
        else if(sortValue === 'ztoa'){
            const arr = movies.map(ele=>ele.movie).sort().reverse().map(ele=> movies.find(el=>el.movie===ele))
            return arr
        }
        else if(sortValue === 'increasing'){
            const arr = movies.map(ele=>ele.imdb).sort((a,b)=>a-b).map(ele=>movies.find(el=>el.imdb===ele))
            return arr
        }
        else if(sortValue === 'decreasing'){
            const arr = movies.map(ele=>ele.imdb).sort((a,b)=>a-b).reverse().map(ele=>movies.find(el=>el.imdb===ele))
            return arr
        }
    }

    const handleSearch = (e) => {
        const newSearch = e.target.value
        setSearch(newSearch)
        const newList = movies.filter(ele=>{
            return ele.movie.toLowerCase().includes(newSearch)
        })
        setListingMovies(newList)
    }
    const handleSort = (e) => {
        const newValue = e.target.value
        setSortBy(newValue)
        const newList = sortByfunc(newValue)
        setListingMovies(newList)
    }
   
    return(
        <div className='row'>  
            <div className='mt-3 col-md-8'>
                <div className='row'>
                    <input className="col m-3 form-control" type='text' value={search} placeholder='Search by Name' onChange={handleSearch} />

                    <select className=" col m-3 form-control" value={sortBy} onChange={handleSort}>
                        <option value='SortBy'>Sort by</option>
                        <option value='atoz'>Movie(A-Z)</option>
                        <option value='ztoa'>Movie(Z-A)</option>
                        <option value='increasing'>IMDB(Ascending)</option>
                        <option value='decreasing'>IMDB(Descending)</option>
                    </select>
                </div>
                <MoviesList listingMovies={listingMovies}/>
            </div>          
            
            <div className='col-md-4'>
                <MovieForm />
                <MovieStats />
            </div>
            
        </div>
    )
}
export default MoviesContainer