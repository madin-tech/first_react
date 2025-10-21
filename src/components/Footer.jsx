import footerLogo from '../assets/footerLogo.png';
import footerAcca from '../assets/footerAcca.png';
const Footer = () => {
  return (
    <section className='footer'>
       <div className="container footerMid">
        <div className="footerTop">
<img src={footerLogo} alt="" />
<h3>Your new finance team</h3>
        </div>
        <div className='footerSecond'>
<ul>
    <li className='footerBold'>How it works</li>
    <li>Hassle Free Switching</li>
</ul>
<ul>
    <li className='footerBold'>What we do</li>
    <li>Finance Teams</li>
    <li>Tax</li>
    <li>R&D Tax Credits</li>
    <li>A platform for success</li>
    <li>Software Integrations</li>
</ul>
<ul>
    <li className='footerBold'>Who we help</li>
    <li>Startups</li>
    <li>Small Business</li>
    <li>Medium Business</li>
    <li>CFO & Head of Finance</li>
</ul>
<ul>
    <li className='footerBold'>Resources</li>
    <li>Case Studies</li>
    <li>Blogs</li>
    <li>Guides</li>
    <li>Podcasts</li>
</ul>
<ul>
    <li className='footerBold'>Company</li>
    <li>About Us</li>
    <li>Careers</li>
    <li>Contact Us</li>
</ul>
        </div>
        <div className='footerThird'>
<ul>
    <li className='footerBold'>Speak to us</li>
    <li>Call 020 4530 8432</li>
    <li>Refer a friend for £175</li>
    <li>Partner with us</li>
</ul>
        </div>
        <div className='footerBottom'>
<div className='footerBottomLeft'>
    <h6>© Accountancy Cloud 2021</h6>
    <a href="">Privacy Policy & Cookies</a>
    <a href="">Terms of Service</a>
</div>
<div className='footerBottomImg'>
    <img src={footerAcca} alt="" />
</div>
        </div>
        </div> 
    </section>
  )
}

export default Footer;