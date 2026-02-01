import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AnnouncementCard } from "./AnnouncementElements";

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

export default function Carousel({ slides = [] }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const buttonStyle = "p-[clamp(0.25vw,0.3vw,0.4vw)] rounded-lg h-[17.5%] bg-violet-600 hover:bg-violet-700 text-white transition duration-300 cursor-pointer"
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
        <div className="w-full h-full overflow-hidden ">
          <div className="flex h-full transition-transform duration-500 ease-in-out opa" style={{transform: `translateX(-${current * 100}%)`}}>
            {slides.length === 0 ? <div className="text-gray-400"><b>Duyuru yok :d</b></div> : slides.map((item, index) => (
                <div key={index} className="w-full h-[90%] flex items-center justify-center shrink-0">
                  <AnnouncementCard content={item.content} header={item.header} annType={item.annType} socialMediaContent={item.social}/>
                </div>
            ))}
          </div>
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