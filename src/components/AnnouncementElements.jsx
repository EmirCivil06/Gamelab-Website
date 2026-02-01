import Carousel from "./CustomCarousel";

export function AnnouncementCard({ content }) {
  return (
    <>
      <div className="bg-amber-400 flex w-[90%] h-[85%] rounded-[15px] items-center">
        {content}
      </div>
    </>
  );
}

export default function AnnouncementDashboard({ announcements = [] }) {
  return (
    <>
      <div className="fixed bottom-[clamp(1rem,3.5vh,7rem)] left-[clamp(1rem,3.5vh,7rem)] flex flex-col px-4 py-2 gap-2 w-[clamp(6.5rem,20vw,22.5rem)] h-[clamp(4rem,15vw,18rem)] justify-between bg-amber-50 rounded-2xl shadow-md ">
        <div>
          <b>En Yeni Duyurular</b>
        </div>
        <Carousel slides={announcements} />
      </div>
    </>
  );
}
