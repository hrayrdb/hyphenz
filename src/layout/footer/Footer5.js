// import Link from "next/link";

// const Footer5 = ({ dark }) => {
//   return (
//     <footer className="main-footer footer-five pt-100">
//       <div className="container container-1290 pb-40">
//         <div className="row justify-content-between">
//           <div className="col-lg-4">
//             <div className="footer-widget footer-about wow fadeInUp delay-0-2s">
//               <div className="footer-logo mb-25">
//                 <Link href="/">
//                   <img
//                     src={
//                       dark
//                         ? "assets/images/logos/footer-logo-white.png"
//                         : "assets/images/logos/footer-logo.png"
//                     }
//                     alt="Logo"
//                   />
//                 </Link>
//               </div>
//               <p>
//                 Unlocking Possibilities Together.
//               </p>
//             </div>
//           </div>
//           <div className="col-xl-3 col-lg-4 col-md-6">
//             <div className="footer-widget footer-info wow fadeInUp delay-0-4s">
//               <ul className="list-style-two">
//                 <li>
//                   <i className="far fa-envelope" />{" "}
//                   <a href="mailto:support@gmail.com">admin@hyphenz.ae</a>
//                 </li>
//                 <li>
//                   <i className="far fa-phone" />{" "}
//                   <a href="callto:+000(123)45688">+971 54 390 1172</a>
//                 </li>
//                 <li>
//                   <i className="far fa-location" />{" "}
//                   <span>707, Bay Square 10, Business Bay Dubai, UAE</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6">
//             <div className="footer-widget newsletter-widget wow fadeInUp delay-0-6s">
//               <form className="footer-newsletter" action="#">
//                 <input type="email" placeholder="Email Address" required />
//                 <button type="submit">
//                   <i className="fas fa-arrow-right" />
//                 </button>
//               </form>
//               <div className="policy">
//                 <input id="privacy-policy" type="checkbox" />
//                 <label htmlFor="privacy-policy">
//                   I agree to the <Link href="/about">Privacy Policy</Link>
//                 </label>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="copyright-area pt-25 pb-15">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6">
//               <div className="footer-copyright-text wow fadeInUp delay-0-2s">
//                 <p>
//                   © 2024 Hyphenz for Project Management Services – All Rights Reserved.
//                 </p>
//               </div>
//             </div>
//             <div className="col-lg-6">
//               <div className="footer-bottom-menu text-lg-end wow fadeInRight delay-0-2s">
//                 <ul>
//                   <li>
//                     <Link href="/">Terms of Use</Link>
//                   </li>
//                   <li>
//                     <Link href="/about">Privacy Policy</Link>
//                   </li>
//                   <li>
//                     <Link href="https://ad-tempo.com" style={{ color: "#74bfba" }}>Designed & Developed by Ad Tempo
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };
// export default Footer5;


import Link from "next/link";

const Footer5 = ({ dark }) => {
  return (
    <footer className="main-footer footer-five pt-100">
      <div className="container container-1290 pb-40">
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <div className="footer-widget footer-about wow fadeInUp delay-0-2s">
              <div className="footer-logo mb-25">
                <Link href="/">
                  <img
                    src={
                      dark
                        ? "assets/images/logos/footer-logo-white.png"
                        : "assets/images/logos/footer-logo.png"
                    }
                    alt="Logo"
                  />
                </Link>
              </div>
              <p>Unlocking Possibilities Together.</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="footer-widget footer-info wow fadeInUp delay-0-4s">
              <ul className="list-style-two">
                <li>
                  <i className="far fa-envelope" />{" "}
                  <a href="mailto:admin@hyphenz.ae">admin@hyphenz.ae</a>
                </li>
                <li>
                  <i className="far fa-phone" />{" "}
                  <a href="callto:+971543901172">+971 54 390 1172</a>
                </li>
                <li>
                  <i className="far fa-location" />{" "}
                  <span>707, Bay Square 10, Business Bay Dubai, UAE</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="footer-widget footer-navigation wow fadeInUp delay-0-6s">
              <h4 className="footer-title">Site Navigation</h4>
              <ul className="footer-menu">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/start">Start</Link>
                </li>
                <li>
                  <Link href="/faqs">FAQS</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area pt-25 pb-15">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="footer-copyright-text wow fadeInUp delay-0-2s">
                <p>
                  © 2024 Hyphenz for Project Management Services – All Rights
                  Reserved.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer-bottom-menu text-lg-end wow fadeInRight delay-0-2s">
                <ul>
                  <li>
                    <Link href="/">Terms of Use</Link>
                  </li>
                  <li>
                    <Link href="/about">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link
                      href="https://ad-tempo.com"
                      style={{ color: "#74bfba" }}
                    >
                      Designed & Developed by Ad Tempo
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer5;
