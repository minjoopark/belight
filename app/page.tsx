"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference first
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light') {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      // No saved preference, use system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        setDarkMode(true);
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  // Translations
  const content = {
    ko: {
      nav: {
        home: "홈",
        practice: "업무분야",
        attorneys: "구성원",
        about: "사무소 소개",
        news: "언론보도",
        contact: "오시는 길"
      },
      hero: {
        tagline: "고객에게 빛이 되는 법률 사무소",
        subtitle: "30년 이상의 전통과 신뢰를 바탕으로 최고의 법률 서비스를 제공합니다",
        contactBtn: "상담 문의",
        practiceBtn: "업무 분야"
      }
    },
    en: {
      nav: {
        home: "Home",
        practice: "Practice Areas",
        attorneys: "Attorneys",
        about: "About",
        news: "News",
        contact: "Contact"
      },
      hero: {
        tagline: "Solving problems, adding values",
        subtitle: "Providing premier legal services with over 30 years of tradition and trust",
        contactBtn: "Contact Us",
        practiceBtn: "Practice Areas"
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-slate-900 shadow-md dark:shadow-slate-800/50' 
          : 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm'
      }`}>
        <nav className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold tracking-wider">
                <span className="text-navy-900 dark:text-gray-100">법률사무소</span>
                <span className="text-red-700 dark:text-red-500 ml-2">광화</span>
              </h1>
              <span className="ml-3 text-sm text-gray-500 dark:text-gray-400 hidden lg:block">
                Law Office Gwanghwa
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-red-700 dark:text-red-500 font-medium underline-animation">{t.nav.home}</Link>
              <Link href="/practice" className="text-gray-700 dark:text-gray-300 hover:text-navy-900 dark:hover:text-gray-100 transition font-medium underline-animation">{t.nav.practice}</Link>
              <Link href="/attorneys" className="text-gray-700 dark:text-gray-300 hover:text-navy-900 dark:hover:text-gray-100 transition font-medium underline-animation">{t.nav.attorneys}</Link>
              <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-navy-900 dark:hover:text-gray-100 transition font-medium underline-animation">{t.nav.about}</Link>
              <Link href="/news" className="text-gray-700 dark:text-gray-300 hover:text-navy-900 dark:hover:text-gray-100 transition font-medium underline-animation">{t.nav.news}</Link>
              <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-navy-900 dark:hover:text-gray-100 transition font-medium underline-animation">{t.nav.contact}</Link>
              
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
                  onClick={() => setLanguage('ko')}
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
                  onClick={() => setLanguage('en')}
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

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="space-y-1.5">
                <span className="block w-6 h-0.5 bg-gray-800 dark:bg-gray-200 transition-transform"></span>
                <span className="block w-6 h-0.5 bg-gray-800 dark:bg-gray-200 transition-opacity"></span>
                <span className="block w-6 h-0.5 bg-gray-800 dark:bg-gray-200 transition-transform"></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t dark:border-slate-800 py-4 space-y-3 bg-white dark:bg-slate-900">
              <Link href="/" className="block py-2 text-red-700 dark:text-red-500">{t.nav.home}</Link>
              <Link href="/practice" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-navy-900 dark:hover:text-gray-100">{t.nav.practice}</Link>
              <Link href="/attorneys" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-navy-900 dark:hover:text-gray-100">{t.nav.attorneys}</Link>
              <Link href="/about" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-navy-900 dark:hover:text-gray-100">{t.nav.about}</Link>
              <Link href="/news" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-navy-900 dark:hover:text-gray-100">{t.nav.news}</Link>
              <Link href="/contact" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-navy-900 dark:hover:text-gray-100">{t.nav.contact}</Link>
              <div className="flex items-center gap-4 pt-3 border-t dark:border-slate-800">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
                >
                  {darkMode ? '☀️' : '🌙'}
                </button>
                <button
                  onClick={() => setLanguage('ko')}
                  className={`text-sm font-medium ${language === 'ko' ? 'text-red-700 dark:text-red-500' : 'text-gray-500 dark:text-gray-400'}`}
                >
                  한국어
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`text-sm font-medium ${language === 'en' ? 'text-red-700 dark:text-red-500' : 'text-gray-500 dark:text-gray-400'}`}
                >
                  English
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-block">
                <div className="text-6xl md:text-7xl font-light text-navy-900 dark:text-gray-100 mb-2">
                光化

                </div>
                <div className="w-16 h-0.5 bg-red-700 dark:bg-red-500 mx-auto"></div>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-navy-900 dark:text-gray-100 mb-6 tracking-wide">
              {t.hero.tagline}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Since 1991
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-navy-900 dark:bg-red-600 text-white dark:text-white px-10 py-4 text-lg hover:bg-navy-800 dark:hover:bg-red-700 transition-colors">
                {t.hero.contactBtn}
              </Link>
              {/* 업무분야 button removed as requested */}
            </div>
          </div>
        </div>
      </section>


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