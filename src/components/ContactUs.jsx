import React from 'react';

const ContactUs = () => {
  return (
    <>
      <section className="position-relative bg-secondary pt-5">
        <div className="container position-relative zindex-2 pt-5">
          <div className="row">
            <div className="col-xl-4 col-lg-5 pb-4 pb-sm-5 mb-2 mb-sm-0">
              <div className="pe-lg-4 pe-xl-0">
                <h1 className="pb-3 pb-md-4 mb-lg-5">Contact Us</h1>
                <div className="d-flex align-items-start pb-3 mb-sm-1 mb-md-3">
                  <div className="bg-light text-primary rounded-circle flex-shrink-0 fs-3 lh-1 p-3"></div>
                  <div className="ps-3 ps-sm-4">
                    <h2 className="h4 pb-1 mb-2">Email us</h2>
                    <p className="mb-2">
                      Please feel free to drop us a line. We will respond as soon as possible.
                    </p>
                    <div className="btn btn-link btn-lg px-0">
                      Leave a message
                      <i className="bx bx-right-arrow-alt lead ms-2"></i>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <div className="bg-light text-primary rounded-circle flex-shrink-0 fs-3 lh-1 p-3">
                    <i className="bx bx-group"></i>
                  </div>
                  <div className="ps-3 ps-sm-4">
                    <h2 className="h4 pb-1 mb-2">Careers</h2>
                    <p className="mb-2">Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
                    <div className="btn btn-link btn-lg px-0">
                      Send an application
                      <i className="bx bx-right-arrow-alt lead ms-2"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-7 offset-xl-2">
              <div className="card border-light shadow-lg py-3 p-sm-4 p-md-5">
                <div className="bg-dark position-absolute top-0 start-0 w-100 h-100 rounded-3 d-none d-dark-mode-block"></div>
                <div className="card-body position-relative zindex-2">
                  <h2 className="card-title pb-3 mb-4">Get Online Consultation</h2>
                  <form className="row g-4 needs-validation" noValidate>
                    <div className="col-12">
                      <label htmlFor="fn" className="form-label fs-base">Full name</label>
                      <input type="text" className="form-control form-control-lg" id="fn" required />
                      <div className="invalid-feedback">Please enter your full name!</div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="email" className="form-label fs-base">Email address</label>
                      <input type="email" className="form-control form-control-lg" id="email" required />
                      <div className="invalid-feedback">Please provide a valid email address!</div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="specialist" className="form-label fs-base">Specialist</label>
                      <select className="form-select form-select-lg" id="specialist" required defaultValue="">
                        <option value="" disabled>Choose a specialist</option>
                        <option value="Therapist">Therapist</option>
                        <option value="Dentist">Dentist</option>
                        <option value="Cardiologist">Cardiologist</option>
                        <option value="Pediatrician">Pediatrician</option>
                        <option value="Gynecologist">Gynecologist</option>
                        <option value="Surgeon">Surgeon</option>
                      </select>
                      <div className="invalid-feedback">Choose a specialist from the list!</div>
                    </div>
                    <div className="col-12 pt-2 pt-sm-3">
                      <button type="submit" className="btn btn-lg btn-primary w-100 w-sm-auto">
                        Make an appointment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute bottom-0 start-0 w-100 bg-light" style={{ height: "8rem" }}></div>
      </section>

      <section className="container py-2 py-lg-4 py-xl-5 mb-2 mb-md-3">
        <div className="row py-5">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="d-flex flex-column h-100 shadow-sm rounded-3 overflow-hidden">
              <iframe
                className="d-block h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2199.220647116666!2d14.142063877556733!3d56.55005867338977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465134bc335eb399%3A0xa0413b53fcc10ebf!2s%C3%96stergatan%208D%2C%20343%2031%20%C3%84lmhult!5e0!3m2!1sen!2sse!4v1730764169146!5m2!1sen!2sse"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                title="Map"
              ></iframe>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <h2 className="h4 mb-4">Medical Center 1</h2>
            <ul className="list-unstyled pb-2 pb-lg-0 mb-4 mb-lg-5">
              <li className="d-flex pb-1 mb-2">
                <i className="bx bx-map text-primary fs-xl me-2" style={{ marginTop: ".125rem" }}></i>
                445 Bayshor Blvd, San Francisco, CA 94124
              </li>
              <li className="d-flex pb-1 mb-2">
                <i className="bx bx-phone-call text-primary fs-xl me-2" style={{ marginTop: ".125rem" }}></i>
                (406) 555-0120
              </li>
              <li className="d-flex">
                <i className="bx bx-time-five text-primary fs-xl me-2" style={{ marginTop: ".125rem" }}></i>
                <div>
                  <strong className="text-nav">Mon - Fri</strong>: 9:00 am - 22:00 pm
                  <br />
                  <strong className="text-nav">Sat - Sun</strong>: 9:00 am - 20:00 pm
                </div>
              </li>
            </ul>
            <h2 className="h4 mb-4">Medical Center 2</h2>
            <ul className="list-unstyled pb-2 pb-lg-0 mb-4 mb-lg-5">
              <li className="d-flex pb-1 mb-2">
                <i className="bx bx-map text-primary fs-xl me-2" style={{ marginTop: ".125rem" }}></i>
                2464 Royal Ln. Mesa, New Jersey 45463
              </li>
              <li className="d-flex pb-1 mb-2">
                <i className="bx bx-phone-call text-primary fs-xl me-2" style={{ marginTop: ".125rem" }}></i>
                (406) 544-0123
              </li>
              <li className="d-flex">
                <i className="bx bx-time-five text-primary fs-xl me-2" style={{ marginTop: ".125rem" }}></i>
                <div>
                  <strong className="text-nav">Mon - Fri</strong>: 9:00 am - 22:00 pm
                  <br />
                  <strong className="text-nav">Sat - Sun</strong>: 9:00 am - 20:00 pm
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;