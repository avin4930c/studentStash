import Image from "next/image";
// Importing the component
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <section>

      {/* ----------------------------- */}

      {/* Adjust the width and height accordingly for the div below */}

      <div className="flex justify-between max-md:flex-col max-md:gap-16 md:mr-5 mx-5 " style={{color: "black"}}>
        <div className="pl-4 w-[60%] h-full max-sm:w-full max-md:w-full">
          {/* The top part of the div */}

          <div className="w-full mb-7 h-[80px] border-[3px] py-14 flex items-center justify-between">
            <div className="pl-4 max-md:pl-2">
              <input type="checkbox" name="select-all" />
              <label className="ml-3 font-bold text-lg max-md:text-base max-md:ml-2 max-sm:text-xs">
                1/2 Items Selected
              </label>
            </div>
            <div className="pr-4 max-sm:pr-1">
              <span className="hover:cursor-pointer text-lg mr-2 max-md:text-sm max-sm:text-xs max-sm:mr-0">REMOVE</span> | {" "}
              <span className="hover:cursor-pointer text-lg ml-2 max-md:text-sm max-sm:text-xs max-sm:ml-0">
                MOVE TO WISHLIST
              </span>
            </div>
          </div>

          {/* ---------------------------------- */}
          <div className="flex flex-col gap-3 h-[560px] overflow-y-auto m-2 p-3">
            {/* inserted the cards statically for now */}
            <ProductCard />
            <ProductCard />
          </div>
        </div>

        {/* The right side of the cart page */}
        {/* To refer the parts check the first class name*/}

        <div className="cart-right w-full md:w-[30%] h-full max-md:mb-10">
          <div className="coupons-section w-full p-3 border-2 border-slate-300">
            <h2 className="text-2xl font-bold">COUPONS</h2>
            <div className="apply-coupon flex justify-between items-center pt-5 ">
              <input type="text" name="coupon-input" id="coupon-input" className="w-full px-2 max-sm:w-48 xl:w-72 max-md:w-64  border-2 border-black rounded-lg py-2 bg-[#AEB7B6]" />
              <button className="ml-2 max-sm:mt-0 max-lg:w-28 max-lg:text-xl py-[2px] xxl:px-5 xl:px-2 md:px-1 font-semibold text-3xl border-2 border-black rounded-2xl">APPLY</button>
            </div>
          </div>
          <div className="price-section border-2 border-slate-300 mt-5 leading-10 text-xl">
            <ul className="mt-5">
              <li><div className="flex justify-between"><div className="bill-description pl-3 text-start">PRICE DETAILS</div><div className="bill-price pr-3 text-end">(1 ITEM)</div></div></li>
              <li><div className="flex justify-between"><div className="bill-description pl-3 text-start">TOTAL MRP</div><div className="bill-price pr-3 text-end">Rs. 80.00</div></div></li>
              <li><div className="flex justify-between"><div className="bill-description pl-3 text-start">DISCOUNT</div><div className="bill-price pr-3 text-end">Rs. 0.00</div></div></li>
              <li><div className="flex justify-between"><div className="bill-description pl-3 text-start">COUPON DISCOUNT</div><div className="bill-price pr-3 text-end">- Rs. 10.00</div></div></li>
              <li><div className="flex justify-between"><div className="bill-description pl-3 text-start">SHIPPING FEE</div><div className="bill-price pr-3 text-end">Rs. 40.00</div></div></li>
            </ul>

            <hr className="mt-12 border-1 border-black border-rounded w-[80%] m-auto my-5" />

            <div className="cart-bottom flex justify-between mt-16"><div className="bill-description pl-3 text-start">TOTAL AMOUNT</div><div className="bill-price pr-3 text-end"> Rs. 110.00</div></div>
            <div className="flex justify-center items-center mt-8 mb-5"><button className="bg-black border-2 border-black py-2 text-white font-semibold text-3xl w-4/5">Place Order</button></div>
          </div>
        </div>
      </div>
    </section>
  );
}