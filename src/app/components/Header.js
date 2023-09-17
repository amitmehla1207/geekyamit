import React from 'react'
import SocialLinks from './SocialLinks'
import Link from 'next/link'

function Header() {
  return (
    <><header id="header">

    <div className="d-flex justify-content-between align-items-center" id="header-inner">
      <div className="text-light logo">
        <div className="right"></div>
        <div className="left"></div>
        <div className="middle">
          A
        </div> <span className="logoFont">Amit</span>
      </div>
      <nav className="mynavbar">
        <div className="menu">
          <li className="link-item"><Link href="/" className="chngpg">Home</Link></li>
          <li className="link-item"><Link href="/about" className="chngpg">About</Link></li>
          <li className="link-item"><Link href="/resume" className="chngpg">Resume</Link></li>
          <li className="link-item"><Link href="/projects" className="chngpg">My Work</Link></li>
        </div>
       <SocialLinks/>
      </nav>
      <div className="mob-nav">
        <button id="mobnav" className="mobnav">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

  </header></>
  )
}

export default Header