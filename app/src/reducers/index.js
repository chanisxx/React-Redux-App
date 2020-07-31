import {
    FETCHING_DATA_SUCCESS,
    FETCHING_DATA_START,
    FETCHING_DATA_ERROR
} from '../actions'

const initialState = {
    wordResult: [],
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_DATA_START: {
            return {
                ...state,
                isFetching: true
            };
        }
        case FETCHING_DATA_SUCCESS: {
            return {
            ...state,
            isFetching: false,
            wordResult: action.payload
            };
        }
        case FETCHING_DATA_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        }

        default: return state
    }
}