//Redux
const redux = require('redux')
const reduxLogger = require('redux-logger')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

//action creator
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'first rdux action'
    }
}

function buyIceCream() {
    return{
        type: BUY_ICECREAM
    }
}

//reducer
// (previousstate, action) => newstate

// const initialState = {
//     numOfCakes: 10,
//     // another reducer
//     numOfIceCreams: 20
// }

const initialCakeState = {
    numOfCakes: 20,
}

const initialIceCreamState = {
    numOfIceCreams: 10,
}


// const reducer = (state = initialState, action) => {
//     switch(action.type){
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes -1
//         }

//         // another reducer
//         case BUY_ICECREAM: return {
//             ...state,
//             numOfIceCreams: state.numOfIceCreams -1
//         }

//         default: return state
//     }
// }

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes -1
        }

        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes -1
        }

        // another reducer
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams -1
        }

        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()