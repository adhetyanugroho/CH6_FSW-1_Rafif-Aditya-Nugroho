import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./scenes/Homepage";
import Search from "./scenes/Search";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>

  );
}



export default App;
