import React, { useEffect, useState } from 'react'
import LogoWhite from '../assets/LogoWhite.svg'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';

function Header() {

    const {t, i18n} = useTranslation();
    const [isFixed, setIsFixed] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          window.scrollY >= 200? setIsFixed(true) : setIsFixed(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    const [visible, setVisible] = useState(false);
    let menuClass = 'h-full w-fit bg-white fixed top-0 right-0 z-30 flex flex-col gap-12 py-8 font-mono text-center px-[70px] lg:hidden transition-all duration-300 ease-in-out counterLink';
    if (!visible) menuClass='h-full w-fit bg-white fixed top-0 right-[-100%] flex flex-col gap-12 py-8 font-mono text-center px-[70px] lg:hidden z-30 transition-all duration-300 ease-in-out';

    let backdrop = 'w-[100vw] h-[100vh] block z-10 backdrop-blur-sm lg:hidden fixed top-0 right-0 transition all duration-300 ease-in-out delay-200';
    if (!visible) backdrop = 'w-[100vw] h-[100vh] fixed hidden z-10 backdrop-filter-none top-0 right-[-100%]transition all duration-300 ease-in-out';

  return (
    <div>
        {/**To do: Add internationalization */}
        <div className='preHeader' id='preHeader'>
            <div className='content flex justify-between'>
                <span>{t('preHeader')}</span>
                <span className='flex gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                    </svg>
                    {
                        i18n.resolvedLanguage === "fr" ? (<span onClick={()=>changeLanguage("en")} className='cursor-pointer'>English</span>) :
                        (<span onClick={()=>changeLanguage("fr")} className='cursor-pointer'>Français</span>)
                    }
                </span>
            </div>
        </div>
        <div className='w-full absolute top-6 ' id='header'>
            <nav className='content py-5 flex justify-between items-center'>
                <Link to="/"><img src={LogoWhite} alt="" className='w-[100px] h-[100px]' /></Link>
                <span className='hidden lg:flex gap-[60px] text-white items-center'>
                    <a href="/#about">{t('menu.link1')}</a>
                    <a href="/#activities">{t('menu.link2')}</a>
                    <a href="/#join">{t('menu.link3')}</a>
                    <a href="#contact">{t('menu.link4')}</a>
                    <Link to="/invitation"><button className='borderButton border-white'>{t('menu.link5')}</button></Link>
                </span>
                {/**Menu Icon */}
                <div className={ visible ? `menuIcon menuIconActive` : `menuIcon`} onClick={()=>setVisible(!visible)}>
                    <div></div>
                </div>
            </nav>
            
        </div>
        {/**Mobile menu */}
        <div className={menuClass}>
                    <a href="/#about" onClick={()=>setVisible(!visible)}>{t('menu.link1')}</a>
                    <a href="/#activities" onClick={()=>setVisible(!visible)}>{t('menu.link2')}</a>
                    <a href="/#join" onClick={()=>setVisible(!visible)}>{t('menu.link3')}</a>
                    <a href="#contact" onClick={()=>setVisible(!visible)}>{t('menu.link4')}</a>
                    <Link to="/invitation"><button className='borderButton border-black'>{t('menu.link5')}</button></Link>
        </div>
        <div className={backdrop} onClick={()=>setVisible(!visible)}></div>
        {/**Fixed on scroll menu */}
        <div className={`py-2 w-full bg-white z-20 smooth duration-200 fixed ${isFixed ? 'top-0': 'top-[-150px]'}`}>
            <nav className='content flex justify-between items-center'>
                <Link to="/"><img src="/sanagriLogo.svg" alt="" className='w-16 h-16' /></Link>
                <span className='hidden lg:flex gap-[60px] text-gray-900 items-center'>
                    <a href="/#about">{t('menu.link1')}</a>
                    <a href="/#activities">{t('menu.link2')}</a>
                    <a href="/#join">{t('menu.link3')}</a>
                    <a href="#contact">{t('menu.link4')}</a>
                    <Link to="/invitation"><button className='borderButton bg-primary text-white'>{t('menu.link5')}</button></Link>
                </span>
                {/**Menu Icon */}
                <div className={ visible ? `menuIconSpecial menuIconActive` : `menuIconSpecial`} onClick={()=>setVisible(!visible)}>
                    <div></div>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Header