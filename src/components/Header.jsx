import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import { IoMdCart } from 'react-icons/io';
import { MdAdd, MdLogout } from 'react-icons/md';
import { motion } from 'framer-motion';
import { Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';
import { useStateValue } from '../context/StateProvider';
import { actionType } from "../context/reducer";
import { useState } from 'react';
import { About } from './About';
import { Menu } from './Menu';
import { Service } from './Service';



const Header = () => {

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    //dispatch providerData by using the useStateValue custome hook I created in the context folder
    const [{ user, cartShow, cartItems, About, Menu, Service }, dispatch] = useStateValue();

    const [isMenu, setIsMenu] = useState(false);

    const Login = async () => {
        if (!user) {
            const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider)
            //dispatch providerData
            dispatch({
                type: actionType.SET_USER,
                user: providerData[0]
            });
            
            localStorage.setItem('user', JSON.stringify(providerData[0]));
        } else {
            setIsMenu(!isMenu)
        }
    };

    const Logout = () => {
        setIsMenu(false);
        localStorage.removeItem('user');

        dispatch({
            type: actionType.SET_USER,
            user: null,
        })
       
    }

    const showCart = () => {
        dispatch({
            type: actionType.SET_CART_SHOW,
            cartShow: !cartShow,
        });

    }
              
    return (
        <header className='fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary' >
            {/* desktop & tablet */}
            <div className='hidden md:flex w-full h-full items-center justify-between' >
                <Link to={'/MainContainer'} className="flex items-center gap-2">
                    <img src={Logo} alt="Logo" className='w-10 object-cover' />
                    <p className='text-headingColor text-xl font-bold'>
                        QuickFood
                    </p>
                </Link>

                <div className="flex items-center gap-8">
                    {/* navlinks list */}
                    <motion.ul
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 200 }}
                        className='flex items-center gap-6'>
                        <Link to={"/"}>
                            <li className="text-lg text-textColor hover:text-headingColor duration-100 
                            cursor-pointer"
                                onClick={() => setIsMenu(false)}>
                                Home
                            </li>
                        </Link>
                        <Link to={"/Menu"}>
                            <li className="text-lg text-textColor hover:text-headingColor duration-100 
                            cursor-pointer"
                                onClick={(Menu)}>
                                Menu
                            </li>
                        </Link>
                        <Link to={"/About"} >
                            <li className="text-lg text-textColor hover:text-headingColor 
                            duration-100 cursor-pointer"
                                onClick={(About)}>
                                About Us
                            </li>
                        </Link>
                        <Link to={"/Service"}>
                            <li className="text-lg text-textColor hover:text-headingColor duration-100 
                            cursor-pointer"
                                onClick={(Service)}>
                                Service
                            </li>
                        </Link>

                        {/* <Link to={"login"}>
                            <li className="text-lg text-textColor hover:text-headingColor duration-100 
                            cursor-pointer"
                                onClick={() => setIsMenu(false)}>
                                Login
                            </li>
                        </Link> */}

                    </motion.ul>

                    {/* cart icon */}
                    <motion.div
                        whileTap={{ scale: 0.75 }}
                        className="relative flex items-start justify-center"
                        onClick={showCart}>
                        <IoMdCart className='text-textColor text-2xl cursor-pointer' />
                        {
                            cartItems && cartItems.length > 0 && (
                                <div className='absolute -top-2 -right-2  w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                                    <p className="text-xs text-white font-semibold"> {cartItems.length} </p>
                                </div>
                            )
                        }
                    </motion.div>

                    {/* avatarImage + framer motion to tapping */}
                    <div className="relative">
                        <motion.div className='flex items-center space-x-5'>
                            <motion.img
                                whileTap={{ scale: 0.6 }}
                                src={user ? user.photoURL : Avatar} //if user is signed in display user image.
                                alt="userprofile"
                                className='w-10 min-w-[40px] h-10 min-h-[40x] drop-shadow-2xl cursor-pointer rounded-full'
                                onClick={Login} />
                            <p>
                                {user ? user.displayName : "Username"}
                            </p>
                        </motion.div>

                        {
                            isMenu && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.6 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.6 }}
                                    className='flex flex-col w-40 bg-primary shadow-xl rounded-lg absolute
                        top-12 right-0 '>
                                    {/* render this only if the user is an admin */}
                                    {
                                        user && user.email === 'dolivon555@gmail.com' && (
                                            <Link to={'/createItem'}>
                                                <p className='flex items-center px-4 py-2 gap-3 cursor-pointer hover:bg-slate-100
                            transition-all duration-100 ease-in-out text-textColor text-base'
                                                    onClick={() => setIsMenu(false)}>
                                                    New Item <MdAdd />
                                                </p>
                                            </Link>
                                        )
                                    }
                                    <p className='flex items-center px-4 py-2 gap-3 cursor-pointer hover:bg-slate-100
                            transition-all duration-100 ease-in-out text-textColor text-base'
                                        onClick={Logout}>
                                        Logout <MdLogout />
                                    </p>
                                </motion.div>
                            )
                        }
                    </div>
                </div>

            </div>


            {/* mobile phone  */}
            <div className="flex items-center justify-between md:hidden w-full h-full p-5" >
                {/* cart icon */}
                <motion.div
                    whileTap={{ scale: 0.75 }}
                    className="relative flex items-start justify-center"
                    onClick={showCart}>
                    <IoMdCart className='text-textColor text-2xl cursor-pointer' />
                    {
                        cartItems && cartItems.length > 0 && (
                            <div className='absolute -top-2 -right-2  w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                                <p className="text-xs text-white font-semibold"> {cartItems.length} </p>
                            </div>
                        )
                    }
                </motion.div>
                {/* link image */}
                <Link to={'/'} className="flex items-center gap-2">
                    <img src={Logo} alt="Logo" className='w-10 object-cover' />
                    <p className='text-headingColor text-xl font-bold'>
                        QuickFood
                    </p>
                </Link>

                {/* avatarImage + framer motion to tapping */}
                <div className="relative">
                    <motion.img
                        whileTap={{ scale: 0.6 }}
                        src={user ? user.photoURL : Avatar} //if user is signed in display user image.
                        alt="userprofile"
                        className='w-10 min-w-[40px] h-10 min-h-[40x] drop-shadow-2xl cursor-pointer rounded-full'
                        onClick={Login} />

                    {
                        isMenu && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.6 }}
                                className='flex flex-col w-40 bg-primary shadow-xl rounded-lg absolute
                        top-12 right-0 '>
                                {/* render this only if the user is an admin */}
                                {
                                    user && user.email === 'dolivon555@gmail.com' && (
                                        <Link to={'/createItem'}>
                                            <p className='flex items-center px-4 py-2 gap-3 cursor-pointer hover:bg-slate-100
                            transition-all duration-100 ease-in-out text-textColor text-base'>
                                                New Item <MdAdd />
                                            </p>
                                        </Link>
                                    )
                                }
                                {/* navlinks list */}
                                <ul
                                    className='flex flex-col'>
                                    <li className="text-lg text-textColor hover:text-headingColor duration-100 
                        transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2">
                                        Home
                                    </li>
                                    <motion.li className="text-lg text-textColor hover:text-headingColor duration-100 
                        transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2">
                                    <Link to={'/Menu'} >
                                        Menu
                                    </Link>
                                    </motion.li>
                                    <motion.li className="text-lg text-textColor hover:text-headingColor duration-100 
                        transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2">
                                    <Link to={'/About'} >
                                        About Us
                                    </Link>
                                    </motion.li>
                                    <motion.li className="text-lg text-textColor hover:text-headingColor duration-100 
                        transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2">
                                    <Link to={'/Service'} >
                                        Service
                                    </Link>
                                    </motion.li>
                                </ul>
                                <p className='flex items-center px-4 py-2 gap-3 cursor-pointer bg-slate-500 justify-center hover:bg-slate-100 text-white transition-all duration-100 ease-in-out text-base'
                                    onClick={Logout}>
                                    Logout <MdLogout />
                                </p>
                            </motion.div>
                        )
                    }
                </div>
            </div>

          
        </header>
    )
}

export default Header