import { Link } from "react-router-dom";
import icon from "../assets/icon.jpg";

// Web sayfaları arası geçiş için kullanılan bileşen
export default function NavigationBar() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-linear-to-r from-[#3b82f6] to-[#14b8a6] flex items-center justify-between px-3.5 rounded-b-3xl shadow-md z-1000 h-[clamp(3.25rem,3.5rem,4rem)] sm:px-9">
      {/* Sağdaki buton elementleri */}
      <div className="flex gap-[clamp(1rem,3vw,2.75rem)]">
        <Link to="/projects" style={{ display: "contents" }}>
          <button className="navbar-btn">Projeler</button>
        </Link>
        <Link to="/announcements" style={{ display: "contents" }}>
          <button className="navbar-btn">Duyurular</button>
        </Link>
        <Link to="/contact" style={{ display: "contents" }}>
          <button className="navbar-btn">İletişim</button>
        </Link>
      </div>
      {/* About sayfası butonu. Bu Sayfa kullanıcının EN İLK karşılaşacağı sayfa */}
      <div className="bg-linear-to-l from-[#3b3bf6] to-[#6500c4] rounded-xl items-center shadow-md text-[clamp(13px,1.775vw,20px)] py-[clamp(0.3rem,0.25vw,0.75rem)] px-[clamp(0.4rem,0.4vw,0.75rem)] gap-2 hover:cursor-pointer hover:scale-105">
        <Link to="/" className="contents">
          <button className="hover:cursor-pointer font-[Pixelon] text-white flex items-center gap-2">
            <img
              src={icon}
              className="w-[clamp(15px,1.85vw,23px)] h-[clamp(15px,1.85vw,23px)] rounded-[50%] align-middle"
            ></img>
            <span className="mt-0.5">
            PAÜ Gamelab
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
