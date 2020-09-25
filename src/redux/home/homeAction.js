import Axios from "axios"
import {
    FETCH_CURRENCY_REQUEST,
    FETCH_CURRENCY_SUCCESS,
    FETCH_CURRENCY_FAILURE
} from "./homeTypes"




export const fetchCurrencyRequest = () => {
    return {
        type: FETCH_CURRENCY_REQUEST
    }
}

export const fetchCurrencySuccess = data => {
    return {
        type: FETCH_CURRENCY_SUCCESS,
        payload: data
    }
}

export const fetchCurrencyFailure = error => {
    return {
        type: FETCH_CURRENCY_FAILURE,
        payload: error
    }
}


export function getCurrency(base) {
    console.log('https://api.exchangeratesapi.io/latest?base=' + base)

    return (dispatch) => {
        dispatch(fetchCurrencyRequest())
        Axios
            .get('https://api.exchangeratesapi.io/latest?base=' + base)
            .then(response => {
                const data = response.data
                dispatch(fetchCurrencySuccess(data))
            })
            .catch(error => {
                dispatch(fetchCurrencyFailure(error.message))
            })
    }
}