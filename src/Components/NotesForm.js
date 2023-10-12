import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNote } from "../Redux/action";

export default function NotesForm() {
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleSubmission(e) {
    e.preventDefault();
    dispatch(addNote(title, content));
    setTitle("");
    setContent("");
    navigate("/allNotes");
  }

  return (
    <div className="formContainer">
      <h2>React Notes App</h2>
      <form onSubmit={handleSubmission}>
        <h5>Title</h5>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Enter title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />{" "}
        <br />
        <br></br>
        <h5>Content</h5>
        <textarea
          rows="5"
          type="text"
          name="content"
          value={content}
          placeholder="Enter content"
          onChange={(e) => setContent(e.target.value)}
          required
        />{" "}
        <br />
        <br />
        <button class="button-29">Add note</button>
      </form>
    </div>
  );
}
