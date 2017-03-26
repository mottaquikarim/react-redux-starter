const authActions = {};


authActions.incrementCount = () => {
    return dispatch => {
        return new Promise((resolve) => {
            setTimeout(() => {
                dispatch({
                    type: 'increment_count',
                    by: 1,
                });
            }, 500);
        });
    }
} // incrementCount

export default authActions;
