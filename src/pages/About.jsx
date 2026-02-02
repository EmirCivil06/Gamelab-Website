import React, { useState } from "react";
import edu1 from "../assets/edu1.jpeg";
import edu2 from "../assets/edu2.jpeg";
import edu3 from "../assets/edu3.jpeg";
import game_night_image from "../assets/TwelveMinutesGecesi.jpeg";
import Icon from "../assets/icon-transparent.png";
//Swiper bileşenleri ve stilleri
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import AnnouncementDashboard from "../components/AnnouncementDashboard";

//Örnek veri yapısı
const eventsData = [
  {
    id: 0,
    title: "Unides Unity Eğitimi",
    description:
      "Farklı illerden hocaları " +
      "misafir ettiğimiz 5 haftalık kapsamlı Unity Eğtimi.",
    images: [edu3, edu2, edu1],
  },
  {
    id: 1,
    title: "Twelve Minutes Oyun gecesi",
    description:
      "Beraber görece yeni çıkmış olan " +
      "alternatif sonlu bir oyun olan Twelve Minutes'i " +
      "üyelerimizle beraber oynadık.",
    images: [game_night_image],
  },
];

function About() {
  const [activeTab, setActiveTab] = useState(0);
  const [mainSwiper, setMainSwiper] = useState(null);
  return (
    <>
      <div className="relative min-h-screen pt-24  flex flex-col items-center bg-linear-120 from-0% from-[rgba(136,116,235,0.85)] to-100% to-[rgba(189,172,229,0.85)]">
        <img className="w-38 h-38" src={Icon}></img>
        {/* Başlık ve paragraf */}
        <div className="max-w-3xl text-center mb-16 text-white">
          <h1 className="header-p">
            HAKKIMIZDA
          </h1>
          <p className="text-lg leading-relaxed bg-black/20 p-6 rounded-2xl backdrop-blur-sm">
            Pamukkale Üniversitesi Dijital Oyun Geliştirme ve Tasarım
            topluluğuna hoşgeldiniz. Amacımız sadece oyun geliştirmek değil,
            aynı zamanda üniversite öğrencilerini ortak tutkular etrafında
            toplamak ve unutulmaz anılar biriktirmek.
          </p>
        </div>

        <div className="p-[clamp(2rem,3vw,4rem)] grad w-full flex items-center px-0 pb-0  flex-col">
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
                {eventsData.map((event) => (
                  <SwiperSlide key={event.id}>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-3">
                        {event.title}
                      </h3>
                      <p className="text-gray-400 max-w-xl mx-auto my-0.5">
                        {event.description}
                      </p>

                      {/*Etkinlik fotoğrafları (InnerSwipe)*/}
                      <Swiper
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
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
          <div className="flex flex-row justify-center items-center gap-6 mt-6 py-4 pb-10 w-full">
            {eventsData.map((event, index) => (
              <button
                key={event.id}
                onClick={() => mainSwiper?.slideTo(index)}
                className="group relative flex items-center justify-center p-2 outline-none cursor-pointer"
              >
                {/*hover efekti*/}
                <div
                  className={`absolute w-6 h-6 rounded-full border transition-all duration-300 ${
                    activeTab === index
                      ? "border-[#589bff] scale-100 opacity-100"
                      : "border-transparent scale-50 opacity-0"
                  }`}
                />
                {/*butonun kendisi */}
                <div
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeTab === index
                      ? "bg-[#58b4ff] shadow-[0_0_12px_#8874eb]"
                      : "bg-gray-600 group-hover:bg-gray-400"
                  }`}
                />
              </button>
            ))}
          </div>
          <section
            id="announcements"
            className="w-full flex flex-col items-center justify-center py-24 another-grad"
          >
            <div className="justify-start text-start self-start text-white px-24 pb-4">
              <p className="header-p">
                Şuan ne yapıyoruz?
              </p>
              <p className="text-lg leading-relaxed bg-black/20 p-6 rounded-2xl">
                Gamelab olarak bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
              </p>
            </div>

            <AnnouncementDashboard modifier="w-[85vw]"/>
          </section>
        </div>
      </div>

      {/* Swiper noktalarını radyo butonları varken gizlemek için  */}
      <style>{` 
          .swiper-pagination-bullet { background: white !important; opacity: 0.5; }
          .swiper-pagination-bullet-active { background: #664de6 !important; opacity: 1; }
          .swiper-pagination { bottom 0 !important; } 
      `}</style>
    </>
  );
}

export default About;
