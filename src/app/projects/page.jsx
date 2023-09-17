import React from 'react'

export default function page() {
  return (
    <section id="portfolio" className="portfolio section-bg section">
    <div className="container">

      <div className="section-title">
        <h2>My Work</h2>
        <p>“The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to
          live.”—Mortimer Adler</p>
      </div>



      <div className="portfolio-container" data-aos="fade-up" data-aos-delay="100">

        <div className="portfolio-wrap">
          <img src="assets/img/portfolio/1_l4xICbIIYlz1OTymWCoUTw.webp" className="img-fluid" alt=""/>
          <div className="portfolio-details">
            <h1>This Portfolio Website</h1>
            <h2>HTML, CSS, Javascript</h2>
          </div>
          <div className="portfolio-desc">
            I like to keep things in control. That is why I have developed my personal portal without any javascript
            library. Everything on this portal is hard coded so that I can practice more and experiment with my skills.

          </div>
          <div className="portfolio-links">


          </div>
        </div>


        <div className="portfolio-wrap">
          <img src="assets/img/portfolio/twitterclonereactjs.png" className="img-fluid" alt=""/>
          <div className="portfolio-details">
            <h1>Twitter Clone App</h1>
            <h2>React JS</h2>
            <a href="https://github.com/amitmehla1207/twittercloneapp" target="_blank"><i className="bi bi-github"></i> View
              Repository</a>
          </div>
          <div className="portfolio-desc">
            This App is built using ReactJs 18.0.1. I have cloned only desktop version of the twitter app. The Mobile
            version is still in progress. So it is recommended to use a screen size  750px.
          </div>

          <div className="portfolio-links">
            <a href="https://amitmehla1207.github.io/twittercloneapp/" target="_blank"><i
                className="bi bi-box-arrow-up-right"></i> Preview </a>

          </div>
        </div>



        <div className="portfolio-wrap">
          <img src="assets/img/portfolio/todoappreactjs.png" className="img-fluid" alt=""/>
          <div className="portfolio-details">
            <h1>To-do App</h1>
            <h2>React JS</h2>
            <a href="https://github.com/amitmehla1207/todoapp" target="_blank"><i className="bi bi-github"></i> View
              Repository</a>
          </div>
          <div className="portfolio-desc">
            This app is built with basic to-do app features like adding a todo, updating and deleting it. A dark mode
            toggle enables it to change the UI to dark.

          </div>
          <div className="portfolio-links">
            <a href="https://amitmehla1207.github.io/todoapp/" target="_blank"><i className="bi bi-box-arrow-up-right"></i>
              Preview</a>

          </div>
        </div>


      </div>

    </div>
  </section>
  )
}
