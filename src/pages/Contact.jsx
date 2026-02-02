import ContactBar from "../components/ContactBar";
import { FaEnvelope } from "react-icons/fa";
import wpIcon from "../assets/whatsapp.png";
import instaIcon from "../assets/instagram.png";
import dcIcon from "../assets/discord.png"

export default function Contact() {
  const contactBarContent = [
    {
      icon: wpIcon,
      socialLink: "https://chat.whatsapp.com/Ge8iLbuu2KaKe61hLGHRzq",
      alt: "Gamelab Whatsapp Topluluğu",
      text: "Whatsapp Topluluğu",
      id: "iconwp"
    },
    {
      icon: instaIcon,
      socialLink: "https://www.instagram.com/paugamelab/",
      alt: "Gamelab Instagram Sayfası",
      text: "Instagram Sayfamız",
      id: "iconinsta"
    },
    {
      icon: dcIcon,
      socialLink: "https://discord.gg/WJR96dUbP7",
      alt: "Gamelab Discord Sunucusu",
      text: "Discord Sunucusu",
      id: "icondc"
    }
  ];

  return (
    <>
      
      {/* Özel bir takım stilleri uygulayabilmek için sınıf isiml boş bir element */}
      <span className="contactPage bg-[rgb(112,122,189)]"></span>
      {/* Bu arka plan elemanları akışın dışında kalabilir */}

      {/* Tüm sayfa içeriğini bu ana taşıyıcıya alıyoruz */}
      <div className="bg-linear-120 from-[rgba(116,235,213,0.85)] from-0% to-[rgba(172,182,229,0.85)] to-100% flex flex-col items-center min-h-[75vh] page-default w-full box-border font-[Pixeloid2] justify-between sm:min-h-[97vh]">
        <div className="bg-[#f0ffff] rounded-4xl w-full p-[clamp(1rem,3vw,2.5rem)] flex flex-col items-center text-center shadow-lg sm:w-[clamp(75%,77.5%,90%)] mt-[clamp(2rem,3vw,3.5rem)]">
          <p className="text-[clamp(1.5rem,2.35vw,3.2rem)] m-0">
            Ne Duruyorsun? Haydi!
          </p>{" "}
          <br></br>{" "}
          <p className="m-0 text-[clamp(0.9rem,1.4vw,1.6rem)] text-center">
            GameLab topluluğu olarak seni de aramızda görmekten mutluluk
            duyarız!
          </p>
        </div>
        {/* Linkleri buton halinde barındıran kısım */}
        <ContactBar
          content={contactBarContent}
          colorStyling={"bg-linear-135 from-[rgb(86,205,183)] to-[rgb(132,142,199)]"}
        />

        <span className="text-clamp(0.6rem,2.25vw,1.1rem) text-[#333] z-1">
          ya da...
        </span>
        {/* Mail gönderme kısmı */}
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
