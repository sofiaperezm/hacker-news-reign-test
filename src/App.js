import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllPage from "./pages/All";
import FavsPage from "./pages/Favs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllPage />} />
        <Route path="/favs" element={<FavsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
