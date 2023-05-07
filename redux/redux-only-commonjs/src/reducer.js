const initialState = {
    count: 0,
    count1: -100
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
        case 'DECREMENT':
            return { ...state, count1: state.count1 - 1, count: state.count - 1 };
        default:
            return state;
    }
};

module.exports = counterReducer;