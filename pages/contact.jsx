import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
const Contact = () => {
  return (
    <Layout header={5} footer={5} dark>
      {/* Page Banner Start */}
      {/* <PageBanner pageName={"Contact"} /> */}
      {/* Page Banner End */}

      <section
        className="page-banner pt-210 rpt-150 pb-75 rpb-70 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="hero-title mb-100 rmb-50 wow fadeInUp delay-0-2s">
                Contact
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
      {/* Contact Form Area start */}
      <section className="contact-page-area py-80 rpy-80 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <div className="our-location-part rmb-55 wow fadeInUp delay-0-2s">
                <div className="row">
                  <div className="col-xl-10">
                    <div className="section-title mb-60">
                      <span className="sub-title mb-15">Contact Us</span>
                      <h2>Let's Unlock Possibilities!</h2>
                    </div>
                  </div>
                </div>
                <div className="row gap-80 pb-30">
                  <div className="col-sm-6">
                    <div className="our-location-address mb-40">
                      <h5>Dubai, UAE</h5>
                      <p>707, Bay Square 10, Business Bay Dubai                  </p>
                      <a className="mailto" href="mailto:admin@hyphenz.ae">
                        admin@hyphenz.ae
                      </a>
                      <br />
                      <a className="callto" href="callto:+971543901172">
                        <i className="fas fa-phone" style={{ color: "#171717" }} /> +971 54 390 1172
                      </a>
                    </div>
                  </div>
                </div>
                {/* <h4>Follow Us</h4>
                <div className="social-style-two pt-15">
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
                </div> */}
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="contact-page-form form-style-one wow fadeInUp delay-0-2s">
                <div className="section-title mb-35">
                  <span className="sub-title mb-15">Fill The Form</span>
                  <h3 className="text-white">Drop Us a Message</h3>
                </div>
                <form
                  id="contactForm"
                  className="contactForm"
                  action="assets/php/form-process.php"
                  name="contactForm"
                  method="post"
                >
                  <div className="row gap-60 pt-15">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="name">
                          <i className="far fa-user" />
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          placeholder="Full Name"
                          required
                          data-error="Please enter your name"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="phone_number">
                          <i className="far fa-phone" />
                        </label>
                        <input
                          type="text"
                          id="phone_number"
                          name="phone_number"
                          className="form-control"
                          placeholder="Phone"
                          required
                          data-error="Please enter your Number"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="email">
                          <i className="far fa-envelope" />
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="Email Address"
                          required
                          data-error="Please enter your Email Address"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">
                          <i className="far fa-pencil" />
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={2}
                          placeholder="Message"
                          required
                          data-error="Please enter your Message"
                          defaultValue={""}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group pt-5 mb-0">
                        <button
                          type="submit"
                          className="theme-btn style-two w-100"
                        >
                          Send Message<i className="far fa-arrow-right" />
                        </button>
                        <div id="msgSubmit" className="hidden" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form Area end */}
      {/* Location Map Area Start */}
      <div className="contact-page-map wow fadeInUp delay-0-2s">
        <div className="container-fluid">
          <div className="our-location">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8565.603663566713!2d55.280789!3d25.185381!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f68307f7362d5%3A0x1d59e201dc69f737!2sBay%20Square%2010!5e1!3m2!1sen!2sus!4v1732612473918!5m2!1sen!2sus"
              style={{ border: 0, width: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      {/* Location Map Area End */}
      {/* footer area start */}
    </Layout>
  );
};
export default Contact;
