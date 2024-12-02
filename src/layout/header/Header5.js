import Link from "next/link";
import Nav from "./Nav";
import NavSearch from "./NavSearch";

const Header5 = ({ singleMenu, dark }) => {
  return (
    <header className="main-header menu-absolute header-two">
      {/* <div className="header-top bgc-gray">
        <div className="container container-1620">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <ul className="top-left">
                <li>
                  <i className="far fa-map-marker-alt" /> 707, Bay Square 10, Business Bay Dubai, UAE

                </li>
              </ul>
            </div>
            <div className="col-lg-5">
              <div className="top-right">
                <div className="lang-select">
                  <select name="language" id="language">
                    <option value="English">English</option>
                    <option value="Arabic">Arabic</option>
                    <option value="Bangla">French</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/*Header-Upper*/}
      <div className="header-upper" style={{ backgroundColor: "var(--ygency-secondary-color)" }}>
        <div className="container container-1620 clearfix">
          <div className="header-inner rpy-10 rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link legacyBehavior href="/">
                  <a>
                    <img
                      src={
                        dark
                          ? "assets/images/logos/logo-white.png"
                          : "assets/images/logos/logo.png"
                      }
                      alt="Logo"
                      title="Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer mx-lg-auto clearfix">
              {/* Main Menu */}
              <Nav singleMenu={singleMenu} />
              {/* Main Menu End*/}
            </div>
            {/* Nav Search */}
            {/* <NavSearch /> */}
            {/* Menu Button */}
            <div className="menu-btns">
              {/* <button>
                <i className="far fa-shopping-basket" />
              </button> */}
              <div className="call-anytime">
                <div className="icon">
                  <i className="fas fa-comments-alt" />
                </div>
                <div className="content" style={{
                  color: "var(--ygency-headline-color)",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
                }}>
                  <span>Call</span>
                  +971 54 390 1172
                </div>
              </div>
              {/* menu sidbar */}
              {/* <div className="menu-sidebar">
                <button>
                  <img
                    src="assets/images/icons/toggler-white.svg"
                    alt="Toggler"
                  />
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};
export default Header5;
