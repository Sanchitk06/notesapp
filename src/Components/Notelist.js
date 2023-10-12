import { useDispatch } from "react-redux";
import { removeNote, editNote } from "../Redux/action";

export default function Notelist(props) {
  const dispatch = useDispatch();
  const dispatch2 = useDispatch();
  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
      <div
        className="card"
        id="note"
        style={{ width: "18rem", margin: "2rem" }}
      >
        <div className="card-body">
          <h5 className="card-title">{props.note.title}</h5>
          <hr></hr>
          <i class="uil uil-comment-alt-lines"></i>
          <p className="card-text">{props.note.content}</p>

          <button
            className="btn btn-danger "
            onClick={() => dispatch(removeNote(props.index))}
          >
            <i class="uil uil-trash"></i>
            Delete
          </button>

          <button
            style={{ marginLeft: 6 }}
            className="btn btn-success"
            onClick={() => dispatch2(editNote(props.index))}
          >
            <i class="uil uil-edit"></i>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
