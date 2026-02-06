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

function Card({ Data }) {
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
      bgColor = "bg-[#FFF1D6]";
      textColor = "text-[#6D3A1E]";
      break;
  }

  return (
    <>
      <div
        className={`${bgColor} ${textColor} flex w-[92%] h-[87.5%] rounded-[15px] gap-[clamp(0.5rem,4vw,6rem)] p-[clamp(0.2rem,0.5vw,0.7rem)] px-[clamp(0.3rem,2vw,3rem)] flex-row shadow-lg text-[clamp(0.5rem,1.5vw,1.75rem)] items-center select-none`}
        key={Data.id}
      >
       <a href={Data.Media ? Data.Media :  "https://www.instagram.com/paugamelab/p/DDpfGc6OcIh/" } target="_blank" rel="noreferrer" className="contents">
          <img src={Data.imageUrl} className="lg:h-[80%] h-[50%] w-auto max-w-[45%] sm:mx-[clamp(0.45rem,3vw,4rem)] mx-[clamp(0.35rem,2.5vw,3rem)] rounded-xl"></img>
       </a>
       <div className="flex flex-col mt-[clamp(0.25rem,2.5vw,2.75rem)]">
        <h1 className="text-[clamp(0.65rem,1.7vw,3rem)] font-bold">
          {Data.Header}
        </h1>
        <div>
          {Data.Content}
        </div>
         
        {Data.projectPublished ? <small className="mt-[clamp(0.2rem,0.75vw,1.5rem)] sm:mt-[clamp(0.25rem,2vw,2.25rem)]">{new Date(Data.projectPublished).toLocaleDateString("tr-TR")}</small> :  <small className="mt-[clamp(0.2rem,0.75vw,1.5rem)] sm:mt-[clamp(0.25rem,2vw,2.25rem)]">{new Date(Data.created).toLocaleDateString("tr-TR")}</small>}
       </div>
      </div>
    </>
  );
}

export default function Carousel({ items = [], button = "", container = "", slider = "", cardGrandparent = "", cardParent = ""}) {
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
    if (items.length === 0) {
      return;
    }
    setCurrent((prev) =>
      prev === items.length - 1 ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    if (items.length === 0) {
      return;
    }
    setCurrent((prev) =>
      prev === 0 ? items.length - 1 : prev - 1,
    );
  };

  const buttonStyle = `p-[clamp(0.25vw,0.3vw,0.4vw)] rounded-lg h-[17.5%] bg-violet-600 hover:bg-violet-700 text-white transition duration-300 ${items.length === 0 ? "cursor-not-allowed" : "cursor-pointer"} ${button}`;
  const buttonIconClass = "w-[clamp(0.5rem,0.9vw,1.2rem)] h-auto";

  return (
    <>
      <div className={`flex h-full items-center gap-[clamp(4px,6px,8px)] ${container}`}>
        <CustomButton
          className={buttonStyle}
          buttonIconClass={buttonIconClass}
          dirRight={false}
          onClick={prevSlide}
        />
        <div
          className={`w-full h-full overflow-hidden touch-pan-y ${slider}`}
          onMouseDown={(e) => handleStart(e.clientX)}
          onMouseUp={(e) => handleEnd(e.clientX)}
          onMouseLeave={(e) => handleEnd(e.clientX)}
          onTouchStart={(e) => handleStart(e.touches[0].clientX)}
          onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
        >
          {items.length === 0 ? (
            <span className="flex h-full items-center justify-center text-gray-400">
              <b>Burası boş :/</b>
            </span>
          ) : (
            <div
              className={`flex h-full transition-transform duration-500 ease-in-out ${cardGrandparent}`}
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`w-full h-[90%] flex items-center justify-center shrink-0 ${cardParent}`}
                >
                  <Card Data={item} />
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
