"use client"
import Link from 'next/link'
import React from 'react';
function Featured() {
    function handleClick() {
        const router = useRouter();
        router.refresh();
    }
    return (
        <>
        <section id="featured-products" class="product-store padding-large">
            <div class="container">
                <div class="section-header d-flex flex-wrap align-items-center justify-content-between">
                    <h2 class="section-title">Featured Products</h2>
                    <div class="btn-wrap">
                        <Link href="/Shop" onClick={handleClick} class="d-flex align-items-center">View all products <i class="icon icon icon-arrow-io"></i></Link>
                    </div>
                </div>
                <div class="swiper product-swiper overflow-hidden">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="product-item">
                                <div class="image-holder">
                                    <img src="images/product-item1.jpg" alt="Books" class="product-image" />
                                </div>
                                <div class="cart-concern">
                                    <div class="cart-button d-flex justify-content-between align-items-center">
                                        <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                                        </button>
                                        <button type="button" class="view-btn tooltip
                        d-flex">
                                            <i class="icon icon-screen-full"></i>
                                            <span class="tooltip-text">Quick view</span>
                                        </button>
                                        <button type="button" class="wishlist-btn">
                                            <i class="icon icon-heart"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="product-detail">
                                    <h3 class="product-title">
                                        <Link href="/Shop" onClick={handleClick}>Plastic Basket Organiser</Link>
                                    </h3>
                                    <span class="item-price text-primary">Rs40.00</span>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="product-item">
                                <div class="image-holder">
                                    <img src="images/product-item2.jpg" alt="Books" class="product-image" />
                                </div>
                                <div class="cart-concern">
                                    <div class="cart-button d-flex justify-content-between align-items-center">
                                        <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                                        </button>
                                        <button type="button" class="view-btn tooltip
                        d-flex">
                                            <i class="icon icon-screen-full"></i>
                                            <span class="tooltip-text">Quick view</span>
                                        </button>
                                        <button type="button" class="wishlist-btn">
                                            <i class="icon icon-heart"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="product-detail">
                                    <h3 class="product-title">
                                        <Link href="/Shop"onClick={handleClick}>Registers Notes - Lined</Link>
                                    </h3>
                                    <span class="item-price text-primary">$38.00</span>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="product-item">
                                <div class="image-holder">
                                    <img src="images/product-item3.jpg" alt="Books" class="product-image" />
                                </div>
                                <div class="cart-concern">
                                    <div class="cart-button d-flex justify-content-between align-items-center">
                                        <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                                        </button>
                                        <button type="button" class="view-btn tooltip
                        d-flex">
                                            <i class="icon icon-screen-full"></i>
                                            <span class="tooltip-text">Quick view</span>
                                        </button>
                                        <button type="button" class="wishlist-btn">
                                            <i class="icon icon-heart"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="product-detail">
                                    <h3 class="product-title">
                                        <Link href="/Shop" onClick={handleClick}>Plastic Bottles</Link>
                                    </h3>
                                    <span class="item-price text-primary">Rs20.00</span>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="product-item">
                                <div class="image-holder">
                                    <img src="images/product-item4.jpg" alt="Books" class="product-image" />
                                </div>
                                <div class="cart-concern">
                                    <div class="cart-button d-flex justify-content-between align-items-center">
                                        <button type="button" class="btn-wrap cart-link d-flex align-items-center">add to cart <i class="icon icon-arrow-io"></i>
                                        </button>
                                        <button type="button" class="view-btn tooltip
                        d-flex">
                                            <i class="icon icon-screen-full"></i>
                                            <span class="tooltip-text">Quick view</span>
                                        </button>
                                        <button type="button" class="wishlist-btn">
                                            <i class="icon icon-heart"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="product-detail">
                                    <h3 class="product-title">
                                        <Link href="/Shop" onClick={handleClick}>Phone Holder</Link>
                                    </h3>
                                    <span class="item-price text-primary">Rs50.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </section>
        </>

        
    )
}

export default Featured;