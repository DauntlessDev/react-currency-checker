import {
    FETCH_CURRENCY_REQUEST,
    FETCH_CURRENCY_SUCCESS,
    FETCH_CURRENCY_FAILURE
} from "./homeTypes"




export const fetchUsersRequest = () => {
    return {
        type: FETCH_CURRENCY_REQUEST
    }
}

export const fetchUsersSuccess = users => {
    return {
        type: FETCH_CURRENCY_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = error => {
    return {
        type: FETCH_CURRENCY_FAILURE,
        payload: error
    }
}


export function getCurrency() {
    return {
    }
}