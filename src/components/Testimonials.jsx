import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
  const [info, setInfo] = useState([]);
  const [error, setError] = useState(null);


  const fetchInfo = async () => {
    try {
      const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials');
      if (!res.ok) {
        throw new Error("Failed to fetch testimonials");
      }
      const data = await res.json();
      setInfo(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);


  if (error) {
    return <p>Fel vid hämtning av testimonials: {error}</p>;
  }

  if (info.length === 0) {
    return <p>Laddar testimonials...</p>;
  }

  return (
    <section className="py-5 mb-md-2 bg-secondary">
      <div className="container py-lg-4">
        <div className="row py-md-3">
          <div className="col-xl-3 col-lg-4 pt-2">
            <h2 className="h1 text-center text-lg-start pb-2">Clients are Loving Our App</h2>
          </div>
          <div className="col-lg-8 offset-xl-1 pt-4 mt-2 mt-md-3 mt-lg-0 pt-lg-0">
            <div className="px-2 px-sm-0">
              <div className="swiper mx-n2">
                <div className="swiper-wrapper">
                  {info.map((item) => (
                    <div key={item.id} className="swiper-slide h-auto pt-4 pb-3 px-2">
                      <div className="d-flex flex-column h-100 px-2 px-sm-0 mb-0">
                        <div className="card h-100 position-relative border-0 shadow-sm pt-4">
                          <span className="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4">
                          <FontAwesomeIcon icon={faQuoteLeft} />
                          </span>
                          <blockquote className="card-body pb-4 mb-0">
                            <div className="text-nowrap pt-1 mb-3">
                              {Array.from({ length: 5 }).map((_, index) => (
                                <i
                                  key={index}
                                  className={
                                    index < item.rating
                                      ? "bx bxs-star text-warning"
                                      : "bx bx-star text-muted opacity-75"
                                  }
                                ></i>
                              ))}
                            </div>
                            <p className="fs-lg mb-0">{item.comment}</p>
                          </blockquote>
                          <div className="card-footer d-flex align-items-center border-0 pt-0">
                            <img
                              src={item.avatarUrl || "default-avatar.png"}
                              width="48"
                              className="rounded-circle ms-n1"
                              alt={item.author}
                            />
                            <div className="ps-2 ms-1">
                              <h6 className="fs-base fw-semibold mb-0">{item.author}</h6>
                              <span className="fs-sm text-muted">{item.role}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;