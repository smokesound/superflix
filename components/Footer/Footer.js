import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer
      className={`text-center text-lg-start  text-muted ${styles.footerBg} `}
    >
      <div className={`container-fluid ${styles.shade}`}>
        <div className="row  justify-content-center">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <p className="h3 text-light text-center">
              There’s even more to watch.
            </p>
            <p className="lead text-light text-center">
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </p>
            <div className="col-12 text-center">
              <button className={`btn ${styles.btnRed}`} type="submit">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">FAQ</h6>
              <p>
                <a href="#!" className="text-reset">
                  Investor Relations
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Ways to watch
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Corporate information
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Only on Superflix
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Help Center
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Jobs
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Terms of Use
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Contact Us
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> Jakarta, JS 10012, ID
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                info@superflix.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-print me-3"></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4">
        © 2022 Copyright
        <a className="text-reset fw-bold"> superflix.com</a>
      </div>
    </footer>
  );
};

export default Footer;
