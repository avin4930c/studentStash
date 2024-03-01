"use client";
import Link from "next/link";
import { useRouter } from 'next/navigation';

const Header = () => {
  function handleClick() {
    const router = useRouter();
    router.refresh();
  }
  return (
    <>
      <div className="search-popup">
        <div className="search-popup-container">
          <form role="search" method="get" className="search-form" action="">
            <input type="search" id="search-form" className="search-field" placeholder="Type and press enter" value="" name="s" />
            <button type="submit" className="search-submit"><Link href="#"><i className="icon icon-search"></i></Link></button>
          </form>
          <h5 className="cat-list-title">Browse Categories</h5>
          <ul className="cat-list">
            <li className="cat-list-item">
              <Link href="/Shop" title="Men Jackets" onClick={handleClick}>Sensors</Link>
            </li>
            <li className="cat-list-item">
              <Link href="/Shop" title="Fashion"onClick={handleClick}>Electronics</Link>
            </li>
            <li className="cat-list-item">
              <Link href="/Shop" title="Casual Wears"onClick={handleClick}>Organisers</Link>
            </li>
            <li className="cat-list-item">
              <Link href="/Shop" title="Women"onClick={handleClick}>Water Bottles</Link>
            </li>
            <li className="cat-list-item">
              <Link href="/Shop" title="Trending"onClick={handleClick}>Tiffins</Link>
            </li>
            <li className="cat-list-item">
              <Link href="/Shop" title="Hoodie"onClick={handleClick}>Steamer Boilers</Link>
            </li>
            <li className="cat-list-item">
              <Link href="/Shop" title="Kids"onClick={handleClick}>Soaps and Toileries</Link>
            </li>
          </ul>
        </div>
      </div>
      <header id="header">
        <div id="header-wrap">
          <nav className="secondary-nav border-bottom">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-md-4 header-contact">
                  <p>Let’s talk! <strong>+91 6386189089</strong>
                  </p>
                </div>
                <div className="col-md-4 shipping-purchase text-center">
                  <p>Negotiable Prices and Great Quality Products</p>
                </div>
                <div className="col-md-4 col-sm-12 user-items">
                  <ul className="d-flex justify-content-end list-unstyled">
                    <li>
                      <Link href="/"onClick={handleClick}>
                        <i className="icon icon-user"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/"onClick={handleClick}>
                        <i className="icon icon-shopping-cart"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/"onClick={handleClick}>
                        <i className="icon icon-heart"></i>
                      </Link>
                    </li>
                    <li className="user-items search-item pe-3">
                      <Link href="/"onClick={handleClick} className="search-button">
                        <i className="icon icon-search"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
          <nav className="primary-nav padding-small">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-lg-2 col-md-2">
                  <div className="main-logo">
                    <Link href="/" onClick={handleClick}>
                      <img src="/images/main-logo.png" alt="logo" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-10 col-md-10">
                  <div className="navbar">
                    <div id="main-nav" className="stellarnav d-flex justify-content-end right">
                      <ul className="menu-list">
                        <li className="menu-item has-sub">
                        <Link href="/" className="item-anchor active d-flex align-item-center" data-effect="Home" onClick={handleClick}>Home<i className="icon icon-chevron-down"></i></Link>
                          <ul className="submenu">
                            <li><Link href="/" onClick={handleClick} className="item-anchor active">Home</Link></li>
                          </ul>
                        </li>
                        <li><Link href="/aboutus" className="item-anchor" data-effect="About" onClick={handleClick}>About</Link></li>
                        <li className="menu-item has-sub">
                          <Link href="/Shop" className="item-anchor d-flex align-item-center" onClick={handleClick} data-effect="Shop">Shop<i className="icon icon-chevron-down"></i></Link>
                          <ul className="submenu">
                            <li><Link href="/Shop" className="item-anchor" onClick={handleClick}>Shop</Link></li>
                          </ul>
                        </li>
                        <li><Link href="/contactUs" className="item-anchor" data-effect="Contact" onClick={handleClick}>Contact</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;