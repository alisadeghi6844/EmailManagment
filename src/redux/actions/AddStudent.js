export const AddStudent = (data) => {
    return async dispatch => {
        await dispatch({ type: "ADD_STUDENT", payload: data });
    }
}