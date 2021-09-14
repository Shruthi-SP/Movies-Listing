const countInitialState = 0

const countReducer = (state=countInitialState, action) => {
    switch (action.type) {
        case 'INC': {
            return state + 1
        }
        default : {
            return state
        }
    }    
}
export default countReducer