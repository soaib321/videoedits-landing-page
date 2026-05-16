import { useState } from 'react';
import { Menu, X, Play, Mail, Phone, MapPin } from 'lucide-react';

const services = [
  'High-impact video ads that drive conversions and engage your target audience with precision.',
  'Optimized short-form videos for Instagram, TikTok, and YouTube that capture attention instantly.',
  'Professional presentations, training videos, and company profiles that elevate your brand.',
];

const experienceStats = [
  { value: '10+', label: 'Years in Video Editing' },
  { value: '500+', label: 'Completed Projects' },
  { value: '250+', label: 'Satisfied Clients' },
  { value: '15+', label: 'Industry Awards' },
];

const softwareSkills = [
  {
    name: 'Premiere Pro',
    level: 'Expert',
    gradient: 'from-indigo-950 via-purple-950 to-slate-950',
    accent: 'Pr',
  },
  {
    name: 'After Effects',
    level: 'Expert',
    gradient: 'from-violet-950 via-purple-900 to-indigo-950',
    accent: 'Ae',
  },
  {
    name: 'Photoshop',
    level: 'Advanced',
    gradient: 'from-sky-950 via-blue-950 to-slate-950',
    accent: 'Ps',
  },
  {
    name: 'Audition',
    level: 'Advanced',
    gradient: 'from-teal-950 via-cyan-950 to-slate-950',
    accent: 'Au',
  },
];

const summaryStats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '250+', label: 'Happy Clients' },
  { value: '10+', label: 'Years Experience' },
];

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@videoedits.com',
    href: 'mailto:hello@videoedits.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Los Angeles, CA',
    href: '#',
  },
];

function CardShell({ children, className = '' }) {
  return (
    <div
      className={`bg-gradient-to-b from-purple-900/60 to-purple-950/40 border border-purple-500/30 rounded-3xl backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-32 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-20 w-64 h-64 bg-fuchsia-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <header className="relative z-40 border-b border-purple-500/20 bg-slate-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            VideoEdits
          </div>

          <button
            type="button"
            className="md:hidden p-2.5 rounded-xl border border-white/20 text-white hover:border-purple-400/50 hover:text-purple-300 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#about" className="text-sm text-gray-300 hover:text-white transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
          </nav>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-slate-950/80 backdrop-blur-sm border-t border-purple-500/20 px-6 py-4 space-y-3">
            <a
              href="#features"
              onClick={closeMenu}
              className="block text-sm text-gray-300 hover:text-white transition-colors py-2"
            >
              Features
            </a>
            <a
              href="#about"
              onClick={closeMenu}
              className="block text-sm text-gray-300 hover:text-white transition-colors py-2"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="block text-sm text-gray-300 hover:text-white transition-colors py-2"
            >
              Contact
            </a>
          </div>
        )}
      </header>

      <main className="relative z-10">
        <section className="pt-20 pb-12 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16 bg-gradient-to-b from-purple-800/40 to-purple-950/20 border border-purple-500/30 rounded-3xl p-32 text-center backdrop-blur-sm">
              <p className="text-gray-400 text-lg">Add your banner image here</p>
              <p className="text-gray-500 text-sm mt-2">
                Replace this section with your banner image
              </p>
            </div>

            <CardShell className="px-12 py-20 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-400/40 rounded-full mb-8 hover:bg-purple-500/30 transition-colors">
                <Play className="w-4 h-4 text-purple-400 fill-purple-400" />
                <span className="text-sm text-purple-300 font-medium">
                  Professional Video Editing Services
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                <span className="text-white">Transform Your Vision</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-pink-500 bg-clip-text text-transparent">
                  Into Cinematic Reality
                </span>
              </h1>

              <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                Elevate your content with expert video editing that captivates audiences and
                brings your stories to life with stunning visual artistry.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#contact"
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-0.5"
                >
                  Get Started
                </a>
                <a
                  href="#about"
                  className="px-8 py-3 border border-purple-400/50 text-white font-semibold rounded-full hover:border-purple-400 hover:bg-purple-500/10 transition-all backdrop-blur-sm"
                >
                  View Portfolio
                </a>
              </div>
            </CardShell>
          </div>
        </section>

        <section id="features" className="pb-20 px-6 scroll-mt-20">
          <div className="max-w-5xl mx-auto grid gap-5 md:grid-cols-3">
            {services.map((description) => (
              <div
                key={description.slice(0, 24)}
                className="bg-gradient-to-b from-purple-900/50 to-purple-950/30 border border-purple-500/25 rounded-2xl p-6 backdrop-blur-sm hover:border-purple-400/40 transition-colors"
              >
                <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="pb-20 px-6 scroll-mt-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Experience &amp; Skills
              </h2>
              <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
                Mastering industry-leading tools to deliver exceptional results
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <CardShell className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-white mb-6">Professional Experience</h3>
                <div className="space-y-4">
                  {experienceStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-center gap-4 bg-purple-800/30 border border-purple-500/20 rounded-2xl px-5 py-4"
                    >
                      <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent shrink-0">
                        {stat.value}
                      </span>
                      <span className="text-gray-300 text-sm md:text-base">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </CardShell>

              <CardShell className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-white mb-6">Adobe Creative Suite</h3>
                <div className="grid grid-cols-2 gap-4">
                  {softwareSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="overflow-hidden rounded-2xl border border-purple-500/20 bg-purple-900/20"
                    >
                      <div
                        className={`relative h-28 bg-gradient-to-br ${skill.gradient} flex items-center justify-center`}
                      >
                        <div className="absolute inset-0 bg-black/30" />
                        <div className="absolute inset-0 opacity-40">
                          <div className="absolute top-3 left-3 right-3 h-1.5 rounded-full bg-white/10" />
                          <div className="absolute top-7 left-3 w-1/2 h-1 rounded-full bg-white/10" />
                          <div className="absolute bottom-6 left-3 right-3 h-8 rounded bg-white/5" />
                        </div>
                        <span className="relative text-2xl font-bold text-white/90 tracking-tight">
                          {skill.accent}
                        </span>
                      </div>
                      <div className="px-4 py-3">
                        <p className="text-white font-semibold text-sm">{skill.name}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{skill.level}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardShell>
            </div>
          </div>
        </section>

        <section className="pb-20 px-6">
          <div className="max-w-5xl mx-auto">
            <CardShell className="px-8 py-12 md:py-14">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
                {summaryStats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </p>
                    <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
                  </div>
                ))}
              </div>
            </CardShell>
          </div>
        </section>

        <section id="contact" className="pb-24 px-6 scroll-mt-20">
          <div className="max-w-5xl mx-auto">
            <CardShell className="px-6 py-12 md:px-12 md:py-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Let&apos;s Create Together
                </h2>
                <p className="text-gray-400 text-base md:text-lg">
                  Ready to bring your project to life? Get in touch today.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 mb-10">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex flex-col items-center text-center bg-purple-800/25 border border-purple-500/20 rounded-2xl px-5 py-8 hover:border-purple-400/40 hover:bg-purple-800/35 transition-colors"
                    >
                      <Icon className="w-7 h-7 text-purple-400 mb-4" strokeWidth={1.5} />
                      <span className="text-gray-500 text-xs uppercase tracking-wide mb-2">
                        {item.label}
                      </span>
                      <span className="text-white text-sm font-medium">{item.value}</span>
                    </a>
                  );
                })}
              </div>

              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full bg-purple-900/40 border border-purple-500/25 rounded-xl px-5 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-400/50 focus:ring-1 focus:ring-purple-400/30 transition-colors"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full bg-purple-900/40 border border-purple-500/25 rounded-xl px-5 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-400/50 focus:ring-1 focus:ring-purple-400/30 transition-colors"
                  />
                </div>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full bg-purple-900/40 border border-purple-500/25 rounded-xl px-5 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-400/50 focus:ring-1 focus:ring-purple-400/30 transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:via-fuchsia-600 hover:to-purple-700 transition-all shadow-lg shadow-pink-500/20"
                >
                  Send Message
                </button>
              </form>
            </CardShell>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-purple-500/20 py-8 px-6 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} VideoEdits. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
