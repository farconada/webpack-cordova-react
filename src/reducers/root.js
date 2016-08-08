let initialState = {
    pendingNotifications: 0
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC_PENDING':
            return Object.assign({}, state, {
                pendingNotifications: state.pendingNotifications + 1
            });
        default:
            return state
    }
};

export default rootReducer;