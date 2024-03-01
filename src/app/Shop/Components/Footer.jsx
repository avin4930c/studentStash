"use client";
import Link from "next/link";
import { useRouter } from 'next/navigation';
function Footer() {
  function handleClick() {
    const router = useRouter();
    router.refresh();
  }
    return (
      <>
      <hr></hr>
      <section id="instagram" className="padding-small">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">Follow our instagram</h2>
      </div>
      <p>Our official Instagram account <Link href="/"onClick={handleClick}>@Valsco.Tech</Link> or <Link href="/"onClick={handleClick}>Valsco Technology Private
          Limited</Link>
      </p>
      </div>

  </section>

  <section id="shipping-information">
    <hr></hr>
    <div className="container">
      <div className="row d-flex flex-wrap align-items-center justify-content-between">

        <div className="col-md-3 col-sm-6">
          <div className="icon-box">
            <i className="icon icon-return"></i>
            <h4 className="block-title">
              <strong>Money back</strong> Return within 7 days if the product does’nt seem decent
            </h4>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="icon-box">
            <i className="icon icon-tags1"></i>
            <h4 className="block-title">
              <strong>Buy 4 products get 5th</strong> 50% off
            </h4>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="icon-box">
            <i className="icon icon-help_outline"></i>
            <h4 className="block-title">
              <strong>Any questions?</strong> Mediator Contacts ready
            </h4>
          </div>
        </div>
      </div>
    </div>
    <hr></hr>
  </section>
      <footer id="footer">
    <div className="container">
      <div className="footer-menu-list">
        <div className="row d-flex flex-wrap justify-content-between">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer-menu">
              <h5 className="widget-title">StudentStash Exchange</h5>
              <ul className="menu-list list-unstyled">
                <li className="menu-item">
                  <Link href={`/aboutus`} onClick={handleClick}>About us</Link>
                </li>
                <li className="menu-item">
                  <Link href="/" onClick={handleClick}>Conditions </Link>
                </li>
                <li className="menu-item">
                  <Link href="/" onClick={handleClick}>Our Journals</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer-menu">
              <h5 className="widget-title">Customer Service</h5>
              <ul className="menu-list list-unstyled">
                <li className="menu-item">
                  <Link href="/"onClick={handleClick}>FAQ</Link>
                </li>
                <li className="menu-item">
                  <Link href="/contactUs" onClick={handleClick}>Contact</Link>
                </li>
                <li className="menu-item">
                  <Link href="/"onClick={handleClick}>Privacy Policy</Link>
                </li>
                <li className="menu-item">
                  <Link href="/"onClick={handleClick}>Returns & Refunds</Link>
                </li>
                <li className="menu-item">
                  <Link href="/"onClick={handleClick}>Cookie Guidelines</Link>
                </li>

              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer-menu">
              <h5 className="widget-title">Contact Us</h5>
              <p>Do you have any questions or suggestions? <Link href="mailto://bowal.ayan10@gmail.com" onClick={handleClick} className="email">bhowal.ayan10@gmail.com</Link>
              </p>
              <p>Do you need assistance? Give me a call. <br></br>
                <strong>+91 638689089</strong>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer-menu">
              <h5 className="widget-title">Batch of 2024</h5>
              <p>This is a non-profit webiste aimed only to provide Junior College students with amenities at cheap
                price and sustainable way of reusing plasic and other plastic or non-plastic non-retailable products
                usually disposed of my graduating college students</p>
              <div className="social-links">
                <ul className="d-flex list-unstyled">
                  <li>
                    <Link href="/"onClick={handleClick}>
                      <i className="icon icon-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/" onClick={handleClick}>
                      <i className="icon icon-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/" onClick={handleClick}>
                      <i className="icon icon-youtube-play"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/" onClick={handleClick}>
                      <i className="icon icon-behance-square"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr></hr>
  </footer>

  <div id="footer-bottom">
        <div className="container">
          <div className="d-flex align-items-center flex-wrap justify-content-between">
            <div className="copyright">
              <p>Made by <Link href="/" onClick={handleClick}>Ayan Bhowal</Link> Idealised by <Link href="/" onClick={handleClick}>Sanidhya Agarwal</Link></p>
            </div>
            <div className="payment-method">
              <p>Payment options :</p>
              <div className="card-wrap">
                <p>Cash . Gpay . PhonePe . Paytm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
            );
  }

export default Footer;
