import {
    FETCH_CURRENCY_REQUEST,
    FETCH_CURRENCY_SUCCESS,
    FETCH_CURRENCY_FAILURE
} from "./homeTypes"

const initialState = {
    loading: false,
    error: '',
    data: {}
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
                loading: false,
                data: action.payload,
                error: ''
            }
        case FETCH_CURRENCY_FAILURE:
            return {
                loading: false,
                data: [],
                error: action.payload
            }
        default: return state
    }

}
export default homeReducer