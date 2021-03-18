import React from 'react';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';

const About = () => (
  <Root>
    <div className="about-container">
      {/* Row */}
      <div className="row mt-5 pt-5 about-hero">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
            <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
              <h2 className="font-size-header mb-4">
  One-On-One Virtual Consultation
              </h2>
              <h4 className="font-size-subheader mb-4">
  Your experienced personal jewelry stylist will listen to you and help you choose or craft the perfect piece.
              </h4>
            </div>
          </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/packaging-illustration.jpg" alt="Commerce.js illustration"/>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/tribearth-illustration.jpg" alt="Netlify illustration"/>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">
  Personal Shopping
            </h3>
            <h4 className="font-size-subheader mb-4">
  Discover our assortment of handmade elevated essentials to build your jewelry wardrobe or give as a gift. </h4>
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="row">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">
  Custom Design
</h3>
            <h4 className="font-size-subheader mb-4">
  Work with your personal jewelry stylist to create an original custom design from sketch to finish.
            </h4>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/yabo-illustration.jpg" alt="GitHub illustration"/>
            </div>
          </div>
        </div>
      </div>

      {/* Row 4 */}
<iframe src="https://app.squarespacescheduling.com/schedule.php?owner=22398597" title="Schedule Appointment" width="100%" height="800" frameBorder="0"></iframe><script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
    </div>
    <Footer />
  </Root>
);

export default About;
