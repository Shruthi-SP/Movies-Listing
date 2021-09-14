const moviesInitialState = []

const moviesReducer = (state = moviesInitialState, action) => {
    switch (action.type) {
        case 'ADD_MOVIE' : {
            return [...state, action.payload]
        }
        case 'REMOVE_MOVIE' : {
            return state.filter(ele=> ele.id !== action.payload)
        }
        case 'SEARCH_MOVIE' : {
            return state.filter(ele=>{
                return ele.movie.toLowerCase().includes(action.payload)
            })
        }
        default : {
            return [...state]
        }
    }
}
export default moviesReducer