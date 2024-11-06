import React, { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Enkel e-postvalidering
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setIsValid(true);

      // Skicka e-post till API
      try {
        const response = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        // Kontrollera om responsen har innehåll innan du läser JSON
        if (response.ok) {
          const text = await response.text(); // Hämta responsen som text
          if (text) {
            const data = JSON.parse(text); // Försök att parsa texten som JSON
            setResponseMessage(data.message || 'You have successfully subscribed!');
          } else {
            setResponseMessage('You have successfully subscribed!');
          }
          setEmail(''); // Töm inputfältet
        } else {
          setResponseMessage('Subscription failed. Please try again later.');
        }
      } catch (error) {
        console.error("Fetch error:", error); // Logga fel för nätverksproblem
        setResponseMessage('An error occurred. Please try again later.');
      }
    } else {
      setIsValid(false);
      setResponseMessage(''); // Rensa eventuella tidigare meddelanden
    }
  };

  return (
    <section className="container">
      <div className="bg-secondary rounded-3 py-5 px-3 px-sm-4 px-lg-5 px-xl-0">
        <div className="row align-items-center py-lg-4">
          <div className="col-xl-5 col-md-6 offset-xl-1 mb-4 mb-md-0">
            <div className="d-flex align-items-center">
              <img src="notification-icon.svg" width="78" alt="Bell icon" />
              <div className="ps-3 ms-sm-3">
                <h2 className="h4 mb-0">Subscribe to our newsletter to stay informed about latest updates</h2>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-md-6">
            <div className="ps-lg-5 ms-xl-2">
              <form className="input-group input-group-lg needs-validation" noValidate onSubmit={handleSubmit}>
                <input
                  type="email"
                  id="subscr-email"
                  className={`form-control rounded-start ps-5 ${!isValid ? 'is-invalid' : ''}`}
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="invalid-tooltip position-absolute top-100 start-0">Please provide a valid email address.</div>
                <button type="submit" className="btn btn-primary px-sm-4">Subscribe</button>
              </form>
              {responseMessage && <p className="mt-3">{responseMessage}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;