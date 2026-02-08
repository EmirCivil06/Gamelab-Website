import icon from "../assets/icon.jpg";
import Burger from "./BurgerMenu";
import config from "../data/component-config.json"

// Web sayfaları arası geçiş için kullanılan bileşen
export default function NavigationBar() {

  const navItems = config.items.find(item => item.navItems)?.navItems || []

  return (
    <div className="fixed top-0 left-0 right-0 bg-linear-to-r from-[#3b82f6] to-[#14b8a6] flex items-center justify-between px-[clamp(0.75rem,2.5vw,1.5rem)] rounded-b-3xl shadow-md z-1000 md:h-14 h-12">
      {/* Sağdaki buton elementleri */}
      <div className="flex gap-[clamp(1rem,3vw,2.75rem)]">
        {navItems.map((item) => (
          <a href={item.value} key={item.id} className="hidden md:contents">
            <button className="navbar-btn">{item.label}</button>
          </a>
        ))}
        <Burger content={navItems}/>
      </div>
      {/* About sayfası butonu. Bu Sayfa kullanıcının EN İLK karşılaşacağı sayfa */}
      <div className="bg-linear-to-l from-[#3b3bf6] to-[#6500c4] rounded-xl flex items-center shadow-md text-[clamp(15px,1.775vw,20px)] py-[clamp(0.3rem,0.25vw,0.75rem)] px-[clamp(0.4rem,0.4vw,0.75rem)] gap-2 hover:cursor-pointer hover:scale-105">
        <a href="#about" className="contents">
          <button className="hover:cursor-pointer font-[Pixelon] text-white flex items-center gap-2">
            <img
              src={icon}
              className="w-[clamp(15px,1.85vw,23px)] h-[clamp(15px,1.85vw,23px)] rounded-[50%] align-middle"
            ></img>
            <span className="mt-0.5">PAÜ Gamelab</span>
          </button>
        </a>
      </div>
    </div>
  );
}
