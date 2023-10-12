const initialState = {
  notes: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === "ADD_NOTE") {
    return {
      notes: [
        ...state.notes,
        {
          title: action.title,
          content: action.content,
          edit: false,
        },
      ],
    };
  } else if (action.type === "REMOVE_NOTE") {
    return {
      notes: state.notes.filter((note, index) => {
        return index !== action.id;
      }),
    };
  } else if (action.type === "EDIT_NOTE") {
    return {
      notes: state.notes.map((note, index) =>
        index === action.id ? { ...note, edit: !note.edit } : note
      ),
    };
  } else if (action.type === "UPDATE_NOTE") {
    return {
      notes: state.notes.map((note, index) => {
        if (index === action.id) {
          return {
            ...note,
            title: action.data.newTitle,
            content: action.data.newMessage,
            edit: !note.edit,
          };
        } else {
          return note;
        }
      }),
    };
  } else {
    return state;
  }
}

export default rootReducer;
