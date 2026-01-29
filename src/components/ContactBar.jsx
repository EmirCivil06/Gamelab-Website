import WhatsappIcon from '../assets/whatsapp.png';
import InstagramIcon from '../assets/instagram.png';

export default function ContactBar() {
    return(<>
    <div className="bg-linear-135 from-[#FF00D0] to-[#00FF00] px-0 pt-7.5 pb-5 text-center rounded-[20px] flex justify-center gap-[clamp(0.5rem,3vw,2.5rem)] shadow-md w-fit my-0 mx-auto">
      <div className="cb-item">  
        <a href="https://www.instagram.com/paugamelab/" style={{display: 'contents'}}>
            <img src={InstagramIcon} className='cb-img' alt='GameLab Instagram Hesabı'/>
        </a>
        Instagram Hesabı
      </div>
      <div className="cb-item"> 
        <a href='https://chat.whatsapp.com/Ge8iLbuu2KaKe61hLGHRzq' style={{display: 'contents'}}>
            <img src={WhatsappIcon} className='cb-img' alt='WhatsApp Topluluğumuz'/>
        </a>
        WhatsApp Topluluğu
      </div>   
    </div>
    </>)

}