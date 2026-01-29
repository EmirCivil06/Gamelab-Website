import BackgroundTemplate from "../components/Background";
import "./Announcements.css";
import List from "../Components/List";

function Announcements() {
  const list = (
    <List
      color="linear-gradient(135deg, #fff4c0ff 0%, #ffcab5ff 100%)"
      radiuses="0 0 20px 20px"
      cardColor="#6fff00ff"
    />
  );

  return (
    <>
      <BackgroundTemplate />
      <div className="page-default">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
        laboriosam error delectus nostrum magnam sapiente ipsa eius perferendis
        nisi facere nesciunt maiores corrupti, tempora quis iure molestiae odio.
        Ipsa, rem.
      </div>
    </>
  );
}

export default Announcements;
