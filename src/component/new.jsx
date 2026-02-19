import './new.css'
import img1 from '../assets/logof.png'
import img2 from '../assets/facebook1.svg'
import img3 from '../assets/twitter.svg'
import img4 from '../assets/instagram.svg'
import img5 from '../assets/youtube.svg'



function New() {


  return (
    <>
    <div className="footer">
        <div className='foot'>
          <div className='footl'>
          <div className='foot1'>
            <div className='foot1t'>
              <div className='tlog'><img src={img1}/></div>
              <div className='tlogname'>StarWish</div>
            </div>
            <div className='foot1b'>
              <div className='f1ba'>Book personalized video messages from your favorite celebrities</div>
              <div className='f1bb'>
                <div className='facebook'><img src={img2}/></div>
                <div className='twiter'><img src={img3}/></div>
                <div className='instagram'><img src={img4}/></div>
                <div className='youtube'><img src={img5}/></div>
              </div>
              <div className='f1bc'></div>
            </div>
          </div>
          <div className='foot2'>
            <div className='foot2t'>Quick Links</div>
            <div className='foot2b'>
              <div className='f2a'>Browse Celebrities</div>
              <div className='f2b'>My Orders</div>
              <div className='f2c'>Login</div>
              <div className='f2d'></div>
            </div>
          </div>
          </div>
          <div className='footr'>
          <div className='foot3'>
            <div className='foot3t'>For Celebrities</div>
            <div className='foot3b'>
              <div className='f3a'>Celebrity Login</div>
              <div className='f3b'>Dashboard</div>
              <div className='f3c'>Join as Celebrity</div>
              <div className='f3d'></div>
            </div>
          </div>
          <div className='foot4'>
             <div className='foot4t'>Company</div>
            <div className='foot4b'>
              <div className='f4a'>About Us</div>
               <div className='f4b'>Contact</div>
                <div className='f4c'>FAQ</div>
                 <div className='f4d'>Terms of Service</div>
                  <div className='f4e'>Privacy Policy</div>
                   <div className='f4f'></div>
            </div>
          </div>
          </div>
        </div>
        <div className='footb'> ©2024 Starwish. All rights reserved</div>
    </div>
    </>
     )
}
export default New