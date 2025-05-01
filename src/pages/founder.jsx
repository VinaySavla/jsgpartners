import React, { useEffect, useState } from 'react';
import '../assets/css/main.css';
import "./founder.css";

function Founder() {
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
                  <h2 style={{fontSize:60, marginBottom:100}}>Partners</h2>
                </div>
              </div>
            </div>

            <div className="row gy-4 justify-content-center my-4">
              <div className="col-lg-5 content" style={{ height: '100%', marginTop: '-50px' }}>
                <h2>Parichay Sharma</h2>
                <p className="fst-italic py-3">
                Mr. Parichay Sharma is a skilled and results-driven advocate with proven experience in litigation and banking dispute resolution.  He possesses a diverse legal background encompassing securities law, criminal law, company law, and white-collar crime, giving him a well-rounded perspective on complex legal challenges. Mr. Sharma has a strong track record of managing legal portfolios for major financial institutions, including American Express Banking Corp, Axis Bank, and Standard Chartered Bank.  He is adept at resolving banking disputes, including those related to loan recovery, fraud, and regulatory compliance. Mr. Sharma is highly effective at developing comprehensive case strategies, utilizing his deep understanding of legal principles and procedures to achieve favorable outcomes for his clients.Mr. Sharma is dedicated to providing his clients with clear, concise, and timely communication. He understands the stress involved in legal matters and strives to guide his clients through the process with empathy and professionalism.
                </p>
                {/* <div className="row">
                  <div className="col-lg-12">
                    <ul>
                      <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span><a href="tel:+91-8655415028">+91 86554 15028</a></span></li>
                      <li style={{ marginLeft: '-20px' }}><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span style={{ wordBreak: 'break-word' }}><a href="mailto:parichay@sc-legal.in">parichay@sc-legal.in</a></span></li>
                    </ul>
                  </div>
                </div> */}
              </div>
              <div className="col-lg-4" style={{ height: '50rem', marginTop: '30px' }}>
                <img src="assets/img/ParichayProfile.png" className="Image-fluid" alt="" style={{ height: '100%' }} />
              </div>
            </div>
            <div className="row gy-4 justify-content-center my-4">
              <div className="col-lg-4" style={{ height: '50rem', marginTop: '30px' }}>
                <img src="assets/img/MohsinProfile.jpg" className="Image-fluid" alt="" style={{ height: '100%' }} />
              </div>
              <div className="col-lg-5 content" style={{ height: '100%', marginTop: '50px' }}>
                <h2>Mohsin Ghaniwala</h2>
                <p className="fst-italic py-3">
                  Mr. Mohsin Ghaniwala is a dynamic and driven first-generation lawyer, carving a niche for himself in the legal arena with his expertise in Criminal Law, Civil Litigation, and General Corporate Matters, including drafting and negotiating agreements. Known for his sharp legal acumen and client-centric approach, Mr. Ghaniwala is committed to delivering practical and effective legal solutions tailored to meet the unique needs of his clients.
                  With a strong foundation in criminal litigation, Mr. Ghaniwala has successfully represented clients in complex criminal cases, ensuring their rights are protected and justice is served. His practice also extends to civil litigation, where he adeptly handles disputes ranging from property conflicts to contractual disagreements, always striving to achieve favorable outcomes for his clients.
                  <br />
                  In the corporate sphere, Mr. Ghaniwala specializes in drafting, reviewing, and negotiating a wide range of agreements, ensuring that businesses operate smoothly and within the bounds of the law. His ability to simplify intricate legal concepts and provide clear, actionable advice has made him a trusted advisor to both individuals and businesses alike.
                </p>
                {/* <div className="row">
                  <div className="col-lg-12">
                    <ul>
                      <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span><a href="tel:+91-8655415028">+91 86554 15028</a></span></li>
                      <li style={{ marginLeft: '-20px' }}><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span style={{ wordBreak: 'break-word' }}><a href="mailto:parichay@sc-legal.in">parichay@sc-legal.in</a></span></li>
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="row gy-4 justify-content-center my-4">
              <div className="col-lg-5 content" style={{ height: '100%', marginTop: '-50px' }}>
                <h2>Arshiya James</h2>
                <p className="fst-italic py-3">
                Ms. Arshiya James is a dedicated and dynamic advocate specializing in Family Law, Civil Law and Criminal Law. As a first-generation lawyer, Ms. James brings a unique blend of fresh perspective and innovation to her work with a strong commitment to serving her clients with empathy and diligence. Ms. James believes in building strong client relationships based on trust and open communication. She takes the time to understand each client's unique circumstances and legal goals. She is committed to making the legal process accessible and understandable for her clients, empowering them to make informed decisions during challenging times. Whether it’s navigating sensitive family matters, resolving civil disputes, or defending criminal cases, Ms. James is a steadfast advocate for her clients’ rights and interests. Advocate Arshiya James is not just a lawyer; she is a compassionate ally who stands by her clients every step of the way.
                </p>
                {/* <div className="row">
                  <div className="col-lg-12">
                    <ul>
                      <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span><a href="tel:+91-8655415028">+91 86554 15028</a></span></li>
                      <li style={{ marginLeft: '-20px' }}><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span style={{ wordBreak: 'break-word' }}><a href="mailto:parichay@sc-legal.in">parichay@sc-legal.in</a></span></li>
                    </ul>
                  </div>
                </div> */}
              </div>
              <div className="col-lg-4" style={{ height: '50rem', marginTop: '30px' }}>
                <img src="assets/img/ArshiyaProfile.jpg" className="Image-fluid" alt="" style={{ height: '100%' }} />
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

export default Founder;