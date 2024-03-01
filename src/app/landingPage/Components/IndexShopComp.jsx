import { IndexProductItem } from './IndexProductItem';
import productDetails from './IndexShopDetails';

function IndexShopComp() {
    return (
        <>
            <section id="selling-products" className="product-store bg-light-grey padding-large">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Best selling products</h2>
                    </div>

                    <div className="tab-content">
                        <div id="all" data-tab-content className="active">
                            <div className="row d-flex flex-wrap">
                                {productDetails.map((product, index) => (
                                    <IndexProductItem key={index} prodObj={product} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* testmonials */}
            <section id="testimonials" class="padding-large no-padding-bottom">
                <div class="container">
                    <div class="reviews-content">
                        <div class="row d-flex flex-wrap">
                            <div class="col-md-2">
                                <div class="review-icon">
                                    <i class="icon icon-right-quote"></i>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="swiper testimonial-swiper overflow-hidden">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <div class="testimonial-detail">
                                                <p>“Bhai har saal kitte students kitti saari cheezen aisi hi fek kar jaate hai which are so useful for the junior students.”</p>
                                                <div class="author-detail">
                                                    <div class="name">By Akshit Negi , 4th Year CSE with Information Technology</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="testimonial-detail">
                                                <p>“Guys , mere paas befaaltu ke unused saabun pade hue hai - ghar wapsi mai in cheezon ke liye jagah nhi hai , 10-20rs mai lelo - bahar se mehenge padenge”</p>
                                                <div class="author-detail">
                                                    <div class="name">By Ayush Mishra  , 4th Year ECE</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="testimonial-detail">
                                                <p>“idli dosa sambhar ille inga punga ide na ninne kare nhi aorga irrukey - na unnai kadalikaren.this website la very useful paningla”</p>
                                                <div class="author-detail">
                                                    <div class="name">By Aditya Mukundan  , 4th Year ECE</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-arrows">
                                    <button class="prev-button">
                                        <i class="icon icon-arrow-left"></i>
                                    </button>
                                    <button class="next-button">
                                        <i class="icon icon-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export { IndexShopComp };