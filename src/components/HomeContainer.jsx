import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {

  return (
      <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-auto' id='home'>
          <div className="py-2 flex-1 flex flex-col items-start justify-center gap-4">
              <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full
              mt-8 md:mt-0'>
                  <p className='text-base text-orange-500 font-semibold'>Bike Delivery</p>

                  {/* Bike delivery image */}

                  <div className='w-6 h-6 rounded-full overflow-hidden bg-white drop-shadow-xl'>
                      <img src={Delivery} alt="delievery" className='w-full h-full object-contain' />
                  </div>
              </div>

              <p className='text-[2.5rem] font-bold tracking-wide text-headingColor'>
                  The Fastest Delivery You Can <span className='text-orange-600 text-[3rem]'>Trust</span>
              </p>

              <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
              Indulge in a delightful culinary experience delivered right to your doorstep. Our service brings you an exquisite selection of mouthwatering dishes prepared with passion and care. Explore a world of flavors and savor the joy of delicious food, just a few taps away!
              </p>

              <button type='button' className='bg-gradient-to-br from-orange-400 to-orange-500 w-full
              md:w-auto px-4 py-2 rounded-md hover:shadow-lg transition-all ease-in-out duration-100'>
                  Order Now
              </button>

          </div>
          <div className="py-2 flex-1 flex items-center relative w-full">
              <img src={HeroBg}
                  className='ml-auto h-420 lg:h-650 w-full lg:w-auto' alt="hero_bg" />
              <div className='w-full h-full absolute top-0 left-20 flex items-center justify-center 
              lg:px-6 py-4 gap-4 flex-wrap'>
                {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="  lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={n.imageSrc}
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20 "
                  alt="I1"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>

                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                  {n.decp}
                </p>

                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">₦</span> {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;