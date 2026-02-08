import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function useOutsideClick(ref, callback) {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }

  }, [ref, callback]);

}

export default function Burger({ content = [{value: "", label: "", id: ""}] }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useOutsideClick(menuRef, () => setOpen(false));

  return (
    <>
      <div ref={menuRef} className={`relative flex items-cente md:hidden `}>
        <button className="flex items-center cursor-pointer w-fit p-3 text-white hover:text-gray-400 active:scale-90" onClick={()=>setOpen(!open)}><GiHamburgerMenu className="flex items-center justify-center"/></button>
        <div className={`absolute select-none min-w-full flex flex-col text-white text-[13px] gap-1.5 items-center p-2.5 bg-black rounded-lg mt-8 max-h-[40vh] pointer-events-none overflow-y-scroll transition-all transform-[translateY(-1%)] duration-150 ease-in-out dp-content ${open ? "opacity-100 transform-[translateY(2.25%)] pointer-all" : "opacity-0"}`} style={{scrollbarWidth:"none", msOverflowStyle: "none"}}>
          {content.map((item) => (
            <a href={item.value} key={item.id} className="contents">
              <button className="p-1.25 rounded-lg bg-linear-to-l from-[#3b3bf6] to-[#6500c4] w-full active:scale-90 transition-transform duration-200">{item.label}</button>
            </a>
          ))}
        </div>  
      </div>
    </>
  );
}
