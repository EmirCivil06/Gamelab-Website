import ContactBar from "../components/ContactBar";
import { FaEnvelope } from "react-icons/fa";
import config from "../data/component-config.json"

export default function Contact() {

  const contactItems = config.items.find(item => item.contactItems)?.contactItems || []

  return (
    <>
      
      {/* Özel bir takım stilleri uygulayabilmek için sınıf isiml boş bir element */}
      
      {/* Bu arka plan elemanları akışın dışında kalabilir */}

      {/* Tüm sayfa içeriğini bu ana taşıyıcıya alıyoruz */}
      <div className="page-default tri-gradient contact-bg items-center gap-[clamp(1.35rem,3.4vh,3.25rem)] min-h-dvh! py-16 sm:px-0! px-3 sm:py-0!">
        <div className="bg-[#f0ffff] rounded-4xl w-full p-[clamp(1rem,3vw,2.5rem)] flex flex-col items-center text-center shadow-lg sm:w-[clamp(75%,77.5%,90%)] mt-[clamp(2rem,3vw,3.5rem)]">
          <p className="text-[clamp(1.5rem,2.35vw,3.2rem)] m-0 font-[Pixeloid2]">
            Bize Katılmaya Ne Dersin?
          </p>{" "}
          <br></br>{" "}
          <p className="m-0 text-[clamp(0.9rem,1.4vw,1.6rem)] text-center">
            GameLab topluluğu olarak seni de aramızda görmekten mutluluk
            duyarız!
          </p>
        </div>
        {/* Linkleri buton halinde barındıran kısım */}
        <ContactBar
          content={contactItems}
          colorStyling={"bg-linear-135 from-[rgb(86,205,183)] to-[rgb(132,142,199)]"}
        />

        <span className="text-clamp(0.6rem,2.25vw,1.1rem) text-[#333] z-1 font-bold">
          ya da...
        </span>
        {/* Mail gönderme kısmı */}
        <div className="text-[clamp(0.8rem,2.5vw,1.25rem)] text-[#333] z-1 bg-[#f0ffff] py-2.5 px-5 rounded-[1.25rem] shadow-lg text-center gap-2 flex items-center font-[Pixeloid2]">
          Bize Ulaşın! &#8594;
          <a
            href="mailto: emir_civil@hotmail.com"
            style={{ display: "contents" }}
            target="_blank" rel="norefferer"
          >
            <FaEnvelope
              className="w-[clamp(18px,3vw,24px)] h-[clamp(18px,3vw,24px)] transition-transform flex justify-center align-middle items-center hover:scale-110"
              color="#1d9bf0"
              style={{
                transition: "0.2s",
                cursor: "pointer",
              }}
            />
          </a>
        </div>
      </div>
    </>
  );
}
