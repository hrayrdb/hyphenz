import YgencyAccordion from "@/src/components/YgencyAccordion";
import Layout from "@/src/layout/Layout";
const ServiceDetails = () => {
  return (
    <Layout header={5} footer={5} dark>
      {/* Page Banner Section Start */}
      <section
        className="page-banner pt-210 rpt-150 pb-65 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="hero-title mb-100 rmb-50 wow fadeInUp delay-0-2s">
                Commercial Office
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner Section End */}
      {/* How We Works start */}
      <section className="how-we-works-area pb-60 rpb-60 rel z-1">
        <div className="container">
          <div className="section-title wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Commercial Office</span>
            <h2>Introduction</h2>
            <div className="text mt-30">
              <p>
                One of our areas of expertise is commercial.
                With dedicated brokers handling specifically this aspect of the market, they are all well versed in pricing, fittings, furnishings and locations.
                We partner with multiple fit out companies to get our client the maximum fit out, for the best pricing.
                We also have years of experience in warehousing, labour camps and staff accommodation.
              </p>
            </div>
          </div>

        </div>
      </section>
      {/* How We Works end */}
      {/* Services Page About Area start */}
      <section className="service-page-about py-30 rpy-30 rel z-1">
        <div className="container">
          <div className="row gap-90 align-items-center">
            <div className="col-lg-6">
              <div className="service-about-image rmb-55 wow fadeInUp delay-0-2s">
                <img
                  src="assets/images/about/1.webp"
                  alt="About"
                />
                <div
                  className="service-about-box bgc-primary"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/work-step-bg.png)",
                  }}
                >
                  {/* <Link legacyBehavior href="/service-details">
                    <a className="read-more">
                      <i className="fal fa-arrow-right" />
                    </a>
                  </Link> */}
                  <h3>
                    1/3
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 mx-xl-auto">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Commercial Office</span>
                  <h2>Buy & Rent</h2>
                </div>
                <div className="content">
                  <p>
                    Is it better to rent or own commercial property? We help you decide what to do and find premises tailored to your needs and area of business.
                  </p>
                  {/* <ul className="list-style-three pt-15 pb-25">
                    <li>Web Design &amp; Development</li>
                    <li>SEO Optimizations</li>
                    <li>Digital Product Design</li>
                  </ul>
                  <Link legacyBehavior href="/about">
                    <a className="read-more mt-10 color-primary">
                      Learn More <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Page About Area end */}
      {/* Services Page About Area start */}
      <section className="service-page-about py-30 rpy-30 rel z-1">
        <div className="container">
          <div className="row gap-90 align-items-center">
            <div className="col-lg-6">
              <div className="service-about-image rmb-55 wow fadeInUp delay-0-2s">
                <img
                  src="assets/images/about/2.webp"
                  alt="About"
                />
                <div
                  className="service-about-box bgc-primary"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/work-step-bg.png)",
                  }}
                >
                  <h3>
                    2/3
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 mx-xl-auto">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Commercial Office</span>
                  <h2>Virtual Office</h2>
                </div>
                <div className="content">
                  <p>
                    A virtual office is a service that enables employees and business owners to work remotely by providing a range of business functions accessible through the internet.
                    It also enables organisations to create and maintain a presence in a desirable location without the need to pay rent for an actual space.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Services Page About Area end */}
      {/* Services Page About Area start */}
      <section className="service-page-about py-30 rpy-30 rel z-1">
        <div className="container">
          <div className="row gap-90 align-items-center">
            <div className="col-lg-6">
              <div className="service-about-image rmb-55 wow fadeInUp delay-0-2s">
                <img
                  src="assets/images/about/3.webp"
                  alt="About"
                />
                <div
                  className="service-about-box bgc-primary"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/work-step-bg.png)",
                  }}
                >
                  <h3>
                    3/3
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 mx-xl-auto">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Commercial Office</span>
                  <h2>Wearhouse</h2>
                </div>
                <div className="content">
                  <p>
                    A warehouse is a building that stores products for packing and shipping preparation. They’re often centrally located to customers, employees, suppliers, and/or vendors, and manage both inbound and outbound products.
                    We help you choose the right warehouse to meet your business needs can take time, research, and resources.
                    Here are the factors we consider when helping you select a warehouse:

                  </p>
                  <ul className="list-style-three pt-15 pb-25">
                    <li>Location.</li>
                    <li>Layout and storage capabilities.</li>
                    <li>Special features (specific number of dock doors and levellers, fire suppression systems, refrigeration or air conditioning, power requirements, and floor loading capabilities)</li>
                    <li>Technology equipment tailored to your business (if any).</li>
                    <li>Flexibility to expand and meet your business’s future logistics needs.</li>
                    <li>Strength of the Landlord which has a significant impact on the success of your organization’s supply chain. We make sure that he/she is well capitalized, responsive, and properly manages and maintains the building.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Page About Area end */}
      {/* footer area start */}
    </Layout>
  );
};
export default ServiceDetails;
