import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Note from "./pages/Note"
import Create from "./pages/Create"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Note></Note>}></Route>
          <Route path="/create" element={<Create></Create>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
