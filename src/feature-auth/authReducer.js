export default function authReducer(state = {}, action) {
    console.log('in authReducer');
    if (Object.keys(state).length === 0) {
        return state;
    }
    switch(action.type) {
        case 'increment_count':
            console.log('increment_count');
            return Object.assign({}, state, {
                count: state.count + action.by
            });
            break;
    }
    return state;
}
