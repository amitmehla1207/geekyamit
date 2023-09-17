import React from 'react'

export default function page() {
  return (
    <section id="resume" className="resume section">
    <div className="container">

      <div className="section-title">
        <h2>Resume</h2>

      </div>
      <div className="d-flex justify-content-end me-5"><a href="uploads/resume.pdf" className="button-dark">Download Resume</a>
      </div>
      <div className="row">
        <div className="col-lg-6" data-aos="fade-up">

          <h3 className="resume-title">Education</h3>
          <div className="resume-item">
            <div className="resume-box">
              <h4>Graduate Certificate in Project Managment</h4>
              <h5>2021 - 2022</h5>
              <p><em>Algoma University, Brampton Ontario, Canada</em></p>
              <p>From this Program, I built technical skills, business strategy knowledge and leadership qualities
                necessary to excel in today’s workforce.</p>
            </div>

          </div>
          <div className="resume-item">
            <div className="resume-box">
              <h4>Bechelors of Computer Science</h4>
              <h5>2015 - 2018</h5>
              <p><em>Kurukshetra University, Kurukshetra</em></p>
              <p>Core subjects - Computer Engineering, Software development and web development, DSA.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <h3 className="resume-title">Professional Experience</h3>
          <div className="resume-item">
            <div className="resume-box">
              <h4>Junior Web Developer</h4>
              <h5>2018 - 2020</h5>
              <p><em>TECHCENTRICA - Noida, India</em></p>
              <li>Enhanced my skills in Web designing.</li>
              <li>Worked on medium scale projects using language PHP and Jquery</li>
              <li>Got Exposure in working in a team environment</li>
            </div>

          </div>

        </div>
      </div>

    </div>
  </section>
  )
}
