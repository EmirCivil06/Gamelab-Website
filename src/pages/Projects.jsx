import { useEffect, useState } from "react";
import Carousel from "../components/AnnouncementElements";
import pb from "../lib/pocketbase";
import defaultProjectIcon from "../assets/unityLogo.png";

export default function Projects() {
  const [data,setData] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const records = await pb.collection("Items").getFullList({
        filter: "(isArchived = false || isArchived = null) && Type = 'Project'",
        sort: "-created",
        requestKey: null
      });

      const mapped = records.map((r) => ({
        ...r,
        imageUrl: r.Image ? pb.files.getURL(r, r.Image) : defaultProjectIcon
      }));

      setData(mapped);
    };
    fetchProjects();
  },[])

  return (
    <>
     <div className="tri-gradient projects-bg flex-row! items-center gap-5 py-20! px-0! page-default">
        <div className="w-full items-center py-[clamp(2rem,7vw,8rem)] xl:gap-0 gap-7.5 xl:py-[clamp(1.5rem,3.5vw,4rem)] flex flex-col projects-dashboard-gradient gradient-base justify-center">
          <div className="dashboard-paragraph">
            <p className="header-text text-[#3E2723]">Proje Portfolyösü</p>
            <p className="paragraph text-[#5D4037] bg-[rgb(215,203,165)]!">
              Gamelab topluluğu olarak farklı projeler üzerinde çalıştık ve çalışmaya da
              devam ediyoruz. Şuana kadar yapmış olduğumuz farklı projelere aşağıdan ulaşabilirsiniz.
            </p>
          </div>
          <div className="flex flex-col px-4 pt-4 gap-[clamp(0.15rem,0.25rem,0.4rem)] sm:w-[85%] w-[92.5%] sm:h-[clamp(4rem,45vh,27.5rem)] h-[clamp(10rem,25vh,20rem)] bg-[#FFFDF5] border border-[#FFE082] rounded-2xl shadow-md">
            <Carousel button="bg-[#F9A825]! hover:bg-[#F57F17]!" items={data}/>
          </div>
        </div>
      </div>
    </>
  );
}
