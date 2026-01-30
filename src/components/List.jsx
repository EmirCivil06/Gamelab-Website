import AnnouncementCard from "./AnnouncmentCard";

/* Kart komponentlerini bir dizi gibi saklayacak bir element */

// !!! ŞİMDİLİK KULLANIM DIŞI
function List({color, radiuses, cardColor = `beige`}) {
    const items = [
        {id: 1, header:"C Eğitimlerimiz Devam Ediyor!", announcement:"C Programlama Dili eğitimimiz yeniden başlıyor.", p:"PAÜ Müh. Fak. A Blok", t:"Her Pazartesi 17.30-19.00", eType: "edu"
        },
        {id: 2, header:"Gamelab Eğlence Duyurusu Örneği", announcement:"açıklama detayı", p:"yer", t:"zaman", eType: "fun"
        },
        {id: 3, header:"a", announcement:"b", p:"c", t:"t", eType: "fun"
        },
        {id: 4, header:"a", announcement:"b", p:"c", t:"t", eType: "fun"
        },
        {id: 5, header:"a", announcement:"b", p:"c", t:"t", eType: "fun"
        },
        {id: 6, header:"a", announcement:"b", p:"c", t:"t", eType: "fun"
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