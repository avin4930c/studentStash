"use client";
import Link from "next/link";
import { useRouter } from 'next/navigation';

const CasualCollection = () => {
  function handleClick() {
    const router = useRouter();
    router.refresh();
}
  return (
    <>
    <section id="latest-collection">
      <div class="container">
        <div class="product-collection row">
          <div class="col-lg-7 col-md-12 left-content">
            <div class="collection-item">
              <div class="products-thumb">
                <img src="images/collection-item1.jpg" alt="collection item" class="large-image image-rounded" />
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 product-entry">
                <div class="categories">casual collection</div>
                <h3 class="item-title">Arduinos and Sensors</h3>
                <p>Buy Sensors and other Electronic Items at very cheap prices for your Next Semester's J Component</p>
                <div class="btn-wrap">
                  <Link href="/Shop" onClick={handleClick} class="d-flex align-items-center">shop collection <i class="icon icon-arrow-io"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-12 right-content flex-wrap">
            <div class="collection-item top-item">
              <div class="products-thumb">
                <img src="images/collection-item2.jpg" alt="collection item" class="small-image image-rounded" />
              </div>
              <div class="col-md-6 product-entry">
                <div class="categories">Basic Collection</div>
                <h3 class="item-title">Bottles</h3>
                <div class="btn-wrap">
                  <Link href="/Shop" onClick={handleClick} class="d-flex align-items-center">shop collection <i class="icon icon-arrow-io"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div class="collection-item bottom-item">
              <div class="products-thumb">
                <img src="images/collection-item3.jpg" alt="collection item" class="small-image image-rounded" />
              </div>
              <div class="col-md-6 product-entry">
                <div class="categories">Best Selling Product</div>
                <h3 class="item-title">Registers</h3>
                <div class="btn-wrap">
                  <Link href="/Shop" onClick={handleClick} class="d-flex align-items-center">shop collection <i class="icon icon-arrow-io"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="subscribe" class="padding-small">
      <div class="container">
        
          <div class="block-text col-md-6">
            <div class="section-header">
              <h2 class="section-title">Chat With the Selling Senior and Negotiate</h2>
            </div>
            <p>Don't wanna pay as much as the price listed after seeing the condition of the product? No worries - chat directly with the Student who wants to sell and bargain!!</p>
          </div>  
      </div>
    </section>
    </>
  )
}

export default CasualCollection;