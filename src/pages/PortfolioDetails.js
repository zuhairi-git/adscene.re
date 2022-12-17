function Portfolio() {
  return (
    <>
      <main id="main">

        <section id="portfolio-details" className="portfolio-details">
          <div className="container">

            <div className="row gy-4">

              <div className="col-lg-8">
                <div className="portfolio-details-slider swiper">
                  <div className="swiper-wrapper align-items-center">

                    <div className="swiper-slide">
                      <img src="assets/img/portfolio-6.jpg" alt="" />
                    </div>

                    <div className="swiper-slide">
                      <img src="assets/img/portfolio-6.jpg" alt="" />
                    </div>

                    <div className="swiper-slide">
                      <img src="assets/img/portfolio-6.jpg" alt="" />
                    </div>

                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="portfolio-info">
                  <h3>Project information</h3>
                  <ul>
                    <li><strong>Category</strong>: Products</li>
                    <li><strong>Client</strong>: Center UX</li>
                    <li><strong>Project date</strong>: 01 Oct, 2022</li>
                    <li><strong>Project URL</strong>: <a href="https://centerux.com" target="_blank">centerux.com</a></li>
                  </ul>
                </div>
                <div className="portfolio-description">
                  <h2>This is an example of portfolio detail</h2>
                  <p>
                    Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

      </main>

    </>
  );
}

export default Portfolio;