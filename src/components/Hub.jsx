import hubImg from '../assets/hub.png';
const Hub = () => {
  return (
    <section className='hubPg container'>
<div className="hubLeft">
<h2>The AC Hub</h2>
<h6>Explore our dedicated online resources. We've got the tips, <br /> tricks and online accounting know-how for business success.</h6>
<button>View Hub</button>
</div>
<img src={hubImg} alt="" />
    </section>
  )
}

export default Hub;