import {
    FETCH_CURRENCY_REQUEST,
    FETCH_CURRENCY_SUCCESS,
    FETCH_CURRENCY_FAILURE,
} from "./homeTypes"

const initialState = {
    loading: false,
    error: '',
    data: {},
    rates: [],
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CURRENCY_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_CURRENCY_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                rates: action.rates,
                error: ''
            }
        case FETCH_CURRENCY_FAILURE:
            return {
                ...state,
                loading: false,
                data: {},
                error: action.payload
            }
        default: return state
    }

}
export default homeReducer