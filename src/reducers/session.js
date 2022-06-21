import { LOG_IN, LOG_IN_FAILURE, DISPLAY_DATA, SORT_DATA } from '../actions/Actions'

const initialState = {
    user: null,
    errorMsg: false,
    errorType: '',
    data: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                user: action.payload.name,
                errorMsg: '',
                data: action.data,
            }
        case LOG_IN_FAILURE:
            return {
                ...state,
                errorMsg: action.payload.errorMsg,
                errorType: action.payload.errorType,
            }
        case DISPLAY_DATA:
            return {
                ...state,
                data: action.data
            }
        case SORT_DATA:
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }
}
