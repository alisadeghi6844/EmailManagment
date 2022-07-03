export const EditStudent = (data) => {
  return async (dispatch) => {
    await dispatch({ type: "EDIT_STUDENT", payload: data });
  };
};
