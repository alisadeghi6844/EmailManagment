export const DeleteStudent = (id) => {
    return async dispatch => {
        await dispatch({ type: "DELETE_STUDENT", payload: id });
    }
}