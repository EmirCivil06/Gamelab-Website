/* Duyurular sayfası için bir kart komponenti */

function AnnouncementCard({ header, announcement, color1 }) {
    const styles = {
        background: `${color1}`,
        textAlign: "left",
    }

    return (<>
        <li style={styles}>
            <b>{header}</b><br></br>
            {announcement}
        </li>
    </>)

}

export default AnnouncementCard