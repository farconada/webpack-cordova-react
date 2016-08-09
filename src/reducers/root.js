let initialState = {
    pendingNotifications: 0,
    cards: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC_PENDING':
            return Object.assign({}, state, {
                pendingNotifications: state.pendingNotifications + 1
            });
        case 'EVENTS_CHANGED':
            return Object.assign({}, state, {
                cards: Object.keys(action.events).map(function(k){return action.events[k]})
            });
        default:
            return state
    }
};

export default rootReducer;