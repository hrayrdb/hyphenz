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
                Financial Services
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
                    1/3
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 mx-xl-auto">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Financial Services</span>
                  <h2>Accounting & Bookkeeping</h2>
                </div>
                <div className="content">
                  <p>
                    Whether you are a newly established company or owns a pre-existing establishment, we offer wide range of accounting and book-keeping services including setup of accounting functions from the selection of appropriate accounting software to recording of daily business transactions until generation of customized management reports (Profit & loss accounts, Balance sheet, expenses review analysis, sales review analysis) in line with the international financial reporting standards (IFRS).
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
                    2/3
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 mx-xl-auto">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Financial Services</span>
                  <h2>VAT Registration & Consultation</h2>
                </div>
                <div className="content">
                  <p>
                    We offer assistance and support to register your company for Value Added Tax (“VAT”) registration.
                    We also provide support to setup your VAT account in the Federal Tax Authority (“FTA”) portal and develop a system for your company to record VAT transactions and file monthly VAT returns conveniently.
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
                    3/3
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 mx-xl-auto">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Financial Services</span>
                  <h2>Corporate Tax Registration & Consultation</h2>
                </div>
                <div className="content">
                  <p>
                    Corporate tax registration and consultation services help businesses comply with tax laws, register with authorities, and optimize tax strategies.
                    These services ensure legal compliance, minimize liabilities, and provide expert advice for efficient tax planning.
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
      {/* footer area start */}
    </Layout>
  );
};
export default ServiceDetails;
