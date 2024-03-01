function SectionBanner() {
    return (
        <>
        <section class="shoppify-section-banner">
      <div class="container">
        <div class="product-collection">
          <div class="left-content collection-item">
            <div class="products-thumb">
              <img src="images/model.jpg" alt="collection item" class="large-image image-rounded" />
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 product-entry">
              <div class="categories">Fall Semester collection</div>
              <h3 class="item-title">People Leave but their things don't.</h3>
              <p>Take their products and enjoy a good Quality Product at low price</p>
              <div class="btn-wrap">
                <a href="shop.html" class="d-flex align-items-center">shop collection <i class="icon icon-arrow-io"></i>
                </a>
              </div>
            </div>
          </div>
        </div>        
      </div>
    </section>

    <section id="quotation" class="align-center padding-small">
      <div class="inner-content">
        <h2 class="section-title divider">Quote of the day</h2>
        <blockquote>
          <q>Don't Throw the plastic - Instead sell it , recycle it , reuse it.</q>
          <div class="author-name">- Mr . Bhowal</div>
        </blockquote>
      </div>
      </section>
        </>
    )
}

export default SectionBanner;