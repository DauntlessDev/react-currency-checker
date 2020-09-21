const { combineReducers } = require("redux");
const { default: homeReducer } = require("./home/homeReducer");


const rootReducer = combineReducers({
    home: homeReducer
})

export default rootReducer