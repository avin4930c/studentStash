"use client";
import Link from "next/link";
import { useRouter } from 'next/navigation';


function FlashSales() {
    function handleClick() {
        const router = useRouter();
        router.refresh();
    }
    return (
        <>
            <section id="flash-sales" class="product-store padding-large">

                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">Difference in orginal prices</h2>
                    </div>
                    <div class="swiper product-swiper flash-sales overflow-hidden">

                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="product-item">
                                    <img src="images/selling-products9.jpg" alt="Books" class="product-image" />
                                    <div class="cart-concern">
                                        <div class="cart-button d-flex justify-content-between align-items-center">
                                            <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                                            </button>
                                            <button type="button" class="view-btn tooltip d-flex">
                                                <i class="icon icon-screen-full"></i>
                                                <span class="tooltip-text">Quick view</span>
                                            </button>
                                            <button type="button" class="wishlist-btn">
                                                <i class="icon icon-heart"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="discount">50% Off</div>
                                    <div class="product-detail">
                                        <h3 class="product-title">
                                            <Link href="/Shop" onClick={handleClick}>Phone Holder</Link>
                                        </h3>
                                        <div class="item-price text-primary">
                                            <del class="prev-price">Rs100.00(Amazon)</del>Rs50.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="product-item">
                                    <img src="images/selling-products10.jpg" alt="Books" class="product-image" />
                                    <div class="cart-concern">
                                        <div class="cart-button d-flex justify-content-between align-items-center">
                                            <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                                            </button>
                                            <button type="button" class="view-btn tooltip d-flex">
                                                <i class="icon icon-screen-full"></i>
                                                <span class="tooltip-text">Quick view</span>
                                            </button>
                                            <button type="button" class="wishlist-btn">
                                                <i class="icon icon-heart"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="discount">80% Off</div>
                                    <div class="product-detail">
                                        <h3 class="product-title">
                                            <Link href="/Shop" onClick={handleClick}>Closet Organiser</Link>
                                        </h3>
                                        <div class="item-price text-primary">
                                            <del class="prev-price">Rs200.00</del>Rs40.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="product-item">
                                    <img src="images/selling-products11.jpg" alt="Books" class="product-image" />
                                    <div class="cart-concern">
                                        <div class="cart-button d-flex justify-content-between align-items-center">
                                            <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                                            </button>
                                            <button type="button" class="view-btn tooltip d-flex">
                                                <i class="icon icon-screen-full"></i>
                                                <span class="tooltip-text">Quick view</span>
                                            </button>
                                            <button type="button" class="wishlist-btn">
                                                <i class="icon icon-heart"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="discount">20% Off</div>
                                    <div class="product-detail">
                                        <h3 class="product-title">
                                            <Link href="/Shop" onClick={handleClick}>Registers</Link>
                                        </h3>
                                        <div class="item-price text-primary">
                                            <del class="prev-price">Rs95.00</del>Rs75.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="product-item">
                                    <img src="images/selling-products12.jpg" alt="Books" class="product-image" />
                                    <div class="cart-concern">
                                        <div class="cart-button d-flex justify-content-between align-items-center">
                                            <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                                            </button>
                                            <button type="button" class="view-btn tooltip d-flex">
                                                <i class="icon icon-screen-full"></i>
                                                <span class="tooltip-text">Quick view</span>
                                            </button>
                                            <button type="button" class="wishlist-btn">
                                                <i class="icon icon-heart"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="discount">10% Off</div>
                                    <div class="product-detail">
                                        <h3 class="product-title">
                                            <Link href="/Shop" onClick={handleClick}>Water Boiler</Link>
                                        </h3>
                                        <div class="item-price text-primary">
                                            <del class="prev-price">Rs450.00</del>Rs100.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="product-item">
                                    <img src="images/selling-products8.jpg" alt="Books" class="product-image" />
                                    <div class="cart-concern">
                                        <div class="cart-button d-flex justify-content-between align-items-center">
                                            <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                                            </button>
                                            <button type="button" class="view-btn tooltip d-flex">
                                                <i class="icon icon-screen-full"></i>
                                                <span class="tooltip-text">Quick view</span>
                                            </button>
                                            <button type="button" class="wishlist-btn">
                                                <i class="icon icon-heart"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="discount">10% Off</div>
                                    <div class="product-detail">
                                        <h3 class="product-title">
                                            <Link href="/Shop" onClick={handleClick}>Soaps or Medicine</Link>
                                        </h3>
                                        <div class="item-price text-primary">
                                            <del class="prev-price">Rs200.00 +</del>Rs20.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default FlashSales;