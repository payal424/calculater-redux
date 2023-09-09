const multiple = (state = 0, action) => {
    if(action.type === 'mul'){
        state = 0
        state = Number(action.payload[1]) * Number(action.payload[0])
    }
    if(action.type === 'divi'){
        state = 0
        state = Number(action.payload[1]) / Number(action.payload[0])
    }
    return state;
}
export default multiple