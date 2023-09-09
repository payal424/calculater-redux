export const addition = (amount) => {
    return((dispatch) => {dispatch({type : 'add' , payload : amount})})
}

export const subition = (amount) => {
    return((dispatch) => {dispatch({type : 'sub' , payload : amount})})
}

export const mulition = (amount) => {
    return((dispatch) => {dispatch({type : 'mul' , payload : amount})})
}

export const divition = (amount) => {
    return((dispatch) => {dispatch({type : 'divi' , payload : amount})})
}

