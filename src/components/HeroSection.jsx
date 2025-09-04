import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaArrowRight, FaPlay, FaGraduationCap, FaMicroscope, FaRocket } from 'react-icons/fa';
import Loading from './Loading';

const HeroSection = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  };

  const stats = [
    { icon: <FaGraduationCap className="text-2xl" />, number: "1500+", label: t('home.reason.statusRank.1') },
    { icon: <FaMicroscope className="text-2xl" />, number: "50+", label: t('home.reason.statusRank.2') },
    { icon: <FaRocket className="text-2xl" />, number: "25+", label: t('home.reason.statusRank.3') }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-base-100 via-base-200 to-base-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-info/10 border border-info/20 text-info text-xs sm:text-sm font-medium">
                <span className="w-2 h-2 bg-info rounded-full mr-2 animate-pulse"></span>
                <span className="hidden sm:inline">{t('home.title1')} Davlat Universiteti</span>
                <span className="sm:hidden">TSU</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-info to-sky-600 bg-clip-text text-transparent">
                  {t('home.title')}
                </span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-base-content/80 leading-relaxed max-w-2xl">
                {t('home.subtitle')}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link 
                to="/about" 
                onClick={handleClick}
                className="btn btn-info btn-lg shadow-lg hover:shadow-xl transition-all duration-300 group w-full sm:w-auto"
              >
                <span className="text-sm sm:text-base">{t('btns.aboutmebtn')}</span>
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button className="btn btn-outline btn-lg group w-full sm:w-auto">
                <FaPlay className="mr-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm sm:text-base">Video ko'rish</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-info/10 text-info mb-2 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-info">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-base-content/70 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - 3D Card Stack */}
          <div className="relative order-1 lg:order-2">
            <div className="relative z-10">
              {/* Main Image Card */}
              <div className="relative group">
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-info to-sky-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-base-100 rounded-2xl shadow-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="TSU Physics Faculty"
                    className="w-full h-64 sm:h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                    <h3 className="text-lg sm:text-xl font-bold">Fizika-Texnika Fakulteti</h3>
                    <p className="text-xs sm:text-sm opacity-90">Tomsk Davlat Universiteti</p>
                  </div>
                </div>
              </div>

              {/* Floating Cards - Hidden on mobile, visible on larger screens */}
              <div className="hidden sm:block absolute -top-2 -right-2 lg:-top-4 lg:-right-4 bg-base-100 rounded-xl shadow-lg p-3 lg:p-4 border border-base-300 animate-float">
                <div className="flex items-center space-x-2 lg:space-x-3">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-info/10 rounded-lg flex items-center justify-center">
                    <FaMicroscope className="text-info text-sm lg:text-base" />
                  </div>
                  <div>
                    <div className="font-semibold text-xs lg:text-sm">Ilmiy Tadqiqotlar</div>
                    <div className="text-xs text-base-content/70">50+ loyiha</div>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 bg-base-100 rounded-xl shadow-lg p-3 lg:p-4 border border-base-300 animate-float-delayed">
                <div className="flex items-center space-x-2 lg:space-x-3">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-success/10 rounded-lg flex items-center justify-center">
                    <FaGraduationCap className="text-success text-sm lg:text-base" />
                  </div>
                  <div>
                    <div className="font-semibold text-xs lg:text-sm">Ta'lim Dasturlari</div>
                    <div className="text-xs text-base-content/70">3 yo'nalish</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {loading && <Loading />}
    </section>
  );
};

export default HeroSection;
