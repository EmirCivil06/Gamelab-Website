import BackgroundTemplate from "../Components/Background/Background";
import "./Announcements.css";
import List from "../Components/List";

function Announcements() {
  return (
    <>
      {/* Sayfa içeriğini bu taşıycıya aldık */}
      <BackgroundTemplate />
      <div className="announcements-container">
        {/* İki ayrı bölüm olacak: Duyurular ve Eğlendirme. Eğlendirme bölümünde bir karakter animasyonu olacak */}
          <List color="linear-gradient(135deg, #fff4c0ff 0%, #ffcab5ff 100%)" radiuses="0 20px 65px 0" />
        <div className="entertainment-section">animasyon</div>
      </div>
    </>
  );
}

export default Announcements;
