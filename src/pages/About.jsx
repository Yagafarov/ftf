import React from 'react'
import useTitle from '../components/useTitle';
import { useTranslation } from 'react-i18next';
import {
  FaLightbulb,
  FaUsers,
  FaRocket,
  FaHandshake,
  FaStar,
  FaUserTie,
  FaChalkboardTeacher,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaQuestionCircle,
  FaRegBuilding
} from 'react-icons/fa';

import derictor from '../assets/derictor.png';
import teacher_1 from '../assets/teacher1.jpg';



const About = () => {
  useTitle('about.mtitle');
  const { t } = useTranslation();
  // Rahbariyat ma'lumotlari
  const leadership = [
    {
      name: t('about.leadership.director.name'),
      position: t('about.leadership.director.position'),
      img: derictor,
      bio: t('about.leadership.director.description'),
      contact: {
        email: "islom.k1995@gmail.com",
        phone: "+998 (88) 934-55-05",
        linkedin: "https://linkedin.com/"
      }
    },
    {
      name: t('about.leadership.manager_01.name'),
      position: t('about.leadership.manager_01.position'),
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: t('about.leadership.manager_01.description'),
      contact: {
        email: "dilnoza.rustamova@syttp.uz",
        phone: "+998 93 222 33 44"
      }
    },
    {
      name: t('about.leadership.manager_02.name'),
      position: t('about.leadership.manager_02.position'),
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      bio: t('about.leadership.manager_02.description'),
      contact: {
        email: "jamshid.islomov@syttp.uz"
      }
    }
  ];

  // O‘qituvchilar ma'lumotlari
  const teachers = [
    {
      name: t('about.teachers.teacher_1.name'),
      subject: t('about.teachers.teacher_1.position'),
      img: teacher_1,
      bio: t('about.teachers.teacher_1.description'),
      contact: {
        email: ""
      }
    },
    {
      name: t('about.teachers.teacher_2.name'),
      subject: t('about.teachers.teacher_2.position'),
      img: "https://randomuser.me/api/portraits/men/61.jpg",
      bio: t('about.teachers.teacher_2.description'),
      contact: {
        email: "bekzod.sobirov@syttp.uz"
      }
    },
    {
      name: t('about.teachers.teacher_3.name'),
      subject: t('about.teachers.teacher_3.position'),
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      bio: t('about.teachers.teacher_3.description'),
      contact: {
        email: "malika.ergasheva@syttp.uz"
      }
    }
  ];
  const goals = [
    {
      icon: <FaRocket className="text-info text-2xl" />,
      title: t('about.goal_1')
    },
    {
      icon: <FaUsers className="text-info text-2xl" />,
      title: t('about.goal_2')
    },
    {
      icon: <FaHandshake className="text-info text-2xl" />,
      title: t('about.goal_3')
    }
  ];

  return (
    <div className="min-h-screen pb-20 ">
      <div className='container mx-auto px-4'>

        {/* Sarlavha */}
        <div className="text-center pt-24 mb-8">
          <h2 className="text-3xl md:text-4xl  font-bold text-info mb-4">
            {t('navbar.about')}
          </h2>
          <p className="max-w-4xl mx-auto text-lg text-base-content/70">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Texnopark haqida */}
        <div className="mb-16 max-w-6xl mx-auto">
          <div className="glass shadow-2xs rounded-2xl py-8 flex gap-6 items-center">
            <FaRegBuilding className="text-info text-4xl shrink-0 hidden lg:block " />
            <div>
              <h3 className="text-xl font-bold text-info mb-2">{t('about.about_title')}</h3>
              <p className="text-base-content/80">{t('about.about_text')}</p>
            </div>
          </div>
        </div>

        {/* Maqsadlar (Stepper style) */}
        <section className="mb-20">
          <h3 className="text-2xl font-bold mb-10 text-center flex items-center justify-center gap-3">
            <FaLightbulb className="text-yellow-400" />
            {t('about.goals_title')}
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {goals.map((goal, idx) => (
              <div
                key={idx}
                className={`relative bg-gradient-to-br from-indigo-500 to-sky-400 text-white rounded-xl shadow-lg p-6 w-72 flex flex-col items-center
                ${idx !== goals.length - 1 ? "mb-8 md:mb-0 md:mr-8" : ""}
              `}
              >
                <div className="absolute -top-6 bg-white shadow-lg rounded-full p-3 border-4 border-indigo-100">
                  {goal.icon}
                </div>
                <div className="mt-8 text-center">
                  <h4 className="font-semibold text-lg">{goal.title}</h4>
                </div>
                {idx !== goals.length - 1 && (
                  <div className="hidden md:block absolute right-[-2rem] top-1/2 -translate-y-1/2 w-8 h-1 bg-gradient-to-r from-indigo-400 to-sky-300 rounded-full"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Afzalliklar */}
        <section className="mb-20 max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-10 text-center flex items-center justify-center gap-3">
            <FaStar className="text-yellow-400" />
            {t('about.advantages_title')}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
              <FaRegBuilding className="text-info text-4xl mb-4" />
              <h4 className="font-semibold mb-2">{t('about.advantage_1')}</h4>
              <p className="text-base-content/70">{t('about.advantage_1_desc')}</p>
            </div>
            <div className="glass rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
              <FaUsers className="text-green-500 text-4xl mb-4" />
              <h4 className="font-semibold mb-2">{t('about.advantage_2')}</h4>
              <p className="text-base-content/70">{t('about.advantage_2_desc')}</p>
            </div>
            <div className="glass rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
              <FaHandshake className="text-indigo-400 text-4xl mb-4" />
              <h4 className="font-semibold mb-2">{t('about.advantage_3')}</h4>
              <p className="text-base-content/70">{t('about.advantage_3_desc')}</p>
            </div>
          </div>
        </section>

        {/* Rahbariyat */}
        <section className="mb-20 max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-10 text-center flex items-center justify-center gap-3">
            <FaUserTie className="text-info" />
            {t('about.leadership.title')}
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            {leadership.map(({ name, position, img, bio, contact }, idx) => (
              <div
                key={idx}
                className="group glass rounded-2xl shadow-xl p-8 flex flex-col items-center transition-all hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative mb-4">
                  <img src={img} alt={name} className="w-28 h-28 object-cover rounded-full border-4 border-indigo-100 shadow-lg group-hover:scale-105 group-hover:border-sky-400 transition-transform" />
                </div>
                <span className=" bg-info text-white text-xs px-3 py-1 mb-2 rounded-full font-semibold shadow-lg">{position}</span>
                <h4 className="text-lg font-bold mb-1 text-info">{name}</h4>
                <p className="text-base text-center mb-3">{bio}</p>
                <div className="flex gap-4 text-lg text-info">
                  {contact.email && (
                    <a href={`mailto:${contact.email}`} title="Email" className="hover:text-sky-700 transition-colors">
                      <FaEnvelope />
                    </a>
                  )}
                  {contact.phone && (
                    <a href={`tel:${contact.phone}`} title="Telefon" className="hover:text-sky-700 transition-colors">
                      <FaPhoneAlt />
                    </a>
                  )}
                  {contact.linkedin && (
                    <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" className="hover:text-sky-700 transition-colors">
                      <FaLinkedin />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* O'qituvchilar */}
        <section className="mb-20 max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-10 text-center flex items-center justify-center gap-3">
            <FaChalkboardTeacher className="text-info" />
            {t('about.teachers.title')}
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            {teachers.map(({ name, subject, img, bio, contact }, idx) => (
              <div
                key={idx}
                className="group glass rounded-2xl shadow-xl p-8 flex flex-col items-center transition-all hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative mb-4">
                  <img src={img} alt={name} className="w-24 h-24 object-cover rounded-full border-4 border-green-100 shadow-lg group-hover:scale-105 group-hover:border-sky-500 transition-transform" />

                </div>
                <span className="bg-info text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg">{subject}</span>
                <h4 className="text-lg font-bold mb-1 text-info">{name}</h4>
                <p className="text-base-content/70 text-center mb-3">{bio}</p>
                <div className="flex gap-4 text-lg text-info">
                  {contact.email && (
                    <a href={`mailto:${contact.email}`} title="Email" className="hover:text-info transition-colors">
                      <FaEnvelope />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto mb-20">
          <h3 className="text-2xl font-bold mb-10 text-center flex items-center justify-center gap-3">
            <FaQuestionCircle className="text-info" />
            {t('about.faq_title')}
          </h3>
          <div className="space-y-4">
            {[1, 2, 3].map((num) => (
              <div key={num} className="collapse collapse-arrow border border-indigo-100 glass rounded-xl shadow-md">
                <input type="checkbox" />
                <div className="collapse-title text-lg font-semibold flex items-center gap-2 text-info">
                  <FaQuestionCircle className="text-info" />
                  {t(`about.faq_${num}_q`)}
                </div>
                <div className="collapse-content">
                  <p className="text-base">{t(`about.faq_${num}_a`)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}

export default About;