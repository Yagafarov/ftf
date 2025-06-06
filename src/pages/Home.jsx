import React, { useState } from 'react'
import useTitle from '../components/useTitle';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import mImg from '../assets/main.webp'
import { useTranslation } from 'react-i18next';

const Home = () => {
  useTitle('home.mtitle');
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen px-4 py-10 container mx-auto">
        <div className="flex flex-col-reverse md:flex-row  justify-between mt-7 items-center  gap-10">

          {/* Chap tomon - Matn */}
          <div className="flex-1 text-left">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4  md:leading-14">
              <span className="px-3 mr-4 bg-info  rounded-md">
                {t('home.title1')}
              </span><br />
              {t('home.title')}
            </h1>
            <p className="text-lg mb-8 ">
              {t('home.subtitle')}
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link to="/activity" onClick={handleClick} className="btn btn-soft btn-info text-base">
                {t('btns.activitybtn')}
              </Link>
              <Link to="/contact" onClick={handleClick} className="btn btn-info shadow-blue-500/50 text-base">
                {t('btns.contactbtn')}
              </Link>
              
            </div>
          </div>

          {/* O'ng tomon - Rasm */}
          <div className="flex-1 flex justify-center  ">
            <div className="stack  stack-end ">

              <img
                src={mImg}
                alt="Texnopark rasmi"
                className="max-w-xl h-auto rounded-lg shadow-lg rounded-box "
              />
              <div className="border-base-content card bg-base-100 border text-center">
                <div className="card-body">www.anodra.uz</div>
              </div>
              <div className="border-base-content card bg-base-100 border text-center">
                <div className="card-body">www.anodra.uz</div>
              </div>
            </div>
          </div>
        </div>
        {loading && (
          <Loading />
        )}
      </div>
      <div className="container mb-12  mx-auto p-4">
        <div className="flex flex-col min-h-max lg:flex-row gap-3 sm:gap-6">
          {/* Chap qism - Markazlashtirilgan */}
          <div className="lg:w-1/2 rounded-box flex flex-col ">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4  ">
              <span className="border-b-2 border-info pb-1 inline-block">{t('navbar.title.0')} {t('navbar.title.1')}</span>
            </h2>

            <p className="mb-3 sm:mb-4 text-lg leading-relaxed text-justify">
              {t('home.about')}
            </p>

            <div className="space-y-3">
              {/* 1-element */}
              <div className="bg-base-100 p-3 sm:p-4 rounded-box border-l-4 border-accent shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg">{t('home.ourtask.0')}</h3>
                <p className="mt-1 text-lg">{t('home.ourtask.1')}</p>
              </div>

              {/* 2-element */}
              <div className="bg-base-100 p-3 sm:p-4 text-lg rounded-box border-l-4 border-info shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold ">{t('home.ourgoal.0')}</h3>
                <p className="mt-1 ">{t('home.ourgoal.1')}</p>
              </div>


              <Link
                to="/about"
                className="btn btn-info hover:btn-info-focus text-white shadow-md hover:shadow-lg transition-all mb-5 mt-5 text-lg "
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t('btns.aboutmebtn')}
              </Link>
            </div>
          </div>

          {/* O'ng qism */}
          <div className="lg:w-1/2 flex items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5 w-full">
              <div className="sm:row-span-2 h-[200px] sm:h-[400px] relative group">
                <img
                  src="https://avatars.mds.yandex.net/get-altay/9728306/2a00000189cf71d8acca0ccbbbb9adc99dc9/XXXL"
                  className="absolute inset-0 w-full h-full object-cover rounded-box group-hover:scale-105 transition-transform duration-500"
                  alt="Asosiy rasm"
                />
              </div>
              <div className="h-[150px] sm:h-[190px] relative group">
                <img
                  src="https://avatars.mds.yandex.net/get-altay/9720991/2a00000189cfce144d37f5a453292e4690a5/XXXL"
                  className="absolute inset-0 w-full h-full object-cover rounded-box group-hover:rotate-2 transition-transform duration-300"
                  alt="Kichik rasm 1"
                />
              </div>
              <div className="h-[150px] sm:h-[190px] relative group">
                <img
                  src="https://avatars.mds.yandex.net/get-altay/9704097/2a00000189cebec1616add2917fdc4ca2ac8/XXXL"
                  className="absolute inset-0 w-full h-full object-cover rounded-box group-hover:-rotate-2 transition-transform duration-300"
                  alt="Kichik rasm 2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-20 mx-auto p-4">
        <div>
          {/* Sarlavha qismi */}
          <div className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4  ">
              <span className="border-b-2 border-info pb-1 inline-block">{t('home.reason.title')}</span>
            </h2>
            <p className="mt-3 text-lg opacity-90 max-w-2xl">
              {t('home.reason.subtitle')}
            </p>
          </div>

          {/* Sabablar kartalari */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">


            {/* 1-karta */}
            <div className="group relative overflow-hidden bg-base-100 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 blur-md group-hover:blur-lg transition-all duration-300"></div>
              <div className="relative z-10 p-6 h-full bg-base-100 rounded-xl">
                <div className="flex items-start mb-4">
                  <div className="bg-secondary/10 p-3 rounded-xl mr-4">
                    <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">
                    {t('home.reason.cards.0.title')}
                  </h3>
                </div>
                <p className=" leading-relaxed">
                {t('home.reason.cards.0.content')}
                </p>
              </div>
            </div>
            {/* 2-karta */}
            <div className="group relative overflow-hidden bg-base-100 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 blur-md group-hover:blur-lg transition-all duration-300"></div>
              <div className="relative z-10 p-6 h-full bg-base-100 rounded-xl">
                <div className="flex items-start mb-4">
                  <div className="bg-primary/10 p-3 rounded-xl mr-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">{t('home.reason.cards.1.title')}</h3>
                </div>
                <p className=" leading-relaxed">
                {t('home.reason.cards.1.content')}
                </p>
              </div>
            </div>
            {/* 3-karta */}
            <div className="group relative overflow-hidden bg-base-100 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 blur-md group-hover:blur-lg transition-all duration-300"></div>
              <div className="relative z-10 p-6 h-full bg-base-100 rounded-xl">
                <div className="flex items-start mb-4">
                  <div className="bg-accent/10 p-3 rounded-xl mr-4">
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">{t('home.reason.cards.2.title')}</h3>
                </div>
                <p className="leading-relaxed">
                {t('home.reason.cards.2.content')}
                </p>
              </div>
            </div>

            {/* 4-karta */}
            <div className="group relative overflow-hidden bg-base-100 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 blur-md group-hover:blur-lg transition-all duration-300"></div>
              <div className="relative z-10 p-6 h-full bg-base-100 rounded-xl">
                <div className="flex items-start mb-4">
                  <div className="bg-success/10 p-3 rounded-xl mr-4">
                    <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">{t('home.reason.cards.3.title')}</h3>
                </div>
                <p className="leading-relaxed">
                {t('home.reason.cards.3.content')}
                </p>
              </div>
            </div>
          </div>

          {/* Statistika va Tugma */}
          <div className="relative glass overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 bg-base-300/20 p-8 rounded-3xl  hover:shadow-3xl transition-all duration-500">
              {/* Statistika */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-full max-w-2xl">
                {[
                  { value: "230+", label: t('home.reason.statusRank.0'), gradient: "from-primary to-accent" },
                  { value: "20+", label: t('home.reason.statusRank.1'), gradient: "from-secondary to-accent" },
                  { value: "50+", label: t('home.reason.statusRank.2'), gradient: "from-accent to-primary" },
                  { value: "15+", label: t('home.reason.statusRank.3'), gradient: "from-primary to-secondary" }
                ].map((item, index) => (
                  <div key={index} className="text-center group">
    <div className={`text-5xl font-extrabold color-cycle delay-${index*2}`}>
      {item.value}
    </div>
    <p className={`text-sm uppercase tracking-widest color-cycle delay-${index*2}`}>
      {item.label}
    </p>
  </div>
                ))}
              </div>

              {/* Tugma */}
              <Link
                to="/about"
                className="relative overflow-hidden btn btn-dash  group"
              >

                {/* Kontent */}
                <div className="relative z-10 flex items-center">
                  <span className="text-lg font-semibold tracking-wider">{t('btns.joinbtn')}</span>
                </div>


              </Link>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default Home
