import BackgroundTemplate from "../Components/Background/Background";
import "./Announcements.css";

function Announcements() {
  return (
    <>
      {/* Sayfa içeriğini bu taşıycıya aldık */}
      <BackgroundTemplate />
      <div className="announcements-container">
        {/* İki ayrı bölüm olacak: Duyurular ve Eğlendirme. Eğlendirme bölümünde bir karakter animasyonu olacak */}
        <div className="announcements-section">
          <div className="card-example">
            <b>Duyuru Örneği</b>
            <br></br>saat 15.00 unity eğitimi var mesela
          </div>
        <div className="card-example">
            <b>Duyuru Örneği</b>
            <br></br>saat 15.00 unity eğitimi var mesela
          </div>
        <div className="card-example">
            <b>Duyuru Örneği</b>
            <br></br>saat 15.00 unity eğitimi var mesela
          </div>
        <div className="card-example">
            <b>Duyuru Örneği</b>
            <br></br>saat 15.00 unity eğitimi var mesela
          </div>
        <div className="card-example">
            <b>Duyuru Örneği</b>
            <br></br>saat 15.00 unity eğitimi var mesela
          </div>
        <div className="card-example">
            <b>Duyuru Örneği</b>
            <br></br>saat 15.00 unity eğitimi var mesela
          </div>
        </div>
        <div className="entertainment-section">animasyon</div>
      </div>
    </>
  );
}

export default Announcements;
