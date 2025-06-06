import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import {
  ChevronDownIcon,
  HamburgerMenuIcon,
  Cross1Icon,
  GlobeIcon,
  MagnifyingGlassIcon
} from '@radix-ui/react-icons';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('RU');

  const searchInputRef = useRef(null);

  const navItems = [
    {
      label: 'О факультете',
      subItems: [
        { label: 'История', href: '/about/history' },
        { label: 'Руководство', href: '/about/staff' },
        { label: 'Контакты', href: '/about/contacts' },
      ],
    },
    {
      label: 'Поступить',
      subItems: [
        { label: 'Бакалавриат', href: '/admission/bachelor' },
        { label: 'Магистратура', href: '/admission/master' },
      ],
    },
    {
      label: 'Обучение',
      subItems: [
        { label: 'Программы', href: '/education/programs' },
        { label: 'Расписание', href: '/education/schedule' },
      ],
    },
    {
      label: 'Наука',
      subItems: [
        { label: 'Публикации', href: '/science/publications' },
        { label: 'Проекты', href: '/science/projects' },
      ],
    },
    {
      label: 'Новости',
      subItems: [
        { label: 'События', href: '/news/events' },
        { label: 'Объявления', href: '/news/announcements' },
      ],
    },
    {
      label: 'Документы',
      subItems: [
        { label: 'Политики', href: '/docs/policies' },
        { label: 'Отчеты', href: '/docs/reports' },
      ],
    },
  ];

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  function handleLangChange(lang) {
    setCurrentLang(lang);
    setLanguageOpen(false);
  }

  // Navbar balandligi 64px uchun top qidiruv inputi
  const navbarHeight = 64;

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 h-16">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-full">
          {/* Logo va nom */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
            <Link
              to="/"
              className="text-sm md:text-lg font-bold text-blue-700 hover:text-blue-800 transition"
            >
              Физико-Технический Факультет
            </Link>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu.Root className="hidden md:flex relative items-center">
            <NavigationMenu.List className="flex space-x-6">
              {navItems.map((item) => (
                <NavigationMenu.Item key={item.label} className="relative">
                  <NavigationMenu.Trigger className="flex items-center gap-1 text-gray-800 hover:text-blue-600 font-medium transition cursor-pointer select-none">
                    {item.label}
                    <ChevronDownIcon className="w-4 h-4" />
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content className="absolute left-0 top-full mt-3 bg-white shadow-xl rounded-md py-2 px-4 z-50 w-48 transition-all duration-300 animate-in fade-in slide-in-from-top-1">
                    <ul className="space-y-2">
                      {item.subItems.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            to={sub.href}
                            className="block text-gray-700 hover:text-blue-500 transition"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>
              ))}
            </NavigationMenu.List>
          </NavigationMenu.Root>

          {/* Til va qidiruv ikonkalari */}
          <div className="hidden md:flex items-center space-x-6 text-gray-600 relative">
            {/* Qidiruv tugmasi */}
            <button
              className="hover:text-blue-600 transition"
              aria-label="Search"
              onClick={() => {
                setSearchOpen(!searchOpen);
                if (!searchOpen) setMobileOpen(false);
              }}
              type="button"
            >
              <MagnifyingGlassIcon className="w-5 h-5" />
            </button>

            {/* Til tanlash dropdown */}
            <div className="relative">
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                aria-label="Change language"
                className="flex items-center gap-1 hover:text-blue-600 transition font-medium text-gray-700 cursor-pointer select-none"
                type="button"
              >
                <GlobeIcon className="w-5 h-5" />
                <span>{currentLang}</span>
                <ChevronDownIcon
                  className={`w-4 h-4 transition-transform ${
                    languageOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>

              {languageOpen && (
                <ul className="absolute right-0 mt-2 w-28 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  {['RU', 'EN'].map((lang) => (
                    <li
                      key={lang}
                      className={`cursor-pointer px-4 py-2 hover:bg-blue-100 ${
                        currentLang === lang ? 'font-semibold text-blue-600' : ''
                      }`}
                      onClick={() => handleLangChange(lang)}
                      role="menuitem"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          handleLangChange(lang);
                        }
                      }}
                    >
                      {lang === 'RU' ? 'Русский' : 'English'}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Mobile menyu toggle */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => {
              setMobileOpen(!mobileOpen);
              setSearchOpen(false);
              setLanguageOpen(false);
            }}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? (
              <Cross1Icon className="w-6 h-6" />
            ) : (
              <HamburgerMenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Qidiruv inputi: fixed, navbar tagida */}
      <div
        className={`fixed left-0 right-0 bg-white px-4 max-w-7xl mx-auto shadow-md z-40 transition-[max-height] duration-300 overflow-hidden ${
          searchOpen ? 'max-h-20 py-4' : 'max-h-0 py-0'
        }`}
        style={{ top: `${navbarHeight}px` }}
      >
        <input
          ref={searchInputRef}
          type="text"
          aria-label="Search input"
          placeholder={
            currentLang === 'RU' ? 'Введите запрос...' : 'Enter search query...'
          }
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              // Bu yerda qidiruv logikasi bo'lishi mumkin
              alert(
                `${currentLang === 'RU' ? 'Поиск' : 'Search'}: ${e.currentTarget.value}`
              );
              setSearchOpen(false);
            }
          }}
        />
      </div>

      {/* Mobile menyu */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-6 space-y-6 bg-white shadow-inner pt-20">
          <div className="space-y-4">
            {navItems.map((item) => (
              <div key={item.label}>
                <span className="block font-semibold text-gray-800">{item.label}</span>
                <ul className="mt-1 pl-4 space-y-1">
                  {item.subItems.map((sub) => (
                    <li key={sub.href}>
                      <Link
                        to={sub.href}
                        className="block text-gray-700 hover:text-blue-500 transition"
                        onClick={() => setMobileOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Mobile Actions */}
          <div className="flex space-x-4 pt-4 border-t border-gray-200 text-gray-600">
            <button
              className="hover:text-blue-600"
              aria-label="Search"
              onClick={() => {
                setSearchOpen(true);
                setMobileOpen(false);
              }}
            >
              <MagnifyingGlassIcon className="w-5 h-5" />
            </button>
            <button
              className="hover:text-blue-600 flex items-center gap-1"
              aria-label="Change language"
              onClick={() => {
                setLanguageOpen(!languageOpen);
                setMobileOpen(false);
              }}
            >
              <GlobeIcon className="w-5 h-5" />
              <span>{currentLang}</span>
              <ChevronDownIcon
                className={`w-4 h-4 transition-transform ${
                  languageOpen ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>
          </div>

          {/* Mobile language dropdown */}
          {languageOpen && (
            <ul className="mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-50">
              {['RU', 'EN'].map((lang) => (
                <li
                  key={lang}
                  className={`cursor-pointer px-4 py-2 hover:bg-blue-100 ${
                    currentLang === lang ? 'font-semibold text-blue-600' : ''
                  }`}
                  onClick={() => {
                    handleLangChange(lang);
                    setLanguageOpen(false);
                  }}
                  role="menuitem"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleLangChange(lang);
                      setLanguageOpen(false);
                    }
                  }}
                >
                  {lang === 'RU' ? 'Русский' : 'English'}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Navbar balandligi uchun bo'sh joy */}
      <div style={{ height: `${navbarHeight}px` }} />
    </>
  );
}
