import React, { useEffect, useState } from 'react';
import '../assets/css/main.css';
import "./founder.css";

function AboutUs() {
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isLoading ? 'hidden' : 'auto';
    document.body.style.backgroundColor = '#fff';
  }, [isLoading]);

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
    const navbar = document.getElementById('navbar');
    if (navbar) {
      navbar.classList.toggle('mobile-nav-active');
    }
  };

  return (
    <div>
      <header id="header" className="header d-flex align-items-center fixed-top" style={{ backgroundColor: '#fff' }}>
        <div className="container-fluid d-flex align-items-center justify-content-between">

          <a href="home" className="logo d-flex align-items-center me-auto me-lg-0">
            <img src="assets/img/jsg_logo.png" alt="" style={{ height: "80px", marginLeft: "20px" }} />
          </a>

          <nav id="navbar" className={`navbar ${isMobileNavActive ? 'mobile-nav-active' : ''}`} style={{ backgroundColor: isMobileNavActive ? 'white' : 'transparent', color: 'black' }}>
            <ul style={{ backgroundColor: isMobileNavActive ? 'rgba(255, 255, 255, 0.7)' : 'transparent' }}>
              <li><a href="home" className={window.location.pathname === '/home' ? 'active' : ''} style={{ color: 'black' }}>Home</a></li>
              <li><a href="aboutus" className={window.location.pathname === '/aboutus' ? 'active' : ''} style={{ color: 'black' }}>About Us</a></li>
              <li><a href="founder" className={window.location.pathname === '/founder' ? 'active' : ''} style={{ color: 'black' }}>Partners</a></li>
              <li><a href="areaOfPractice" className={window.location.pathname === '/areaOfPractice' ? 'active' : ''} style={{ color: 'black' }}>Area of Practice</a></li>
              <li><a href="careers" className={window.location.pathname === '/careers' ? 'active' : ''} style={{ color: 'black' }}>Career</a></li>
              <li><a href="contact" className={window.location.pathname === '/contact' ? 'active' : ''} style={{ color: 'black' }}>Contact</a></li>
            </ul>
          </nav>

          <div className="header-social-links">
            <a href="https://www.linkedin.com/in/sc-legal" className="linkedin"><i className="bi bi-linkedin"></i></a>
          </div>
          <i 
            className={`mobile-nav-toggle ${isMobileNavActive ? 'bi bi-x mobile-nav-hide' : 'bi bi-list mobile-nav-show'}`}
            onClick={toggleMobileNav}
          ></i>

        </div>
      </header>

      <br />
      <br />
      <br />

      <main id="main">
        <section id="about" className="about">
          <div className="container">
            <div className="container position-relative">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 text-center">
                  <h2 style={{fontSize:60, marginBottom:100}}>About Us</h2>
                </div>
              </div>
            </div>

            <div className="row gy-4 justify-content-center">
              <div className="col-lg-8 content" style={{ height: '100%', marginTop: '-50px' }}>
                <h2>Our Philosophy</h2>
                <p className="fst-italic pb-3">
                  At JSG Partners, we understand that navigating the legal landscape can be complex and overwhelming.  We are dedicated to providing clear, concise, and personalized legal advice, guiding our clients through every step of the process with empathy and understanding. We prioritize building strong client relationships based on trust, open communication, and mutual respect.  We believe in proactive problem-solving and strive to achieve the best possible outcomes for our clients, whether through negotiation, mediation, or litigation.
                </p>
                <h2>Our Approach</h2>
                <p className="fst-italic pb-3">
                  At JSG Partners, we believe in a collaborative approach.  All partners are actively involved in every case, ensuring that our clients receive the benefit of our combined expertise and strategic thinking.  We take the time to understand each client's unique circumstances and legal goals, developing personalized strategies tailored to their specific needs.  We are committed to providing clear and timely communication, keeping our clients informed and empowered throughout the legal process.
                </p>
                <h2>Our Commitment</h2>
                <p className="fst-italic pb-3">
                  We are committed to providing high-quality legal representation at a reasonable cost.  We believe that everyone deserves access to justice and strive to make our services accessible to all.  We are passionate about using our legal skills to make a positive impact on our clients’ lives and the community.
                  <br />
                  At JSG Partners, we don’t just practice law—we build relationships. Whether you’re an individual seeking guidance or a business navigating complex legal challenges, we are here to provide the expertise and support you need to achieve your goals.
                  <br />
                  Contact JSG Partners today to schedule a consultation and experience the difference of working with a firm that truly cares about your success.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a href="#" className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>

      <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
      <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
      <script src="assets/vendor/aos/aos.js"></script>
      <script src="assets/vendor/php-email-form/validate.js"></script>

      <script src="assets/js/main.js"></script>
    </div>
  );
}

export default AboutUs;