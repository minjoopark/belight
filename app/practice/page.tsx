"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function PracticeAreasPage() {
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
      title: "업무 분야",
      subtitle: "보험소송 및 각종 분쟁 해결에 특화된 전문 법률 서비스",
      backToHome: "홈으로 돌아가기",
      nav: {
        home: "홈",
        practice: "업무분야",
        attorneys: "구성원",
        about: "사무소 소개",
        news: "언론보도",
        contact: "오시는 길"
      },
      areas: [
        { 
          title: "생명보험 소송", 
          details: [
            "보험금(사망, 장해, 입원보험금 등) 채무 부존 재확인",
            "계약효력, 보험금연체, 보험시기 등 각종 보험분쟁 관련 소송"
          ]
        },
        { 
          title: "의료소송", 
          details: [
            "의료사고, 의료과오, 설명의무위반 관련 손해배상",
            "의사배상책임보험 등 각종 의료분쟁 관련 소송"
          ]
        },
        { 
          title: "화재보험소송", 
          details: [
            "방화, 실화, 원인불명의 화재 등 각종 화재보험 관련 소송"
          ]
        },
        { 
          title: "책임보험소송", 
          details: [
            "영업배상, 생산물배상, 유도선관리배상책임, 체육시설업자, 가스배상책임 등 각종 책임보험 관련 소송"
          ]
        },
        { 
          title: "제조물책임소송", 
          details: [
            "제조물의 결함(설계상의 결함, 제조상의 결함, 표시상의 결함)으로 인한 사고 소송",
            "기업과 소비자, 소비자와 유통업자, 유통업자와 기업 등의 분쟁"
          ]
        },
        { 
          title: "구상금소송", 
          details: [
            "공동불법행위자나 제3자에 대한 손해배상청구 및 이에 관한 입증의 법률서비스",
            "책임당사자에 대한 신뢰조사, 사전 법적조치 구상금의 회수 등"
          ]
        }
      ]
    },
    en: {
      title: "Practice Areas",
      subtitle: "Specialized legal services in insurance litigation and dispute resolution",
      backToHome: "Back to Home",
      nav: {
        home: "Home",
        practice: "Practice Areas",
        attorneys: "Attorneys",
        about: "About",
        news: "News",
        contact: "Contact"
      },
      areas: [
        { 
          title: "Life Insurance Litigation", 
          details: [
            "Insurance claim disputes (death, disability, hospitalization benefits)",
            "Contract validity, premium disputes, and various insurance-related litigation"
          ]
        },
        { 
          title: "Medical Malpractice", 
          details: [
            "Medical accidents, malpractice, and breach of duty to inform",
            "Medical professional liability insurance disputes"
          ]
        },
        { 
          title: "Fire Insurance Litigation", 
          details: [
            "Arson, accidental fires, and unknown cause fire insurance claims"
          ]
        },
        { 
          title: "Liability Insurance", 
          details: [
            "Commercial general liability, product liability, sports facility liability, and gas liability insurance disputes"
          ]
        },
        { 
          title: "Product Liability", 
          details: [
            "Product defects (design, manufacturing, and labeling defects) litigation",
            "Disputes between businesses and consumers, retailers and distributors"
          ]
        },
        { 
          title: "Subrogation Claims", 
          details: [
            "Claims against joint tortfeasors and third parties",
            "Investigation of liable parties and recovery of subrogation claims"
          ]
        }
      ]
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
              <Link href="/practice" className="text-red-700 dark:text-red-500 font-medium underline-animation">
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
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 dark:text-gray-100 mb-4">
              {t.title}
            </h1>
            <div className="w-24 h-0.5 bg-red-700 dark:bg-red-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          {/* Practice Areas Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.areas.map((area, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 p-8 border-l-4 border-red-700 dark:border-red-500 hover:shadow-lg dark:hover:shadow-slate-700/50 transition-shadow">
                  <h3 className="text-xl font-bold text-navy-900 dark:text-gray-100 mb-4">{area.title}</h3>
                  <ul className="space-y-2">
                    {area.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        • {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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