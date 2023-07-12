import React from 'react';
import HeroBg from "../img/heroBg.png";
import { ServiceHero } from '../utils/ServiceData';


const Service = () => {
  return (
    <>
        <div className=''>
            <img src={HeroBg} alt="Service-heroimage"
                className='w-full h-[26rem] after:backdrop-brightness-50' />

            <div className='md:flex flex-row relative md:px-10 px-4 bottom-24 
            md:space-x-7 space-y-3 md:space-y-0'>

                {
                    ServiceHero && ServiceHero.map((n) => (
                        <div
                            key={n.id}
                            className="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
                            <h1 className='text-4xl font-bold text-orange-300 '>
                                {n.number}
                            </h1>
                            <h5
                                className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                {n.title}
                            </h5>
                            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                {n.description}
                            </p>
                        </div>

                    ))
                }
            </div>

        </div>
    </>
)
}


export default Service;