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
  Shofrica
              </h2>
              <h4 className="font-size-subheader mb-4">
  Inspired by discovery, the team behind Shofrica have sought out some of the most talented craftspeople in jewelry. We are a people-first ethical jewelry brand and tech-powered manufacturing platform built to connect artisans in Kenya with the global market. We use mobile technology to connect marginalized Kenyan artisans directly to the global marketplace. Unlike centralized factory production, we use technology to enable the human workforce.
              </h4>
  <div className="mt-3">
  <a className="px-4 py-3 flex-grow-1 font-color-white about-net" href="https://app.netlify.com/start/deploy?repository=https://github.com/chec/commercejs-nextjs-demo-store" target="_blank">
  SHOP COLLECTION
</a>
</div>
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
  Tribearth
            </h3>
            <h4 className="font-size-subheader mb-4">
  Tribearth is a socially conscious jewelry business that creates a community of empowered women & youth who produce handmade products in a sustainable and ethical environment. Using a moralistic and economic approach, Tribearth creates a challenging voice against the detrimental impact of fast fashion and inequality faced by stigmatized women & youth. </h4>
            <div className="mt-3">
              <a className="px-4 py-3 flex-grow-1 font-color-white about-net" href="https://app.netlify.com/start/deploy?repository=https://github.com/chec/commercejs-nextjs-demo-store" target="_blank">
                SHOP COLLECTION
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="row">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">
  Yabo Jewelry
</h3>
            <h4 className="font-size-subheader mb-4">
  Designed in Frankfurt and handcrafted in Nairobi, the Yabo brand is reinventing stories of culture and nature through the art of jewelry. Yabo is commited to creating high-quality unisex and inclusive fine jewelry. Each piece reflects designer Sita Harrie's core values - living boldly, respecting heritage and celebrating the very best craftmanship the world has to offer.
            </h4>
<div className="mt-3">
  <a className="px-4 py-3 flex-grow-1 font-color-white about-net" href="https://app.netlify.com/start/deploy?repository=https://github.com/chec/commercejs-nextjs-demo-store" target="_blank">
  SHOP COLLECTION
</a>
</div>
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

    </div>
    <Footer />
  </Root>
);

export default About;
