import React from "react";
import Image from "next/image";
const ProductCard = () => {
  return (
    <section className="w-full flex">
      <div>
        <input type="checkbox" name="/" id="" />
      </div>
      <div className="flex justify-between px-3 max-md:flex-col max-md:gap-2">
        <div>
          <img src="/bottle.jpg" alt="product-img" width="full" height="full" className="max-md:w-[200px] max-md:h-[200px]"/>
        </div>
        <div className="flex flex-col justify-between pl-[60px] gap-5 max-lg:h-[300px] max-md:gap-2 max-md:pl-0 max-md:justify-normal max-md:h-[180px]">
          <div className="flex flex-col items-center max-md:items-start">
            <h2 className="text-2xl max-lg:text-lg">PLASTIC BOTTLES</h2>
            <p className="text-2xl text-gray-400 max-lg:text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              nobis nisi vitae quam quis temporibus veniam quibusdam quia iusto
              voluptates.
            </p>
          </div>
          <div className="w-full h-[50px] bg-[#EAEAEA] flex justify-between items-center font-bold text-lg px-8 max-lg:text-sm max-lg:px-2">
            <h2>M.R.P</h2>
            <h3>R.s 80</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
