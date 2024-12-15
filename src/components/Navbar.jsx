import React from 'react'

const Navbar = () => {
  //  const [showmenu, setShowmenu] = useState(false);

  window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
 });

  return (
    <>

<nav>
        <div className="logo">Lavan<span style={{color:'#ffc107'}}>ya</span> 
        <p></p></div>
        <div className= "nav-links">
            <a href="#home" className="active">Home</a>
            <a href="#shop">Booking</a>
            <a href="#feedback">About</a>
            <a href="#blog">Feedback</a>
            <a href="#footer">Contact Us</a>
        </div>
        <div className="icons" >
            {/* <i className="fas fa-user"></i> */}
            <button className="btn btn-primary" style={{border:"none", cursor:'pointer', margin:'10px'}}>
                  Login
             </button>
            
        </div>

        <button className="hamburger" >
            <i className="fas fa-bars"></i>
        </button>
    </nav>

      
    </>
  )
}

export default Navbar
