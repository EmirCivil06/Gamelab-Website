import background_image from "../assets/map.png"
import "./About.css";
import BackgroundTemplate from "../Components/Background/Background.jsx";

function About() {
  return (
    <>
      <BackgroundTemplate
        gradientColor="linear-gradient(135deg, #8874ebe1 0%, #bdace5e1 100%)"
        image={background_image}
        size="100px"
      ></BackgroundTemplate>
    </>
  );
}

export default About;
