import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AllNotes from "./Components/AllNotes";
import NotesForm from "./Components/NotesForm";
import Updateform from "./Components/Updateform";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NotesForm />} />
          <Route path="/allNotes" element={<AllNotes />} />
          <Route path="/updateform" element={<Updateform />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
