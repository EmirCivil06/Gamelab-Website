import Carousel from "./AnnouncementElements";
import { useState, useEffect } from "react";
import pb from "../lib/pocketbase";



// Announcement Dashboard
export default function AnnouncementDashboard({ modifier = "" }) {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
  const fetchAnnouncements = async () => {
    const records = await pb.collection("Announcements").getFullList({
      filter: "isArchived = false || isArchived = null",
      sort: "-created",
      requestKey: null
    });

    const mapped = records.map((r) => ({
      ...r,
      image: r.Image ? pb.files.getURL(r, r.Image) : null
    }))

    setAnnouncements(mapped);
  };

  fetchAnnouncements();
}, []);

  return (
    <>
      <div
        className={`flex flex-col px-4 py-2 gap-[clamp(0.15rem,0.25rem,0.4rem)] w-[90%] h-[clamp(4rem,50vh,27.5rem)] justify-between bg-violet-50 border border-violet-200 rounded-2xl shadow-md ${modifier}`}
      >
        <div className="text-[clamp(0.6rem,1.1vw,1.1rem)]">
          <b>En Yeni Duyurular</b>
        </div>
        <Carousel announcementItems={announcements} />
      </div>
    </>
  );
}
