const initialState = [];
export const AddStudentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_STUDENT": {
      return [...state, action.payload];
    }
    case "DELETE_STUDENT": {
      const filterStudent = state.filter((item) => item.id != action.payload);
      state = filterStudent;
      return state;
    }
    case "EDIT_STUDENT": {
      const editStudent = state.map((item) =>
        item.id == action.payload.id ? action.payload : item
      );
      state = editStudent;
      return state;
    }
    default:
      return state;
  }
};
