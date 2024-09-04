// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Section4 = () => {
  const [sliderValue, setSliderValue] = useState(10000);
  const [followers, setFollowers] = useState(1);
  const [products, setProducts] = useState(1);

  const handleFollowersChange = (e) => {
    setFollowers(e.target.value);
  };
  const handleProductsChange = (e) => {
    setProducts(e.target.value);
  };

  return (
    <section className="w-full h-auto flex bg-[#e5f0f1] ">
      <div className="container mx-auto lg:w-[75vw] md:w-[90vw] h-full flex flex-col my-8">
        {/* heading */}
        <div className="flex w-full h-auto justify-center items-center text-h3 font-bold my-16">
          <p>ESTIMATE EARNING POTENTIAL</p>
        </div>
        <div className="flex flex-col w-full h-auto ">
          {/* col-1 */}
          <div className="flex flex-row justify-around  my-8">
            <div className="flex flex-col w-1/2 gap-4 items-center">
              <p className="text-body1 font-semibold">
                How many followers do you have?
              </p>
              <input
                type="range"
                min="10"
                max="1000"
                step="1"
                value={followers}
                onChange={handleFollowersChange}
                className="slider w-full bg-gray-200 appearance-none cursor-pointer range-lg dark:bg-gray-700"
              />
              <button className=" w-16 py-2 px-4  text-[#003c3c] rounded-2xl shadow-xl shadow-[#003c3c]">
                {followers.toLocaleString()}k{" "}
              </button>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-h4 font-semibold">Monthly Earning</p>
              <p className="text-h1 font-bold">
                ₹{(sliderValue * 2.85).toLocaleString()}
              </p>
            </div>
          </div>
          {/* col-2 */}
          <div className="flex flex-row justify-around my-8 ">
            <div className="flex flex-col w-1/2 gap-4 items-center">
              <p className="text-body1 font-semibold">
                How many products do you list monthly?
              </p>
              <input
                type="range"
                min="1"
                max="100"
                step="1"
                value={products}
                onChange={handleProductsChange}
                className="slider w-full  bg-gray-200  appearance-none cursor-pointer range-lg dark:bg-gray-700"
              />
              <button className=" w-16 py-2 px-4  text-[#003c3c] rounded-2xl shadow-xl shadow-[#003c3c]">
                {products.toLocaleString()}
              </button>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-h4 font-semibold">Yearly Earning</p>
              <p className="text-h1 font-bold"> ₹8730000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
