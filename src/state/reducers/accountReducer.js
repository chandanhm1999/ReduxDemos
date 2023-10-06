const reducer = (state = 0, action) => {
    switch (action.type) {
        case "deposit":
            return state + action.playload;
        case "withdraw":
            return state - action.playload;
        default:
            return state
    }
}

export default reducer