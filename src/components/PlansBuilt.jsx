import plans1 from '../assets/plans1.png';
import plans2 from '../assets/plans2.png';
import plans3 from '../assets/plans3.png';
const PlansBuilt = () => {
  return (
    <section className='plansBuilt'>
<div className='WhySwitchPg container'>
         <h2>Plans built for growth</h2>
        <div className="whySwitchBoxes">
      <div className="whySwitchBox">
<img src={plans1} alt="" />
<h6>Early stage startup</h6>
<p>Need your accounting system set up? <br /> Learn financial best practice and <br /> prime your business for the next <br /> stage of growth. We get you moving <br /> quickly with an accounting solution <br /> that does what you need.</p>
      </div>
            <div className="whySwitchBox">
<img src={plans2} alt="" />
<h6>Scale up</h6>
<p>Spend less time worrying about your <br /> finances and more time shaping your <br /> company’s future. Get your <br /> bookkeeping, R&D credits and CFO <br /> problems, solved.</p>
      </div>
            <div className="whySwitchBox">
<img src={plans3} alt="" />
<h6>High growth</h6>
<p>Gain the financial accuracy, visibility, <br /> and real-time analysis you need to <br /> make smarter decisions, drive <br /> efficiency, and achieve total <br /> organizational alignment.</p>
      </div>
        </div>
</div>
    </section>
  )
}

export default PlansBuilt;