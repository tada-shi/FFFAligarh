import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import logo from './fff.jpg'
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [Sticky, setSticky] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);



  window.addEventListener('scroll', ()=>{
    if(window.scrollY > 95){
      setSticky(true);
    }else if(window.innerWidth < 960 && window.scrollY >= 0){
      setSticky(true)
    }else{
      setSticky(false);
    }
    })

  return (
    <>
      <nav className={Sticky?'navbar sticky': 'navbar'}>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={logo} alt="FFF LOGO" />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                abous us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/campaign'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                campaigns
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='blogs'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                blogs
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='events'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                events
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;