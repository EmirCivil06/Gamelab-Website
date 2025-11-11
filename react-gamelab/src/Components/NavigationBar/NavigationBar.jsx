import "./NavigationBar.css";
import { Link } from "react-router-dom";
import icon from "../../assets/icon.jpg";

// Web sayfaları arası geçiş için kullanılan bileşen
export default function NavigationBar() {


  return (
    <div className="Bar">
      <div className="right">      
        <Link to="/projects" style={{display: 'contents'}}>
        <button>Projeler</button>
        </Link>
        <Link to="/announcements" style={{display: 'contents'}}>
        <button>Duyurular</button>
        </Link>
        <Link to="/contact" style={{display: 'contents'}}>
        <button>İletişim</button>
        </Link>
      </div>
      <Link to="/" style={{display: 'contents'}}>
        <button className="us"><img src={icon} className="icon"></img>PAÜ Gamelab</button>
      </Link>
    </div>
  );
}
