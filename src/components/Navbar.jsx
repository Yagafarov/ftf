import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import Loading from './Loading';
import { LuLanguages } from 'react-icons/lu';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const {t,i18n} =useTranslation();
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500);
    };

    const changeLanguage  = (lng)=>{
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng);
        handleClick();
    }
    const isActiveLanguage = (language) => i18n.language === language;
    return (
        <div className="fixed top-0 left-0 lg:px-20 w-full bg-base-100 z-50 mt-[-2px] shadow-md ">
            <div className="navbar container mx-auto pt-2 mt-[-2px]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow text-base sm:text-base md:text-lg font-normal">
                            <li><Link to="/" className='text-sm sm:text-base md:text-lg' onClick={handleClick}>{t('navbar.home')}</Link></li>
                            <li><Link to="/activity" className='text-sm sm:text-base md:text-lg' onClick={handleClick}>{t('navbar.activity')}</Link></li>
                            <li><Link to="/about" className='text-sm sm:text-base md:text-lg' onClick={handleClick}>{t('navbar.about')}</Link></li>
                            <li><Link to="/news" className='text-sm sm:text-base md:text-lg' onClick={handleClick}>{t('navbar.news')}</Link></li>
                            <li><Link to="/residents" className='text-sm sm:text-base md:text-lg' onClick={handleClick}>{t('navbar.residents')}</Link></li>
                            <li><Link to="/contact" className='text-sm sm:text-base md:text-lg' onClick={handleClick}>{t('navbar.contact')}</Link></li>
                        </ul>
                    </div>
                    <Link to="/" className="text-xl navbar-center flex items-center gap-2">
                        <img className="object-cover w-auto h-9 mr-1" src={logo} alt="SAM" />
                        <div className="flex flex-col items-start font-semibold text-base sm:text-lg md:text-base leading-tight">
                            <span>{t('navbar.title.0')}</span>
                            <span>{t('navbar.title.1')}</span>
                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-sm sm:text-base font-normal">
                        <li><Link to="/" onClick={handleClick}>{t('navbar.home')}</Link></li>
                        <li><Link to="/activity" onClick={handleClick}>{t('navbar.activity')}</Link></li>
                        <li><Link to="/about" onClick={handleClick}>{t('navbar.about')}</Link></li>
                        <li><Link to="/news" onClick={handleClick}>{t('navbar.news')}</Link></li>
                        <li><Link to="/residents" onClick={handleClick}>{t('navbar.residents')}</Link></li>
                        <li><Link to="/contact" onClick={handleClick}>{t('navbar.contact')}</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <label className="toggle text-base-content mr-3">
                        <input type="checkbox" value="dark" className="theme-controller" />

                        <svg aria-label="sun"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

                        <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

                    </label>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1 text-sm sm:text-base md:text-sm">
                            <LuLanguages className='w-auto h-4' />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content bg-base-200 rounded-box z-[1] mt-4 w-52 p-2 shadow-sm">
                            <li>
                                <a onClick={() => changeLanguage('ru')} className={`flex justify-between ${isActiveLanguage('ru') ? 'active' : ''}`}>
                                    <span>Русский</span>
                                    <span className="opacity-70">
                                    🇷🇺 {isActiveLanguage('ru') && <span>✓</span>}
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a onClick={() => changeLanguage('en')} className={`flex justify-between ${isActiveLanguage('en') ? 'active' : ''}`}>
                                    <span>English</span>
                                    <span className="opacity-70">
                                    🇬🇧 {isActiveLanguage('en') && <span>✓</span>}
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {loading && (
                    <Loading />
                )}
            </div>
        </div>
    );
};

export default Navbar;
