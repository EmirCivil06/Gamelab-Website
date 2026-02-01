import  AnnouncementDashboard  from "../components/AnnouncementElements";
import BackgroundTemplate from "../components/Background";

function Announcements() {
  // !!! ŞİMDİLİK KULLANIM DIŞI
  const list = [
    {
      content: "Content1"
    },
    {
      content: "Content2"
    },
    {
      content: "Content3"
    },
  ];

  return (
    <>
      <BackgroundTemplate />
      <div className="page-default">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
        laboriosam error delectus nostrum magnam sapiente ipsa eius perferendis
        nisi facere nesciunt maiores corrupti, tempora quis iure molestiae odio.
        Ipsa, rem.
      </div>
      <AnnouncementDashboard announcements={list}/>
    </>
  );
}

export default Announcements;
