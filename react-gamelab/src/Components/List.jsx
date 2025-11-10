import AnnouncementCard from "./AnnouncmentCard";

/* Kart komponentlerini bir dizi gibi saklayacak bir element */
function List({color, radiuses, cardColor = "beige"}) {
    const items = [{id: 1, header: "GameLab Duyuru", announcement: "blablablablablablablabla", color1: "beige"},
                    {id: 2, header: "GameLab Duyuru", announcement: "blablablablablablablabla", color1: "beige"},
                    {id: 3, header: "GameLab Duyuru", announcement: "blablablablablablablabla", color1: "beige"},
                    {id: 4, header: "GameLab Duyuru", announcement: "blablablablablablablabla", color1: "beige"},
                    {id: 5, header: "GameLab Duyuru", announcement: "blablablablablablablabla", color1: "beige"},
                    {id: 6, header: "GameLab Duyuru", announcement: "blablablablablablablabla", color1: "beige"},
                    {id: 7, header: "GameLab Duyuru", announcement: "blablablablablablablabla", color1: "beige"},
                    {id: 8, header: "GameLab Duyuru", announcement: "blablablablablablablabla", color1: "beige"}]
    const styles = {
        listStyleType: "none",
        background: `${color}`,
        borderRadius: `${radiuses}`
    }

    return (<>
        
            <ul className="scrollbar" style={styles}>
                {items.map(item => (
                    <AnnouncementCard 
                    key={item.id}
                    header={item.header}
                    announcement={item.announcement}
                    color1={item.color1}
                    />
                ))}
            </ul>
    </>)
}

export default List;