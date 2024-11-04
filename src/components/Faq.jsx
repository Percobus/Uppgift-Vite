import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
  const [faqs, setFaqs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq');
        if (!res.ok) {
          throw new Error("Failed to fetch FAQs");
        }
        const data = await res.json();
        setFaqs(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchFaqs();
  }, []);

  if (error) {
    return <p>Error loading FAQs: {error}</p>;
  }

  return (
    <section className="container py-5 mb-lg-2">
      <div className="row py-2 py-md-4 py-lg-5">
        <div className="col-xl-4 col-md-5 text-center text-md-start pt-md-2 pb-2 pb-md-0 mb-4 mb-md-0">
          <h2 className="pb-3 mb-1 mb-lg-3">Any questions? <br className="d-none d-md-inline" />Check out the FAQs</h2>
          <p className="fs-lg pb-3 mb-2 mb-lg-3">Still have unanswered questions and need to get in touch?</p>
        </div>
        <div className="col-md-7 offset-xl-1">
          <Accordion>
            {faqs.length === 0 ? (
              <p>Loading FAQs...</p>
            ) : (
              faqs.map((faq, index) => (
                <Accordion.Item key={faq.id} eventKey={index.toString()}>
                  <Accordion.Header>{faq.title}</Accordion.Header>
                  <Accordion.Body>{faq.content}</Accordion.Body>
                </Accordion.Item>
              ))
            )}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;