import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Notelist from "./Notelist";
import Updateform from "./Updateform";

export default function AllNotes() {
  const notes = useSelector((state) => state.notes);
  console.log(notes);
  const navigate = useNavigate();

  return (
    <div className="Allnotes">
      <div className="buttn d-flex flex-wrap">
        <button className="button-29" onClick={() => navigate("/")}>
          Home
        </button>
      </div>
      <div className=" d-flex flex-wrap">
        {notes.map((note, index) => (
          <div>
            {note.edit ? (
              <Updateform note={note} index={index} />
            ) : (
              <Notelist index={index} note={note} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
