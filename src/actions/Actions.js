import { checkCredentials } from '../utils/session'
import { data } from '../utils/network'

export const LOG_IN = 'LOG_IN'
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'
export const DISPLAY_DATA = 'DISPLAY_DATA'
export const SORT = 'SORT'

export function logIn(params, cb) {
    return dispatch => {
        data()
            .then(res => {
                if (checkCredentials(params)) {
                    dispatch({
                        type: LOG_IN,
                        payload: {
                            name: params.username,

                        },
                        data: res,

                    })
                    disp: () => { console.log('privet') }
                    cb()
                } else {
                    dispatch({
                        type: LOG_IN_FAILURE,
                        payload: {
                            errorMsg: params.errorMsg,
                        },
                        error: true,
                    })
                }
            })
            .catch(error => {
                dispatch({
                    type: LOG_IN,
                    payload: {
                        errorMsg: 'Сервер временно недоступен',
                    },
                    error: true,
                })
            })
    }
}

export function display(data, key) {
    data[key].isClose = data[key].isClose ? false : true
    return dispatch => {
        dispatch({
            type: DISPLAY_DATA,
            data: data,
        })
    }
}

export function sortById(data, stateSortById) {
    if (stateSortById) data.sort((el1, el2) => el1.id > el2.id ? -1 : 1);
    if (!stateSortById) data.sort((el1, el2) => el1.id > el2.id ? 1 : -1);
    return dispatch => {
        dispatch({
            type: SORT,
            data: data,
        })
    }
}

export function sortByHeader(data, stateSortByHeader) {
    if (stateSortByHeader) data.sort((el1, el2) => el1.title > el2.title ? -1 : 1);
    if (!stateSortByHeader) data.sort((el1, el2) => el1.title > el2.title ? 1 : -1);
    return dispatch => {
        dispatch({
            type: SORT,
            data: data,
        })
    }
}
