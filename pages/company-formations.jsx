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
                Company Formations
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
                    1/9
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 mx-xl-auto">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Company Formations</span>
                  <h2>Business Setup</h2>
                </div>
                <div className="content">
                  <p>
                    Dubai is one of the most prosperous cities in the world right now. However, starting a business anywhere is a very tough act.
                    This becomes more troublesome when you are in Dubai. This is because there is high competition.
                    But if you do and perform all the necessary things required to develop your business setup in Dubai properly, you are guaranteed to get a proper boost to your business in no time.
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
                    2/9
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 mx-xl-auto">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Company Formations</span>
                  <h2>Mainland Company Setup</h2>
                </div>
                <div className="content">
                  <p>
                    Setting up a Mainland company in UAE is not simple unless you have an expert to guide you through all the dos and dont’s.
                    Hyphenz professional experts will drive through the complete process along with the required documentation to set up a Dubai Mainland company.
                    We help our clients to establish their Dubai Mainland business step by step.
                    First of all, you have to register the name of your company.
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
                    3/9
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 mx-xl-auto">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Company Formations</span>
                  <h2>Freezone Company Setup</h2>
                </div>
                <div className="content">
                  <p>
                    Freezone company is registered with specific free zone area in each emirate of UAE.
                    With HYPHENZ, you will set up your Free zone business in UAE faster and in the most convenient manner with 100% foreign ownership and no tax liability.
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
                    4/9
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 mx-xl-auto">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Company Formations</span>
                  <h2>Offshore Company Setup</h2>
                </div>
                <div className="content">
                  <p>
                    An offshore company is generally formed with an intention of operating outside of its registered jurisdiction and the location of its ultimate ownership.
                    There are three principal jurisdictions offering Offshore Companies in the UAE: Ras Al Khaimah (RAK), the Jebel Ali Free Zone (JAFZA), and Ajman. All are “tax free” jurisdictions that levy no income tax or corporate tax and permit 100% foreign ownership.
                    The UAE has Double Tax Treaty agreements with over 40 other countries.
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
                  src="assets/images/about/5.webp"
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
                    5/9
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 mx-xl-auto">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Company Formations</span>
                  <h2>Market & Feasibility Studies</h2>
                </div>
                <div className="content">
                  <p>
                    Hyphenz offers Market & Financial Feasibility Study services to local and international companies and brands that are seeking to either enter or expand in the Dubai, UAE, Gulf region, or Europe.
                    Our Feasibility Studies services are tailored to specific needs of clients and are prepared by a an experienced team of feasibility study consultants in Dubai. We assess:

                  </p>
                  <ul className="list-style-three pt-15 pb-25">
                    <li>Market Entry Strategies</li>
                    <li>Business Modelling</li>
                    <li>Economic Outlook</li>
                    <li>Market Outlook</li>
                    <li>Consumer Behaviour (Needs & Demands)</li>
                    <li>Supply Chain & Distribution Strategies</li>
                    <li>Financial Projections</li>
                    <li>Business & Marketing Strategies</li>
                  </ul>
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
      {/* Services Page About Area start */}
      <section className="service-page-about py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row gap-90 align-items-center">
            <div className="col-lg-6">
              <div className="service-about-image rmb-55 wow fadeInUp delay-0-2s">
                <img
                  src="assets/images/about/6.webp"
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
                    6/9
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 mx-xl-auto">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Company Formations</span>
                  <h2>Customs</h2>
                </div>
                <div className="content">
                  <p>
                    You are willing to start a business in the UAE. You must know about the UAE Customs Laws.
                    There are many items that are prohibited under this law.
                    You need to get registered first by Dubai Customs and then you will be able to activate trade business.
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
                  src="assets/images/about/7.webp"
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
                    7/9
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 mx-xl-auto">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Company Formations</span>
                  <h2>WPS Payroll Setup</h2>
                </div>
                <div className="content">
                  <p>
                    Registered with The Ministry of Human Resources & Emiratization (“MOHRE”), your company needs to be in compliance with the Wages Protection System (“WPS”), to make monthly salary payments to the personnel, through a hassle-free process, our team will assist you to register your organization for WPS system.
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
                  src="assets/images/about/8.webp"
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
                    8/9
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 mx-xl-auto">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Company Formations</span>
                  <h2>Immigration & Visa / PRO</h2>
                </div>
                <div className="content">
                  <p>
                    Obtaining UAE Residency Visa – Except for UAE and GCC national citizens, other nationalities must obtain a UAE residence visa to legally Live / Work in Dubai and other emirates.
                    For many employed expats, the company that employs them will sponsor them for a UAE residence visa OR you can setup your own company (Free zone or a Local LLC company) and get the residency visa based on being the owner of your company.
                    A residence visa is also mandatory to obtain a driving license, register a car, apply for a PO Box, to Buy a property, open a bank account in the UAE and so on.
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
                  src="assets/images/about/9.webp"
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
                    9/9
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 mx-xl-auto">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Company Formations</span>
                  <h2>Bank Account Opening Assistance</h2>
                </div>
                <div className="content">
                  <p>
                    We offer hassle-free assistance and services related to corporate bank account opening assistance in the UAE. We have partnered with reliable local banks in the UAE to facilitate you in setting up your corporate bank account.
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
