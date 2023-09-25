# Redux_Demos-
Redux scratch to hero code in this file for react store process!!
simple store process!!

- one_Type.js     :
- one_action.js   : An action is obeject with a type property!
* one_reducer.js  : Reducer is a function that accepts the state & action as parameter & returns a new state!

For more demos its in deiffernet branches!
* demo1
* demo2
* demo3

### Work Flow
![flow](https://github.com/chandanhm1999/ReduxDemos/assets/109410990/355973e7-553a-40c2-ae51-991d07176aa4)

## State
![state](https://github.com/chandanhm1999/Redux_Demos-/assets/109410990/fd121980-7124-4857-8348-455c3b04e1ce)

## Action
![actions](https://github.com/chandanhm1999/Redux_Demos-/assets/109410990/106aadf2-4c73-4ddb-a686-79b220592a71)

### ActionCreator
  ![actioncreator](https://github.com/chandanhm1999/ReduxDemos/assets/109410990/0bd762ce-423d-4a7e-a6bb-e79fe0a3fd15)


## Reducers
![reducers](https://github.com/chandanhm1999/Redux_Demos-/assets/109410990/24642195-a43a-4a4e-97e0-7b7781b9f7af)

### last
![reduceraction](https://github.com/chandanhm1999/ReduxDemos/assets/109410990/e42bfba7-9c6a-4587-828b-b6a0808c898a)

# Base Setup of Redux

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
