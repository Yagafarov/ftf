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
        <div className="fixed top-0 left-0 w-full bg-base-100/95 backdrop-blur-md z-50 shadow-lg border-b border-base-300/20">
            <div className="navbar container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="navbar-start">
                    {/* Mobile Menu */}
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-2xl z-50 mt-3 w-64 p-3 shadow-xl border border-base-300/20">
                            <li><Link to="/" className='text-sm font-medium py-2' onClick={handleClick}>{t('navbar.home')}</Link></li>
                            <li><Link to="/activity" className='text-sm font-medium py-2' onClick={handleClick}>{t('navbar.activity')}</Link></li>
                            <li><Link to="/about" className='text-sm font-medium py-2' onClick={handleClick}>{t('navbar.about')}</Link></li>
                            <li><Link to="/news" className='text-sm font-medium py-2' onClick={handleClick}>{t('navbar.news')}</Link></li>
                            <li><Link to="/residents" className='text-sm font-medium py-2' onClick={handleClick}>{t('navbar.residents')}</Link></li>
                            <li><Link to="/contact" className='text-sm font-medium py-2' onClick={handleClick}>{t('navbar.contact')}</Link></li>
                        </ul>
                    </div>
                    
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 sm:gap-3">
                        <img className="object-cover w-auto h-8 sm:h-9" src={logo} alt="TSU FTF" />
                        <div className="flex flex-col items-start font-semibold leading-tight">
                            <span className="text-sm sm:text-base lg:text-lg">{t('navbar.title.0')}</span>
                            <span className="text-xs sm:text-sm lg:text-base text-base-content/70">{t('navbar.title.1')}</span>
                        </div>
                    </Link>
                </div>
                
                {/* Desktop Navigation */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-sm font-medium">
                        <li><Link to="/" onClick={handleClick} className="hover:text-info transition-colors">{t('navbar.home')}</Link></li>
                        <li><Link to="/activity" onClick={handleClick} className="hover:text-info transition-colors">{t('navbar.activity')}</Link></li>
                        <li><Link to="/about" onClick={handleClick} className="hover:text-info transition-colors">{t('navbar.about')}</Link></li>
                        <li><Link to="/news" onClick={handleClick} className="hover:text-info transition-colors">{t('navbar.news')}</Link></li>
                        <li><Link to="/residents" onClick={handleClick} className="hover:text-info transition-colors">{t('navbar.residents')}</Link></li>
                        <li><Link to="/contact" onClick={handleClick} className="hover:text-info transition-colors">{t('navbar.contact')}</Link></li>
                    </ul>
                </div>
                
                {/* Right Side Controls */}
                <div className="navbar-end flex items-center gap-2 sm:gap-3">
                    {/* Theme Toggle */}
                    <label className="toggle toggle-sm sm:toggle-md text-base-content">
                        <input type="checkbox" value="dark" className="theme-controller" />
                        <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5">
                            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                                <circle cx="12" cy="12" r="4"></circle>
                                <path d="M12 2v2"></path>
                                <path d="M12 20v2"></path>
                                <path d="m4.93 4.93 1.41 1.41"></path>
                                <path d="m17.66 17.66 1.41 1.41"></path>
                                <path d="M2 12h2"></path>
                                <path d="M20 12h2"></path>
                                <path d="m6.34 17.66-1.41 1.41"></path>
                                <path d="m19.07 4.93-1.41 1.41"></path>
                            </g>
                        </svg>
                        <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5">
                            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                            </g>
                        </svg>
                    </label>
                    
                    {/* Language Selector */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
                            <LuLanguages className='w-4 h-4 sm:w-5 sm:h-5' />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content bg-base-100 rounded-2xl z-50 mt-3 w-48 p-2 shadow-xl border border-base-300/20">
                            <li>
                                <a onClick={() => changeLanguage('uz')} className={`flex justify-between items-center py-2 px-3 rounded-lg ${isActiveLanguage('uz') ? 'bg-info/10 text-info' : ''}`}>
                                    <span className="text-sm font-medium">O'zbek</span>
                                    <span className="text-lg">🇺🇿</span>
                                </a>
                            </li>
                            <li>
                                <a onClick={() => changeLanguage('ru')} className={`flex justify-between items-center py-2 px-3 rounded-lg ${isActiveLanguage('ru') ? 'bg-info/10 text-info' : ''}`}>
                                    <span className="text-sm font-medium">Русский</span>
                                    <span className="text-lg">🇷🇺</span>
                                </a>
                            </li>
                            <li>
                                <a onClick={() => changeLanguage('en')} className={`flex justify-between items-center py-2 px-3 rounded-lg ${isActiveLanguage('en') ? 'bg-info/10 text-info' : ''}`}>
                                    <span className="text-sm font-medium">English</span>
                                    <span className="text-lg">🇬🇧</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {loading && <Loading />}
            </div>
        </div>
    );
};

export default Navbar;
