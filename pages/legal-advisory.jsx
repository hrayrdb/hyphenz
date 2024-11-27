import YgencyAccordion from "@/src/components/YgencyAccordion";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
const ServiceDetails = () => {
  const [active, setActive] = useState("collapse0");
  return (
    <Layout header={5} footer={5} dark>
      {/* Page Banner Section Start */}
      <section
        className="page-banner pt-210 rpt-150 pb-25 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="hero-title style-two mb-100 rmb-50 wow fadeInUp delay-0-2s">
                Legal Advisory
                <img
                  className="mxw-10 leaf"
                  src="assets/images/banner/leaf.png"
                  alt="Leaf"
                />
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner Section End */}
      {/* Services Page About Area start */}
      <section className="service-page-about py-130 rpy-100 rel z-1">
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
                    1/4
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 mx-xl-auto">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Legal Advisory</span>
                  <h2>Cross-Border Advisor</h2>
                </div>
                <div className="content">
                  <p>
                    HYPHENZ maintains a cross-border practice with legal professionals licensed to practice in the United Arab Emirates, MENA region, and Europe. They serve as trusted counsel, bringing a wealth of international knowledge and offering unique multinational insights, resources, and relationships to clients worldwide.
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
      <section className="service-page-about py-130 rpy-100 rel z-1">
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
                  {/* <Link legacyBehavior href="/service-details">
                    <a className="read-more">
                      <i className="fal fa-arrow-right" />
                    </a>
                  </Link> */}
                  <h3>
                    2/4
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 mx-xl-auto">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Legal Advisory</span>
                  <h2>Drafting Contracts</h2>
                </div>
                <div className="content">
                  <p>
                    We create contracts for companies in UAE. Our contract drafting service is also for organizations, institutions and individuals that follow the law instated by any jurisdiction whether locally or internationally. Our specialty is drafting and reviewing contracts. We pay distinctive attention to ensure that each client receives contracts that are free of defects or legal violations according to the Law in the United Arab Emirates.
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
      <section className="service-page-about py-130 rpy-100 rel z-1">
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
                  {/* <Link legacyBehavior href="/service-details">
                    <a className="read-more">
                      <i className="fal fa-arrow-right" />
                    </a>
                  </Link> */}
                  <h3>
                    3/4
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 mx-xl-auto">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Legal Advisory</span>
                  <h2>Government Licensing</h2>
                </div>
                <div className="content">
                  <p>
                    With our UAE business registration and licensing services, we will take care of the licensing process on your behalf. We can assist you to obtain the license for your professional, commercial, industrial, or other types of business structure in the Freezone, Mainland, or Off-shore jurisdictions.
                    Depending on the nature of the business you conduct, we will help you obtain the right license for your business; this will ensure its smooth operations, renewal, and maintenance.
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
      <section className="service-page-about py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row gap-90 align-items-center">
            <div className="col-lg-6">
              <div className="service-about-image rmb-55 wow fadeInUp delay-0-2s">
                <img
                  src="assets/images/about/4.webp"
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
                    4/4
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 mx-xl-auto">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Legal Advisory</span>
                  <h2>Intellectual Property/Patent & Trademark</h2>
                </div>
                <div className="content">
                  <p>
                    The decision to pursue a patent, trademark, or copyright depends on the type of intellectual property you’re trying to shield. Whether it’s a new product, logo, or creative work, registering your idea with the appropriate body can help ensure you enjoy the fruits of your labour.
                    At HYPHENZ, we offer a complete range of intellectual property services that aims to tackle possible infringement and protect your creative work. The following is our scope of work:

                  </p>
                  <ul className="list-style-three pt-15 pb-25">
                    <li>Copyright Registration and Protection</li>
                    <li>Trademark & Logo Registration</li>
                    <li>Patent Registration</li>
                    <li>Trade Secret Protection</li>

                  </ul>
                  <p>
                    Once you assign to your business, we understand your business and specific requirement. Our intellectual property consultant with the domain expertise then takes over the project and provides the solution based on your need.
                  </p>
                  {/* <Link legacyBehavior href="/about">
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

      {/* footer area start */}
    </Layout>
  );
};
export default ServiceDetails;
