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
    <footer className="footer sm:footer-horizontal lg:px-20 justify-between mx-auto text-base-content p-5 md:py-5 container">
      <aside className="flex flex-col items-start mb-6">
        <Link to="/" className="text-xl navbar-center">
          <img className='object-cover w-auto h-9 mr-4' src={logo} alt="SAM" />
          <div className='flex flex-col items-left font-semibold'>
            <span className="text-lg">{t('navbar.title.0')}</span>
            <span className="text-lg">{t('navbar.title.1')}</span>
          </div>
        </Link>
        <p className='text-base'>
          {new Date().getFullYear()} - {t('footer.develop')}
        </p>
        
        {/* Ijtimoiy tarmoqlar */}
        <div className="flex items-center space-x-4 mt-5">
          <a href="https://www.facebook.com/samytpuz1" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <div className="bg-primary/10 p-2 rounded-xl">
              <FaFacebook className="w-5 h-5 text-primary" />
            </div>
          </a>
          <a href="https://www.instagram.com/samytp.uz" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
            <div className="bg-secondary/10 p-2 rounded-xl">
              <FaInstagram className="w-5 h-5 text-secondary" />
            </div>
          </a>
          <a href="https://t.me/samytpuz" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            <div className="bg-accent/10 p-2 rounded-xl">
              <FaTelegram className="w-5 h-5 text-accent" />
            </div>
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="hover:text-info">
            <div className="bg-info/10 p-2 rounded-xl">
              <FaYoutube className="w-5 h-5 text-info" />
            </div>
          </a>
        </div>
      </aside>

      <nav className="mr-10">
        <h6 className="footer-title text-lg font-semibold mb-2">
          {t('footer.sections')}
          </h6>
        <ul className='text-base space-y-1'>
          <li>
            <Link to="/activity" onClick={handleClick} className="flex items-center hover:text-primary">
              <div className="bg-primary/10 p-2 rounded-xl mr-2">
                <FaChartLine className="w-4 h-4 text-primary" />
              </div>
              {t('navbar.activity')}
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleClick} className="flex items-center hover:text-secondary">
              <div className="bg-secondary/10 p-2 rounded-xl mr-2">
                <FaInfoCircle className="w-4 h-4 text-secondary" />
              </div>
              {t('navbar.about')}
            </Link>
          </li>
          <li>
            <Link to="/news" onClick={handleClick} className="flex items-center hover:text-accent">
              <div className="bg-accent/10 p-2 rounded-xl mr-2">
                <FaNewspaper className="w-4 h-4 text-accent" />
              </div>
              {t('navbar.news')}
            </Link>
          </li>
          <li>
            <Link to="/residents" onClick={handleClick} className="flex items-center hover:text-info">
              <div className="bg-info/10 p-2 rounded-xl mr-2">
                <FaUsers className="w-4 h-4 text-info" />
              </div>
              {t('navbar.residents')}
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleClick} className="flex items-center hover:text-success">
              <div className="bg-success/10 p-2 rounded-xl mr-2">
                <FaEnvelope className="w-4 h-4 text-success" />
              </div>
              {t('navbar.contact')}
            </Link>
          </li>
        </ul>
      </nav>

      <nav className='text-base'>
        <h6 className="footer-title text-lg font-semibold mb-2">{t('navbar.contact')}</h6>
        <div className="flex items-center mb-2">
          <div className="bg-primary/10 p-2 rounded-xl mr-2">
            <FaMapMarkerAlt className="w-4 h-4 text-primary" />
          </div>
          <a className="link link-hover" target='_blank' href="https://yandex.uz/maps/org/178000615710/">
          {t('footer.location')}
          </a>
        </div>
        <div className="flex items-center mb-2">
          <div className="bg-secondary/10 p-2 rounded-xl mr-2">
            <FaPhoneAlt className="w-4 h-4 text-secondary" />
          </div>
          <a className="link link-hover" href="tel:+998889345505">+998 (88) 934-55-05</a>
        </div>
        <div className="flex items-center">
          <div className="bg-accent/10 p-2 rounded-xl mr-2">
            <FaEnvelope className="w-4 h-4 text-accent" />
          </div>
          <a className="link link-hover" href="mailto:samarqadyoshlartexnoparki@gmail.com">samarqadyoshlartexnoparki@gmail.com</a>
        </div>
      </nav>
    </footer>
    {loading && (
                    <Loading />
                )}
    </>
  );
}

export default Footer;
