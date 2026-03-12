'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useTheme } from './ThemeProvider';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8F4F8] via-[#B8E8F5] to-[#7FDBFF] dark:from-[#0A1628] dark:via-[#0D2137] dark:to-[#0f3460] text-gray-900 dark:text-white overflow-x-hidden transition-colors duration-300">
      {/* Background layers */}
      <div className="fixed inset-0 bg-grid-pattern bg-radial-glow pointer-events-none" aria-hidden />
      <div className="fixed inset-0 bg-gradient-to-b from-[#E8F4F8]/80 via-[#B8E8F5]/70 to-[#7FDBFF]/80 dark:from-[#0A1628] dark:via-[#0D2137] dark:to-[#0f3460]/90 pointer-events-none" aria-hidden />

      {/* Floating geometric illustrations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden hidden sm:block" aria-hidden>
        <div className="absolute top-24 left-[10%] w-10 h-10 sm:w-14 sm:h-14 rounded-xl border border-[#00D4FF]/40 dark:border-primary/20 rotate-12 animate-float bg-[#7FDBFF]/30 dark:bg-primary/5" />
        <div className="absolute top-48 right-[15%] w-8 h-8 sm:w-10 sm:h-10 rounded-lg border border-[#40E0D0]/40 dark:border-secondary/20 -rotate-6 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-[20%] w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-[#00D4FF]/30 dark:border-primary/15 animate-float-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-48 right-[25%] w-12 h-12 sm:w-16 sm:h-16 rounded-2xl border border-[#40E0D0]/25 dark:border-secondary/15 rotate-45 animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:glass border-b border-[#00D4FF]/20 dark:border-white/5 backdrop-blur-md pt-[env(safe-area-inset-top)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden ring-2 ring-primary/30 ring-offset-2 ring-offset-deep shrink-0">
              <Image src="/images/logo.jpeg" alt="WordPlayX" fill className="object-cover" sizes="40px" />
            </div>
            <span className="font-display font-bold text-lg sm:text-xl text-gray-900 dark:text-white tracking-wide truncate">WordPlayX</span>
          </div>
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-600 dark:text-slate-400 hover:text-primary hover:bg-[#E8F4F8] dark:hover:bg-white/10 transition"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <a href="#features" className="text-gray-600 dark:text-slate-400 hover:text-primary font-medium transition-colors py-2">Features</a>
            <a href="#how-it-works" className="text-gray-600 dark:text-slate-400 hover:text-primary font-medium transition-colors py-2">How to Play</a>
            <a href="#testimonials" className="text-gray-600 dark:text-slate-400 hover:text-primary font-medium transition-colors py-2">Reviews</a>
            <a href="#screenshots" className="text-gray-600 dark:text-slate-400 hover:text-primary font-medium transition-colors py-2">Screenshots</a>
            <a href="#faq" className="text-gray-600 dark:text-slate-400 hover:text-primary font-medium transition-colors py-2">FAQ</a>
            <a href="#download" className="font-display font-semibold bg-primary text-white px-5 py-2.5 rounded-lg hover:bg-primary/90 transition glow-primary min-h-[44px] inline-flex items-center">Download</a>
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((o) => !o)}
            className="md:hidden p-2 -mr-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        <div className={`md:hidden overflow-hidden transition-all duration-200 ease-out ${mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 sm:px-6 pb-4 pt-2 border-t border-[#00D4FF]/20 dark:border-white/5 flex flex-col gap-1">
            <button onClick={() => { toggleTheme(); closeMobileMenu(); }} className="py-3 px-3 rounded-lg text-gray-600 dark:text-slate-400 hover:text-primary hover:bg-[#E8F4F8] dark:hover:bg-white/5 font-medium transition min-h-[44px] flex items-center gap-2 text-left">
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </button>
            <a href="#features" onClick={closeMobileMenu} className="py-3 px-3 rounded-lg text-slate-400 hover:text-primary hover:bg-white/5 font-medium transition min-h-[44px] flex items-center">Features</a>
            <a href="#how-it-works" onClick={closeMobileMenu} className="py-3 px-3 rounded-lg text-slate-400 hover:text-primary hover:bg-white/5 font-medium transition min-h-[44px] flex items-center">How to Play</a>
            <a href="#testimonials" onClick={closeMobileMenu} className="py-3 px-3 rounded-lg text-slate-400 hover:text-primary hover:bg-white/5 font-medium transition min-h-[44px] flex items-center">Reviews</a>
            <a href="#screenshots" onClick={closeMobileMenu} className="py-3 px-3 rounded-lg text-slate-400 hover:text-primary hover:bg-white/5 font-medium transition min-h-[44px] flex items-center">Screenshots</a>
            <a href="#faq" onClick={closeMobileMenu} className="py-3 px-3 rounded-lg text-slate-400 hover:text-primary hover:bg-white/5 font-medium transition min-h-[44px] flex items-center">FAQ</a>
            <a href="#download" onClick={closeMobileMenu} className="mt-2 font-display font-semibold bg-primary text-white py-3 px-4 rounded-lg hover:bg-primary/90 transition text-center min-h-[44px] flex items-center justify-center">Download</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 md:pb-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
          <div className="flex-1 min-w-0 text-center lg:text-left order-2 lg:order-1 w-full">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight tracking-tight">
              Sharpen your mind, <span className="text-gradient">play with words</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-slate-400 mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0">
              WordPlayX is a futuristic word puzzle experience. Solve levels, unlock power-ups, and build streaks while expanding your vocabulary.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a href="#download" className="inline-flex items-center justify-center gap-2 font-display font-semibold bg-gradient-to-r from-[#1A5276] to-[#00D4FF] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl hover:opacity-95 transition glow-primary min-h-[48px] sm:min-h-0">Get the App</a>
              <a href="#how-it-works" className="inline-flex items-center justify-center gap-2 font-display font-semibold border-2 border-primary/50 text-primary px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl hover:bg-primary/10 transition min-h-[48px] sm:min-h-0">Learn How to Play</a>
            </div>
          </div>
          <div className="flex-shrink-0 flex justify-center items-center order-1 lg:order-2 w-full lg:flex-1 lg:max-w-none py-2 sm:py-0 gap-4 sm:gap-6 lg:gap-8 flex-wrap lg:flex-nowrap">
            <div className="relative w-[min(300px,50vw)] sm:w-[min(340px,48vw)] lg:w-72 mx-auto overflow-hidden lg:overflow-visible animate-none lg:animate-float-slow">
              <div className="absolute inset-0 bg-primary/20 rounded-[2.5rem] sm:rounded-[3rem] blur-xl sm:blur-2xl scale-110 -z-10" aria-hidden />
              <div className="relative w-full rounded-[2.5rem] sm:rounded-[3rem] border-[10px] sm:border-[12px] border-gray-800 dark:border-gray-900 bg-gray-800 dark:bg-gray-900 shadow-2xl shadow-black/30" style={{ aspectRatio: '9/19.5', maxHeight: 'min(560px, 88vh)' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 w-[28%] max-w-[100px] h-6 sm:h-7 rounded-full bg-black" />
                <div className="absolute inset-[6px] sm:inset-2 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden bg-gray-100 dark:bg-deep">
                  <Image src={isDark ? '/images/dark_theme_home_page.png' : '/images/light_theme_home_page.png'} alt={isDark ? 'WordPlayX home — dark theme' : 'WordPlayX home — light theme'} fill className="object-cover object-top transition-opacity duration-300" sizes="(max-width: 640px) 300px, (max-width: 1024px) 340px, 288px" />
                </div>
              </div>
              <p className="text-center text-xs sm:text-sm text-gray-600 dark:text-slate-400 mt-2 font-medium">Home</p>
            </div>
            <div className="relative w-[min(300px,50vw)] sm:w-[min(340px,48vw)] lg:w-72 mx-auto overflow-hidden lg:overflow-visible animate-none lg:animate-float-slow" style={{ animationDelay: '1s' }}>
              <div className="absolute inset-0 bg-primary/20 rounded-[2.5rem] sm:rounded-[3rem] blur-xl sm:blur-2xl scale-110 -z-10" aria-hidden />
              <div className="relative w-full rounded-[2.5rem] sm:rounded-[3rem] border-[10px] sm:border-[12px] border-gray-800 dark:border-gray-900 bg-gray-800 dark:bg-gray-900 shadow-2xl shadow-black/30" style={{ aspectRatio: '9/19.5', maxHeight: 'min(560px, 88vh)' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 w-[28%] max-w-[100px] h-6 sm:h-7 rounded-full bg-black" />
                <div className="absolute inset-[6px] sm:inset-2 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden bg-gray-100 dark:bg-deep">
                  <Image src={isDark ? '/images/dark_theme_game_page.png' : '/images/light_theme_game_page.png'} alt={isDark ? 'WordPlayX game — dark theme' : 'WordPlayX game — light theme'} fill className="object-cover object-top transition-opacity duration-300" sizes="(max-width: 640px) 300px, (max-width: 1024px) 340px, 288px" />
                </div>
              </div>
              <p className="text-center text-xs sm:text-sm text-gray-600 dark:text-slate-400 mt-2 font-medium">Game</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative pt-10 sm:pt-12 md:pt-14 pb-16 sm:pb-20 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4 sm:mb-6">Why WordPlayX?</h2>
          <p className="text-gray-600 dark:text-slate-400 text-center max-w-2xl mx-auto mb-10 sm:mb-16 text-sm sm:text-base px-2">Built for players who love words. Every feature is designed to keep you sharp and engaged.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: 'Word Puzzles', desc: 'Tap letter buttons to fill word boxes. Form valid words using available letters to complete each level.', Icon: () => <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6h16M4 12h10M4 18h14" /><rect x="2" y="4" width="6" height="6" rx="1" strokeDasharray="2 2" /><rect x="12" y="10" width="6" height="6" rx="1" strokeDasharray="2 2" /></svg> },
              { title: 'Power-ups', desc: 'Shuffle letters or reveal a letter when stuck. Earn points to unlock power-ups from the shop.', Icon: () => <svg className="w-10 h-10 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L15 8l6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1L12 2z" /></svg> },
              { title: 'Timer Mode', desc: 'Enable timer mode for extra challenge. Race against the clock and beat your best streak.', Icon: () => <svg className="w-10 h-10 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg> },
              { title: 'Statistics & Graphs', desc: 'Track level, score, words solved, best streak. View level history with graphs and charts.', Icon: () => <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 3v18h18" /><path d="M7 14l4-4 4 2 5-6" strokeLinecap="round" strokeLinejoin="round" /></svg> },
              { title: 'Level History', desc: 'See which word you completed at each level and when. Your journey, tracked.', Icon: () => <svg className="w-10 h-10 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 8v4l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2" /></svg> },
              { title: 'Dark & Light Mode', desc: 'Blue & water drop theme in both modes. Switch anytime in settings.', Icon: () => <svg className="w-10 h-10 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg> },
            ].map((feature, i) => (
              <div key={i} className="group bg-white/90 dark:glass rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-[#00D4FF]/25 dark:border-white/10 hover:border-primary/40 transition-all duration-300 shadow-lg dark:shadow-none">
                <div className="mb-4 sm:mb-5 p-2.5 sm:p-3 rounded-xl bg-[#E8F4F8]/80 dark:bg-white/5 w-fit group-hover:bg-primary/10 transition-colors"><feature.Icon /></div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-slate-400 text-sm sm:text-base">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative pt-8 sm:pt-10 md:pt-12 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { value: '500+', label: 'Levels', icon: '📚' },
              { value: '10K+', label: 'Words', icon: '🔤' },
              { value: '3', label: 'Difficulties', icon: '📊' },
              { value: '∞', label: 'Fun', icon: '✨' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/80 dark:glass rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center border border-[#00D4FF]/20 dark:border-white/10 hover:border-primary/30 transition-all duration-300">
                <span className="text-3xl sm:text-4xl mb-2 block">{stat.icon}</span>
                <div className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-gray-600 dark:text-slate-400 text-sm sm:text-base font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Play - Redesigned card grid */}
      <section id="how-it-works" className="relative pt-12 sm:pt-14 md:pt-16 pb-20 sm:pb-24 md:pb-28 overflow-hidden">
        {/* Soft background band */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#E8F4F8]/60 via-transparent to-[#B8E8F5]/40 dark:from-[#0D2137]/50 dark:via-transparent dark:to-[#0f3460]/30" aria-hidden />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/30 to-transparent" aria-hidden />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 sm:mb-16">
            <span className="inline-block font-display text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary dark:text-secondary mb-3">Gameplay</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">How to Play</h2>
            <p className="text-gray-600 dark:text-slate-400 text-base sm:text-lg max-w-xl mx-auto">Simple rules. Endless wordplay.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[
              { step: 1, title: 'Tap letters', text: 'Tap any letter from the grid to place it in the next empty word box.', icon: '⌨️' },
              { step: 2, title: 'Form words', text: 'Each letter is used once per word. Find valid words using the letters shown.', icon: '🔤' },
              { step: 3, title: 'Complete the level', text: 'Fill every word box correctly to unlock the next level and earn points.', icon: '✅' },
              { step: 4, title: 'Use hints', text: 'Hints reveal one letter at a time. Use them wisely—they may cost coins.', icon: '💡' },
              { step: 5, title: 'Clear & retry', text: 'Clear removes letters from the current word so you can try again without losing progress.', icon: '🔄' },
              { step: 6, title: 'Power-ups', text: 'Shuffle rearranges letters; Reveal shows one. Buy more in the shop with coins.', icon: '⚡' },
              { step: 7, title: 'Build streaks', text: 'Solve levels in a row to build a streak and earn extra rewards.', icon: '🔥' },
            ].map((item) => (
              <article
                key={item.step}
                className="group relative rounded-2xl sm:rounded-[1.25rem] p-5 sm:p-6 bg-white/90 dark:bg-white/5 border border-[#00D4FF]/20 dark:border-white/10 shadow-lg shadow-gray-200/50 dark:shadow-none hover:shadow-xl hover:shadow-[#00D4FF]/10 dark:hover:bg-white/10 hover:border-[#00D4FF]/40 transition-all duration-300"
              >
                <div className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30 flex items-center justify-center font-display font-bold text-primary dark:text-secondary text-sm sm:text-base">
                  {item.step}
                </div>
                <span className="text-2xl sm:text-3xl mb-3 block" aria-hidden>{item.icon}</span>
                <h3 className="font-display text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 pr-10">{item.title}</h3>
                <p className="text-gray-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>

          <p className="text-center text-gray-500 dark:text-slate-500 text-sm mt-10">Tap letters → form words → level up. That’s it.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative pt-10 sm:pt-12 md:pt-14 pb-16 sm:pb-20 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4 sm:mb-6">What Players Say</h2>
          <p className="text-gray-600 dark:text-slate-400 text-center max-w-2xl mx-auto mb-12 sm:mb-16 text-sm sm:text-base">Join thousands of word lovers who sharpen their minds daily.</p>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { quote: 'Addictive and challenging! Perfect for my morning coffee. The level history keeps me motivated.', name: 'Alex R.', role: 'Word Enthusiast', rating: 5 },
              { quote: 'Love the blue theme and water drop accents. Statistics screen with graphs is a nice touch.', name: 'Sam K.', role: 'Puzzle Lover', rating: 5 },
              { quote: 'Timer mode pushes me to think faster. Best word game I\'ve played on mobile.', name: 'Jordan M.', role: 'Casual Gamer', rating: 5 },
            ].map((t, i) => (
              <div key={i} className="bg-white/90 dark:glass rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-[#00D4FF]/25 dark:border-white/10">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-slate-300 text-sm sm:text-base mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{t.name}</div>
                  <div className="text-sm text-gray-500 dark:text-slate-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section id="screenshots" className="relative pt-10 sm:pt-12 md:pt-14 pb-16 sm:pb-20 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4 sm:mb-6">See It In Action</h2>
          <p className="text-gray-600 dark:text-slate-400 text-center max-w-2xl mx-auto mb-12 sm:mb-16 text-sm sm:text-base">Beautiful design. Intuitive gameplay.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="relative group">
              <div className="relative aspect-[9/19.5] rounded-2xl overflow-hidden border-4 border-gray-800 dark:border-gray-700 bg-gray-100 dark:bg-deep shadow-xl">
                <Image src="/images/light_theme_home_page.png" alt="WordPlayX Home - Light" fill className="object-cover object-top transition-transform duration-300 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 50vw, 25vw" />
              </div>
              <p className="text-center text-sm text-gray-600 dark:text-slate-400 mt-3 font-medium">Home • Light</p>
            </div>
            <div className="relative group">
              <div className="relative aspect-[9/19.5] rounded-2xl overflow-hidden border-4 border-gray-800 dark:border-gray-700 bg-gray-100 dark:bg-deep shadow-xl">
                <Image src="/images/dark_theme_home_page.png" alt="WordPlayX Home - Dark" fill className="object-cover object-top transition-transform duration-300 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 50vw, 25vw" />
              </div>
              <p className="text-center text-sm text-gray-600 dark:text-slate-400 mt-3 font-medium">Home • Dark</p>
            </div>
            <div className="relative group">
              <div className="relative aspect-[9/19.5] rounded-2xl overflow-hidden border-4 border-gray-800 dark:border-gray-700 bg-gray-100 dark:bg-deep shadow-xl">
                <Image src="/images/light_theme_game_page.png" alt="WordPlayX Game - Light" fill className="object-cover object-top transition-transform duration-300 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 50vw, 25vw" />
              </div>
              <p className="text-center text-sm text-gray-600 dark:text-slate-400 mt-3 font-medium">Game • Light</p>
            </div>
            <div className="relative group">
              <div className="relative aspect-[9/19.5] rounded-2xl overflow-hidden border-4 border-gray-800 dark:border-gray-700 bg-gray-100 dark:bg-deep shadow-xl">
                <Image src="/images/dark_theme_game_page.png" alt="WordPlayX Game - Dark" fill className="object-cover object-top transition-transform duration-300 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 50vw, 25vw" />
              </div>
              <p className="text-center text-sm text-gray-600 dark:text-slate-400 mt-3 font-medium">Game • Dark</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative pt-10 sm:pt-12 md:pt-14 pb-16 sm:pb-20 md:pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4 sm:mb-6">Frequently Asked Questions</h2>
          <p className="text-gray-600 dark:text-slate-400 text-center mb-12 sm:mb-16 text-sm sm:text-base">Quick answers to common questions.</p>
          <div className="space-y-4">
            {[
              { q: 'How do I earn points?', a: 'Complete levels to earn points. Easy levels give +5, Medium +8, and Hard +12 points. Use points in the Shop to get coins for power-ups.' },
              { q: 'What are coins used for?', a: 'Coins power Shuffle, Reveal, and Undo. Earn coins by playing (streak bonus, time bonus) or exchange points for coins in the Shop.' },
              { q: 'Can I play offline?', a: 'Yes! WordPlayX works offline. Your progress syncs when you\'re back online.' },
              { q: 'What difficulty should I choose?', a: 'Easy (1-4 letters) for beginners, Medium (5-6 letters) for most players, and Hard (7+ letters) for a real challenge.' },
              { q: 'Where can I see my level history?', a: 'Tap Statistics in the app to see Level History—which word you completed at each level and when.' },
            ].map((faq, i) => (
              <details key={i} className="group bg-white/80 dark:glass rounded-xl border border-[#00D4FF]/20 dark:border-white/10 overflow-hidden">
                <summary className="px-5 sm:px-6 py-4 cursor-pointer font-semibold text-gray-900 dark:text-white hover:bg-[#E8F4F8]/50 dark:hover:bg-white/5 transition list-none flex items-center justify-between">
                  {faq.q}
                  <svg className="w-5 h-5 text-primary shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-5 sm:px-6 pb-4 pt-0 text-gray-600 dark:text-slate-400 text-sm sm:text-base">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA - Unique split layout */}
      <section id="download" className="relative pt-12 sm:pt-14 md:pt-16 pb-20 sm:pb-24 md:pb-28 overflow-hidden">
        {/* Distinct background band */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D2137] via-[#0A1628] to-[#0f3460] dark:from-[#050a12] dark:via-[#0A1628] dark:to-[#0D2137]" />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,transparent_40%,rgba(0,212,255,0.06)_50%,transparent_60%)] bg-[length:200%_100%] animate-shine" aria-hidden />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/50 to-transparent" aria-hidden />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#40E0D0]/30 to-transparent" aria-hidden />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">
            {/* Left: Branding + copy */}
            <div className="flex-1 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
              <span className="inline-block font-display text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#00D4FF] mb-4">Get the app</span>
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden ring-2 ring-[#00D4FF]/40 ring-offset-2 ring-offset-[#0A1628] dark:ring-offset-[#050a12] shrink-0">
                  <Image src="/images/logo.jpeg" alt="" fill className="object-cover" sizes="64px" />
                </div>
                <span className="font-display text-2xl sm:text-3xl font-bold text-white">WordPlayX</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-white mb-4 leading-tight">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#40E0D0]">Play?</span>
              </h2>
              <p className="text-slate-400 text-base sm:text-lg max-w-md mx-auto lg:mx-0">
                Download now and start sharpening your mind with words.
              </p>
            </div>

            {/* Right: Download buttons in a dedicated card */}
            <div className="flex-shrink-0 w-full lg:max-w-[480px]">
              <div className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-white/5 dark:bg-white/5 border border-white/10 backdrop-blur-sm shadow-[0_0_60px_-12px_rgba(0,212,255,0.15)]">
                <div className="absolute -inset-px rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#00D4FF]/20 from-10% via-transparent to-[#40E0D0]/10 to-90% opacity-60 -z-10" aria-hidden />
                <p className="text-center text-slate-400 text-sm font-medium mb-6">Available on</p>
                {/* App store buttons: SVGs from landing/public/images/appstore.svg, landing/public/images/playstore.svg */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center">
                  <a href="https://apps.apple.com/app/wordplayx" target="_blank" rel="noopener noreferrer" className="group flex-1 inline-flex items-center justify-center rounded-xl overflow-hidden bg-black/40 hover:bg-black/60 border border-white/10 hover:border-[#00D4FF]/30 transition-all duration-300 min-h-[100px] h-[100px] focus:outline-none focus:ring-2 focus:ring-[#00D4FF] focus:ring-offset-2 focus:ring-offset-[#0A1628]" aria-label="Download on the App Store">
                    <Image src="/images/appstore.svg" alt="Download on the App Store" width={840} height={200} className="h-[100px] w-full max-w-[420px] object-contain object-center group-hover:scale-[1.02] transition-transform duration-300" />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.wordplayx.play_with_word" target="_blank" rel="noopener noreferrer" className="group flex-1 inline-flex items-center justify-center rounded-xl overflow-hidden bg-black/40 hover:bg-black/60 border border-white/10 hover:border-[#00D4FF]/30 transition-all duration-300 min-h-[100px] h-[100px] focus:outline-none focus:ring-2 focus:ring-[#00D4FF] focus:ring-offset-2 focus:ring-offset-[#0A1628]" aria-label="Get it on Google Play">
                    <Image src="/images/playstore.svg" alt="Get it on Google Play" width={840} height={200} className="h-[100px] w-full max-w-[420px] object-contain object-center group-hover:scale-[1.02] transition-transform duration-300" />
                  </a>
                </div>
                <p className="text-center text-slate-500 text-xs mt-5">iOS & Android</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-10 md:py-12 pb-[calc(2rem+env(safe-area-inset-bottom))] sm:pb-[calc(2.5rem+env(safe-area-inset-bottom))] md:pb-[calc(3rem+env(safe-area-inset-bottom))] border-t border-[#00D4FF]/30 dark:border-white/10 bg-white/95 dark:bg-[#0A0A0F]/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row justify-between gap-8 sm:gap-12">
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden ring-2 ring-primary/30 shrink-0">
                <Image src="/images/logo.jpeg" alt="WordPlayX" fill className="object-cover" sizes="40px" />
              </div>
              <div>
                <span className="font-display font-bold text-gray-900 dark:text-white text-lg">WordPlayX</span>
                <p className="text-gray-600 dark:text-slate-300 text-sm mt-1 max-w-xs">Word Puzzle Game • Sharpen your mind, play with words</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end gap-6 sm:gap-10">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-3">Product</h4>
                <div className="flex flex-col gap-2">
                  <a href="#features" className="text-gray-700 dark:text-slate-300 hover:text-primary text-sm transition">Features</a>
                  <a href="#how-it-works" className="text-gray-700 dark:text-slate-300 hover:text-primary text-sm transition">How to Play</a>
                  <a href="#download" className="text-gray-700 dark:text-slate-300 hover:text-primary text-sm transition">Download</a>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-3">Support</h4>
                <div className="flex flex-col gap-2">
                  <a href="#screenshots" className="text-gray-700 dark:text-slate-300 hover:text-primary text-sm transition">Screenshots</a>
                  <a href="#faq" className="text-gray-700 dark:text-slate-300 hover:text-primary text-sm transition">FAQ</a>
                  <a href="/privacy" className="text-gray-700 dark:text-slate-300 hover:text-primary text-sm transition">Privacy</a>
                  <a href="/terms" className="text-gray-700 dark:text-slate-300 hover:text-primary text-sm transition">Terms</a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-white/10 text-center">
            <p className="text-gray-600 dark:text-slate-400 text-xs">© {new Date().getFullYear()} WordPlayX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
