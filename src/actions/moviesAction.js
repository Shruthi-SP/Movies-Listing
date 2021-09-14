export const addMovie = (movieObj) => {
    return {
        type: 'ADD_MOVIE',
        payload: movieObj
    }
}
export const removeMovie = (id) => {
    return {
        type: 'REMOVE_MOVIE',
        payload: id
    }
}
export const searchMovie = (searchValue) => {
    return {
        type: 'SEARCH_MOVIE',
        payload: searchValue
    }
}