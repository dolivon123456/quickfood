import React from "react";
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <section className=''>
                <div className="flex justify-between p-3 px-4 md:p-6 md:px-16 bg-primary">
                    <div>
                        <h3 className='text-xs '>
                            Copyright &copy; quickfood {new Date().getFullYear()}. All rights reserved.
                        </h3>
                    </div>
                    <div
                        className='flex flex-row justify-center space-x-3'>
                        <motion.div
                            whileTap={{ scale: .75 }}>
                            <FaFacebook className='w-4 h-4 cursor-pointer' />
                        </motion.div>

                        <motion.div
                            whileTap={{ scale: .75 }}>
                            <FaInstagram className='w-4 h-4 cursor-pointer' />
                        </motion.div>

                        <motion.div
                            whileTap={{ scale: .75 }}>
                            <FaTwitter className='w-4 h-4 cursor-pointer' />
                        </motion.div>

                        <motion.div
                            whileTap={{ scale: .75 }}>
                            <FaTiktok className='w-4 h-4 cursor-pointer' />
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer