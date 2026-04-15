import { useEffect, useRef, useState } from "react";
import "@/App.css";
import {
  ArrowRight,
  MessageCircle,
  Phone,
  User,
  Smartphone,
  Rocket,
  MousePointerClick,
  Shield,
  Scale,
  X,
  Menu,
  ChevronDown,
  MapPin,
  Mail,
  Heart,
  Code2,
  Palette,
  Zap,
  Star,
  Check,
  Sparkles,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const WHATSAPP_URL = "https://wa.me/message/K772YPNGJLLON1";
const MIRA_PHOTO =
  "https://customer-assets.emergentagent.com/job_webdesign-upgrade/artifacts/2z2x66g1_WhatsApp%20Image%202025-10-08%20at%2011.00.14_26722a68.jpg";
const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_webdesign-upgrade/artifacts/vxtsfyiv_freesiteslogo.png";
const MOCKUP_1 =
  "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwJTIwY29sb3JmdWx8ZW58MHx8fHwxNzc2MjkwMDA1fDA&ixlib=rb-4.1.0&q=85";
const MOCKUP_2 =
  "https://images.unsplash.com/photo-1642132652860-603f4e3c19b7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwJTIwY29sb3JmdWx8ZW58MHx8fHwxNzc2MjkwMDA1fDA&ixlib=rb-4.1.0&q=85";
const MOCKUP_3 =
  "https://images.unsplash.com/photo-1648134859211-4a1b57575f4e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwJTIwY29sb3JmdWx8ZW58MHx8fHwxNzc2MjkwMDA1fDA&ixlib=rb-4.1.0&q=85";
const MOCKUP_4 =
  "https://images.unsplash.com/photo-1648134859177-66e35b61e106?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwJTIwY29sb3JmdWx8ZW58MHx8fHwxNzc2MjkwMDA1fDA&ixlib=rb-4.1.0&q=85";

/* ─── Scroll reveal hook ─── */
function useScrollReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function ScrollReveal({ children, className = "", delay = 0 }) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`scroll-reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ─── Browser Mockup Component ─── */
function BrowserMockup({ imgSrc, className = "" }) {
  return (
    <div className={`browser-mockup ${className}`}>
      <div className="browser-dots">
        <span className="bg-red-400" />
        <span className="bg-yellow-400" />
        <span className="bg-green-400" />
      </div>
      <img
        src={imgSrc}
        alt="Website Preview"
        className="w-full h-auto block"
        loading="lazy"
      />
    </div>
  );
}

/* ─── Wave Divider ─── */
function WaveDivider({ color = "#f0fdf4", flip = false }) {
  return (
    <div className={`wave-divider ${flip ? "rotate-180" : ""}`}>
      <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path
          d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

/* ─── Marquee Ticker ─── */
function MarqueeTicker() {
  const items = [
    "Kostenloses Design",
    "Kein Risiko",
    "100% Responsive",
    "DSGVO-konform",
    "High-Speed",
    "Individuell",
    "Modern",
    "Professionell",
  ];

  return (
    <div className="overflow-hidden py-4 bg-gradient-to-r from-green-500 via-teal-500 to-green-500">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest whitespace-nowrap px-8"
          >
            <Star className="w-4 h-4 fill-white" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Navigation ─── */
function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      data-testid="main-navigation"
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl nav-glass rounded-full px-6 py-2 flex justify-between items-center transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <a href="#top" data-testid="logo-link" className="flex items-center gap-1 group hover-wiggle">
        <img
          src={LOGO_URL}
          alt="FreeSites Logo"
          className="h-10 w-auto"
          style={{ mixBlendMode: "multiply" }}
        />
      </a>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <a href="#how-it-works" data-testid="nav-how-it-works" className="hover:text-green-600 transition-colors">So geht's</a>
        <a href="#about" data-testid="nav-about" className="hover:text-green-600 transition-colors">Über mich</a>
        <a href="#benefits" data-testid="nav-benefits" className="hover:text-green-600 transition-colors">Vorteile</a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="nav-cta-button"
          className="btn-lime px-5 py-2.5 rounded-full text-sm inline-flex items-center gap-2"
        >
          <MessageCircle className="w-4 h-4" />
          Jetzt Starten
        </a>
      </div>

      <button
        data-testid="mobile-menu-button"
        className="md:hidden text-slate-600 hover:text-green-600 transition-colors"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {mobileOpen && (
        <div data-testid="mobile-menu" className="absolute top-full left-0 right-0 mt-2 nav-glass rounded-2xl p-6 flex flex-col gap-4 md:hidden">
          <a href="#how-it-works" className="text-slate-600 hover:text-green-600" onClick={() => setMobileOpen(false)}>So geht's</a>
          <a href="#about" className="text-slate-600 hover:text-green-600" onClick={() => setMobileOpen(false)}>Über mich</a>
          <a href="#benefits" className="text-slate-600 hover:text-green-600" onClick={() => setMobileOpen(false)}>Vorteile</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-lime px-5 py-3 rounded-full text-center text-sm inline-flex items-center justify-center gap-2">
            <MessageCircle className="w-4 h-4" /> Jetzt Starten
          </a>
        </div>
      )}
    </nav>
  );
}

/* ─── Hero Section ─── */
function HeroSection() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-b from-green-50/80 via-teal-50/30 to-transparent"
    >
      {/* Background blobs */}
      <div className="bg-blob w-[500px] h-[500px] rounded-full bg-green-300 top-[-10%] left-[-8%]" />
      <div className="bg-blob w-[400px] h-[400px] rounded-full bg-teal-300 bottom-[5%] right-[-5%]" />
      <div className="bg-blob w-[300px] h-[300px] rounded-full bg-yellow-200 top-[20%] right-[15%]" style={{ opacity: 0.15 }} />

      {/* ─── Floating website mockups ─── */}
      {/* Left - large, slightly tilted, gentle float */}
      <div className="hidden lg:block absolute left-[-8%] top-[20%] w-[420px] z-[1] opacity-90" style={{ transform: 'rotate(-6deg)', animation: 'gentle-left 5s ease-in-out infinite' }}>
        <BrowserMockup imgSrc={MOCKUP_1} />
      </div>

      {/* Right - large, slightly tilted, gentle float */}
      <div className="hidden lg:block absolute right-[-8%] top-[18%] w-[400px] z-[1] opacity-90" style={{ transform: 'rotate(5deg)', animation: 'gentle-right 5.5s ease-in-out infinite' }}>
        <BrowserMockup imgSrc={MOCKUP_2} />
      </div>

      {/* Floating sparkles */}
      <div className="absolute top-[25%] left-[12%] sparkle-anim text-green-300" style={{ animationDelay: "0s" }}>
        <Sparkles className="w-6 h-6" />
      </div>
      <div className="absolute top-[35%] right-[15%] sparkle-anim text-teal-300" style={{ animationDelay: "1s" }}>
        <Star className="w-5 h-5 fill-current" />
      </div>
      <div className="absolute bottom-[30%] left-[20%] sparkle-anim text-yellow-300" style={{ animationDelay: "2s" }}>
        <Heart className="w-5 h-5 fill-current" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8 pt-24">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-semibold tracking-wide badge-float">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            100% RISIKOFREI
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1
            data-testid="hero-heading"
            className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tighter text-slate-900"
          >
            Deine neue Website.
            <br />
            <span className="text-fresh-gradient">Kostenlos entwickelt.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p
            data-testid="hero-subheading"
            className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-body"
          >
            Mache den nächsten Schritt mit einem ultra-modernen Webdesign.{" "}
            <strong className="text-slate-800 font-semibold">Der Haken? Es gibt keinen.</strong>{" "}
            Du bezahlst erst, wenn du die Website liebst und online stellen willst.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-cta-button"
              className="bounce-cta inline-block"
            >
              <div className="btn-lime px-8 py-4 rounded-full text-lg flex items-center justify-center gap-3">
                <MessageCircle className="w-5 h-5" />
                Projekt anfragen
                <ArrowRight className="w-5 h-5" />
              </div>
            </a>
            <a
              href="#how-it-works"
              data-testid="hero-secondary-cta"
              className="px-8 py-4 rounded-full font-semibold text-slate-600 border border-slate-200 bg-white/60 hover:bg-white hover:border-slate-300 transition-all flex items-center justify-center gap-2 backdrop-blur-md shadow-sm hover-wiggle"
            >
              Wie funktioniert das?
              <ChevronDown className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="inline-flex items-center gap-2 text-slate-400 text-sm pt-4">
            <MapPin className="w-4 h-4 text-teal-500" />
            Webdesign aus Müllheim bei Freiburg
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── How It Works ─── */
function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Vision besprechen",
      desc: "Wir sprechen über deine Ideen, Ziele und Wünsche für die neue Website.",
      icon: <MessageCircle className="w-6 h-6" />,
      bg: "bg-green-50",
      iconColor: "text-green-600",
      iconBg: "bg-green-100",
      numColor: "text-green-200",
      emoji: "💬",
    },
    {
      num: "02",
      title: "Kostenloses Design",
      desc: "Ich entwickle und designe deine Website komplett kostenlos und unverbindlich.",
      icon: <Palette className="w-6 h-6" />,
      bg: "bg-sky-50",
      iconColor: "text-sky-600",
      iconBg: "bg-sky-100",
      numColor: "text-sky-200",
      emoji: "🎨",
    },
    {
      num: "03",
      title: "Bezahle nur bei \u2665",
      desc: "Dir gefällt das Ergebnis? Super! Erst jetzt kaufst du die Website. Wenn nicht, kostet es dich nichts.",
      icon: <Heart className="w-6 h-6" />,
      bg: "bg-rose-50",
      iconColor: "text-rose-500",
      iconBg: "bg-rose-100",
      numColor: "text-rose-200",
      emoji: "🎉",
    },
  ];

  return (
    <section id="how-it-works" data-testid="how-it-works-section" className="relative z-10">
      <WaveDivider color="#ecfdf5" />
      <div className="section-mint py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2
                data-testid="how-it-works-heading"
                className="font-heading font-black text-4xl sm:text-5xl tracking-tight text-slate-900 mb-6"
              >
                In 3 Schritten zum{" "}
                <span className="text-fresh-gradient">Erfolg</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg font-body">
                Kein Risiko, keine versteckten Kosten. Ein transparenter Prozess
                für dein perfektes Design.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 120}>
                <div
                  data-testid={`step-card-${i + 1}`}
                  className={`feature-card rounded-3xl p-8 lg:p-10 text-center ${step.bg} hover-wiggle`}
                >
                  <div className={`step-number mb-2 ${step.numColor}`}>{step.num}</div>
                  <div className="text-3xl mb-4">{step.emoji}</div>
                  <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 font-body leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
      <WaveDivider color="#ecfdf5" flip />
    </section>
  );
}

/* ─── Stats Marquee ─── */
function StatsBar() {
  return (
    <div className="relative z-10">
      <MarqueeTicker />
    </div>
  );
}

/* ─── About Me ─── */
function AboutMe() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="py-24 sm:py-32 relative z-10 section-lavender"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-center">
          <ScrollReveal className="md:col-span-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-300/30 to-green-300/20 blur-2xl scale-125" />
              <img
                src={MIRA_PHOTO}
                alt="Mira Knaup – Webdesignerin"
                data-testid="about-portrait"
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover object-top photo-glow border-4 border-white shadow-xl"
              />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white text-slate-800 px-4 py-2 rounded-full font-heading font-bold text-sm shadow-lg border border-slate-100 badge-float whitespace-nowrap">
                <MapPin className="w-4 h-4 inline mr-1 text-teal-500" />
                Müllheim bei Freiburg
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="md:col-span-3" delay={150}>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-sm font-semibold">
                <User className="w-4 h-4" />
                Über mich
              </div>
              <h2
                data-testid="about-heading"
                className="font-heading font-black text-4xl sm:text-5xl tracking-tight text-slate-900 leading-[1.1]"
              >
                Hi, ich bin{" "}
                <span className="text-fresh-gradient">Mira Knaup</span>{" "}
                <span className="inline-block hover-wiggle cursor-default">👋</span>
              </h2>
              <p className="text-slate-600 text-lg font-body leading-relaxed max-w-xl">
                Webdesignerin aus Müllheim bei Freiburg. Ich helfe
                Unternehmen und Selbstständigen dabei, mit einem modernen,
                professionellen Webauftritt online durchzustarten — ohne
                finanzielles Risiko.
              </p>
              <p className="text-slate-500 text-base font-body leading-relaxed max-w-xl">
                Mein Ansatz ist einfach: Ich designe deine Website komplett
                kostenlos. Erst wenn du zufrieden bist und die Website online
                stellen möchtest, wird bezahlt. Kein Risiko, kein Kleingedrucktes.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  { icon: <Code2 className="w-4 h-4" />, label: "Modernes Webdesign", color: "bg-green-50 border-green-200 text-green-700" },
                  { icon: <Zap className="w-4 h-4" />, label: "Schnelle Umsetzung", color: "bg-amber-50 border-amber-200 text-amber-700" },
                  { icon: <Shield className="w-4 h-4" />, label: "100% Risikofrei", color: "bg-teal-50 border-teal-200 text-teal-700" },
                ].map((tag) => (
                  <span
                    key={tag.label}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium hover-wiggle cursor-default ${tag.color}`}
                  >
                    {tag.icon}
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Benefits Bento Grid ─── */
function Benefits() {
  const items = [
    {
      icon: <Smartphone className="w-7 h-7" />,
      title: "100% Responsive",
      desc: "Perfekte Darstellung auf allen Geräten — Smartphone, Tablet oder Desktop.",
      span: "md:col-span-8",
      bg: "bg-gradient-to-br from-green-50 to-teal-50",
      iconColor: "text-green-600",
      iconBg: "bg-green-100",
      emoji: "📱",
    },
    {
      icon: <Rocket className="w-7 h-7" />,
      title: "High-Speed",
      desc: "Blitzschnelle Ladezeiten für optimale UX und bessere Google-Rankings.",
      span: "md:col-span-4",
      bg: "bg-gradient-to-br from-sky-50 to-cyan-50",
      iconColor: "text-sky-600",
      iconBg: "bg-sky-100",
      emoji: "🚀",
    },
    {
      icon: <MousePointerClick className="w-7 h-7" />,
      title: "Interaktiv",
      desc: "Moderne Animationen und flüssige Übergänge, die Besucher begeistern.",
      span: "md:col-span-4",
      bg: "bg-gradient-to-br from-violet-50 to-purple-50",
      iconColor: "text-violet-600",
      iconBg: "bg-violet-100",
      emoji: "✨",
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "DSGVO-konform",
      desc: "Deine Website entspricht den aktuellen Datenschutzrichtlinien.",
      span: "md:col-span-4",
      bg: "bg-gradient-to-br from-amber-50 to-yellow-50",
      iconColor: "text-amber-600",
      iconBg: "bg-amber-100",
      emoji: "🔒",
    },
    {
      icon: <Palette className="w-7 h-7" />,
      title: "Individuelles Design",
      desc: "Kein Template — jede Website wird individuell für dich gestaltet.",
      span: "md:col-span-4",
      bg: "bg-gradient-to-br from-rose-50 to-pink-50",
      iconColor: "text-rose-600",
      iconBg: "bg-rose-100",
      emoji: "🎨",
    },
  ];

  return (
    <section id="benefits" data-testid="benefits-section" className="relative z-10">
      <WaveDivider color="#ecfeff" />
      <div className="section-sky py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2
                data-testid="benefits-heading"
                className="font-heading font-black text-4xl sm:text-5xl tracking-tight text-slate-900 mb-6"
              >
                State-of-the-Art{" "}
                <span className="text-fresh-gradient">Technologie</span>
              </h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto font-body">
                Deine Website sieht nicht nur gut aus — sie ist auch technisch auf
                dem neuesten Stand. Schnell, sicher und zukunftssicher.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {items.map((item, i) => (
              <ScrollReveal key={item.title} className={item.span} delay={i * 80}>
                <div
                  data-testid={`benefit-card-${i + 1}`}
                  className={`bento-item feature-card rounded-3xl p-8 h-full ${item.bg}`}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center ${item.iconColor}`}>
                      {item.icon}
                    </div>
                    <span className="text-2xl">{item.emoji}</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-500 font-body leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
      <WaveDivider color="#ecfeff" flip />
    </section>
  );
}

/* ─── Guarantee Banner ─── */
function GuaranteeBanner() {
  return (
    <ScrollReveal className="relative z-10">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-16">
        <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-3xl p-8 md:p-12 text-center shadow-xl shadow-green-500/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-36 h-36 rounded-full bg-white/10 blur-3xl translate-y-1/2 -translate-x-1/2" />
          <div className="relative z-10">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="font-heading font-black text-2xl md:text-3xl text-white mb-3">
              Mein Versprechen an dich
            </h3>
            <p className="text-white/80 text-lg max-w-xl mx-auto font-body mb-6">
              Du bezahlst erst, wenn du die Website wirklich liebst. Wenn nicht — kostet es dich keinen Cent.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Kostenlose Entwicklung", "Kein Risiko", "Kein Kleingedrucktes"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                  <Check className="w-4 h-4" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

/* ─── Contact Section ─── */
function ContactSection() {
  return (
    <section id="contact" data-testid="contact-section" className="relative z-10 section-peach">
      <WaveDivider color="#fff7ed" />
      <div className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
            <ScrollReveal className="md:col-span-2 space-y-8">
              <div>
                <h2
                  data-testid="contact-heading"
                  className="font-heading font-black text-4xl sm:text-5xl tracking-tight text-slate-900 mb-4"
                >
                  Lass uns{" "}
                  <span className="text-fresh-gradient">starten</span>{" "}
                  <span className="inline-block hover-wiggle cursor-default">🚀</span>
                </h2>
                <p className="text-slate-500 text-lg font-body">
                  Schreib mir eine Nachricht oder ruf mich an. Dein kostenloses
                  Design-Konzept wartet.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 space-y-6 border border-slate-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Ansprechpartnerin</p>
                    <p data-testid="contact-name" className="font-bold text-lg text-slate-900">Mira Knaup</p>
                  </div>
                </div>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="contact-phone-link" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 shrink-0 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Telefon / WhatsApp</p>
                    <p className="font-bold text-lg text-slate-900 group-hover:text-teal-600 transition-colors">+49 151 64004263</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">E-Mail</p>
                    <p className="font-bold text-lg text-slate-900">miraknaup@gmail.com</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="md:col-span-3" delay={150}>
              <div
                data-testid="whatsapp-cta-card"
                className="bg-gradient-to-br from-green-500 to-teal-500 rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center text-center min-h-[400px] shadow-lg shadow-green-500/10 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/10 blur-3xl translate-y-1/2 -translate-x-1/2" />
                <div className="relative z-10">
                  <div className="text-5xl mb-6">💬</div>
                  <h3 data-testid="whatsapp-cta-heading" className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">
                    Direkt per WhatsApp
                  </h3>
                  <p className="text-white/80 mb-8 max-w-md mx-auto text-lg font-body">
                    Lass uns dein Projekt unkompliziert besprechen. Klicke auf den Button, um direkt einen Chat zu starten.
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="whatsapp-send-button"
                    className="bounce-cta inline-block"
                  >
                    <div className="bg-white text-green-700 font-bold px-10 py-4 rounded-full text-lg inline-flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                      <MessageCircle className="w-5 h-5" />
                      Nachricht senden
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
      <WaveDivider color="#fff7ed" flip />
    </section>
  );
}

/* ─── Impressum ─── */
function ImpressumContent() {
  return (
    <div className="text-slate-600 space-y-6 text-sm leading-relaxed modal-content max-h-[60vh] overflow-y-auto pr-2">
      <div>
        <h3 className="text-slate-900 font-semibold mb-2">Angaben gemäß § 5 TMG</h3>
        <p>FREEsites Webdesign<br />Mira Knaup<br />Müllheim bei Freiburg</p>
      </div>
      <div>
        <h3 className="text-slate-900 font-semibold mb-2">Kontakt</h3>
        <p>Telefon: +49 151 64004263<br />E-Mail: miraknaup@gmail.com</p>
      </div>
      <div>
        <h3 className="text-slate-900 font-semibold mb-2">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h3>
        <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
      </div>
    </div>
  );
}

/* ─── Datenschutz ─── */
function DatenschutzContent() {
  return (
    <div className="text-slate-600 space-y-8 text-sm leading-relaxed modal-content max-h-[60vh] overflow-y-auto pr-2">
      <div>
        <h3 className="text-slate-900 font-bold text-base mb-3">1. Datenschutz auf einen Blick</h3>
        <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
      </div>
      <div>
        <h3 className="text-slate-900 font-bold text-base mb-3">2. Hosting</h3>
        <p className="mb-3">Wir hosten die Inhalte unserer Website bei folgendem Anbieter: Externes Hosting. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.</p>
        <p>Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO).</p>
      </div>
      <div>
        <h3 className="text-slate-900 font-bold text-base mb-3">3. Allgemeine Hinweise und Pflichtinformationen</h3>
        <h4 className="text-slate-800 font-semibold mb-1">Datenschutz</h4>
        <p className="mb-3">Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
        <h4 className="text-slate-800 font-semibold mb-1">Hinweis zur verantwortlichen Stelle</h4>
        <p className="mb-3">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br />Mira Knaup<br />Müllheim bei Freiburg<br />Telefon: +49 151 64004263<br />E-Mail: miraknaup@gmail.com</p>
        <h4 className="text-slate-800 font-semibold mb-1">Speicherdauer</h4>
        <p className="mb-3">Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.</p>
        <h4 className="text-slate-800 font-semibold mb-1">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h4>
        <p className="mb-3">Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen.</p>
        <h4 className="text-slate-800 font-semibold mb-1">Widerspruchsrecht (Art. 21 DSGVO)</h4>
        <p className="mb-3">WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN.</p>
        <h4 className="text-slate-800 font-semibold mb-1">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h4>
        <p className="mb-3">Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu.</p>
        <h4 className="text-slate-800 font-semibold mb-1">Recht auf Datenübertragbarkeit</h4>
        <p className="mb-3">Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.</p>
        <h4 className="text-slate-800 font-semibold mb-1">Auskunft, Löschung und Berichtigung</h4>
        <p>Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten.</p>
      </div>
      <div>
        <h3 className="text-slate-900 font-bold text-base mb-3">4. Datenerfassung auf dieser Website</h3>
        <h4 className="text-slate-800 font-semibold mb-1">Server-Log-Dateien</h4>
        <p className="mb-3">Der Provider der Seiten erhebt und speichert automatisch Informationen in Server-Log-Dateien: Browsertyp und -version, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse. Grundlage: Art. 6 Abs. 1 lit. f DSGVO.</p>
        <h4 className="text-slate-800 font-semibold mb-1">Anfrage per E-Mail, Telefon oder WhatsApp</h4>
        <p>Wenn Sie uns per E-Mail, Telefon oder WhatsApp kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten zum Zwecke der Bearbeitung bei uns gespeichert und verarbeitet (Art. 6 Abs. 1 lit. b DSGVO).</p>
      </div>
      <div>
        <h3 className="text-slate-900 font-bold text-base mb-3">5. Soziale Medien</h3>
        <p>Auf dieser Website sind keine Social-Media-Plugins eingebunden.</p>
      </div>
      <div>
        <h3 className="text-slate-900 font-bold text-base mb-3">6. Aktualität dieser Datenschutzerklärung</h3>
        <p>Diese Datenschutzerklärung ist aktuell gültig (Stand: Januar 2026).</p>
      </div>
    </div>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer data-testid="footer" className="border-t border-slate-100 relative z-10 pt-16 pb-8 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <a href="#top" className="flex items-center gap-1 group hover-wiggle">
            <img src={LOGO_URL} alt="FreeSites Logo" className="h-10 w-auto" style={{ mixBlendMode: "multiply" }} />
          </a>

          <div className="flex items-center gap-6 text-slate-400 text-sm">
            <Dialog>
              <DialogTrigger asChild>
                <button data-testid="impressum-button" className="hover:text-green-600 transition-colors cursor-pointer">Impressum</button>
              </DialogTrigger>
              <DialogContent className="bg-white border-slate-200 text-slate-900 max-w-2xl max-h-[85vh]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-heading font-bold flex items-center gap-3 text-slate-900">
                    <Scale className="w-6 h-6 text-green-600" /> Impressum
                  </DialogTitle>
                </DialogHeader>
                <ImpressumContent />
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <button data-testid="datenschutz-button" className="hover:text-green-600 transition-colors cursor-pointer">Datenschutz</button>
              </DialogTrigger>
              <DialogContent className="bg-white border-slate-200 text-slate-900 max-w-2xl max-h-[85vh]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-heading font-bold flex items-center gap-3 text-slate-900">
                    <Shield className="w-6 h-6 text-teal-600" /> Datenschutzerklärung
                  </DialogTitle>
                </DialogHeader>
                <DatenschutzContent />
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="text-center text-slate-400 text-sm border-t border-slate-100 pt-8">
          &copy; 2026 FREEsites Webdesign. Alle Rechte vorbehalten.
          <br className="sm:hidden" />{" "}
          <span className="text-green-600 font-medium">Kostenloses Design, Bezahlung nur bei Gefallen.</span>
        </div>
      </div>
    </footer>
  );
}

/* ─── Main App ─── */
function App() {
  return (
    <div className="min-h-screen bg-[#f8faf8] text-slate-900 antialiased">
      <Navigation />
      <HeroSection />
      <HowItWorks />
      <StatsBar />
      <AboutMe />
      <Benefits />
      <GuaranteeBanner />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
