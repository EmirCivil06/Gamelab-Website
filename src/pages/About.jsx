import background_image from "../assets/map.png"
import BackgroundTemplate from "../components/Background";

function About() {
  return (
    <>
      <BackgroundTemplate
        gradientColor="linear-gradient(135deg, #8874ebe1 0%, #bdace5e1 100%)"
        image={background_image}
      ></BackgroundTemplate>
    </>
  );
}

export default About;
