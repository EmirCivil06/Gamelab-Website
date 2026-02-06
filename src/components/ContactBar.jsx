// Sosyal Medya link elementlerini barındıran bir bar yapısı
export default function ContactBar({colorStyling, content}) {
    return(<>
    <div className={`${colorStyling} px-0 pt-7.5 pb-5 text-center rounded-[20px] flex justify-center gap-[clamp(0.5rem,3vw,2.5rem)] shadow-md w-fit my-0 mx-auto font-[Pixeloid2]`}>
      {content.map((item) => (
        <div className='cb-item' key={item.id}>
          <a href={item.socialLink} target="_blank" rel="norefferer">
            <img src={item.icon} className='cb-img' alt={item.alt}/>
          </a>
          {item.text}
        </div>
      ))}
    </div>
    </>)
}