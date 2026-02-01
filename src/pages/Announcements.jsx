import AnnouncementCard from "../components/AnnouncmentCard";
import BackgroundTemplate from "../components/Background";
import Carousel from "../components/CustomCarousel";

function Announcements() {
  // !!! ŞİMDİLİK KULLANIM DIŞI
  const list = [
    {
      content: (
        <AnnouncementCard content={"Content 1"}/>
      ),
    },
    {
      content: (
        <AnnouncementCard content={"Content 2"}/>
      ),
    },
    {
      content: (
        <AnnouncementCard content={"Content 3"}/>
      ),
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
      <div className="fixed bottom-[clamp(1rem,3.5vh,7rem)] left-[clamp(1rem,3.5vh,7rem)] flex flex-col px-4 py-2 gap-2 w-[clamp(6.5rem,20vw,22.5rem)] h-[clamp(4rem,15vw,18rem)] justify-between bg-amber-50 rounded-2xl shadow-md ">
        <div>
          <b>En Yeni Duyurular</b>
        </div>
        <Carousel slides={list} />
      </div>
    </>
  );
}

export default Announcements;
