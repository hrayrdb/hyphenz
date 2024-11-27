import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import React, { useState, useEffect } from "react";

const Start = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [options, setOptions] = useState([]);

  const emirateList = [
    "I Don’t Know!",
    "Abu Dhabi",
    "Dubai",
    "Sharjah",
    "Ajman",
    "Umm Al Quwain",
    "Fujairah",
    "Ras Al Khaimah",
  ];

  const freezoneList = [
    "I Don’t Know!",
    "Dubai South",
    "International Free Zone Authority",
    "Dubai Multi Commodities Center",
    "Sharjah Airport Intl Free Zone",
    "Sharjah Media City",
    "Ras Al Khaimah Economic Zone",
    "Umm Al Quwain Free Trade Zone",
    "Dubai Airport Free Zone",
    "Dubai World Trade Centre",
    "Dubai Silicon Oasis",
    "Jebel Ali Free Zone",
    "Abu Dhabi Airport Free Zone",
    "Khalifa Industrial Zone Abu Dhabi (KIZAD)",
    "Abu Dhabi Global Market",
    "Twofour54",
    "Industrial City of Abu Dhabi",
    "Dubai Internet City",
    "Dubai Academic City",
    "Dubai Biotech Research Park",
    "Dubai Design District",
    "Gold and Diamond Park",
    "Dubai Healthcare City",
    "Dubai Industrial City",
    "Dubai International Financial Centre",
    "Dubai Knowledge Village",
    "Dubai Media City",
    "Dubai Outsource Zone",
    "Dubai Studio City",
    "Dubai Techno Park",
    "International Media Production Zone",
    "Hamriyah Free Zone",
    "Ajman Free Zone",
    "Fujairah Free Zone",
    "Fujairah Creative City",
  ];

  const handleSelection = (type) => {


    setSelectedType(type);

    setOptions(type === "Mainland" ? emirateList : freezoneList);
  };

  return (
    <Layout header={5} footer={5} dark>
      {/* Page Banner Start */}
      <PageBanner pageName={"Start"} />
      {/* Page Banner End */}
      {/* Contact Form Area start */}
      <section className="contact-page-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div>
              <div className="contact-page-form form-style-one wow fadeInUp delay-0-2s">
                <div className="section-title mb-35">
                  <span className="sub-title mb-15">Fill The Form</span>
                  <h3>Start Form</h3>
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
                    {/* Business Location Type Selection */}
                    <div className="col-md-12 pb-25">
                      <div className="form-group">
                        <h6 className="pb-30 pt-30">Where do you want to start your business?</h6>
                        <div className="d-flex justify-content-center  gap-3">
                          <button
                            type="button"
                            className={`btn ${selectedType === "Mainland" ? "btn-primary" : "btn-outline-primary"}`}
                            onClick={() => handleSelection("Mainland")}
                            style={{ fontSize: "25px" }}
                          >
                            Mainland
                          </button>
                          <button
                            type="button"
                            className={`btn ${selectedType === "Freezone" ? "btn-primary" : "btn-outline-primary"}`}
                            onClick={() => handleSelection("Freezone")}
                            style={{ fontSize: "25px" }}
                          >
                            Freezone
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Dynamic Dropdown */}
                    {selectedType && (
                      <div className="col-md-12 pb-25">
                        <div className="form-group">
                          <h6 className="pb-30 pt-30">Select a location</h6>
                          <select
                            name="businessLocation"
                            id="business-location"
                            className="select-dropdown"
                          >
                            {options.map((option, index) => (
                              <option key={index} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    )}
                    <div className="col-md-12 pb-25">
                      <div className="form-group">
                        <h6 className="pb-30 pt-30">What kind of activity do you want?</h6>
                        <select
                          name="message"
                          id="message"
                          className="form-control"
                          required
                          data-error="Please select an option"
                        >
                          <option value="" disabled selected>
                            Select
                          </option>
                          <option value="Agriculture">Agriculture</option>
                          <option value="Industry / Manufacturing">Industry / Manufacturing</option>
                          <option value="Trade & Commerce">Trade & Commerce</option>
                          <option value="Finance">Finance</option>
                          <option value="Vocational / Craftsman">Vocational / Craftsman</option>
                          <option value="Real estate">Real estate</option>
                          <option value="Contracting">Contracting</option>
                          <option value="Facility Management">Facility Management</option>
                          <option value="Interior Design">Interior Design</option>
                          <option value="Tourism">Tourism</option>
                          <option value="Education">Education</option>
                          <option value="Health">Health</option>
                          <option value="Sports">Sports</option>
                          <option value="Art">Art</option>
                          <option value="Technology">Technology</option>
                        </select>
                        <div className="help-block with-errors" />
                      </div>
                    </div>

                    <div className="col-md-12  pb-25">
                      <div className="form-group">
                        <h6 className="pb-30 pt-30">What is the Legal type of the company?</h6>
                        <select
                          name="message"
                          id="message"
                          className="form-control"
                          required
                          data-error="Please select an option"
                        >
                          <option value="" disabled selected>
                            Select
                          </option>
                          <option value="Limited Liability Company">Limited Liability Company</option>
                          <option value="Sole Establishment">Sole Establishment</option>
                          <option value="Public Joint Stock Company">Public Joint Stock Company</option>
                          <option value="Private Joint Stock Company">Private Joint Stock Company</option>
                          <option value="I don’t know.">I don’t know.</option>
                        </select>
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12 pb-25">
                      <div className="form-group">
                        <h6 className="pb-30 pt-30">What is the number of partners, including you?</h6>

                        <select
                          name="message"
                          id="message"
                          className="form-control"
                          required
                          data-error="Please select an option"
                        >
                          <option value="" disabled selected>
                            Select
                          </option>
                          <option value="1-3">1-3</option>
                          <option value="4-7">4-7</option>
                          <option value="8-10">8-10</option>
                        </select>
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12 pb-25">
                      <div className="form-group">
                        <h6 className="pb-30 pt-30">Are there any UAE or GCC nationals?</h6>

                        <select
                          name="message"
                          id="message"
                          className="form-control"
                          required
                          data-error="Please select an option"
                        >
                          <option value="" disabled selected>
                            Select
                          </option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12 pb-25">
                      <div className="form-group">
                        <h6 className="pb-30 pt-30">Where do you plan to offer your service?</h6>

                        <select
                          name="message"
                          id="message"
                          className="form-control"
                          required
                          data-error="Please select an option"
                        >
                          <option value="" disabled selected>
                            Select
                          </option>
                          <option value="Within the UAE">Within the UAE</option>
                          <option value="Outside the UAE">Outside the UAE</option>
                          <option value="Both">Both</option>

                        </select>
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12 pb-25">
                      <div className="form-group">
                        <h6 className="pb-30 pt-30">Do you already have a logo/brand?</h6>

                        <select
                          name="message"
                          id="message"
                          className="form-control"
                          required
                          data-error="Please select an option"
                        >
                          <option value="" disabled selected>
                            Select
                          </option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group pt-5 mb-0">
                        <button
                          type="submit"
                          className="theme-btn style-two w-100"
                        >
                          Send<i className="far fa-arrow-right" />
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
      <div className="contact-page-map mb-120 rpb-90 wow fadeInUp delay-0-2s">
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
export default Start;
