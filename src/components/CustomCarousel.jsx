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

  const buttonStyle = "p-[clamp(0.3vw,0.35vw,0.45vw)] rounded-lg bg-green-500 h-[20%] hover:bg-green-700 transition duration-300 cursor-pointer"

  return (
    <>
      <div className="flex h-full items-center gap-[clamp(4px,7px,8px)]">
        <CustomButton
          className={buttonStyle}
          buttonIconClass=""
          dirRight={false}
          onClick={prevSlide}
        />
        <div className="w-full h-full overflow-hidden ">
          <div className="flex h-full transition-transform duration-500 ease-in-out" style={{transform: `translateX(-${current * 100}%)`}}>
            {slides.map((item, index) => (
                <div key={index} className="w-full h-full flex items-center justify-center shrink-0">
                  <AnnouncementCard content={item.content}/>
                </div>
            ))}
          </div>
        </div>
        <CustomButton
          className={buttonStyle}
          buttonIconClass=""
          dirRight={true}
          onClick={nextSlide}
        />
      </div>
    </>
  );
}