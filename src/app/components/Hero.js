import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <>
    <section id="home" className="section">

<div className="hero-container" data-aos="fade-in">
  

  <div className="type-text-container">
  <p id="quoateTarget">I'm a <span className="typed" data-typed-items="Student, Learner, Job Seeker, Happy Soul"></span></p>
 
  </div>
  
  {/* <div style="position: relative;">
    <div className="quotes" id="quotes" style="min-width: 230px; left:220px;">
      <div className="quote-arrow">
        <svg viewBox="0 0 24 24" aria-hidden="true" style="left: calc(19.9874px);">
          <g>
            <path d="M22 17H2L12 6l10 11z"></path>
          </g>
        </svg>
      </div>
      <div className="quote-inner">
        <sapn className="quote-text"></span></sapn>
      </div>
    </div> */}
 
 

  <div className="d-flex justify-content-center">
    <Link href="/projects" className="chngpg hero-explore-button">Explore My Work</Link>
  </div>
</div>




</section>
</>
  )
}

export default Hero