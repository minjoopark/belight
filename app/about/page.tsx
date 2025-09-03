"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function AboutPage() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light') {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        setDarkMode(true);
        document.documentElement.classList.add('dark');
      }
    }

    const savedLang = localStorage.getItem('language');
    if (savedLang === 'en' || savedLang === 'ko') {
      setLanguage(savedLang as 'ko' | 'en');
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  const changeLanguage = (lang: 'ko' | 'en') => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const content = {
    ko: {
      title: "법률사무소 광화",
      desc1: "법률사무소 광화(光化)는 문자 그대로 법률적으로 고객(Client)에게 빛이 되는 법률사무소를 지향합니다.",
      desc2: "저희는 Client를 위한 최상의 법적 논리를 제공하고, 법률적 쟁점에 관한 정확한 분석을 통해 고객이 합리적 판단을 내릴 수 있도록 노력합니다. 저희는 단순한 법의 해석적용만을 위주로 삼지 않고 철저한 사실관계의 파악을 위해 매 사건, 매 쟁점마다 Client와 긴밀한 협의를 함은 물론, 사실관계 파악에 필요한 전문지식의 축적 및 자료파악에 전 구성원이 불철주야 힘쓰고 있습니다.",
      desc3: "저희는 권위적이고 수동적인 자세에서 탈피하여 겸손하고 능동적인 자세로 고객의 권익확보를 최고의 가치로 여기고 수준높은 법률서비스를 제공함으로써 고객에게 빛이 될 것을 약속드립니다.",
      desc4: "저희 광화는 배상책임, 특종보험, 화재보험, 장기상해보험, 의료과오, 제조물책임, 공제 등 각 분야에서 수많은 사례들을 다루면서 선도적 판례를 이끌어내고 있습니다. 저희는 보험소송뿐만 아니라 일반 기업관련 소송 및 법률자문분야에 있어서도 최고의 전문성을 확보하여 수준 높은 법률서비스를 제공하여 드리겠습니다.",
      coreValuesTitle: "핵심 가치",
      coreValues: [
        "정의와 공정함의 실현",
        "의뢰인 권익의 최우선 보호",
        "전문성과 신뢰성"
      ],
      promiseTitle: "약속",
      promises: [
        "신속하고 정확한 법률 서비스",
        "투명한 수임료와 진행 과정",
        "철저한 비밀 보장"
      ],
      backToHome: "홈으로 돌아가기",
      nav: {
        home: "홈",
        practice: "업무분야",
        attorneys: "구성원",
        about: "사무소 소개",
        news: "언론보도",
        contact: "오시는 길"
      }
    },
    en: {
      title: "Law Office Gwanghwa",
      desc1: "Law Office Gwanghwa (光化) literally aspires to be a law firm that becomes a light for our clients in legal matters.",
      desc2: "We provide the best legal reasoning for our clients and strive to help clients make rational decisions through accurate analysis of legal issues. Rather than focusing solely on the interpretation and application of law, we work tirelessly day and night to understand the facts thoroughly, maintaining close consultation with clients on every case and every issue, while accumulating the specialized knowledge and materials necessary for fact-finding.",
      desc3: "We promise to be a light for our clients by departing from authoritative and passive attitudes, adopting humble and proactive approaches, considering the protection of client rights as our highest value, and providing high-quality legal services.",
      desc4: "Gwanghwa has been leading landmark precedents while handling numerous cases in various fields including liability compensation, specialty insurance, fire insurance, long-term accident insurance, medical malpractice, product liability, and mutual aid. We will continue to provide high-quality legal services by securing the highest level of expertise not only in insurance litigation but also in general corporate litigation and legal advisory fields.",
      coreValuesTitle: "Core Values",
      coreValues: [
        "Realization of Justice and Fairness",
        "Priority Protection of Client Rights",
        "Expertise and Reliability"
      ],
      promiseTitle: "Our Promise",
      promises: [
        "Swift and Accurate Legal Services",
        "Transparent Fees and Procedures",
        "Complete Confidentiality"
      ],
      backToHome: "Back to Home",
      nav: {
        home: "Home",
        practice: "Practice Areas",
        attorneys: "Attorneys",
        about: "About",
        news: "News",
        contact: "Contact"
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white dark:bg-slate-900 shadow-md dark:shadow-slate-800/50">
        <nav className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <h1 className="text-2xl font-bold tracking-wider">
                <span className="text-navy-900 dark:text-gray-100">법률사무소</span>
                <span className="text-red-700 dark:text-red-500 ml-2">광화</span>
              </h1>
              <span className="ml-3 text-sm text-gray-500 dark:text-gray-400 hidden lg:block">
                Law Office Gwanghwa
              </span>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-navy-900 dark:hover:text-gray-100 transition font-medium underline-animation">
                {t.nav.home}
              </Link>
              <Link href="/practice" className="text-gray-700 dark:text-gray-300 hover:text-navy-900 dark:hover:text-gray-100 transition font-medium underline-animation">
                {t.nav.practice}
              </Link>
              <Link href="/attorneys" className="text-gray-700 dark:text-gray-300 hover:text-navy-900 dark:hover:text-gray-100 transition font-medium underline-animation">
                {t.nav.attorneys}
              </Link>
              <Link href="/about" className="text-red-700 dark:text-red-500 font-medium underline-animation">
                {t.nav.about}
              </Link>
              <Link href="/news" className="text-gray-700 dark:text-gray-300 hover:text-navy-900 dark:hover:text-gray-100 transition font-medium underline-animation">
                {t.nav.news}
              </Link>
              <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-navy-900 dark:hover:text-gray-100 transition font-medium underline-animation">
                {t.nav.contact}
              </Link>
              
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
              
              {/* Language Toggle */}
              <div className="flex items-center border-l dark:border-slate-700 pl-6 ml-2">
                <button
                  onClick={() => changeLanguage('ko')}
                  className={`px-2 py-1 text-sm font-medium transition-colors ${
                    language === 'ko' 
                      ? 'text-red-700 dark:text-red-500' 
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  한국어
                </button>
                <span className="text-gray-400 dark:text-gray-600 mx-1">|</span>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`px-2 py-1 text-sm font-medium transition-colors ${
                    language === 'en' 
                      ? 'text-red-700 dark:text-red-500' 
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  English
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-navy-900 dark:text-gray-100 mb-4">
                {t.title}
              </h1>
              <div className="w-24 h-0.5 bg-red-700 dark:bg-red-500 mx-auto"></div>
            </div>
            
            {/* About Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                {t.desc1}
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                {t.desc2}
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                {t.desc3}
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                {t.desc4}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-white dark:bg-slate-800 p-8 border-l-4 border-red-700 dark:border-red-500 hover:shadow-lg dark:hover:shadow-slate-700/50 transition-shadow">
                  <h3 className="text-xl font-bold text-navy-900 dark:text-gray-100 mb-4">{t.coreValuesTitle}</h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    {t.coreValues.map((value, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-red-700 dark:text-red-500 mr-3">•</span>
                        <span>{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-slate-800 p-8 border-l-4 border-red-700 dark:border-red-500 hover:shadow-lg dark:hover:shadow-slate-700/50 transition-shadow">
                  <h3 className="text-xl font-bold text-navy-900 dark:text-gray-100 mb-4">{t.promiseTitle}</h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    {t.promises.map((promise, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-red-700 dark:text-red-500 mr-3">•</span>
                        <span>{promise}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Back to Home Button */}
            <div className="text-center mt-16">
              <Link 
                href="/"
                className="inline-flex items-center bg-navy-900 dark:bg-red-600 text-white dark:text-white px-8 py-3 hover:bg-navy-800 dark:hover:bg-red-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                {t.backToHome}
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-navy-900 dark:bg-slate-950 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">
              법률사무소 광화 | Law Office Gwanghwa
            </h3>
            <p className="text-gray-400 mb-4">
              {language === 'ko' 
                ? '서울 종로구 새문안로92 광화문오피시아 1410호'
                : '92 Saemunan-ro, Jongno-gu, Seoul, Gwanghwamun Officia #1410'
              }
            </p>
            <p className="text-gray-400 mb-6">
              {language === 'ko'
                ? '전화: 02-3276-3311 | 팩스: 02-3276-3319'
                : 'Tel: +82-2-3276-3311 | Fax: +82-2-3276-3319'
              }
            </p>
            <div className="border-t border-gray-700 dark:border-slate-800 pt-6">
              <p className="text-sm text-gray-500">
                {language === 'ko'
                  ? '사업자번호: 201-01-44379'
                  : 'Business Registration: 201-01-44379'
                }<br/>
                Copyright ⓒ 법률사무소광화 All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}