const adding = (state = 0, action) => {
    if(action.type === 'add'){
        state = 0
        state = Number(action.payload[1]) + Number(action.payload[0])
    }
    if(action.type === 'sub'){
        state = 0
        state = Number(action.payload[1]) - Number(action.payload[0])
    }
    return state;
}
export default adding