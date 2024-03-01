"use client";
import Link from "next/link";
import { useRouter } from 'next/navigation';

function BillBoard() {
    function handleClick() {
        const router = useRouter();
        router.refresh();
    }
    return (
        <section id="billboard" class="overflow-hidden">

            <button class="button-prev">
                <i class="icon icon-chevron-left"></i>
            </button>
            <button class="button-next">
                <i class="icon icon-chevron-right"></i>
            </button>
            <div class="swiper main-swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" style={{
                        backgroundImage: "url('/images/banner1.jpg')",
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                        <div class="banner-content">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-6">
                                        <h2 class="banner-title">StudentStash Exchange</h2>
                                        <p>Buy Almost New Products at cheap Prices from College Seniors who would rather throw such recyclable products </p>
                                        <div class="btn-wrap">
                                            <Link href="/Shop" onClick={handleClick} class="btn btn-light btn-medium d-flex align-items-center" tabindex="0">Shop it now <i class="icon icon-arrow-io"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide" style={{
                        backgroundImage: "url('/images/banner2.jpg')",
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                        <div class="banner-content">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-6">
                                        <h2 class="banner-title">चतरा चीज़ लेनी देनी</h2>
                                        <p>Transforming campus clutter into community treasures at Student Stash Exchange.</p>
                                        <div class="btn-wrap">
                                            <Link href="/Shop" onClick={handleClick} class="btn btn-light btn-light-arrow btn-medium d-flex align-items-center" tabindex="0">Shop it now <i class="icon icon-arrow-io"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BillBoard;