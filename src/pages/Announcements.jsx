import  AnnouncementDashboard  from "../components/AnnouncementElements";
import PlaceHolder from "../assets/img1.jpeg"
import GameNight from "../assets/gamenight.png"
import Gartic from "../assets/gphone.png"
import logo from "../assets/icon-transparent.png"

function Announcements() {
  const list = [
    {
      social: "https://www.instagram.com/p/DQCnPKvjcaX/?igsh=MTA0Z2xhNzk5emZrMg==",
      annType: "edu",
      content: PlaceHolder,
      header: "C Dili Eğitimi Devam Ediyor!"
    },
    {
      social: "https://www.instagram.com/p/DRSa8hFDfBi/?igsh=aTdhNmk3Nmd6MHM4",
      annType: "fun",
      content: GameNight,
      header: "Oyun Gecesi Etkinliği!"
    },
    {
      social: "https://www.instagram.com/p/DSC3isxithD/?igsh=andiZThnZ2c4dzdl",
      content: logo,
      header: "Önemli Bir Duyuru"
    },
    {
      social: "https://www.instagram.com/reel/DSXjXy_Cii6/?igsh=MW1mdXVzMWNkMXBsNA==",
      annType: "fun",
      content: Gartic,
      header: "Gartic Phone Etkinliği!"
    },
  ];

  return (
    <>
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
