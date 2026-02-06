import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavigationBar from "./components/NavigationBar.jsx";
import BackgroundTemplate from "./components/Background.jsx";
import bg from "./assets/map.png";

// Ana uygulama
function App() {
  return (
    <>
      {/* React Router yoluyla çoklu web sayfaları ve tek bir nav bar ile işi hallediyoruz */}

      <NavigationBar />
      <div className="app">
        <BackgroundTemplate image={bg} />
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}
export default App;
