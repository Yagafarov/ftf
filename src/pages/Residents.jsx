import React from 'react'
import useTitle from '../components/useTitle';
import { useTranslation } from 'react-i18next';
import {
  FaCheck,
  FaStar,
  FaExclamation,
  FaFileAlt,
  FaHandshake,
  FaChartLine,
  FaQuestionCircle,
  FaClock,
  FaGlobe,
  FaMoneyBillWave,
  FaTrophy,
  FaMedal,
  FaRocket
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Mavjud rezidentlar va ularning yutuqlari (namuna uchun)


const Residents = () => {
  useTitle('residents.mtitle');
  const { t } = useTranslation();
  const currentResidents = [
    {
      name: "TechnoSoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Google-flutter-logo.svg",
      description: t('residents.currentResidents.0.description'),
      achievements: [
        { icon: <FaTrophy className="text-warning" />, text: t('residents.currentResidents.0.achievements.0') },
        { icon: <FaRocket className="text-info" />, text: t('residents.currentResidents.0.achievements.1') }
      ]
    },
    {
      name: "GreenAI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      description: t('residents.currentResidents.1.description'),
      achievements: [
        { icon: <FaMedal className="text-success" />, text: t('residents.currentResidents.1.achievements.0') },
        { icon: <FaTrophy className="text-warning" />, text: t('residents.currentResidents.1.achievements.1') }
      ]
    },
    {
      name: "EduNext",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      description: t('residents.currentResidents.2.description'),
      achievements: [
        { icon: <FaRocket className="text-info" />, text: t('residents.currentResidents.2.achievements.0') },
        { icon: <FaTrophy className="text-warning" />, text: t('residents.currentResidents.2.achievements.1') }
      ]
    }
  ];
  return (
    <div className="my-20 container mx-auto px-4 text-base">
      {/* Sarlavha */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-info mb-4">
          {t('navbar.residents')}
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-base-content/70">
          {t('residents.subtitle')}
        </p>
      </div>

      {/* Asosiy kontent */}
      <div className="grid md:grid-cols-2 gap-8 max-w-full mx-auto">
        {/* Rezident bo'lish shartlari */}
        <div className="card bg-base-100 shadow-xl border-l-4 border-success hover:scale-[1.02] transition-transform duration-300">
          <div className="card-body">
            <div className="flex items-center mb-4">
              <div className="avatar mr-3">
                <div className="bg-success/10 rounded-full p-3">
                  <FaCheck className="text-success text-xl" />
                </div>
              </div>
              <h3 className="card-title text-xl">{t('residents.who_title')}?</h3>
            </div>
            <ul className="space-y-3 text-base">
              <li className="flex items-start gap-2">
                <FaChartLine className="text-success mt-1" />
                <span>{t('residents.who_1')}</span>
              </li>
              <li className="flex items-start gap-2">
                <FaChartLine className="text-success mt-1" />
                <span>{t('residents.who_2')}</span>
              </li>
              <li className="flex items-start gap-2">
                <FaChartLine className="text-success mt-1" />
                <span>{t('residents.who_3')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Imtiyozlar */}
        <div className="card bg-base-100 shadow-xl border-l-4 border-info hover:scale-[1.02] transition-transform duration-300">
          <div className="card-body">
            <div className="flex items-center mb-4">
              <div className="avatar mr-3">
                <div className="bg-info/10 rounded-full p-3">
                  <FaStar className="text-info text-xl" />
                </div>
              </div>
              <h3 className="card-title text-xl">{t('residents.benefits_title')}</h3>
            </div>
            <ul className="space-y-3 text-base">
              <li className="flex items-start gap-2">
                <FaMoneyBillWave className="text-info mt-1" />
                <span>{t('residents.benefits_1')}</span>
              </li>
              <li className="flex items-start gap-2">
                <FaGlobe className="text-info mt-1" />
                <span>{t('residents.benefits_2')}</span>
              </li>
              <li className="flex items-start gap-2">
                <FaHandshake className="text-info mt-1" />
                <span>{t('residents.benefits_3')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Talablar */}
        <div className="card bg-base-100 shadow-xl border-l-4 border-warning hover:scale-[1.02] transition-transform duration-300">
          <div className="card-body">
            <div className="flex items-center mb-4">
              <div className="avatar mr-3">
                <div className="bg-warning/10 rounded-full p-3">
                  <FaExclamation className="text-warning text-xl" />
                </div>
              </div>
              <h3 className="card-title text-xl">{t('residents.requirements_title')}</h3>
            </div>
            <ul className="space-y-3 text-base">
              <li className="flex items-start gap-2">
                <FaFileAlt className="text-warning mt-1" />
                <span>{t('residents.requirements_1')}</span>
              </li>
              <li className="flex items-start gap-2">
                <FaFileAlt className="text-warning mt-1" />
                <span>{t('residents.requirements_2')}</span>
              </li>
              <li className="flex items-start gap-2">
                <FaFileAlt className="text-warning mt-1" />
                <span>{t('residents.requirements_3')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Arizalar */}
        <div className="card bg-base-100 shadow-xl border-l-4 border-secondary hover:scale-[1.02] transition-transform duration-300">
          <div className="card-body">
            <div className="flex items-center mb-4">
              <div className="avatar mr-3">
                <div className="bg-secondary/10 rounded-full p-3">
                  <FaFileAlt className="text-secondary text-xl" />
                </div>
              </div>
              <h3 className="card-title text-xl">{t('residents.how_title')}</h3>
            </div>
            <ol className="space-y-3 text-base list-decimal list-inside">
              <li>{t('residents.how_1')}</li>
              <li>{t('residents.how_2')}</li>
              <li>{t('residents.how_3')}</li>
              <li>{t('residents.how_4')}</li>
            </ol>
            <Link to={'/contact'} className="btn btn-info mt-6 w-fit mx-auto flex items-center gap-2">
              <FaFileAlt />
              {t('residents.apply_btn')}
            </Link>
          </div>
        </div>
      </div>

      {/* Mavjud rezidentlar va yutuqlari */}
      <div className="mt-24 mb-20 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
          <FaStar className="text-info" />
          {t('residents.current_residents_title') || "Mavjud rezidentlar va ularning yutuqlari"}
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {currentResidents.map((res) => (
            <div
              key={res.name}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="card-body items-center">
                <div className="avatar mb-3">
                  <div className="w-20 rounded-full ring ring-info ring-offset-base-100 ring-offset-2">
                    <img src={res.logo} alt={res.name} />
                  </div>
                </div>
                <h4 className="card-title text-lg">{res.name}</h4>
                <p className="text-base text-center mb-2">{res.description}</p>
                <div className="w-full">
                  <h5 className="font-semibold mb-2 text-info text-base text-left">{t('residents.yutuq')}:</h5>
                  <ul className="space-y-2">
                    {res.achievements.map((ach, aidx) => (
                      <li key={aidx} className="flex items-center gap-2 text-base">
                        {ach.icon}
                        <span>{ach.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-20 max-w-full mx-auto">
        <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
          <FaQuestionCircle className="text-info" />
          {t('residents.faq_title')}
        </h3>
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border border-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-semibold flex items-center gap-2">
              <FaClock className="text-base-content/50" />
              {t('residents.faq_1_q')}
            </div>
            <div className="collapse-content">
              <p>{t('residents.faq_1_a')}</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-semibold flex items-center gap-2">
              <FaGlobe className="text-base-content/50" />
              {t('residents.faq_2_q')}
            </div>
            <div className="collapse-content">
              <p>{t('residents.faq_2_a')}</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-semibold flex items-center gap-2">
              <FaMoneyBillWave className="text-base-content/50" />
              {t('residents.faq_3_q')}
            </div>
            <div className="collapse-content">
              <p>{t('residents.faq_3_a')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Residents;
