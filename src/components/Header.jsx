import logo from '../assets/logo.png';
const Header = () => {
  return (
    <header className='container'>
<img src={logo} alt="" />
<nav>
    <ul>
        <li>Home</li>
        <li>How it works</li>
        <li>What we do</li>
        <li>Who we help</li>
        <li>Resources</li>
    </ul>
    
</nav>
<div className='headerBtns'>
<button className='loginBtn'>Login</button>
<button className='contactExpBtn'>Talk to an Expert</button>
</div>
    </header>
  )
}

export default Header