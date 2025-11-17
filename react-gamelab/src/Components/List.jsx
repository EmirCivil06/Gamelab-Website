import AnnouncementCard from "./AnnouncmentCard";

/* Kart komponentlerini bir dizi gibi saklayacak bir element */
function List({color, radiuses, cardColor = `beige`}) {
    const items = [
        {id: 1, header:"a", announcement:"b", p:"c", t:"t", eType: "edu"
        },
        {id: 2, header:"a", announcement:"b", p:"c", t:"t", eType: "fun"
        }
    ]
    const styles = {
        listStyleType: "none",
        background: `${color}`,
        borderRadius: `${radiuses}`,
        display: "flex",
        flexDirection: "column",
        marginBottom: "0px",
        overflowY: "auto",
        flex: "2",
        direction: "rtl",
        marginTop: "1.8rem",
    }

    const mainList =         
            (<ul className="scrollbar" style={styles}>
                {items.map(item => (
                    <AnnouncementCard 
                    key={item.id}
                    header={item.header}
                    announcement={item.announcement}
                    place={item.p}
                    time={item.t}
                    eventType={item.eType}
                    />
                ))}
            </ul>);
    const placeHolder = (<div className="placeholder" style={styles}> Henüz Açıklama Yok! &lrm; </div>)

    return (<> {items.length == 0 ? placeHolder : mainList}</>)
}

export default List;