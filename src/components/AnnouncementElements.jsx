import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Yapay Carousel için kaydırma butonu
function CustomButton({
  className = "",
  onClick,
  dirRight = false,
  buttonIconClass = "",
}) {
  return (
    <>
      <button className={className} onClick={onClick}>
        {dirRight ? (
          <FaChevronRight className={buttonIconClass} />
        ) : (
          <FaChevronLeft className={buttonIconClass} />
        )}
      </button>
    </>
  );
}

function AnnouncementCard({ Data }) {
  let textColor = "",
    bgColor = "";
  switch (Data.Type) {
    case "Education": // Education
      bgColor = "bg-sky-200";
      textColor = "text-sky-900";
      break;
    case "Fun": // Fun
      bgColor = "bg-yellow-200";
      textColor = "text-yellow-900";
      break;
    case "Notice": // Notice
      bgColor = "bg-violet-200";
      textColor = "text-violet-900";
      break;
    default:
      bgColor = "bg-green-200";
      textColor = "text-green-300";
      break;
  }

  return (
    <>
      <div
        className={`${bgColor} ${textColor} flex w-[92%] h-[92.5%] rounded-[15px] gap-[clamp(0.2rem,0.2vw,0.4rem)] p-[clamp(0.2rem,0.5vw,0.7rem)] flex-row shadow-lg items-center text-[clamp(0.5rem,1vw,1rem)] justify-around`}
        key={Data.id}
      >
        <div className="flex  flex-col gap-3">
          <b>{Data.Header}</b>
          <div className="w-full max-w-[clamp(4rem,92.5%,13.5rem)] aspect-video">
            <a
              href={Data.Media}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full h-full hover:opacity-80 transition-opacity duration-200"
            >
              <img
                src={Data.image}
                alt="Sosyal medya içeriği"
                className="w-full h-full object-contain"
              />
            </a>
          </div>
        <small>{new Date(Data.created).toLocaleDateString("tr-TR")}</small>
        </div>
      </div>
    </>
  );
}

export default function Carousel({ announcementItems = [] }) {
  const [current, setCurrent] = useState(0);
  const [startX, setStartX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleStart = (x) => {
    setStartX(x);
    setIsDragging(true);
  };

  const handleEnd = (x) => {
    if (!isDragging || startX === null) return;
    const diff = x - startX;
    const threshold = 50;

    if (diff > threshold) {
      prevSlide();
    } else if (diff < -threshold) {
      nextSlide();
    }
    setIsDragging(false);
    setStartX(null);
  };

  const nextSlide = () => {
    if (announcementItems.length === 0) {
      return;
    }
    setCurrent((prev) =>
      prev === announcementItems.length - 1 ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    if (announcementItems.length === 0) {
      return;
    }
    setCurrent((prev) =>
      prev === 0 ? announcementItems.length - 1 : prev - 1,
    );
  };

  const buttonStyle = `p-[clamp(0.25vw,0.3vw,0.4vw)] rounded-lg h-[17.5%] bg-violet-600 hover:bg-violet-700 text-white transition duration-300 ${announcementItems.length === 0 ? "cursor-not-allowed" : "cursor-pointer"}`;
  const buttonIconClass = "w-[clamp(0.5rem,0.9vw,1.2rem)] h-auto";

  return (
    <>
      <div className="flex h-full items-center gap-[clamp(4px,6px,8px)]">
        <CustomButton
          className={buttonStyle}
          buttonIconClass={buttonIconClass}
          dirRight={false}
          onClick={prevSlide}
        />
        <div
          className="w-full h-full overflow-hidden touch-pan-y"
          onMouseDown={(e) => handleStart(e.clientX)}
          onMouseUp={(e) => handleEnd(e.clientX)}
          onMouseLeave={(e) => handleEnd(e.clientX)}
          onTouchStart={(e) => handleStart(e.touches[0].clientX)}
          onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
        >
          {announcementItems.length === 0 ? (
            <span className="flex h-full items-center justify-center text-gray-400">
              <b>Duyuru yok :/</b>
            </span>
          ) : (
            <div
              className="flex h-full transition-transform duration-500 ease-in-out opa"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {announcementItems.map((item, index) => (
                <div
                  key={index}
                  className="w-full h-[90%] flex items-center justify-center shrink-0"
                >
                  <AnnouncementCard Data={item} />
                </div>
              ))}
            </div>
          )}
        </div>
        <CustomButton
          className={buttonStyle}
          buttonIconClass={buttonIconClass}
          dirRight={true}
          onClick={nextSlide}
        />
      </div>
    </>
  );
}
