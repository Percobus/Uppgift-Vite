import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [specialist, setSpecialist] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const nameRegex = /^[a-zA-Z\s]{3,}$/;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const validate = () => {
    const newErrors = {};
    if (!nameRegex.test(fullName)) newErrors.fullName = 'Please enter a valid full name (at least 3 letters).';
    if (!emailRegex.test(email)) newErrors.email = 'Please provide a valid email address.';
    if (!specialist) newErrors.specialist = 'Please choose a specialist from the list.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fullName, email, specialist }),
        });

        if (response.ok) {
          setSubmitMessage('Your appointment request was submitted successfully!');
          setIsSubmitted(true);
          setFullName('');
          setEmail('');
          setSpecialist('');
          setErrors({});
        } else {
          setSubmitMessage('Failed to submit the form. Please try again later.');
          setIsSubmitted(false);
        }
      } catch (error) {
        setSubmitMessage('An error occurred while submitting the form. Please try again.');
        setIsSubmitted(false);
      }
    } else {
      setSubmitMessage(null);
      setIsSubmitted(false);
    }
  };

  return (
    <>
      <section className="position-relative bg-secondary pt-5">
        <div className="container position-relative zindex-2 pt-5">
          <div className="row">
            <div className="col-xl-4 col-lg-5 pb-4 pb-sm-5 mb-2 mb-sm-0">
              <div className="pe-lg-4 pe-xl-0">
                <h1 className="pb-3 pb-md-4 mb-lg-5">Contact Us</h1>
                <div className="d-flex align-items-start pb-3 mb-sm-1 mb-md-3">
                  <div className="bg-light text-primary rounded-circle flex-shrink-0 fs-3 lh-1 p-3">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className="ps-3 ps-sm-4">
                    <h2 className="h4 pb-1 mb-2">Email us</h2>
                    <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <div className="bg-light text-primary rounded-circle flex-shrink-0 fs-3 lh-1 p-3">
                    <FontAwesomeIcon icon={faBriefcase} /> 
                  </div>
                  <div className="ps-3 ps-sm-4">
                    <h2 className="h4 pb-1 mb-2">Careers</h2>
                    <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 offset-xl-2">
              <div className="card border-light shadow-lg py-3 p-sm-4 p-md-5">
                <div className="card-body position-relative zindex-2">
                  <h2 className="card-title pb-3 mb-4">Get Online Consultation</h2>
                  <form className="row g-4 needs-validation" noValidate onSubmit={handleSubmit}>
                    <div className="col-12">
                      <label htmlFor="fn" className="form-label fs-base">Full name</label>
                      <input
                        type="text"
                        className={`form-control form-control-lg ${errors.fullName ? 'is-invalid' : ''}`}
                        id="fn"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                      />
                      {errors.fullName && <div className="invalid-feedback d-block">{errors.fullName}</div>}
                    </div>
                    <div className="col-12">
                      <label htmlFor="email" className="form-label fs-base">Email address</label>
                      <input
                        type="email"
                        className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      {errors.email && <div className="invalid-feedback d-block">{errors.email}</div>}
                    </div>
                    <div className="col-12">
                      <label htmlFor="specialist" className="form-label fs-base">Specialist</label>
                      <select
                        className={`form-select form-select-lg ${errors.specialist ? 'is-invalid' : ''}`}
                        id="specialist"
                        value={specialist}
                        onChange={(e) => setSpecialist(e.target.value)}
                        required
                      >
                        <option value="" disabled>Choose a specialist</option>
                        <option value="Therapist">Therapist</option>
                        <option value="Dentist">Dentist</option>
                        <option value="Cardiologist">Cardiologist</option>
                        <option value="Pediatrician">Pediatrician</option>
                        <option value="Gynecologist">Gynecologist</option>
                        <option value="Surgeon">Surgeon</option>
                      </select>
                      {errors.specialist && <div className="invalid-feedback d-block">{errors.specialist}</div>}
                    </div>
                    <div className="col-12 pt-2 pt-sm-3">
                      <button type="submit" className="btn btn-lg btn-primary w-100 w-sm-auto">
                        Make an appointment
                      </button>
                      {submitMessage && (
                        <p className={`mt-3 ${isSubmitted ? 'text-success' : 'text-danger'}`}>{submitMessage}</p>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute bottom-0 start-0 w-100 bg-light" style={{ height: '8rem' }}></div>
      </section>

      <section className="container py-2 py-lg-4 py-xl-5 mb-2 mb-md-3">
        <div className="row py-5">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="d-flex flex-column h-100 shadow-sm rounded-3 overflow-hidden">
              <iframe
                className="d-block h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2199.220647116666!2d14.142063877556733!3d56.55005867338977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465134bc335eb399%3A0xa0413b53fcc10ebf!2s%C3%96stergatan%208D%2C%20343%2031%20%C3%84lmhult!5e0!3m2!1sen!2sse!4v1730764169146!5m2!1sen!2sse"
                style={{ border: 0, minHeight: '300px' }}
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
                <i className="bx bx-map text-primary fs-xl me-2"></i>
                445 Bayshore Blvd, San Francisco, CA 94124
              </li>
              <li className="d-flex pb-1 mb-2">
                <i className="bx bx-phone-call text-primary fs-xl me-2"></i>
                (406) 555-0120
              </li>
              <li className="d-flex">
                <i className="bx bx-time-five text-primary fs-xl me-2"></i>
                <div>
                  <strong>Mon - Fri</strong>: 9:00 am - 22:00 pm
                  <br />
                  <strong>Sat - Sun</strong>: 9:00 am - 20:00 pm
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
