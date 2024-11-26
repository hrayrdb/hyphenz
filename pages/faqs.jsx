import PageBanner from "@/src/components/PageBanner";
import YgencyAccordion from "@/src/components/YgencyAccordion";
import Layout from "@/src/layout/Layout";
import { useState } from "react";
import { Accordion } from "react-bootstrap";

const Faqs = () => {
  const accordionData = [
    {
      id: 1,
      title: "Where can I set up my business in the UAE?",
      content:
        "You can set up your business either as a mainland company or as a freezone company. There are many benefits of choosing for each one.",
    },
    {
      id: 2,
      title: "How long does my company formation take?",
      content:
        "Company formation may take from one week to a month, depending on the type of business and the legal formalities. if you are new to the system when starting the application process. Our expertise can help cut it short to as low as three days.",
    },
    {
      id: 3,
      title: "What are the procedures for business incorporation in the UAE?",
      content: (
        <>
          <p>
            The procedures for business incorporation in the UAE are subject to
            the requirements of each emirate. However, in general, The process of incorporating a commercial business in the UAE goes
            through a series of steps that include the following:
          </p>
          <ul>
            <li> - Identify the nature of the activity.</li>
            <li> - Determine the legal structure.</li>
            <li> - Register the trade name.</li>
            <li> - Request for initial approval.</li>
            <li> - Obtain a security clearance.</li>
            <li> - Choose the location or address of the commercial activity.</li>
            <li> - Obtain additional government approvals.</li>
            <li> - Submit documents and pay the required fees.</li>
          </ul>
        </>
      ),
    },
    {
      id: 4,
      title:
        "What are the taxes and charges imposed on companies and on income in the UAE?",
      content:
        "There are no taxes imposed on companies or on income in the UAE. However, the Corporate Tax Law will be effective from 1 June 2023 with a headline rate of 9%. Fees vary depending on the emirate, the nature of the activity, and the type of license to be issued.",
    },
    {
      id: 5,
      title:
        "Does an individual need to be a UAE resident to qualify as a partner or a manager of a limited liability company (LLC) in the UAE?",
      content:
        "The Commercial Companies Law does not require a partner or a manager of a limited liability company to be a resident of the UAE.",
    },
    {
      id: 6,
      title: "Can a foreign investor have full ownership in all sectors?",
      content:
        "Companies and investors of various nationalities may have full ownership of all economic activities in accordance with the activities identified by the competent local authorities and the list of strategic impact activities.",
    },
    {
      id: 7,
      title:
        "Does full foreign company ownership include all forms of legal structures?",
      content:
        "Companies and investors of various nationalities may assume ownership of all legal structures mentioned in the Commercial Companies Law, such as public joint stock companies, private joint stock companies, limited liability companies, limited partnership companies, and partnership companies.",
    },
    {
      id: 8,
      title:
        "Is it required to appoint a UAE national agent for branches of foreign companies?",
      content:
        "No, a UAE national agent is not required to be appointed by foreign companies wishing to conduct their activities within the UAE.",
    },
    {
      id: 9,
      title:
        "Is it a requirement for the Chairman and the majority of Board members to be Emirati nationals?",
      content:
        "It is not a requirement for the Chairman and the majority of Board members to be Emirati nationals, with due consideration to the requirement set by the Council of Ministers or the competent authority, pursuant to Article (10) regarding strategic impact activities.",
    },
    {
      id: 10,
      title: "Is it permissible for a foreign investor to own a single-shareholder limited liability company?",
      content:
        "Yes, a single natural or legal person may incorporate and own a limited liability company and shall not be liable for its obligations except to the extent of the capital stated in the articles of incorporation.",
    },
    {
      id: 11,
      title: "What are the requirements for establishing a branch of a foreign company?",
      content:
        (
          <>
            <ul>
              <li> - Obtaining initial approval.</li>
              <li> - Completing the registration form and reserving a trade name.</li>
              <li> - Copy of the ID.</li>
              <li> - Copy of the passport of the responsible manager and a no-objection letter from his current sponsor.</li>
              <li> - Approval of other government entities, depending on the activity.</li>
              <li> - Board resolution for establishing the branch and appointing the manager.</li>
              <li> - Copy of the articles of incorporation and commercial registration, attested by the UAE embassy and the Ministry of Foreign.</li>
            </ul>
          </>
        ),
    },
    {
      id: 12,
      title: "What is the maximum number of licenses that may be acquired by a foreigner?",
      content: "There is no maximum limit.",
    },
    {
      id: 13,
      title:
        "What are the requirements for issuing a Golden Visa to an investor in public investments?",
      content:
        (
          <>
            <ul>
              <li> - A deposit of at least two million dirhams (AED 2,000,000) in an investment fund inside the UAE.</li>
              <li> - Establishing a company in the UAE with a capital of not less than two million dirhams (AED 2,000,000); or partnering in an existing/new company with a financial contribution of not less than two million dirhams (AED 2,000,000)            </li>
              <li> - Being the owner of an establishment/company that pays the taxes imposed upon it by the federal government at a value of not less than two hundred and fifty thousand dirhams (AED 250,000) annually.</li>
              <li> - Being a partner in an establishment/company that pays the taxes imposed upon it by the federal government while maintaining a contribution of his share in the said company, equivalent to at least two hundred and fifty thousand dirhams (AED 250,000) from the paid annually; or.</li>
              <li> - Retaining the investment for at least two years from the date of visa issuance.</li>
            </ul>
          </>
        ),
    },
  ];

  const [active, setActive] = useState("collapse0");

  return (
    <Layout dark header={5} footer={5}>
      {/* Page Banner Start */}
      <PageBanner pageName={"Faqs"} />
      {/* Page Banner End */}
      {/* FAQ's Area start */}
      <section className="faq-area pt-130 rpt-100 pb-130 rpb-75 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div>
              <div className="faq-content-part wow fadeInRight delay-0-2s">
                <div className="section-title mb-60">
                  <span className="sub-title mb-15">Asked Questions</span>
                  <h2>Frequently Asked Questions</h2>
                </div>
                <Accordion
                  defaultActiveKey="collapse0"
                  className="accordion"
                  id="faq-accordion-two"
                >
                  {accordionData.map((data, i) => (
                    <YgencyAccordion
                      title={data.title}
                      key={data.id}
                      event={`collapse${i}`}
                      onClick={() =>
                        setActive(
                          active === `collapse${i}` ? "" : `collapse${i}`
                        )
                      }
                      active={active}
                      content={data.content}
                    />
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ's Area end */}
      <section className="contact-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title mb-50 text-center wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Contact Us</span>
                <h2>Let’s Work Together For Your Next Venture</h2>
              </div>
            </div>
            <div className="col-xl-10 col-lg-11">
              <form
                id="teamForm"
                className="form-style-one z-1 rel wow fadeInUp delay-0-3s"
                action="#"
                name="teamForm"
                method="post"
              >
                <div className="row gap-60 pt-15">
                  <div>
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
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
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
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="phone">
                        <i className="far fa-phone" />
                      </label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="form-control"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  {/* <div className="col-md-6 mb-50">
                    <div className="form-group">
                      <select name="select-subject" id="select-subject">
                        <option value="default" selected>
                          Subject
                        </option>
                        <option value="Design">Design</option>
                        <option value="Development">Development</option>
                        <option value="SEO">SEO</option>
                      </select>
                    </div>
                  </div> */}
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="message">
                        <i className="far fa-pencil" />
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows={4}
                        placeholder="Message"
                        required={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group pt-5 mb-0">
                      <button
                        type="submit"
                        className="theme-btn style-two w-100"
                      >
                        Send Message <i className="far fa-arrow-right" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Faqs;

