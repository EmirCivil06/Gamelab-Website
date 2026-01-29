
// Hareket eden arka plan şablonu
export default function BackgroundTemplate({gradientColor = "linear-gradient(to right, #ff2f00a4, #ff8c00ad)", image = ""}) {
    const styleRepeating = {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        zIndex: "-1",
        background: `url(${image}) center center/cover`,
        backgroundPosition:  `top left`,
        backgroundRepeat: "repeat",
        opacity: "0.2"
    }

    const styleBg = {
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: -2,
        width: "100%",
        height: "100%",
        background: `${gradientColor}`
    }

    return <>
    <div id="bg" style={styleBg}></div>
    <div className={`animate-background bg-size-[128px]! sm:bg-size-[256px]!`} style={styleRepeating}></div>
    </>
}