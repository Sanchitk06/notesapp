export function addNote(title, content) {
  return {
    type: "ADD_NOTE",
    title: title,
    content: content,
    edit: false,
  };
}

export function removeNote(id) {
  return {
    type: "REMOVE_NOTE",
    id: id,
    edit: false,
  };
}

export function editNote(id) {
  return {
    type: "EDIT_NOTE",
    id: id,
    edit: false,
  };
}
export function updateNote(id, data) {
  return {
    type: "UPDATE_NOTE",
    id: id,
    data: data,
  };
}
