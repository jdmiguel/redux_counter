import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case actionTypes.INCREMENT:
            return{
                ...state,
                counter: state.counter + 1
            }
        break;
        case actionTypes.DECREMENT:
            return{
                ...state,
                counter: state.counter - 1
            }
        break;
        case actionTypes.ADD:
            return{
                ...state,
                counter: state.counter + action.value
            }
        break;
        case actionTypes.SUBSTRACT:
            return{
                ...state,
                counter: state.counter - action.value
            }
        break;
        case actionTypes.STORE_RESULT:
            return{
                ...state,
                results: state.results.concat({id: String( Math.floor(Math.random()*(100000-1)+1)),value: state.counter})
            }
        break;
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter( item => item.id !== action.resultId )
            return{
                ...state,
                results: updatedArray
            }
        break;
    }
    return state;
}

export default reducer;