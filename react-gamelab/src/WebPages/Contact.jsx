import ContactBar from "../Components/ContactBar/ContactBar";
import "./Contact.css";
import { FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      {/* Bu arka plan elemanları akışın dışında kalabilir */}
      <div className="contact-bg"></div>
      <div id="bg-image"></div>
      
      {/* frontend rezalet a*k */}
      {/* Tüm sayfa içeriğini bu ana taşıyıcıya alıyoruz */}
      <div className="contact-container">
        <div id="contact-us-text">
          <p id="contact-us-text">Ne Duruyorsun? Haydi!</p> <br></br>{" "}
          <p>
            GameLab topluluğu olarak seni de aramızda görmekten mutluluk duyarız!
          </p>
        </div>
        
        <ContactBar />
        
        <span id="span1">ya da...</span>
        
        <div className="contact-us-dm">
          Bize Ulaşın! &#8594;
          <a
            href="mailto: emir_civil@hotmail.com"
            style={{ display: "contents" }}
          >
            <FaEnvelope
              className="email-icon"
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
