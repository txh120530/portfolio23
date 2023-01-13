import React, {Fragment} from 'react'
import Link from 'next/link';

import Logo from '../Logo/Logo';

const Navbar = props => {

  const scroll2El = elID => {
    window.scrollTo({
      top: document.getElementById(elID).offsetTop - 60,
      behavior: 'smooth',
    });
  };

const onBtnClick = (e) => {
    e.preventDefault();
    const goto = e.target.getAttribute('goto');
    setTimeout(() => {
      scroll2El(goto);
    }, 100);
  }

const links = (
	<div className="">
  <ul className="flex justify-center items-center">
    <li><button goto="about" onClick={onBtnClick} className="uppercase font-thin text-base hover:font-medium mx-2 hidden md:block">About</button></li>
      <li><button goto="skills" onClick={onBtnClick} className="uppercase font-thin text-base hover:font-medium mx-2 hidden md:block">Skills</button></li>
      <li><button goto="work" onClick={onBtnClick} className="uppercase font-thin text-base hover:font-medium mx-2 hidden md:block">Past Work</button></li>
      <li><button goto="contact" onClick={onBtnClick} className="uppercase font-thin text-base hover:font-medium mx-2">Contact</button></li>

  </ul>
  </div>
)


  return (
    <nav className="navbar p-3">
      <div className="nav-top flex justify-between items-center px-2">
      <Link href="/" className="logo"><Logo /></Link>

          <Fragment>{links}</Fragment>
        </div>
    </nav>
    
  )
}

export default Navbar