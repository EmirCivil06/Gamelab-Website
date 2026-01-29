import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Announcements from "./pages/Announcements";
import Layout from "./Components/Layout";
import Contact from "./pages/Contact";

function App() {
  return (<>
  <Router>
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/" element={<About/>}/>
        <Route path="/announcements" element={<Announcements/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Route>
    </Routes>
  </Router>
  </>);
}
export default App;