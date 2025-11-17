/* Duyurular sayfası için bir kart komponenti */

function AnnouncementCard({ header, announcement, place, time, eventType }) {
    var backgroundStyle;

    switch (eventType) {
        case "edu":
            backgroundStyle = {
                background: "blue",
                backgroundImage: "none",
                backgroundRepeat: "no-repeat",
            }
            break;
        case "fun":
            backgroundStyle = {
                background: "yellow",
                backgroundImage:"none",
                backgroundRepeat: "no-repeat",
            }
            break;

        default:
            backgroundStyle = {
                background: "green",
                backgroundImage: "none",
                backgroundRepeat: "no-repeat"
            }
            break;
    }

    var styles = {
        ...backgroundStyle,
        textAlign: "left",
    }

    return (<>
        <li style={styles}>
            <b>{header} &lrm;</b><br></br>
            {announcement} &lrm;<br></br>
            {place} &lrm; &nbsp; &nbsp;
            {time} &lrm; 
        </li>
    </>)

}

export default AnnouncementCard