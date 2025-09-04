import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaArrowRight, FaUsers, FaLightbulb, FaHandshake } from 'react-icons/fa';

const AboutPreview = () => {
  const { t } = useTranslation();

  const goals = [
    {
      icon: <FaUsers className="text-2xl" />,
      title: t('home.ourtask.0'),
      description: t('home.ourtask.1'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaLightbulb className="text-2xl" />,
      title: t('home.ourgoal.0'),
      description: t('home.ourgoal.1'),
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-base-200 to-base-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-info to-sky-600 bg-clip-text text-transparent">
                  {t('navbar.title.0')} {t('navbar.title.1')}
                </span>
              </h2>
              
              <p className="text-base sm:text-lg text-base-content/80 leading-relaxed">
                {t('home.about')}
              </p>
            </div>

            {/* Goals */}
            <div className="space-y-4 sm:space-y-6">
              {goals.map((goal, index) => (
                <div key={index} className="group">
                  <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-base-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                    <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${goal.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      {goal.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold mb-2 text-base-content">
                        {goal.title}
                      </h3>
                      <p className="text-sm sm:text-base text-base-content/70 leading-relaxed">
                        {goal.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2 sm:pt-4">
              <Link
                to="/about"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-info to-sky-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 w-full sm:w-auto justify-center"
              >
                <span className="text-sm sm:text-base">{t('btns.aboutmebtn')}</span>
                <FaArrowRight className="ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Right Content - Image Gallery */}
          <div className="relative order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* Main Image */}
              <div className="col-span-2 relative group">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="TSU Laboratory"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                  <h4 className="text-base sm:text-lg font-bold">Zamonaviy Laboratoriyalar</h4>
                  <p className="text-xs sm:text-sm opacity-90">Ilmiy tadqiqotlar uchun jihozlar</p>
                </div>
              </div>

              {/* Secondary Images */}
              <div className="relative group">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                    alt="Students"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-2 left-2 text-white text-xs">
                  <p className="font-semibold">Talabalar</p>
                </div>
              </div>

              <div className="relative group">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                    alt="Research"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-2 left-2 text-white text-xs">
                  <p className="font-semibold">Tadqiqotlar</p>
                </div>
              </div>
            </div>

            {/* Floating Elements - Hidden on mobile */}
            <div className="hidden sm:block absolute -top-2 -right-2 lg:-top-4 lg:-right-4 bg-base-100 rounded-xl shadow-lg p-3 lg:p-4 border border-base-300 animate-bounce">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-info/10 rounded-lg flex items-center justify-center">
                  <FaHandshake className="text-info text-xs lg:text-sm" />
                </div>
                <div>
                  <div className="text-xs font-semibold">Hamkorlik</div>
                  <div className="text-xs text-base-content/70">Xalqaro</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
