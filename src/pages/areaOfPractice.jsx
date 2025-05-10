import React, { useState, useEffect } from 'react';

function AreaOfPractice() {
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
      {/* Header content remains the same */}
      <header 
        id="header" 
        className="header d-flex align-items-center fixed-top" 
        style={{ backgroundColor: '#fff' }}
      >
        {/* ... existing header content ... */}
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <a href="home" className="logo d-flex align-items-center me-auto me-lg-0">
          <img src="assets/img/jsg_logo.png" alt="" style={{ height: "80px", width:'50px', marginLeft: "20px" }} />
          </a>
          <nav 
            id="navbar" 
            className={`navbar ${isMobileNavActive ? 'mobile-nav-active' : ''}`}
            style={{ 
              backgroundColor: isMobileNavActive ? 'white' : 'transparent',
              color: 'black' 
            }}
          >
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
            <a href="https://www.linkedin.com/in/sc-legal" className="linkedin">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
          <i 
            className={`mobile-nav-toggle ${isMobileNavActive ? 'bi bi-x mobile-nav-hide' : 'bi bi-list mobile-nav-show'}`}
            onClick={toggleMobileNav}
          ></i>
        </div>
      </header>
      <br /><br /><br />
      <main id="main">
        <section id="services" className="services" style={{background: 'white', padding: '40px 0'}}>
          <div className="container">
            <div className="container position-relative">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 text-center">
                  <h2 style={{
                    fontSize: 60, 
                    marginBottom: 50, 
                    color: '#000',
                    fontWeight: 'bold'
                  }}>
                    Area of Practice
                  </h2>
                </div>
              </div>
            </div>
            <div className="row g-4">
              {[
                {
                  icon: "bi bi-award-fill",  // Changed to Liberty icon
                  title: "Civil Litigation",
                  description: "Resolution of property disputes, contractual disagreements, and other civil matters."
                },
                {
                  icon: "bi-bank",
                  title: "Banking and Financial Law",
                  description: "Dispute resolution, CoC meetings, and liquidation proceedings for financial institutions."
                },
                {
                  icon: "bi-building",
                  title: "Corporate Law",
                  description: "Drafting and reviewing agreements, handling corporate disputes, and advising on compliance matters."
                },
                {
                  icon: "bi-people",
                  title: "Family Law",
                  description: "Guidance on sensitive issues such as divorce, custody, and inheritance. Corporate Law: Drafting and reviewing agreements, handling corporate disputes, and advising on compliance matters."
                },
                {
                  icon: "bi-shield-lock",
                  title: "Criminal Law",
                  description: "Defense in high-stakes criminal cases, white-collar crimes, and human rights violations."
                },
                {
                  icon: "bi-briefcase",  // Changed from bi-handshake to bi-briefcase
                  title: "General Legal Advisory",
                  description: "Personalized legal advice for individuals and businesses."
                }
              ].map((service, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div className="service-card" style={{
                    position: 'relative',
                    borderRadius: '10px',
                    padding: '50px 30px',
                    height: '100%',
                    minHeight: '320px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    overflow: 'hidden'
                  }}>
                    <div className="card-content" style={{
                      position: 'relative',
                      zIndex: 1,
                      height: '100%',
                      width: '100%'
                    }}>
                      <div className="icon-container" style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        backgroundColor: 'rgb(77, 102, 129)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '30px',
                        transition: 'background-color 0.5s ease'
                      }}>
                        <i 
                          className={`bi ${service.icon}`} 
                          style={{ 
                            fontSize: '35px',
                            color: 'black',
                            transition: 'color 0.5s ease'
                          }}
                        ></i>
                      </div>
                      <h4 style={{
                        fontSize: '24px',
                        fontWeight: '600',
                        marginBottom: '25px',
                        color: '#000'
                      }}>
                        {service.title}
                      </h4>
                      <p style={{
                        margin: 0,
                        color: '#000',
                        fontSize: '16px',
                        lineHeight: '1.6'
                      }}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <style>
        {`
          .service-card {
            background-color: #f0f0f0;
            position: relative;
            transition: all 0.5s ease;
          }

          .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 100%;
            background-color: rgb(156, 171, 189);
            transition: bottom 0.5s ease;
          }

          .service-card:hover::before {
            bottom: 0;
          }

          .service-card:hover .icon-container {
            background-color: #fff !important;
          }

          .service-card:hover .icon-container i {
            color: white !important;
          }
        `}
      </style>
    </div>
  );
}

export default AreaOfPractice;