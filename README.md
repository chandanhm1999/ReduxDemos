
# Redux_Demos!!!
#### Redux scratch to hero code in this file for react store process!!
simple store process!!

* one_action.js   : An action is object with a type property! - 1st we have create this
- one_Type.js     : We need to export this type to the action so called type!
- one_reducer.js  : Reducer is a function that accepts the state & action as parameter & returns a new state!
* store.js        : Create Store method accepts a reducer fuuncton as its parameter!


  #### Note:
  First we have defined our action an object & we have defined our "action creator" that can returns an object!
  then we are implementing the reducer "Reducer is a function that accepts the state & action as parameter & returns a new state"

## Hook
* useSelector:  useSelector is hook the react-redux library provides which acts as close equivilent to map state to props function we have already seen!
- // to get hold of any state that is maintained in redux store we use the useSelector hook!

For more demos its in deiffernet branches!
* demo1
* demo2
* demo3middleware
* demo4thunkmiddleware
* demoui5 for UI redux
* demoui6banking           : created banking website demo redux

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
