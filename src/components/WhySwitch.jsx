import img1 from '../assets/WhySwitch1.png';
import img2 from '../assets/WhySwitch2.png';
import img3 from '../assets/WhySwitch3.png';
const WhySwitch = () => {
  return (
    <section className='WhySwitchPg container'>
        <h2>Why Switch?</h2>
        <div className="whySwitchBoxes">
      <div className="whySwitchBox">
<img src={img1} alt="" />
<h6>Powerful software</h6>
<p>Included in our service, each <br /> customer gets in-house software to <br /> access live <span className='span'>financial dashboards</span> and <br /> real-time management reports.</p>
      </div>
            <div className="whySwitchBox">
<img src={img2} alt="" />
<h6>Powerful software</h6>
<p>Included in our service, each <br /> customer gets in-house software to <br /> access live <span className='span'>financial dashboards</span> and <br /> real-time management reports.</p>
      </div>
            <div className="whySwitchBox">
<img src={img3} alt="" />
<h6>Powerful software</h6>
<p>Included in our service, each <br /> customer gets in-house software to <br /> access live <span className='span'>financial dashboards</span> and <br /> real-time management reports.</p>
      </div>
        </div>
        <div className='whySwitchBoxBtn'><button>Discover what we do</button></div>
      
    </section>
  )
}

export default WhySwitch