const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios');


//state
const initialState = {
    loading: false,
    users: [],
    error: ''
}

//action
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

//ACTION TYPE action creator!
const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

//reducer

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.playload,
                error: ''
            };

        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.playload
            }

            
    }
}

const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            // responce.data is the array of users
            const users = response.data.map(user => user.id)
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
            //error.message
            dispatch(fetchUsersFailure(error.message))
        })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => { console.log(store.getState())})
store.dispatch(fetchUsers())