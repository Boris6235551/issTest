import { LOG_IN, LOG_IN_FAILURE, DISPLAY_DATA, SORT } from '../actions/Actions'

const initialState = {
    user: null,
    errorMsg: '',
    data: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                user: action.payload.name,
                errorMsg: '',
                data: action.data
            }
        case LOG_IN_FAILURE:
            return {
                ...state,
                errorMsg: action.payload.errorMsg,
            }
        case DISPLAY_DATA:
            return {
                ...state,
                data: action.data
            }
        case SORT:
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }
}
