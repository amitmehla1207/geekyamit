import React from "react";

export default function page() {
  return (
    <>
      <section id="about" className="section about">
        <div className="container dynamo-box">
          <div className="amit-about-col">
            <section className="about box" data-aos="slide-up">
              <div className="section-title">
                <h2>About</h2>
                <p>
                  Actively looking for a position in web development field.
                  Skills include front end technologies like Node.js, React, and
                  Express, REST API
                </p>
              </div>

              <div className="content" data-aos="fade-in">
                <div className="pt-4 pt-lg-0">
                  <div className="row">
                    <div className="col-lg-6">
                      <ul>
                        <li>
                          <i className="bi bi-balloon"></i>{" "}
                          <strong>Birthday:</strong> <span>1 April 1998</span>
                        </li>
                        <li>
                          <i className="bi bi-globe-americas"></i>{" "}
                          <strong>Website:</strong>{" "}
                          <span>www.geekyamit.com</span>
                        </li>
                        <li>
                          <i className="bi bi-phone-fill"></i>{" "}
                          <strong>Phone:</strong> <span>[protected]</span>
                        </li>
                        <li>
                          <i className="bi bi-house-door-fill"></i>{" "}
                          <strong>Current City:</strong>{" "}
                          <span>Brampton, ON</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul>
                        <li>
                          <i className="bi bi-linkedin"></i>{" "}
                          <strong>Connect:</strong>{" "}
                          <span>
                            <a
                              href="https://www.linkedin.com/in/amitmehla1207/"
                              target="_blank"
                              className="button-link"
                            >
                              Connect
                              <i className="bi bi-box-arrow-up-right"></i>
                            </a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="amit-skill-col">
            <div id="skills" className="skills box">
              <div className="section-title">
                <h2>Skills</h2>
              </div>

              <div className="row skills-content">
                <div className="col-lg-6" data-aos="fade-up">
                  <div className="progress">
                    <span className="skill">
                      <i className="val">85%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="99"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        HTML{" "}
                      </div>
                    </div>
                  </div>

                  <div className="progress">
                    <span className="skill">
                      {" "}
                      <i className="val">85%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="99"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        CSS
                      </div>
                    </div>
                  </div>

                  <div className="progress">
                    <span className="skill">
                      <i className="val">75%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        JavaScript{" "}
                      </div>
                    </div>
                  </div>

                  <div className="progress">
                    <span className="skill">
                      <i className="val">65%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="65"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        React Js
                      </div>
                    </div>
                  </div>

                  <div className="progress">
                    <span className="skill">
                      <i className="val">40%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="40"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        ExpressJs
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="progress">
                    <span className="skill">
                      <i className="val">45%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        Github (Version Control)
                      </div>
                    </div>
                  </div>

                  <div className="progress">
                    <span className="skill">
                      <i className="val">60%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        Redux
                      </div>
                    </div>
                  </div>

                  <div className="progress">
                    <span className="skill">
                      <i className="val">60%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        MongoDB
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
