const init = { age: 12, history:[] };
export default (state = init, action) => {
    let newState = { ...state };
    console.log("logged inside this..", state, action);
    switch (action.type) {
        case "AGEUP": {
            newState.history.push(newState.age);
            newState.age += 1;
            break;
        }
        case "AGEDOWN": {
            newState.history.push(newState.age);
            newState.age -= 1;
            break;
        }
        default: newState.age = state.age;
    }

    return newState;
}