# ReduxDemos
Redux scratch to hero code in this file for react store process!

Only asyncAction.js added u can refer that one!

Base Redux!

```
const redux = require('redux')
const createStore = redux.createStore

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
            }

        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.playload
            }
    }
}

const store = createStore(reducer)

```
