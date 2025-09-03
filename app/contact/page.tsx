"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ContactPage() {
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
      title: "오시는 길",
      contactTitle: "연락처",
      phone: "전화",
      fax: "팩스",
      email: "이메일",
      addressTitle: "주소",
      address: ["서울 종로구 새문안로92", "광화문오피시아 1410호", "법률사무소 광화"],
      hoursTitle: "상담 시간",
      hours: ["평일: 09:00 - 18:00"],
      consultText: "상담을 원하시는 분은 전화 또는 이메일로 문의해 주시기 바랍니다.",
      callBtn: "전화 상담 신청",
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
      title: "Contact Us",
      contactTitle: "Contact Information",
      phone: "Phone",
      fax: "Fax",
      email: "Email",
      addressTitle: "Address",
      address: ["92 Saemunan-ro, Jongno-gu, Seoul", "Gwanghwamun Officia #1410", "Law Office Gwanghwa"],
      hoursTitle: "Office Hours",
      hours: ["Weekdays: 09:00 - 18:00"],
      consultText: "Please contact us by phone or email for consultation.",
      callBtn: "Request Phone Consultation",
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
              <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-navy-900 dark:hover:text-gray-100 transition font-medium underline-animation">
                {t.nav.about}
              </Link>
              <Link href="/news" className="text-gray-700 dark:text-gray-300 hover:text-navy-900 dark:hover:text-gray-100 transition font-medium underline-animation">
                {t.nav.news}
              </Link>
              <Link href="/contact" className="text-red-700 dark:text-red-500 font-medium underline-animation">
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
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 dark:text-gray-100 mb-4">
              {t.title}
            </h1>
            <div className="w-24 h-0.5 bg-red-700 dark:bg-red-500 mx-auto"></div>
          </div>
          
          {/* Contact Content */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white dark:bg-slate-800 p-8 border-l-4 border-red-700 dark:border-red-500 hover:shadow-lg dark:hover:shadow-slate-700/50 transition-shadow">
                <h3 className="text-xl font-bold text-navy-900 dark:text-gray-100 mb-6">{t.contactTitle}</h3>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <div>
                    <p className="font-medium mb-1">{t.phone}</p>
                    <p className="text-lg">02-3276-3311</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">{t.fax}</p>
                    <p className="text-lg">02-3276-3319</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">{t.email}</p>
                    <p className="text-lg">master@lawbelight.com</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-8 border-l-4 border-red-700 dark:border-red-500 hover:shadow-lg dark:hover:shadow-slate-700/50 transition-shadow">
                <h3 className="text-xl font-bold text-navy-900 dark:text-gray-100 mb-6">{t.addressTitle}</h3>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p className="text-lg leading-relaxed">
                    {t.address.map((line, idx) => (
                      <span key={idx}>
                        {line}
                        {idx < t.address.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                  <div>
                    <p className="font-medium mb-1">{t.hoursTitle}</p>
                    {t.hours.map((hour, idx) => (
                      <p key={idx}>{hour}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Section */}
            <div className="mt-12 mb-12">
              <h3 className="text-2xl font-bold text-navy-900 dark:text-gray-100 mb-6 text-center">
                {language === 'ko' ? '찾아오시는 길' : 'Location'}
              </h3>
              <div className="bg-white dark:bg-slate-800 p-2 border-l-4 border-red-700 dark:border-red-500 shadow-lg dark:shadow-slate-700/50">
                <iframe
                  src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=ko&amp;q=%EC%84%9C%EC%9A%B8%EC%8B%9C%20%EC%A2%85%EB%A1%9C%EA%B5%AC%20%EC%83%88%EB%AC%B8%EC%95%88%EB%A1%9C92%20%EA%B4%91%ED%99%94%EB%AC%B8%EC%98%A4%ED%94%BC%EC%8B%9C%EC%95%84%201410%ED%98%B8+(Law%20Office%20Gwanghwa)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded"
                  title={language === 'ko' ? '법률사무소 광화 위치' : 'Law Office Gwanghwa Location'}
                />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
                {language === 'ko' 
                  ? '지도를 클릭하시면 길찾기 및 상세 정보를 확인하실 수 있습니다.'
                  : 'Click on the map for directions and detailed information.'
                }
              </p>
            </div>

            {/* Consultation Call-to-Action */}
            <div className="mt-12 p-8 bg-gray-50 dark:bg-slate-800 text-center max-w-2xl mx-auto">
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">{t.consultText}</p>
              <a href="tel:0232763311" className="inline-block bg-navy-900 dark:bg-red-600 text-white dark:text-white px-8 py-3 hover:bg-navy-800 dark:hover:bg-red-700 transition-colors">
                {t.callBtn}
              </a>
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