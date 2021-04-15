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
  Beautiful Jewelry, Luxury Performance
              </h2>
              <h4 className="font-size-subheader mb-4">
  Luxury beauty is changing. Superior craftsmanship alone is no longer enough — beauty brands must also be agents of change. The ingredients we put in our formulations matter, because clean products free from harmful toxins should be a universal standard. Our impact on the environment matters, because our world is precious. Making products for everyone matters, because we’re only as good as we are inclusive. It’s worth taking business risks to do what’s right. That’s why as a beauty brand in motion, we will continuously evolve, improve and challenge ourselves to be better. <a href="https://shofrica.com/" target="_blank" className="cjs-link" rel="noopener noreferrer">shofrica.com</a>.
              </h4>
            </div>
          </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/wavy-illustration.jpg" alt="Commerce.js illustration"/>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/packaging-illustration.jpg" alt="Netlify illustration"/>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">
  Formulation Philosophy
            </h3>
            <h4 className="font-size-subheader mb-4">
  Shofrica is committed to formulating all products with safety, transparency, education, and inclusivity at the forefront. Every product contains only what’s needed for high-performance results. </h4>

<h4 className="font-size-subheader mb-4"> Safety: Formulating with the safest materials available for the best results possible </h4>

<h4 className="font-size-subheader mb-4"> Transparency: Empowering our customers to make informed decisions </h4>

<h4 className="font-size-subheader mb-4"> Education: Breaking down the ‘what’ and ‘why’ for each ingredient used in our products </h4>

<h4 className="font-size-subheader mb-4"> Inclusivity: Developing products and shades for all skin tones, skin types, ages and genders </h4>

<h4 className="font-size-subheader mb-4"> Cruelty Free: Shofrica will never test products or ingredients on animals.
            </h4>
            <div className="mt-3">
              <a className="px-4 py-3 flex-grow-1 font-color-white about-net" href="https://app.netlify.com/start/deploy?repository=https://github.com/chec/commercejs-nextjs-demo-store" target="_blank">
                Excluded Ingredients
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
  Sustainability
</h3>
            <h4 className="font-size-subheader mb-4">
  We are focused on making the most sustainable choices for our products and shipping materials. Wherever possible, we use post-consumer and recycled materials and minimal plastic. However, we believe we can do better. We are actively engaging resources to incorporate even more post-consumer materials, ocean-bound plastic, and refillable packaging into production. We aren’t perfect, but we are committed to partnering with industry leaders in science, technology and sustainability to set better, cleaner, and more ethical standards across beauty.
            </h4>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/github-illustration.jpg" alt="GitHub illustration"/>
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
