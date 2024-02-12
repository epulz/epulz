import {
  BrowserRouter as Router,
  Route,
  Outlet,
  Routes,
} from "react-router-dom";
import { Navigation } from "./main/Navigation";
import { Main } from "./main/Main";
import { Footer } from "./main/Footer";
import { About } from "./About/About";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/epulz" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Outlet />
      <Footer />
    </Router>
  );
}

export default App;
