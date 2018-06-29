import * as actionTypes from '../actions';

const initialState = {
    results: []
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case actionTypes.STORE_RESULT:
            return{
                ...state,
                results: state.results.concat({id: String( Math.floor(Math.random()*(100000-1)+1)),value: action.result})
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