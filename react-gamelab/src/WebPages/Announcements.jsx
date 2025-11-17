import BackgroundTemplate from "../Components/Background/Background";
import "./Announcements.css";
import List from "../Components/List";


function Announcements() {

  const list = <List color="linear-gradient(135deg, #fff4c0ff 0%, #ffcab5ff 100%)" radiuses="0 0 20px 20px" cardColor="#6fff00ff"/>

  return (
    <>
      {/* Sayfa içeriğini bu taşıycıya aldık */}
      <BackgroundTemplate />
      <div className="announcements-container">
        {/* İki ayrı bölüm olacak: Duyurular ve Eğlendirme. Eğlendirme bölümünde bir karakter animasyonu olacak */}
        {list}
        <div className="entertainment-section"></div>
      </div>
    </>
  );
}

export default Announcements;
