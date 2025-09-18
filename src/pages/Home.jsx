import React from 'react';
import Hero from '../components/Hero';
import HowToApply from '../components/HowToApply';
import Deadlines from '../components/Deadlines';
import Requirements from '../components/Requirements';
import SpecialApplicants from '../components/SpecialApplicants';
import Connect from '../components/Connect';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      <main>
        <Hero />
        <HowToApply />
        <Deadlines />
        <Requirements />
        <SpecialApplicants />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}
