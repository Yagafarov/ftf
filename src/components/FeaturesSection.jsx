import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  FaMicroscope, 
  FaGraduationCap, 
  FaUsers, 
  FaRocket,
  FaAward,
  FaGlobe,
  FaLightbulb,
  FaChartLine
} from 'react-icons/fa';

const FeaturesSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <FaMicroscope className="text-3xl" />,
      title: t('home.reason.cards.0.title'),
      description: t('home.reason.cards.0.content'),
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: t('home.reason.cards.1.title'),
      description: t('home.reason.cards.1.content'),
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50 dark:bg-emerald-900/20'
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: t('home.reason.cards.2.title'),
      description: t('home.reason.cards.2.content'),
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: t('home.reason.cards.3.title'),
      description: t('home.reason.cards.3.content'),
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    }
  ];

  const achievements = [
    { icon: <FaAward className="text-2xl" />, number: "25+", label: "Yutuqlar" },
    { icon: <FaGlobe className="text-2xl" />, number: "15+", label: "Xalqaro Hamkorlar" },
    { icon: <FaLightbulb className="text-2xl" />, number: "100+", label: "Ilmiy Nashrlar" },
    { icon: <FaChartLine className="text-2xl" />, number: "95%", label: "Ishga Joylashish" }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-base-100 to-base-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-info to-sky-600 bg-clip-text text-transparent">
              {t('home.reason.title')}
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-base-content/80 max-w-3xl mx-auto leading-relaxed">
            {t('home.reason.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-info/20 to-sky-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-base-100 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-base-content">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-base-content/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-info/5 to-sky-600/5 rounded-2xl sm:rounded-3xl"></div>
          <div className="relative bg-base-100/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-base-300/50">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                <span className="bg-gradient-to-r from-info to-sky-600 bg-clip-text text-transparent">
                  Bizning Yutuqlarimiz
                </span>
              </h3>
              <p className="text-base sm:text-lg text-base-content/80">
                Raqamlar bilan isbotlangan muvaffaqiyat
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-info/10 text-info mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-info mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-xs sm:text-sm text-base-content/70 font-medium leading-tight">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
