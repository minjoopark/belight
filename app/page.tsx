"use client";

import { useState, useEffect } from "react";

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
        contact: "오시는 길"
      },
      hero: {
        tagline: "고객에게 빛이 되는 법률 사무소",
        subtitle: "30년 이상의 전통과 신뢰를 바탕으로 최고의 법률 서비스를 제공합니다",
        contactBtn: "상담 문의",
        practiceBtn: "업무 분야"
      },
      practice: {
        title: "업무 분야",
        subtitle: "보험소송 및 각종 분쟁 해결에 특화된 전문 법률 서비스",
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
      attorneys: {
        title: "소속 변호사",
        subtitle: "풍부한 경험과 전문성을 갖춘 법률 전문가",
        careerTitle: "주요 경력",
        activitiesTitle: "주요 활동",
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
      about: {
        title: "법률사무소 광화",
        desc1: "법률사무소 광화는 1991년 설립 이래 30년 이상 한결같은 자세로 의뢰인의 권익 보호에 최선을 다해왔습니다. 정의와 공정함을 최우선 가치로 삼아, 모든 의뢰인이 법 앞에서 평등한 권리를 보장받을 수 있도록 노력하고 있습니다.",
        desc2: "특히 보험소송 분야에서 축적된 전문성과 경험을 바탕으로, 복잡한 법률 문제를 명확하고 효과적으로 해결하여 의뢰인에게 최상의 결과를 제공하고 있습니다.",
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
        ]
      },
      contact: {
        title: "오시는 길",
        contactTitle: "연락처",
        phone: "전화",
        fax: "팩스",
        email: "이메일",
        addressTitle: "주소",
        address: ["서울 종로구 새문안로92", "광화문오피시아 1410호", "법률사무소 광화"],
        hoursTitle: "상담 시간",
        hours: ["평일: 09:00 - 18:00", "토요일: 09:00 - 13:00"],
        consultText: "상담을 원하시는 분은 전화 또는 이메일로 문의해 주시기 바랍니다.",
        callBtn: "전화 상담 신청"
      }
    },
    en: {
      nav: {
        home: "Home",
        practice: "Practice Areas",
        attorneys: "Attorneys",
        about: "About",
        contact: "Contact"
      },
      hero: {
        tagline: "Solving problems, adding values",
        subtitle: "Providing premier legal services with over 30 years of tradition and trust",
        contactBtn: "Contact Us",
        practiceBtn: "Practice Areas"
      },
      practice: {
        title: "Practice Areas",
        subtitle: "Specialized legal services in insurance litigation and dispute resolution",
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
      },
      attorneys: {
        title: "Our Attorneys",
        subtitle: "Legal experts with extensive experience and expertise",
        careerTitle: "Career",
        activitiesTitle: "Activities",
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
      },
      about: {
        title: "Law Office Gwanghwa",
        desc1: "Since its establishment in 1991, Law Office Gwanghwa has been dedicated to protecting clients' rights with unwavering commitment for over 30 years. With justice and fairness as our core values, we strive to ensure that all clients receive equal rights before the law.",
        desc2: "Based on our accumulated expertise and experience in insurance litigation, we provide optimal results by resolving complex legal issues clearly and effectively.",
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
        ]
      },
      contact: {
        title: "Contact Us",
        contactTitle: "Contact Information",
        phone: "Phone",
        fax: "Fax",
        email: "Email",
        addressTitle: "Address",
        address: ["92 Saemunan-ro, Jongno-gu, Seoul", "Gwanghwamun Officia #1410", "Law Office Gwanghwa"],
        hoursTitle: "Office Hours",
        hours: ["Weekdays: 09:00 - 18:00", "Saturday: 09:00 - 13:00"],
        consultText: "Please contact us by phone or email for consultation.",
        callBtn: "Request Phone Consultation"
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
                <span className="text-amber-600 dark:text-amber-400 ml-2">광화</span>
              </h1>
              <span className="ml-3 text-sm text-gray-500 dark:text-gray-400 hidden lg:block">
                Law Office Gwanghwa
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-navy-900 dark:hover:text-gray-100 transition font-medium underline-animation">{t.nav.home}</a>
              <a href="#practice" className="text-gray-700 dark:text-gray-300 hover:text-navy-900 dark:hover:text-gray-100 transition font-medium underline-animation">{t.nav.practice}</a>
              <a href="#attorneys" className="text-gray-700 dark:text-gray-300 hover:text-navy-900 dark:hover:text-gray-100 transition font-medium underline-animation">{t.nav.attorneys}</a>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-navy-900 dark:hover:text-gray-100 transition font-medium underline-animation">{t.nav.about}</a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-navy-900 dark:hover:text-gray-100 transition font-medium underline-animation">{t.nav.contact}</a>
              
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
                  onClick={() => setLanguage('ko')}
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
                  onClick={() => setLanguage('en')}
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
              <a href="#home" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-navy-900 dark:hover:text-gray-100">{t.nav.home}</a>
              <a href="#practice" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-navy-900 dark:hover:text-gray-100">{t.nav.practice}</a>
              <a href="#attorneys" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-navy-900 dark:hover:text-gray-100">{t.nav.attorneys}</a>
              <a href="#about" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-navy-900 dark:hover:text-gray-100">{t.nav.about}</a>
              <a href="#contact" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-navy-900 dark:hover:text-gray-100">{t.nav.contact}</a>
              <div className="flex items-center gap-4 pt-3 border-t dark:border-slate-800">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
                >
                  {darkMode ? '☀️' : '🌙'}
                </button>
                <button
                  onClick={() => setLanguage('ko')}
                  className={`text-sm font-medium ${language === 'ko' ? 'text-amber-600 dark:text-amber-400' : 'text-gray-500 dark:text-gray-400'}`}
                >
                  한국어
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`text-sm font-medium ${language === 'en' ? 'text-amber-600 dark:text-amber-400' : 'text-gray-500 dark:text-gray-400'}`}
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
                <div className="w-16 h-0.5 bg-amber-600 dark:bg-amber-400 mx-auto"></div>
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
              <a href="#contact" className="bg-navy-900 dark:bg-amber-600 text-white dark:text-navy-900 px-10 py-4 text-lg hover:bg-navy-800 dark:hover:bg-amber-500 transition-colors">
                {t.hero.contactBtn}
              </a>
              <a href="#practice" className="border border-navy-900 dark:border-amber-600 text-navy-900 dark:text-amber-400 px-10 py-4 text-lg hover:bg-navy-900 dark:hover:bg-amber-600 hover:text-white dark:hover:text-navy-900 transition-colors">
                {t.hero.practiceBtn}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice" className="py-24 bg-gray-50 dark:bg-slate-850">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-gray-100 mb-4">
              {t.practice.title}
            </h2>
            <div className="w-24 h-0.5 bg-amber-600 dark:bg-amber-400 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t.practice.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {t.practice.areas.map((area, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 p-8 border-l-4 border-amber-600 dark:border-amber-400 hover:shadow-lg dark:hover:shadow-slate-700/50 transition-shadow">
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
      </section>

      {/* Attorneys */}
      <section id="attorneys" className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-gray-100 mb-4">
              {t.attorneys.title}
            </h2>
            <div className="w-24 h-0.5 bg-amber-600 dark:bg-amber-400 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t.attorneys.subtitle}
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              {t.attorneys.members.map((attorney, index) => (
                <div key={index} className="text-center">
                  <div className="mb-6">
                    <div className="w-48 h-48 bg-gray-200 dark:bg-slate-700 rounded-full mx-auto mb-4 border-2 border-transparent dark:border-slate-600"></div>
                    <h3 className="text-2xl font-bold text-navy-900 dark:text-gray-100">{attorney.name}</h3>
                    <p className="text-gray-500 dark:text-gray-500 text-sm mb-2">{attorney.hanja}</p>
                    <p className="text-amber-600 dark:text-amber-400 font-medium">{attorney.title}</p>
                  </div>
                  
                  <div className="text-left">
                    <h4 className="font-bold text-navy-900 dark:text-gray-200 mb-3 text-sm">{t.attorneys.careerTitle}</h4>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      {attorney.timeline.map((item, idx) => (
                        <li key={idx}>
                          <span className="font-medium">{item.year}</span> {item.event}
                        </li>
                      ))}
                    </ul>
                    
                    {attorney.specialties.length > 0 && (
                      <div className="mt-4">
                        <h4 className="font-bold text-navy-900 dark:text-gray-200 mb-2 text-sm">{t.attorneys.activitiesTitle}</h4>
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
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-gray-50 dark:bg-slate-850">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-gray-100 mb-4">
                {t.about.title}
              </h2>
              <div className="w-24 h-0.5 bg-amber-600 dark:bg-amber-400 mx-auto"></div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {t.about.desc1}
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {t.about.desc2}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div>
                  <h3 className="text-xl font-bold text-navy-900 dark:text-gray-100 mb-4">{t.about.coreValuesTitle}</h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    {t.about.coreValues.map((value, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-amber-600 dark:text-amber-400 mr-3">•</span>
                        <span>{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-navy-900 dark:text-gray-100 mb-4">{t.about.promiseTitle}</h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    {t.about.promises.map((promise, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-amber-600 dark:text-amber-400 mr-3">•</span>
                        <span>{promise}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-gray-100 mb-4">
              {t.contact.title}
            </h2>
            <div className="w-24 h-0.5 bg-amber-600 dark:bg-amber-400 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-navy-900 dark:text-gray-100 mb-6">{t.contact.contactTitle}</h3>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <div>
                    <p className="font-medium mb-1">{t.contact.phone}</p>
                    <p className="text-lg">02-3276-3311</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">{t.contact.fax}</p>
                    <p className="text-lg">02-3276-3319</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">{t.contact.email}</p>
                    <p className="text-lg">master@lawbelight.com</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-navy-900 dark:text-gray-100 mb-6">{t.contact.addressTitle}</h3>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p className="text-lg leading-relaxed">
                    {t.contact.address.map((line, idx) => (
                      <span key={idx}>
                        {line}
                        {idx < t.contact.address.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                  <div>
                    <p className="font-medium mb-1">{t.contact.hoursTitle}</p>
                    {t.contact.hours.map((hour, idx) => (
                      <p key={idx}>{hour}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-8 bg-gray-50 dark:bg-slate-800 text-center">
              <p className="text-gray-600 dark:text-gray-400 mb-4">{t.contact.consultText}</p>
              <a href="tel:0232763311" className="inline-block bg-navy-900 dark:bg-amber-600 text-white dark:text-navy-900 px-8 py-3 hover:bg-navy-800 dark:hover:bg-amber-500 transition-colors">
                {t.contact.callBtn}
              </a>
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