"use client";
import { IndexShopComp } from './Components/IndexShopComp';
import CasualCollection from './Components/casualCollection';
import Header from '../Shop/Components/Header';
import Footer from '../Shop/Components/Footer';
import BillBoard from './Components/BillBoard';
import Featured from './Components/Featured';
import FlashSales from './Components/FlashSales';
import SectionBanner from './Components/sectionBanner';
function ShopPage() {
    return (
        <>
            <main>
                <Header />
                <BillBoard />
                <Featured />
                <CasualCollection />
                <IndexShopComp />
                <FlashSales />
                <SectionBanner />
                <Footer />
            </main>
        </>
    )
}

export default ShopPage;