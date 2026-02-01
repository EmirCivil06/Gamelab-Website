export default function AnnouncementCard({ content }) {
  return (
    <>
      <div className="bg-amber-400 flex w-[90%] h-[85%] rounded-[15px] items-center">
        {content}
      </div>
    </>
  );
}
