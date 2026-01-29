import BackgroundTemplate from "../components/Background";
import ContactBar from "../components/ContactBar";
import { FaEnvelope } from "react-icons/fa";
import Image from "../assets/map.png"

export default function Contact() {
  return (
    <>
    <span className="contactPage"></span>
      {/* Bu arka plan elemanları akışın dışında kalabilir */}
      <BackgroundTemplate gradientColor="linear-gradient(135deg, #74ebd5e1 0%, #acb6e5e1 100%)" image={Image} />
      
      {/* frontend rezalet a*k */}
      {/* Tüm sayfa içeriğini bu ana taşıyıcıya alıyoruz */}
      <div className="flex flex-col items-center min-h-[75vh] page-default pt-[clamp(2rem,2vw,3rem)] px-4 w-full box-border font-[Pixeloid2] justify-between sm:min-h-[85vh]">
        <div className="bg-[#f0ffff] rounded-4xl w-full p-[clamp(1.5rem,4vw,3rem)] flex flex-col items-center text-center shadow-lg sm:w-[clamp(75%,77.5%,90%)]">
          <p className="text-[clamp(1.5rem,2.35vw,3.2rem)] m-0">Ne Duruyorsun? Haydi!</p> <br></br>{" "}
          <p className="m-0 text-[clamp(0.9rem,1.4vw,1.6rem)] text-center">
            GameLab topluluğu olarak seni de aramızda görmekten mutluluk duyarız!
          </p>
        </div>
        
        <ContactBar />
        
        <span className="text-clamp(0.6rem,2.25vw,1.1rem) text-[#333] z-1">ya da...</span>
        
        <div className="text-[clamp(0.8rem,2.5vw,1.25rem)] text-[#333] z-1 bg-[#f0ffff] py-2.5 px-5 rounded-[1.25rem] shadow-lg text-center flex">
          Bize Ulaşın! &#8594;
          <a
            href="mailto: emir_civil@hotmail.com"
            style={{ display: "contents" }}
          >
            <FaEnvelope
              className="w-[clamp(18px,3vw,24px)] h-[clamp(18px,3vw,24px)] transition-transform hover:scale-110"
              color="#1d9bf0"
              style={{
                verticalAlign: "center",
                position: "relative",
                top: "4px",
                marginLeft: "8px",
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
