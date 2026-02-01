import React, { useState } from "react";
import background_image from "../assets/map.png"
import BackgroundTemplate from "../components/Background";
import example_image1 from "../assets/CDersi.jpeg";
import example_image2 from "../assets/CDersi2.jpeg";
import example_image3 from "../assets/UnityDersi1.jpeg";
import example_image4 from "../assets/UnityDersi6.jpeg";
import game_night_image from "../assets/TwelveMinutesGecesi.jpeg";

//Swiper bileşenleri ve stilleri
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

//Örnek veri yapısı
const eventsData = [
    {
        id: 0,
        title: "Unides Unity Eğitimi",
        description: "Farklı illerde hocaları " +
            "misafir ettiğimiz 5 haftalık kapsamlı Unity Eğtimi.",
        images: [example_image1, example_image2, example_image3]
    },
    {
        id:1,
        title: "Twelve Minutes Oyun gecesi",
        description: "Beraber görece yeni çıkmış olan " +
            "alternatif sonlu bir oyun olan Twelve Minutes'i " +
            "üyelerimizle beraber oynadık.",
        images: [game_night_image],
    }
];

function About() {
  const [activeTab, setActiveTab ] = useState(0);
  const [mainSwiper, setMainSwiper] = useState(null);
  return (
    <>
      <BackgroundTemplate
        gradientColor="linear-gradient(135deg, #8874ebe1 0%, #bdace5e1 100%)"
        image={background_image}
      />
      <div className="relative min-h-screen pt-24 pb-12 px-4 flex flex-col items-center">
        {/* Başlık ve paragraf */}
        <div className="max-w-3xl text-center mb-16 text-white">
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
              HAKKIMIZDA
          </h1>
          <p className="text-lg leading-relaxed bg-black/20 p-6 rounded-2xl backdrop-blur-sm">
            Pamukkale Üniversitesi Dijital Oyun Geliştirme ve Tasarım topluluğuna hoşgeldiniz.
              Amacımız sadece oyun geliştirmek değil, aynı zamanda üniversite öğrencilerini
              ortak tutkular etrafında toplamak ve unutulmaz anılar biriktirmek.
          </p>
        </div>

        {/* Etkinlikler bölümü (MainSwipe) */}
        <div className="w-full max-w-4xl bg-black rounded-[2.5rem] p-10 shadow-2xl border border-white/5 flex flex-col items-center">
          <div className="w-full relative overflow-hidden">
            <Swiper
              onSwiper={setMainSwiper}
              onSlideChange={(swiper) => setActiveTab(swiper.activeIndex)}
              modules={[EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              speed={500}
              allowTouchMove={false}
              className="w-full"
            >
              {eventsData.map((event) =>(
                  <SwiperSlide key = {event.id}>
                      <div>
                          <h3 className="text-3xl font-bold text-white mb-3">{event.title}</h3>
                          <p className="text-gray-400 max-w-xl mx-auto">{event.description}</p>

                          {/*Etkinlik fotoğrafları (InnerSwipe)*/}
                          <Swiper
                              modules={[Pagination]}
                              pagination={{clickable: true}}
                              spaceBetween={20}
                              slidesPerView={1.2}
                              centeredSlides={true}
                              className="rounded-2xl"
                          >
                              {event.images.map((img, index) => (
                                  <SwiperSlide key={index}>
                                      <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10">
                                          <img
                                              src={img}
                                              alt="Etkinlikler"
                                              className="w-full h-full object-cover grayscale-30 hover:grayscale-0 transition-all duration-500"
                                          />
                                      </div>
                                  </SwiperSlide>
                              ))}
                          </Swiper>
                      </div>
                  </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Radyo Butonları */}
        <div className="flex flex-row justify-center items-center gap-6 mt-6 py-4 w-full">
          {eventsData.map((event, index) => (
            <button
              key={event.id}
              onClick={() => mainSwiper?.slideTo(index)}
              className="group relative flex items-center justify-center p-2 outline-none cursor-pointer"
            >
              {/*hover efekti*/}
              <div className={`absolute w-6 h-6 rounded-full border transition-all duration-300 ${
                activeTab === index ? 'border-purple-400 scale-125 opacity-100' : 'border-transparent scale-50 opacity-0'
              }`}
              />
              {/*butonun kendisi */}
              <div
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-[#8874eb] shadow-[0_0_12px_#8874eb]'
                    : 'bg-gray-600 group-hover:bg-gray-400'
                }`}
                />
            </button>
          ))}
        </div>
      </div>

      {/* Swiper noktalarını radyo butonları varken gizlemek için  */}
      <style>{` 
          .swiper-pagination-bullet { background: white !important; opacity: 0.5; }
          .swiper-pagination-bullet-active { background: #8874eb !important; opacity: 1; }
          .swiper-pagination { bottom 0 !important; } 
      `}</style>
    </>
  );
}

export default About;
