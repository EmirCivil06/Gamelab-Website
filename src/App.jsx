import Projects from "./pages/Projects";
import About from "./pages/About";
import Announcements from "./pages/Announcements";
import Contact from "./pages/Contact";
import NavigationBar from "./components/NavigationBar.jsx";
import BackgroundTemplate from "./components/Background.jsx";
import bg from "./assets/map.png"

// Ana uygulama
function App() {
  return (<>
  {/* React Router yoluyla çoklu web sayfaları ve tek bir nav bar ile işi hallediyoruz */}
    <BackgroundTemplate image={bg}/> 
    <NavigationBar/>
    <section id="about" className="section-adj">
      <About/>
    </section>
    <section id="announcements" className="section-adj">
      <Announcements/>
    </section>
    <section id="projects" className="section-adj">
      <Projects/>
    </section>
    <section id="contact" className="section-adj">
      <Contact/>
    </section>
  </>);
}
export default App;