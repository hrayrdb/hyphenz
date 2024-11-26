import Layout from "@/src/layout/Layout";
import { sliderProps } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});
const About = () => {
  return (
    <Layout footer={5} dark>
      {/* Page Banner Section Start */}
      <section
        className="hero-area-two pt-220 rpt-150 pb-80 rpb-50 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <h1 className="hero-title mb-100 rmb-50 wow fadeInUp delay-0-2s">
            Welcome
            <span className="arrow">
              <img
                className="wow fadeInLeft delay-0-6s"
                src="assets/images/hero/title-arrow.png"
                alt="Arrow"
              />
            </span>
            <br />To Hyphenz
          </h1>
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-3 col-lg-4">
              <div className="hero-two-content mb-50 wow fadeInRight delay-0-2s">
                <p>
                  Hyphenz Consultancy is a boutique of experts that provides specialized project management solutions.
                  We offer comprehensive consulting services, combining our legal and project management expertise with industry-specific knowledge to deliver exceptional results.
                  <br /> We are primarly based in Dubai, UAE.
                </p>
                <img
                  className="mt-20"
                  src="assets/images/hero/arrow.png"
                  alt="Arrow"
                />
                {/* <div className="authors-text mt-45">
                  <img src="assets/images/hero/author1.png" alt="Author" />
                  <img src="assets/images/hero/author2.png" alt="Author" />
                  <img src="assets/images/hero/author3.png" alt="Author" />
                  <img src="assets/images/hero/author4.png" alt="Author" />
                  <i className="fal fa-plus" />
                  <span className="text">100+ Popular Clients</span>
                </div> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-two-image mb-50 wow zoomIn delay-0-2s">
                <img src="assets/images/hero/slide3.webp" alt="Hero" />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="hero-two-btn mb-50 wow fadeInLeft delay-0-2s">
                <Link legacyBehavior href="/services">
                  <a className="explore-more">
                    <i className="fas fa-arrow-right" />{" "}
                    <span>Explore Services</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Page Banner Section End */}
      {/* Video Area start */}
      {/* <div className="video-area-two rel z-1">
        <div className="container-fluid">
          <div className="video-part style-two mb-40 wow fadeInUp delay-0-2s">
            <img src="assets/images/video/video-two-bg.jpg" alt="Video" />
            <a
              href="https://www.youtube.com/watch?v=9Y7ma241N8k"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 wow fadeInLeft delay-0-2s">
              <div className="client-text text-lg-start text-center mt-40 pb-50">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                emey accusantium doloremque laudantium totam aperiam eaque
                quabillo inventore veritatisey quasi architecto beatae dictasunt
              </div>
              <div className="row">
                <div className="col-xl-10">
                  <div className="client-logo-wrap">
                    <Link legacyBehavior href="/contact">
                      <a className="client-logo-item">
                        <img
                          src="assets/images/client-logos/client-logo-two1.png"
                          alt="Client Logo"
                        />
                      </a>
                    </Link>
                    <Link legacyBehavior href="/contact">
                      <a className="client-logo-item">
                        <img
                          src="assets/images/client-logos/client-logo-two2.png"
                          alt="Client Logo"
                        />
                      </a>
                    </Link>
                    <Link legacyBehavior href="/contact">
                      <a className="client-logo-item">
                        <img
                          src="assets/images/client-logos/client-logo-two3.png"
                          alt="Client Logo"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight delay-0-2s">
              <div className="video-year text-lg-end text-center rel">
                1980
                <img
                  className="leaf-shape"
                  src="assets/images/video/leaf.png"
                  alt="Leaf"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Video Area end */}
      {/* Who We Are start */}
      <section className="who-we-are-area pt-100 rpt-80 pb-75 rpb-45 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-70 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Our</span>
                <h2>Philosophy</h2>
              </div>
            </div>
          </div>
          <div className="row gap-90">
            <div className="col-lg-4 col-md-6">
              <div className="why-choose-item style-two wow fadeInUp delay-0-2s">
                <div className="why-choose-header">
                  <i className="flaticon-creativity" />
                  <h5>Understanding Client Needs
                  </h5>
                </div>
                <p>
                  Taking the time to listen and comprehend clients' goals and challenges to offer effective solutions.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="why-choose-item style-two wow fadeInUp delay-0-4s">
                <div className="why-choose-header">
                  <i className="flaticon-mobile-banking" />
                  <h5>Providing Added Value</h5>
                </div>
                <p>
                  Delivering exceptional benefits and insights beyond expectations to ensure client satisfaction.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="why-choose-item style-two wow fadeInUp delay-0-6s">
                <div className="why-choose-header">
                  <i className="flaticon-optimization-1" />
                  <h5>Tailored Solutions
                  </h5>
                </div>
                <p>
                  Crafting customized strategies and services to meet each client's unique requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Who We Are end */}
      {/* Who We Are start */}
      <section className="who-we-are-area pt-100 rpt-80 pb-75 rpb-45 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-70 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Our</span>
                <h2>Vision</h2>
              </div>
            </div>
          </div>
          <div className="row gap-90">
            <div className="col-lg-4 col-md-6">
              <div className="why-choose-item style-two wow fadeInUp delay-0-2s">
                <div className="why-choose-header">
                  <i className="flaticon-petals" />
                  <h5>Leading Consultancy Firm
                  </h5>
                </div>
                <p>
                  Striving to be the foremost choice for innovative and impactful consulting solutions.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="why-choose-item style-two wow fadeInUp delay-0-4s">
                <div className="why-choose-header">
                  <i className="flaticon-star-symbol" />
                  <h5>Empowering Clients                  </h5>
                </div>
                <p>
                  Committed to enabling clients to reach their full potential through transformative support and guidance.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="why-choose-item style-two wow fadeInUp delay-0-6s">
                <div className="why-choose-header">
                  <i className="flaticon-quote" />
                  <h5>Trusted Partner

                  </h5>
                </div>
                <p>
                  Aiming to foster enduring partnerships built on trust, reliability, and mutual success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Who We Are end */}

      {/* Who We Are start */}
      <section className="who-we-are-area pt-100 rpt-80 pb-75 rpb-45 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-70 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Our</span>
                <h2>Mission</h2>
              </div>
            </div>
          </div>
          <div className="row gap-90">
            <div className="col-lg-4 col-md-6">
              <div className="why-choose-item style-two wow fadeInUp delay-0-2s">
                <div className="why-choose-header">
                  <i className="flaticon-abstract" />
                  <h5>Comprehensive Legal Consultancy
                  </h5>
                </div>
                <p>
                  We provide specialized services to help you successfully manage and resolve legal matters. </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="why-choose-item style-two wow fadeInUp delay-0-4s">
                <div className="why-choose-header">
                  <i className="flaticon-liquid" />
                  <h5>Value-Driven Solutions</h5>
                </div>
                <p>
                  Our mission is to deliver practical advice and solutions that add measurable value while minimizing risks.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="why-choose-item style-two wow fadeInUp delay-0-6s">
                <div className="why-choose-header">
                  <i className="flaticon-brainstorming" />
                  <h5>Client-Centric Approach
                  </h5>
                </div>
                <p>
                  We are committed to optimizing outcomes and ensuring your satisfaction through personalized and effective legal strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Who We Are end */}


      <section className="client-logo-area pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-70 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Our</span>
                <h2>Partners</h2>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="client-logo-wrap">
              <Link
                className="client-logo-item wow fadeInUp delay-0-2s"
                href="https://premier-ecfm.ae/"
              >
                <img
                  src="assets/images/client-logos/premier.png"
                  alt="Premier"
                />
              </Link>
              <Link
                className="client-logo-item wow fadeInUp delay-0-3s"
                href="https://ad-tempo.com/"
              >
                <img
                  src="assets/images/client-logos/adtempo.png"
                  alt="AdTempo"
                />
              </Link>
              <Link
                className="client-logo-item wow fadeInUp delay-0-4s"
                href="https://www.raseelrealestate.ae/"
              >
                <img
                  src="assets/images/client-logos/RRE.png"
                  alt="REE"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Headline area start */}
      <div className="headline-area bgc-primary pt-80 pb-65">
        <div className="container-fluid">
          <div className="headline-wrap marquee">
            <span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Company Formations</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Financial Services</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Legal Advisory</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Compliance &amp; AML/CFT</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Marketing</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Commercial Office</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Website Design</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>IT Solutions</b>
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}

      {/* Team Area start */}
      {/* <section className="team-area pt-130 rpt-100">
        <div className="container-fluid">
          <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/team/member6.jpg" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Patrick V. Schroeder</h4>
                  <span>UI/UX Designer</span>
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="btn-social">
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-3s">
                <div className="image">
                  <img src="assets/images/team/member7.jpg" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Michael A. Braun</h4>
                  <span>UI/UX Designer</span>
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="btn-social">
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/team/member8.jpg" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>James V. Decastro</h4>
                  <span>Senior Marketer</span>
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="btn-social">
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-5s">
                <div className="image">
                  <img src="assets/images/team/member9.jpg" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Troy V. Richardson</h4>
                  <span>Web Designer</span>
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="btn-social">
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="team-member wow fadeInUp delay-0-6s">
                <div className="image">
                  <img
                    src="assets/images/team/member10.jpg"
                    alt="Team Member"
                  />
                </div>
                <div className="content">
                  <h4>Michael A. Braun</h4>
                  <span>Apps Designer</span>
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="btn-social">
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Team Area end */}

      {/* Statistics Area start */}
      {/* <div
        className="statistics-area pt-100 rpt-70 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInRight delay-0-2s">
                <i className="fal fa-check-circle" />
                <Counter end={25} />
                <span className="counter-title">Years Of Experience</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInRight delay-0-3s">
                <i className="fal fa-check-circle" />
                <Counter end={3} extraClass={"k"} />
                <span className="counter-title">Project’s Complete</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInRight delay-0-4s">
                <i className="fal fa-check-circle" />
                <Counter end={48} />
                <span className="counter-title">Professionals Team Member</span>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-6">
              <div className="counter-item counter-text-wrap wow fadeInRight delay-0-5s">
                <i className="fal fa-check-circle" />
                <Counter end={92} />
                <span className="counter-title">Awards Winning</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Statistics Area end */}

      {/* Testimonial Area start */}
      <section className="testimonial-section pt-70 rpt-30">
        <div className="container container-1210">
          <div className="row">
            <div className="col-lg-6">
              <div className="image-border-shape rmb-20 wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/testimonials/testimonials-four.png"
                  alt="Testimonial Left Image"
                />
                {/* <div className="bottom-border" /> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-one-right-part wow fadeInLeft delay-0-2s">
                <Swiper
                  {...sliderProps.testimonialsActiveSwiper}
                  className="testimonials-active"
                >
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> At Hyphenz, we don’t just provide legal services; we deliver peace of mind.
                        With expertise you can trust and solutions tailored to your needs, we stand by your side every step of the way.
                        Your goals become our mission, and your challenges inspire our dedication.
                        Together, we’ll navigate complexities and achieve success with confidence.{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/favicon.png"
                            alt="Favicon"
                          />
                        </div>
                        <div className="author-info">
                          <h4>Message from our Founder.</h4>
                          {/* <span className="designation">CEO &amp; Founder</span> */}
                        </div>
                      </div>
                      {/* <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div> */}
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="testimonial-controls mt-75 rmt-40">
                  <button className="testimonial-prev slick-arrow">
                    <i className="far fa-chevron-left" />
                  </button>
                  <div className="testimonial-dots">
                    <div className="slick-dots"></div>
                  </div>
                  <button className="testimonial-next slick-arrow">
                    <i className="far fa-chevron-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Area end */}
      {/* Client Logo Two start */}

    </Layout>
  );
};
export default About;
