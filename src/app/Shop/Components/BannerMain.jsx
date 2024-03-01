"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation';

const BannerMain = () => {
  function handleClick() {
    const router = useRouter();
    router.refresh();
  }
  const pathname = usePathname()
  return (
    <section className="site-banner jarallax min-height300 padding-large" style={{ background: "url(images/hero-image.jpg) no-repeat", backgroundPosition: "top" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="page-title">{pathname == "/Shop" ? "Shop page" : (pathname == "/aboutus" ? "About Us" : "Contact Us")}</h1>
            <div className="breadcrumbs">
              <span className="item">
                <Link href="/" onClick={handleClick}>Home /</Link>
              </span>
              <span className="item">&nbsp;{pathname == "/Shop" ? "Shop" : (pathname == "/aboutus" ? "About" : "Contact")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerMain;