import laptop from '../assets/laptop.png';
const Hero = () => {
  return (
    <section className="heroPg container">
        <div className="heroLeft ">
    <h1>Get your<br /> finances  right</h1>
    <h5>Get your finances right with Accountancy Cloud. We <br /> offer the best accounting, R&D credits and CFO <br /> services for ambitious businesses who want to grow.</h5>
    <div className="heroBottom">
        <h6>Switching to us is simple</h6>
        <button>Talk to us</button>
    </div>
        </div>
        <img src={laptop} alt="" />
    </section>
  )
}

export default Hero;