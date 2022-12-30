function Home() {
  return (
    <>

      {/* Hero Section */}
      <section id="hero">
        <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">

          <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

          <div className="carousel-inner" role="listbox">

            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="carousel-container">
                <div className="container">
                  <img src="/assets/img/adscene-logo.png" alt="Logo" width={256}/>
                  <h2 className="animate__animated animate__fadeInDown">Welcome to <span className="bold">AD SCENE</span></h2>
                  <p className="animate__animated animate__fadeInUp">We can help a business to understand what kind of problem it wants to solve. 
                  Your business can gain insight into the needs and challenges faced by its customers and identify specific problems that the product can solve.</p>
                  <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                </div>
              </div>
            </div>

          </div>

          <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
          </a>

          <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
          </a>

        </div>
      </section>
      {/* End Hero */}

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">

          <div className="row content">
            <div className="col-lg-12">
              <h2 className="text-center">The Big Picture</h2>
              <h3>Demonstrating a product effectively can help to showcase its features and benefits to potential customers and help to convince them to make a purchase.</h3>
            </div>
            <div className="col-lg-12 pt-4 pt-lg-0">
              <ol className="ol-class row">
                <li className="li-class col-lg-4">Define your idea or product: Start by clearly defining what your idea or product is and what it does. Consider who your target audience is and how your product or idea will solve a problem or meet a need for them.</li>
                <li className="li-class col-lg-4">Research and validate your idea: Conduct market research to understand the demand for your product or idea and to identify any potential competitors. You may also want to test your idea or product with a small group of people to get feedback and refine your concept.</li>
                <li className="li-class col-lg-4">Create a plan: Develop a detailed plan that outlines the steps you will take to bring your idea or product to life. This may include designing and prototyping your product, identifying suppliers, and setting timelines for each step.</li>
              </ol>
            </div>
          </div>

        </div>
      </section>
      {/* End About Section */}

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">

          <div className="row">
            <div className="col-md-6">
              <div className="icon-box">
                <i className="fa-solid fa-display"></i>
                <h4><a href="#">Advertising</a></h4>
                <p>We are promoting your ideas to make selling the products or services accessible to the target audience.</p>
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <div className="icon-box">
                <i className="fa-solid fa-globe"></i>
                <h4><a href="#">Web Design</a></h4>
                <p>Your website should be a tool to market your products and services. It should be easy to use, maintain, and cost-efficient.</p>
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <div className="icon-box">
                <i className="fa-solid fa-briefcase"></i>
                <h4><a href="#">Business Processes</a></h4>
                <p>Design, execute, monitor, and optimize. Additionally, we will also analyse and advertise the products for you.</p>
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <div className="icon-box">
                <i className="fa-solid fa-camera"></i>
                <h4><a href="#">Photography / Graphic Design</a></h4>
                <p>The art of merging photos, graphics, and words to illustrate your ideas for advertising purposes. </p>
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <div className="icon-box">
                <i className="fa-solid fa-wand-sparkles"></i>
                <h4><a href="#">Genie</a></h4>
                <p>Your wish is my command</p>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* End Services Section */}

      {/* About Section */}
      <section id="product" className="about">
        <div className="container">

          <div className="row content">
            <div className="col-lg-12">
              <h2 className="text-center">The Benifits of Having a Product</h2>
            </div>
            <div className="col-lg-12 pt-4 pt-lg-0">
              <ol className="ol-class row">
                <li className="li-class col-lg-4">Increased revenue: A product can generate income for a business through sales to customers.</li>
                <li className="li-class col-lg-4">Increased brand awareness: A product can help to raise awareness of a brand and increase its visibility in the market.</li>
                <li className="li-class col-lg-4">Customer loyalty: A well-designed and high-quality product can help to build customer loyalty and encourage repeat purchases.</li>
                <li className="li-class col-lg-4">Increased market share: A successful product can help a business to capture a larger share of the market and gain a competitive advantage.</li>
                <li className="li-class col-lg-4">Customer feedback: A product can provide valuable feedback from customers, which can help a business to understand its customers' needs and preferences and improve its products and services.</li>
                <li className="li-class col-lg-4">Opportunities for innovation: A product can provide opportunities for a business to innovate and stay ahead of the competition.</li>
              </ol>
            </div>
          </div>

        </div>
      </section>
      {/* End About Section */}

    </>
  );
}

export default Home;