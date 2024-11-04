import React from 'react'

const Testimonials = () => {
  return (
    <section class="py-5 mb-md-2 bg-secondary">
    <div class="container py-lg-4">
      <div class="row py-md-3">
        <div class="col-xl-3 col-lg-4 pt-2">
          <h2 class="h1 text-center text-lg-start pb-2">Clients are Loving Our App</h2>
        </div>
        <div class="col-lg-8 offset-xl-1 pt-4 mt-2 mt-md-3 mt-lg-0 pt-lg-0">
          <div class="px-2 px-sm-0">
            <div class="swiper mx-n2">
              <div class="swiper-wrapper">
  
                <div class="swiper-slide h-auto pt-4 pb-3 px-2">
                  <div class="d-flex flex-column h-100 px-2 px-sm-0 mb-0">
                    <div class="card h-100 position-relative border-0 shadow-sm pt-4">
                      <span class="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4">
                        <i class="bx bxs-quote-left"></i>
                      </span>
                      <blockquote class="card-body pb-4 mb-0">
                        <div class="text-nowrap pt-1 mb-3">
                          <i class="bx bxs-star text-warning"></i>
                          <i class="bx bxs-star text-warning"></i>
                          <i class="bx bxs-star text-warning"></i>
                          <i class="bx bx-star text-muted opacity-75"></i>
                          <i class="bx bx-star text-muted opacity-75"></i>
                        </div>
                        <p class="fs-lg mb-0">Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
                      </blockquote>
                      <div class="card-footer d-flex align-items-center border-0 pt-0">
                        <img src="girl.png" width="48" class="rounded-circle ms-n1" alt="Fannie Summers" />
                        <div class="ps-2 ms-1">
                          <h6 class="fs-base fw-semibold mb-0">Fannie Summers</h6>
                          <span class="fs-sm text-muted">Designer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div class="swiper-slide h-auto pb-3 px-2 pt-4">
                  <div class="d-flex flex-column h-100 px-2 px-sm-0 mb-0">
                    <div class="card h-100 position-relative border-0 shadow-sm pt-4">
                      <span class="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4">
                        <i class="bx bxs-quote-left"></i>
                      </span>
                      <blockquote class="card-body pb-4 mb-0">
                        <div class="text-nowrap pt-1 mb-3">
                          <i class="bx bxs-star text-warning"></i>
                          <i class="bx bxs-star text-warning"></i>
                          <i class="bx bxs-star text-warning"></i>
                          <i class="bx bxs-star text-warning"></i>
                          <i class="bx bxs-star text-warning"></i>
                        </div>
                        <p class="fs-lg mb-0">Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.</p>
                      </blockquote>
                      <div class="card-footer d-flex align-items-center border-0 pt-0">
                        <img src="boy.png" width="48" class="rounded-circle ms-n1" alt="Robert Fox" />
                        <div class="ps-2 ms-1">
                          <h6 class="fs-base fw-semibold mb-0">Albert Flores</h6>
                          <span class="fs-sm text-muted">QA Engineer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Testimonials