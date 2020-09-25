import Axios from "axios"
import {
    FETCH_CURRENCY_REQUEST,
    FETCH_CURRENCY_SUCCESS,
    FETCH_CURRENCY_FAILURE,
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


export function getCurrency() {

    return (dispatch) => {
        dispatch(fetchCurrencyRequest())
        Axios
            .get('https://api.exchangeratesapi.io/latest')
            .then(response => {
                const data = response.data
                console.log([data.base, ...Object.keys(data.rates)])
                dispatch(fetchCurrencySuccess([data.base, ...Object.keys(data.rates)]))
            })
            .catch(error => {
                dispatch(fetchCurrencyFailure(error.message))
            })
    }
}