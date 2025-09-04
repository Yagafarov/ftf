import React from 'react'
import useTitle from '../components/useTitle';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import AboutPreview from '../components/AboutPreview';

const Home = () => {
  useTitle('home.mtitle');

  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AboutPreview />
    </>
  )
}

export default Home
