/* Duyurular sayfası için bir kart komponenti */
import edu from "../assets/edu_map.png"
import fun from "../assets/fun_map.png"

function AnnouncementCard({ header, announcement, place, time, eventType }) {
    var imageUrl = "";
    var gradient = "linear-gradient(135deg, rgba(23, 69, 255, 0.85) 0%, rgba(55, 155, 255, 0.85) 100%)";

    const animationStyling = 
        `@keyframes moveInf {
            from {
                background-position: 0 0;
            }
            to {
                background-position: -720px 720px;
            }
        }`;
    

    switch (eventType) {
        case "edu":
            imageUrl = `${edu}`
            gradient = "linear-gradient(135deg, rgba(55, 108, 255, 0.85) 0%, rgba(0, 48, 239, 0.85) 100%)"
            break;
        case "fun":
            imageUrl = `${fun}`
            gradient = "linear-gradient(135deg, rgba(255,193,7,0.85) 0%, rgba(255,140,0,0.85) 100%)"
            break;
        default:
            imageUrl = ""
            gradient = "linear-gradient(135deg, rgba(76,175,80,0.85) 0%, rgba(56,142,60,0.85) 100%)"
            break;
    }

    // kartın genel stilleri
    let styles = {
        position: "relative",
        overflow: "hidden",
        fontSize: "clamp(0.75rem, 1.5vw, 1.5rem)",
        borderRadius: "18px",
        padding: "clamp(0.85rem, 1.55vw, 1.55rem)",
        minHeight: `clamp(5.25rem, 6.25rem, 7.75rem)`,
        color: "white",
        textAlign: "left",
        boxShadow: "0 4px 6px rgba(0,0,0,0.25)",
        textShadow: `
          -1px -1px 0 black,
           1px -1px 0 black,
          -1px  1px 0 black,
           1px  1px 0 black
        `,
    }

    // gradyan arka plan katmanı
    const overlayStyle = {
        position: "absolute",
        inset: 0,
        background: gradient,
        zIndex: 1,
        mixBlendMode: "normal",
        pointerEvents: "none",
    }
    // dekoratif arka plan resimleri katmanı
    const backgroundImageStyle = {
        position: "absolute",
        inset: 0,
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "200px 200px",
        backgroundPosition: "center",
        opacity: 0.8,
        zIndex: 0,
        pointerEvents: "none",
        animation: "moveInf 60s linear infinite",
    }

    // ana kontent en yukarıda
    const contentStyle = {
        position: "relative",
        zIndex: 2,
    }

    return (
        <>
        {/* Normalde bu komponent için arkaplanda tek bir resim düşünüyordum, ChatGPT ile değiştirdim */}
            <li style={styles}>
                {/* gradient overlay */}
                <style>{animationStyling}</style>
                <div style={overlayStyle}></div>
                {imageUrl && <div style={backgroundImageStyle}></div>}

                <div style={contentStyle}>
                    <b>{header} &lrm;</b><br></br>
                    {announcement} &lrm;<br></br>
                    <b>Yer: </b>{place} &lrm; &nbsp; &nbsp;
                    <b>Zaman: </b>{time} &lrm;
                </div>
            </li>
        </>
    )

}

export default AnnouncementCard