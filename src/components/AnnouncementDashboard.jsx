import Carousel from "./AnnouncementElements";
import { useState, useEffect } from "react";
import pb from "../lib/pocketbase";
import Placeholder from "../assets/icon-transparent.png"

// Announcement Dashboard
export default function AnnouncementDashboard({ modifier = "" }) {
  const [data, setData] = useState([]);

  useEffect(() => {
  const fetchdata = async () => {
    const records = await pb.collection("Items").getFullList({
      filter: "(isArchived = false || isArchived = null) && Type != 'Project'",
      sort: "-created",
      requestKey: null
    });

    const mapped = records.map((r) => ({
      ...r,
      imageUrl: r.Image ? pb.files.getURL(r, r.Image) : Placeholder
    }))

    setData(mapped);
  };

  fetchdata();
}, []);

  return (
    <>
      <div
        className={`flex flex-col px-4 py-2 gap-[clamp(0.15rem,0.25rem,0.4rem)] sm:w-[85%] w-[92.5%] sm:h-[clamp(4rem,52vh,29.5rem)] h-[clamp(3rem,30vh,14.75rem)] justify-between bg-violet-50 border border-violet-200 rounded-2xl shadow-md ${modifier}`}
      >
        <div className="text-[clamp(0.6rem,1.3vw,1.4rem)]">
          <b>En Yeni Duyurular</b>
        </div>
        <Carousel items={data} />
      </div>
    </>
  );
}
