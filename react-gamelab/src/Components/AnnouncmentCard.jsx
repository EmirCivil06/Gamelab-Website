/* Duyurular sayfası için bir kart komponenti */

function AnnouncementCard({ header, announcement, color1 }) {
    const styles = {
        background: `${color1}`,
        borderRadius: "25px",
        padding: "18px",
        textAlign: "left",
        margin: "7px 0",
    }

    return (<>
        <li style={styles}>
            <b>{header}</b><br></br>
            {announcement}
        </li>
    </>)

}

export default AnnouncementCard