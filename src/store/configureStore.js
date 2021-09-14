import { createStore, combineReducers } from 'redux'
import countReducer from '../reducers/countReducer'
import moviesReducer from '../reducers/moviesReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        count: countReducer,
        movies: moviesReducer
    }))
    return store
}
export default configureStore