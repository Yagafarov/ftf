import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { 
  FaFacebook, 
  FaInstagram, 
  FaTelegram, 
  FaYoutube,
  FaChartLine,
  FaInfoCircle,
  FaNewspaper,
  FaUsers,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt
} from 'react-icons/fa';
import Loading from 'daisyui/components/loading';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const [loading, setLoading] = useState(false);
 const { t } = useTranslation();
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 500);
  };

  return (
    <>
    <footer className="footer footer-vertical sm:footer-horizontal bg-base-200 text-base-content py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Logo and Description */}
          <aside className="flex flex-col items-start space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img className='object-cover w-auto h-8 sm:h-9' src={logo} alt="TSU FTF" />
              <div className='flex flex-col items-start font-semibold'>
                <span className="text-sm sm:text-base lg:text-lg">{t('navbar.title.0')}</span>
                <span className="text-xs sm:text-sm lg:text-base text-base-content/70">{t('navbar.title.1')}</span>
              </div>
            </Link>
            <p className='text-sm sm:text-base text-base-content/80 leading-relaxed max-w-sm'>
              {new Date().getFullYear()} - {t('footer.develop')}
            </p>
            
            {/* Social Media */}
            <div className="flex items-center space-x-3">
              <a href="https://www.facebook.com/tsu.ru" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <div className="bg-primary/10 p-2 rounded-xl hover:bg-primary/20 transition-colors">
                  <FaFacebook className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
              </a>
              <a href="https://www.instagram.com/tsu_official" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <div className="bg-secondary/10 p-2 rounded-xl hover:bg-secondary/20 transition-colors">
                  <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                </div>
              </a>
              <a href="https://t.me/tsu_official" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <div className="bg-accent/10 p-2 rounded-xl hover:bg-accent/20 transition-colors">
                  <FaTelegram className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                </div>
              </a>
              <a href="https://www.youtube.com/tsu_official" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <div className="bg-info/10 p-2 rounded-xl hover:bg-info/20 transition-colors">
                  <FaYoutube className="w-4 h-4 sm:w-5 sm:h-5 text-info" />
                </div>
              </a>
            </div>
          </aside>

          {/* Navigation Links */}
          <nav className="space-y-4">
            <h6 className="footer-title text-base sm:text-lg font-semibold mb-4">
              {t('footer.sections')}
            </h6>
            <ul className='text-sm sm:text-base space-y-3'>
              <li>
                <Link to="/activity" onClick={handleClick} className="flex items-center hover:text-primary transition-colors group">
                  <div className="bg-primary/10 p-2 rounded-xl mr-3 group-hover:bg-primary/20 transition-colors">
                    <FaChartLine className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium">{t('navbar.activity')}</span>
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={handleClick} className="flex items-center hover:text-secondary transition-colors group">
                  <div className="bg-secondary/10 p-2 rounded-xl mr-3 group-hover:bg-secondary/20 transition-colors">
                    <FaInfoCircle className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="font-medium">{t('navbar.about')}</span>
                </Link>
              </li>
              <li>
                <Link to="/news" onClick={handleClick} className="flex items-center hover:text-accent transition-colors group">
                  <div className="bg-accent/10 p-2 rounded-xl mr-3 group-hover:bg-accent/20 transition-colors">
                    <FaNewspaper className="w-4 h-4 text-accent" />
                  </div>
                  <span className="font-medium">{t('navbar.news')}</span>
                </Link>
              </li>
              <li>
                <Link to="/residents" onClick={handleClick} className="flex items-center hover:text-info transition-colors group">
                  <div className="bg-info/10 p-2 rounded-xl mr-3 group-hover:bg-info/20 transition-colors">
                    <FaUsers className="w-4 h-4 text-info" />
                  </div>
                  <span className="font-medium">{t('navbar.residents')}</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleClick} className="flex items-center hover:text-success transition-colors group">
                  <div className="bg-success/10 p-2 rounded-xl mr-3 group-hover:bg-success/20 transition-colors">
                    <FaEnvelope className="w-4 h-4 text-success" />
                  </div>
                  <span className="font-medium">{t('navbar.contact')}</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact Information */}
          <nav className="space-y-4">
            <h6 className="footer-title text-base sm:text-lg font-semibold mb-4">{t('navbar.contact')}</h6>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-xl mr-3 flex-shrink-0">
                  <FaMapMarkerAlt className="w-4 h-4 text-primary" />
                </div>
                <a className="link link-hover text-sm sm:text-base leading-relaxed" target='_blank' href="https://yandex.ru/maps/org/178000615710/">
                  {t('footer.location')}
                </a>
              </div>
              <div className="flex items-center">
                <div className="bg-secondary/10 p-2 rounded-xl mr-3 flex-shrink-0">
                  <FaPhoneAlt className="w-4 h-4 text-secondary" />
                </div>
                <a className="link link-hover text-sm sm:text-base" href="tel:+73822529185">+7 (3822) 52-91-85</a>
              </div>
              <div className="flex items-center">
                <div className="bg-accent/10 p-2 rounded-xl mr-3 flex-shrink-0">
                  <FaEnvelope className="w-4 h-4 text-accent" />
                </div>
                <a className="link link-hover text-sm sm:text-base" href="mailto:ftf@tsu.ru">ftf@tsu.ru</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </footer>
    {loading && (
                    <Loading />
                )}
    </>
  );
}

export default Footer;
