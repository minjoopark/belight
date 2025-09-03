"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function AttorneysPage() {
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
      title: "소속 변호사",
      subtitle: "풍부한 경험과 전문성을 갖춘 법률 전문가",
      backToHome: "홈으로 돌아가기",
      careerTitle: "주요 경력",
      activitiesTitle: "주요 활동",
      nav: {
        home: "홈",
        practice: "업무분야",
        attorneys: "구성원",
        about: "사무소 소개",
        news: "언론보도",
        contact: "오시는 길"
      },
      members: [
        { 
          name: "박성원", 
          title: "대표 변호사", 
          hanja: "朴 成 源",
          timeline: [
            { year: "1980", event: "문산제일고등학교 졸업" },
            { year: "1985", event: "서울대학교 법과대학 사법학과 졸업" },
            { year: "1985", event: "제27회 사법시험 합격" },
            { year: "1988", event: "사법연수원 제17기 수료" }
          ],
          specialties: [
            "대한교원공제회 공제심사위원",
            "신용협동조합중앙회 분쟁조정위원"
          ]
        },
        { 
          name: "김혜영", 
          title: "변호사",
          hanja: "金 惠 英",
          timeline: [
            { year: "1999", event: "이화여자대학교 법과대학 졸업" },
            { year: "2002", event: "제44회 사법시험 합격" },
            { year: "2005", event: "사법연수원 제34기 수료" }
          ],
          specialties: []
        },
        { 
          name: "허현회", 
          title: "변호사",
          hanja: "許 賢 喜",
          timeline: [
            { year: "1998", event: "서강대학교 법학과 졸업" },
            { year: "2000", event: "제42회 사법시험 합격" },
            { year: "2003", event: "사법연수원 제32기 수료" },
            { year: "2023", event: "現 법률사무소 광화 대표변호사" }
          ],
          specialties: [
            "한국보험법학회 이사",
            "농협손해보험(주) 고문변호사"
          ]
        }
      ]
    },
    en: {
      title: "Our Attorneys",
      subtitle: "Legal experts with extensive experience and expertise",
      backToHome: "Back to Home",
      careerTitle: "Career",
      activitiesTitle: "Activities",
      nav: {
        home: "Home",
        practice: "Practice Areas",
        attorneys: "Attorneys",
        about: "About",
        news: "News",
        contact: "Contact"
      },
      members: [
        { 
          name: "Park Sung-won", 
          title: "Managing Partner", 
          hanja: "朴 成 源",
          timeline: [
            { year: "1980", event: "Graduated from Munsan Jeil High School" },
            { year: "1985", event: "Seoul National University, College of Law" },
            { year: "1985", event: "Passed 27th Bar Examination" },
            { year: "1988", event: "Completed 17th Judicial Research and Training Institute" }
          ],
          specialties: [
            "Korean Teachers' Credit Union Review Committee Member",
            "Credit Union Federation Dispute Resolution Committee Member"
          ]
        },
        { 
          name: "Kim Hye-young", 
          title: "Attorney",
          hanja: "金 惠 英",
          timeline: [
            { year: "1999", event: "Ewha Womans University, College of Law" },
            { year: "2002", event: "Passed 44th Bar Examination" },
            { year: "2005", event: "Completed 34th Judicial Research and Training Institute" }
          ],
          specialties: []
        },
        { 
          name: "Heo Hyeon-hoe", 
          title: "Attorney",
          hanja: "許 賢 喜",
          timeline: [
            { year: "1998", event: "Sogang University, Department of Law" },
            { year: "2000", event: "Passed 42nd Bar Examination" },
            { year: "2003", event: "Completed 32nd Judicial Research and Training Institute" },
            { year: "2023", event: "Current Managing Partner at Law Office Gwanghwa" }
          ],
          specialties: [
            "Korean Insurance Law Association Director",
            "NH Property & Casualty Insurance Legal Advisor"
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
                <span className="text-amber-600 dark:text-amber-400 ml-2">광화</span>
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
              <Link href="/attorneys" className="text-amber-600 dark:text-amber-400 font-medium underline-animation">
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
                  <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
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
                      ? 'text-amber-600 dark:text-amber-400' 
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
                      ? 'text-amber-600 dark:text-amber-400' 
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
            <div className="w-24 h-0.5 bg-amber-600 dark:bg-amber-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          {/* Attorneys Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              {t.members.map((attorney, index) => (
                <div key={index} className="text-center">
                  <div className="mb-6">
                    <div className="w-48 h-48 bg-gray-200 dark:bg-slate-700 rounded-full mx-auto mb-4 border-2 border-transparent dark:border-slate-600"></div>
                    <h3 className="text-2xl font-bold text-navy-900 dark:text-gray-100">{attorney.name}</h3>
                    <p className="text-gray-500 dark:text-gray-500 text-sm mb-2">{attorney.hanja}</p>
                    <p className="text-amber-600 dark:text-amber-400 font-medium">{attorney.title}</p>
                  </div>
                  
                  <div className="text-left">
                    <h4 className="font-bold text-navy-900 dark:text-gray-200 mb-3 text-sm">{t.careerTitle}</h4>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      {attorney.timeline.map((item, idx) => (
                        <li key={idx}>
                          <span className="font-medium">{item.year}</span> {item.event}
                        </li>
                      ))}
                    </ul>
                    
                    {attorney.specialties.length > 0 && (
                      <div className="mt-4">
                        <h4 className="font-bold text-navy-900 dark:text-gray-200 mb-2 text-sm">{t.activitiesTitle}</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          {attorney.specialties.map((specialty, idx) => (
                            <li key={idx}>• {specialty}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="text-center mt-16">
            <Link 
              href="/"
              className="inline-flex items-center bg-navy-900 dark:bg-amber-600 text-white dark:text-navy-900 px-8 py-3 hover:bg-navy-800 dark:hover:bg-amber-500 transition-colors"
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