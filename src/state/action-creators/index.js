export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "deposit", // Corrected action type
            payload: amount
        })
    }
}

export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "withdraw", // Corrected action type
            payload: amount
        })
    }
}
