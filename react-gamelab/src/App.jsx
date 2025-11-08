import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Projects from "./WebPages/Projects";
import About from "./WebPages/About";
import Announcements from "./WebPages/Announcements";
import Layout from "./Components/Layout";
import Contact from "./WebPages/Contact";

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