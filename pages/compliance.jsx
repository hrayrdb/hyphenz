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
                Compliance & AML/CFT
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
                  <h3>
                    1/2
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 mx-xl-auto">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Compliance & AML/CFT</span>
                  <h2>Assistance with ad hoc regulatory requests</h2>
                </div>
                <div className="content">
                  <p>
                    Sometimes your company would face regulatory requirements demanding immediate action for an effective solution. This might arise a as a result of:
                  </p>
                  <ul className="list-style-three pt-15 pb-25">
                    <li>Feedback request or thematic review by the regulator.</li>
                    <li>Tight deadlines around regulatory reporting.</li>
                    <li>Specific request for information.</li>
                    <li>Cases around ALM/CFT about which the MLROs and their team do not possess the required technical expertise.</li>
                  </ul>
                  <p>
                    Hyphenz will provide you with assistance on any specific request from the regulator or other parties around AML/CFT. Below are some specific examples where our team has responded to requests of these type:
                  </p>
                  <ul className="list-style-three pt-15 pb-25">
                    <li>Assistance in drafting replies to regulator(s).</li>
                    <li>Assistance with selecting remote onboarding tools.</li>
                    <li>Compilation of CDD information for a particular supplier.</li>
                    <li>Designing an internal procedure following a specific request by a counterparty.</li>
                  </ul>
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
                  <h3>
                    2/2
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 mx-xl-auto">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Compliance & AML/CFT</span>
                  <h2>Due Diligence</h2>
                </div>
                <div className="content">
                  <p>
                    Compliance due diligence is the process of conducting a thorough investigation, audit, or analysis of a company's compliance with regulatory bodies, both governmental and non-governmental. It essentially seeks to establish whether a company is following the rules. <br />
                    Issues which are now commonly analysed by compliance due diligence include:

                  </p>
                  <ul className="list-style-three pt-15 pb-25">
                    <li>Anti-corruption laws.</li>
                    <li>Environmental laws.</li>
                    <li>Data protection laws.</li>
                    <li>Antitrust laws.</li>
                    <li>Trade regulations</li>
                    <li>Employee safety regulations.</li>
                    <li>Product (or ingredient) safety regulations.</li>
                  </ul>
                  <p>
                    Compliance becomes more important to companies every day, reflected by compliance costs, which have risen far in excess of the average company’s revenue over the past decade. As always, good documentation is key.

                    Hyphenz helps your business manage its compliance documents, ensuring that they’re secure and up to date.
                  </p>
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
