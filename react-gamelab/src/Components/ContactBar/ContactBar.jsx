import WhatsappIcon from '../../Assets/whatsapp.png';
import InstagramIcon from '../../Assets/instagram.png';
import "./ContactBar.css"

export default function ContactBar() {
    return(<>
    <div className="contact-bar">
      <div className="contact-bar-item">  
        <a href="https://www.instagram.com/paugamelab/" style={{display: 'contents'}}>
            <img src={InstagramIcon} className='IG' alt='GameLab Instagram Hesabı'/>
        </a>
        Instagram Hesabı
      </div>
      <div className="contact-bar-item"> 
        <a href='https://chat.whatsapp.com/Ge8iLbuu2KaKe61hLGHRzq' style={{display: 'contents'}}>
            <img src={WhatsappIcon} className='WA' alt='WhatsApp Topluluğumuz'/>
        </a>
        WhatsApp Topluluğu
      </div>   
    </div>
    </>)

}