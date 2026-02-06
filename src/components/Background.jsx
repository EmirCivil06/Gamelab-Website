// Hareket eden arka plan şablonu
export default function BackgroundTemplate({image = ""}) {
    const styleRepeating = {
        position: "fixed", 
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        zIndex: "-5",
        background: `url(${image}) center center/cover`,
        backgroundPosition:  `top left`,
        backgroundRepeat: "repeat",
        opacity: "1"
    }


    return <>
    <div className={`animate-background bg-size-[128px]! sm:bg-size-[256px]! will-change-transform transform-[translateZ(0)]`} style={styleRepeating}></div>
    </>
}