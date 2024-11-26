import Link from "next/link";

const PageBanner = ({ pageName }) => {
  // Define background images for different pages
  const backgroundImages = {
    Faqs: "url(assets/images/banner/faqs.webp)",
    About: "url(assets/images/banner/about.webp)",
    Services: "url(assets/images/banner/services.webp)",
    Contact: "url(assets/images/banner/contact.webp)",
    Default: "url(assets/images/banner/default.webp)", // Default image if no match
  };

  return (
    <section
      className="page-banner-area overlay pt-220 rpt-150 pb-170 rpb-100 rel z-1 bgs-cover text-center"
      style={{
        backgroundImage: backgroundImages[pageName] || backgroundImages.Default,
      }}
    >
      <div className="container">
        <div className="banner-inner rpt-10">
          <h2 className="page-title wow fadeInUp delay-0-2s">{pageName}</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center wow fadeInUp delay-0-4s">
              <li className="breadcrumb-item">
                <Link legacyBehavior href="/">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active">{pageName}</li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
