import Carousel from "./CustomCarousel";

export function AnnouncementCard({
  content,
  header,
  annType = "",
  socialMediaContent = "",
}) {
  let textColor = "",
    bgColor = "";
  switch (annType) {
    case "edu": // Edu
      bgColor = "bg-sky-200";
      textColor = "text-sky-900";
      break;
    case "fun": // Fun
      bgColor = "bg-yellow-200";
      textColor = "text-yellow-900";
      break;
    default:
      bgColor = "bg-violet-200";
      textColor = "text-violet-900";
      break;
  }

  return (
    <>
      <div
        className={`${bgColor} ${textColor} flex w-[92%] h-[84%] rounded-[15px] gap-[clamp(0.2rem,0.2vw,0.4rem)] p-[clamp(0.2rem,0.5vw,0.7rem)] flex-col shadow-lg items-center text-center text-[clamp(0.5rem,1vw,1rem)] justify-around`}
      >
        <b>{header}</b>
        {/* Responsive sosyal medya container */}
        {socialMediaContent && (
          <div className="w-full max-w-[clamp(4rem,92.5%,13.5rem)] aspect-video flex items-center justify-center">
            <a
              href={socialMediaContent}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full flex items-center justify-center hover:opacity-80 transition-opacity duration-200"
            >
              <img
                src={content}
                alt="Sosyal medya içeriği"
                className="w-full h-full object-contain"
              />
            </a>
          </div>
        )}
      </div>
    </>
  );
}
// Announcement Dashboard
export default function AnnouncementDashboard({ announcements = [] }) {
  return (
    <>
      <div className="fixed bottom-[clamp(1rem,3.5vh,7rem)] left-[clamp(1rem,3.5vh,7rem)] flex flex-col px-4 py-2 gap-[clamp(0.15rem,0.25rem,0.4rem)] w-[clamp(6.5rem,22vw,24rem)] h-[clamp(4rem,17vw,19.5rem)] justify-between bg-violet-50 border border-violet-200 rounded-2xl shadow-md ">
        <div className="text-[clamp(0.6rem,1.1vw,1.1rem)]">
          <b>En Yeni Duyurular</b>
        </div>
        <Carousel slides={announcements} />
      </div>
    </>
  );
}
