import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';
import logo6 from '../assets/logo6.png';
import logo7 from '../assets/logo7.png';
import logo8 from '../assets/logo8.png';
import logo9 from '../assets/logo9.png';
function AmazingComp() {
  return (
    <section className='container AmazingComp'>
        <h3>Join 200+ amazing <br /> companies</h3>
        <div className="logosColumn">
      <div className="logosRow">
  <img src={logo1} alt="" />
   <img src={logo2} alt="" />
    <img src={logo3} alt="" />
      </div>
            <div className="logosRow">
  <img src={logo4} alt="" />
   <img src={logo5} alt="" />
    <img src={logo6} alt="" />
      </div>
            <div className="logosRow">
  <img src={logo7} alt="" />
   <img src={logo8} alt="" />
    <img src={logo9} alt="" />
      </div>
        </div>
    </section>
  )
}

export default AmazingComp;