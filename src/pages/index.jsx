import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/vendor/aos/aos.css';
import '../assets/css/desc.css';
import '../assets/css/media.css';
import '../assets/css/onepage-scroll.css';

const Index = () => {
  const [isAccepted, setIsAccepted] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  return (
    <>
      <div className="disclaimer-container" style={{ paddingTop: '100px', maxHeight: '80vh', overflowY: 'auto' }}>
        <div 
          className="disclaimer-box"
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            backgroundColor: '#fff',
            padding: '30px',
            paddingTop: '0px',
            borderRadius: '4px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e0e0e0'
          }}
        >
          <div 
            className="title-def"
            style={{
              marginBottom: '20px',
              borderBottom: '2px solid #f0f0f0',
              paddingBottom: '10px'
            }}
          >
            <br/>
            <p style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#000', /* Changed color */
              margin: 0
            }}>
              Disclaimer
            </p>
          </div>
          <p style={{
            fontSize: '14px',
            lineHeight: '1.8',
            color: '#666',
            marginBottom: '25px',
            fontFamily: 'Open Sans, sans-serif'
          }}>
            The Bar Council of India does not permit advertisement or solicitation by advocates in any form or
            manner. By accessing this website, <a href='https://jsgpartners.in'>jsgpartners.in</a>, you acknowledge
            and confirm that you are seeking information relating to JSG Partners on your own accord and that
            there has been no form of solicitation, advertisement or inducement by JSG Partners or its members.
            The content of this website is for informational purposes only and should
            not be interpreted as soliciting or advertisement. No material/information provided
            on this website should be construed as legal advice. JSG Partners shall not be liable
            for consequences of any action taken by relying on the material/information provided on this website.
            The contents of this website are the intellectual property of JSG Partners.
          </p>
          <div 
            className="custom_checkbox"
            style={{
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px'
            }}
          >
            <input
              type="checkbox"
              checked={isAccepted}
              onChange={(e) => setIsAccepted(true)}
              id="accept"
              required
              style={{
                marginTop: '4px'
              }}
            />
            <label 
              htmlFor="accept"
              style={{
                fontSize: '14px',
                color: '#666',
                cursor: 'pointer',
                userSelect: 'none'
              }}
            >
              <span id="disclaimer_accept">I accept the above.</span>
            </label>
            {!isAccepted && (
              <div 
                className="error"
                style={{
                  color: '#dc3545',
                  fontSize: '12px',
                  marginTop: '4px'
                }}
              >
                Please accept the above
              </div>
            )}
          </div>
          <div 
            className="btn-wrp"
            style={{
              textAlign: 'center',
              marginTop: '30px'
            }}
          >
            <Link
              to="/home"
              className={`btn ${!isAccepted ? 'disabled' : ''}`}
              onClick={(e) => !isAccepted && e.preventDefault()}
              style={{
                padding: '10px 30px',
                backgroundColor: '#ababab', // Changed button color
                color: '#333',
                borderRadius: '4px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                opacity: isAccepted ? '1' : '0.5',
                cursor: isAccepted ? 'pointer' : 'not-allowed',
                fontSize: '14px',
                fontWeight: '500',
                border: 'none',
                display: 'inline-block',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}
            >
              PROCEED TO WEBSITE
            </Link>
          </div>
        </div>
      </div>

      <section
        id="hero"
        className="hero d-flex flex-column justify-content-center align-items-center"
        data-aos="fade"
        data-aos-delay="1500"
      >
        {/* <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
            </div>
          </div>
        </div> */}
      </section>

      <main id="main" data-aos="fade" data-aos-delay="1500">
      </main>

      <div className="text-center">
        <button type="submit" style={{ backgroundColor: '#fff' }}>Send</button>
      </div>

      <Link
        to="#"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </Link>

      <div 
        id="preloader"
        style={{
          display: isLoading ? 'flex' : 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2000,
          transition: 'opacity 0.5s ease-in-out',
          opacity: isLoading ? '1' : '0'
        }}
      >
        <div className="line"></div>
      </div>
      <style>
        {`
          .header-social-links a:hover {
            background-color: #fff !important;
            color: white !important;
          }
        `}
      </style>
    </>
  );
};

export default Index;