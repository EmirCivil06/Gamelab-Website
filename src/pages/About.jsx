import { useEffect, useState } from "react";
import Icon from "../assets/icon-transparent.png";
//Swiper bileşenleri ve stilleri
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import AnnouncementDashboard from "../components/AnnouncementDashboard";
import pb from "../lib/pocketbase";

//Örnek veri yapısı

function About() {
  const [activeTab, setActiveTab] = useState(0);
  const [mainSwiper, setMainSwiper] = useState(null);
  const [data, setData] = useState([]);
  const [couldntFetch, setCouldntFetch] = useState(false);
  useEffect(() => {
    const fetchEventRecords = async () => {
      try {
        const records = await pb.collection("AboutPageItems").getFullList({
          sort: "-created",
          requestKey: null,
        });

        const mapped = records.map((r) => ({
          ...r,
          imageUrls: r.Images.map((image) => pb.files.getURL(r, image)),
        }));

        setData(mapped);
      } catch (error) {
        console.error(error);
        setCouldntFetch(true);
      }
    };

    fetchEventRecords();
  }, []);

  return (
    <>
      <div className="relative pt-24 flex flex-col items-center tri-gradient about-bg min-h-dvh">
        <img className="sm:w-38 sm:h-38 w-30 h-30 mb-2" src={Icon}></img>
        {/* Başlık ve paragraf */}
        <div className="max-w-3xl sm:p-0 px-4 text-center mb-16 text-white">
          <h1 className="header-text">HAKKIMIZDA</h1>
          <p className="paragraph my-0! backdrop-blur-sm">
            Pamukkale Üniversitesi Dijital Oyun Geliştirme ve Tasarım
            topluluğuna hoşgeldiniz. Amacımız sadece oyun geliştirmek değil,
            aynı zamanda üniversite öğrencilerini ortak tutkular etrafında
            toplamak ve unutulmaz anılar biriktirmek.
          </p>
        </div>

        <div className="p-[clamp(2rem,3vw,4rem)] about-dashboard-gradient gradient-base w-full flex items-center px-0 pb-0 flex-col">
          <h1 className="header-text text-[clamp(1.5rem,2vw,3rem)]! py-3 mb-1!">ETKİNLİKLERİMİZDEN BAZILARI</h1>
          {/* Etkinlikler bölümü (MainSwipe) */}
          <div className="xl:w-full w-[90%] max-w-5xl bg-black rounded-[2.5rem] sm:p-10 p-5 shadow-2xl border border-white/5 flex flex-col items-center">
            {couldntFetch ? (
              <div>
                <h3 className="sm:text-3xl text-[20px] font-bold text-white mb-3 text-center">
                  Eyvah, birşeyler yanlış gitti! :/
                </h3>
                <p className="text-gray-400 max-w-xl mx-auto my-0.5 text-center">
                  Eyvah, birşeyler yanlış gitti! :/
                </p>
              </div>
            ) : null}
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
                {data.map((event) => (
                  <SwiperSlide key={event.id}>
                    <div>
                      <h3 className="sm:text-3xl text-[20px] font-bold text-white sm:mb-3 mb-1 text-center">
                        {event.Header}
                      </h3>
                      <p className="text-gray-400 max-w-xl mx-auto my-[clamp(0.5rem,0.65vw,0.7rem)] text-center sm:text-lg text-[11px]">
                        {event.Content}
                      </p>

                      {/*Etkinlik fotoğrafları (InnerSwipe)*/}
                      <Swiper
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        spaceBetween={20}
                        slidesPerView={1.2}
                        centeredSlides={true}
                        className="rounded-2xl"
                        breakpoints={{
                          0: {
                            slidesPerView: 1,
                          },
                          640: {
                            slidesPerView: 1.2,
                          },
                        }}
                      >
                        {event.imageUrls.map((url, index) => (
                          <SwiperSlide key={index}>
                            <div className="aspect-video w-full overflow-hidden rounded-2xl border text-white border-white/10">
                              {
                                <img
                                  src={url}
                                  alt="Etkinlikler"
                                  className="w-full h-full object-cover grayscale-10 hover:grayscale-0 transition-all duration-500"
                                />
                              }
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
          <div className="flex flex-row justify-center items-center sm:gap-6 gap-3 sm:mt-6 py-4 pb-8 mt-1 w-full">
            {data.map((event, index) => (
              <button
                key={event.id}
                onClick={() => mainSwiper?.slideTo(index)}
                className="group relative flex items-center justify-center p-2 outline-none cursor-pointer"
              >
                {/*hover efekti*/}
                <div
                  className={`absolute w-[clamp(1rem,1.5vw,2rem)] h-[clamp(1rem,1.5vw,2rem)] rounded-full border transition-all duration-300 ${
                    activeTab === index
                      ? "border-[#589bff] scale-100 opacity-100"
                      : "border-transparent scale-50 opacity-0"
                  }`}
                />
                {/*butonun kendisi */}
                <div
                  className={`w-[clamp(0.5rem,0.75vw,1rem)] h-[clamp(0.5rem,0.75vw,1rem)] rounded-full transition-all duration-300 ${
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
            className="page-default sm:gap-0 gap-2 gradient-base announcement-dashboard-gradient py-10"
          >
            <div className="dashboard-paragraph text-white">
              <p className="header-text">Duyurular</p>
              <p className="paragraph">
                Gamelab olarak faaliyetlerimize devam etmekteyiz. Oyun Gecesi
                etkinlikleri, Kutu Oyunu yarışmaları, atölye eğitimleri ve daha
                birçok etkinlik. Bütün bunlara aşağıda yer alan duyuru
                bölümümüzden ulaşabilirsiniz.
              </p>
            </div>
            <AnnouncementDashboard />
          </section>
        </div>
      </div>
    </>
  );
}

export default About;
