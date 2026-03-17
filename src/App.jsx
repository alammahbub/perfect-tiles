import React, { useState, useEffect } from 'react';
import {
  Shield,
  Leaf,
  Zap,
  Activity,
  ArrowRight,
  CheckCircle2,
  Grid,
  Building,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Calculator,
  Droplets,
  Hammer,
  ChevronLeft
} from 'lucide-react';

// SVG Patterns for specific tile designs
const TilePattern = ({ name, className }) => {
  const nameLower = name.toLowerCase();

  if (nameLower.includes('century button')) {
    const circles = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        circles.push(<circle key={`c-${i}-${j}`} cx={9 + i * 9.1} cy={9 + j * 9.1} r="3" fill="currentColor" />);
      }
    }
    return <svg viewBox="0 0 100 100" className={className}>{circles}</svg>;
  }

  if (nameLower.includes('81 button') || nameLower.includes('81 buttons')) {
    const circles = [];
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        circles.push(<circle key={`81-${i}-${j}`} cx={10 + i * 10} cy={10 + j * 10} r="3.5" fill="currentColor" />);
      }
    }
    return <svg viewBox="0 0 100 100" className={className}>{circles}</svg>;
  }

  if (nameLower.includes('four eye')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <rect x="20" y="20" width="60" height="60" rx="8" fill="transparent" stroke="currentColor" strokeWidth="4" />
        <circle cx="35" cy="35" r="8" fill="currentColor" />
        <circle cx="65" cy="35" r="8" fill="currentColor" />
        <circle cx="35" cy="65" r="8" fill="currentColor" />
        <circle cx="65" cy="65" r="8" fill="currentColor" />
      </svg>
    );
  }

  if (nameLower.includes('capsule')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <rect x="35" y="10" width="30" height="80" rx="15" fill="currentColor" />
        <rect x="10" y="35" width="80" height="30" rx="15" fill="currentColor" fillOpacity="0.8" />
      </svg>
    );
  }

  if (nameLower.includes('uni paver')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <path d="M25,25 L45,25 L50,15 L60,15 L65,25 L85,25 L85,45 L75,50 L75,60 L85,65 L85,85 L65,85 L60,75 L50,75 L45,85 L25,85 L25,65 L35,60 L35,50 L25,45 Z" fill="currentColor" />
      </svg>
    );
  }

  if (nameLower.includes('hexagonal')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" fill="transparent" stroke="currentColor" strokeWidth="6" />
        <polygon points="50,25 70,37 70,62 50,75 30,62 30,37" fill="currentColor" />
      </svg>
    );
  }

  if (nameLower.includes('double interlocking')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <path d="M25,20 A15,15 0 0,1 45,35 L55,35 A15,15 0 0,1 75,20 L80,45 L70,50 L80,55 L75,80 A15,15 0 0,1 55,65 L45,65 A15,15 0 0,1 25,80 L20,55 L30,50 L20,45 Z" fill="currentColor" />
      </svg>
    );
  }

  if (nameLower.includes('shapla')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <path d="M50,15 Q60,40 85,50 Q60,60 50,85 Q40,60 15,50 Q40,40 50,15 Z" fill="currentColor" />
        <path d="M50,30 Q55,45 70,50 Q55,55 50,70 Q45,55 30,50 Q45,45 50,30 Z" fill="transparent" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  if (nameLower.includes('shologhor flower')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <circle cx="50" cy="50" r="10" fill="currentColor" />
        <path d="M50,10 Q58,30 50,40 Q42,30 50,10 Z" fill="currentColor" />
        <path d="M50,90 Q58,70 50,60 Q42,70 50,90 Z" fill="currentColor" />
        <path d="M10,50 Q30,58 40,50 Q30,42 10,50 Z" fill="currentColor" />
        <path d="M90,50 Q70,58 60,50 Q70,42 90,50 Z" fill="currentColor" />
        <path d="M20,20 Q40,30 43,43 Q30,40 20,20 Z" fill="currentColor" />
        <path d="M80,80 Q60,70 57,57 Q70,60 80,80 Z" fill="currentColor" />
        <path d="M80,20 Q60,30 57,43 Q70,40 80,20 Z" fill="currentColor" />
        <path d="M20,80 Q40,70 43,57 Q30,60 20,80 Z" fill="currentColor" />
      </svg>
    );
  }

  if (nameLower.includes('rectangular') || nameLower.includes('kerb')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <rect x="5" y="15" width="40" height="20" fill="transparent" stroke="currentColor" strokeWidth="4" />
        <rect x="50" y="15" width="45" height="20" fill="transparent" stroke="currentColor" strokeWidth="4" />
        <rect x="25" y="40" width="50" height="20" fill="transparent" stroke="currentColor" strokeWidth="4" />
        <rect x="5" y="65" width="40" height="20" fill="transparent" stroke="currentColor" strokeWidth="4" />
        <rect x="50" y="65" width="45" height="20" fill="transparent" stroke="currentColor" strokeWidth="4" />
        <rect x="-15" y="40" width="35" height="20" fill="transparent" stroke="currentColor" strokeWidth="4" />
        <rect x="80" y="40" width="35" height="20" fill="transparent" stroke="currentColor" strokeWidth="4" />
      </svg>
    );
  }

  if (nameLower.includes('box bit') || nameLower.includes('four bits') || nameLower.includes('ten bits')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <rect x="20" y="20" width="25" height="25" fill="transparent" stroke="currentColor" strokeWidth="4" />
        <rect x="55" y="20" width="25" height="25" fill="currentColor" />
        <rect x="20" y="55" width="25" height="25" fill="currentColor" />
        <rect x="55" y="55" width="25" height="25" fill="transparent" stroke="currentColor" strokeWidth="4" />
      </svg>
    );
  }

  if (nameLower.includes('grass parking')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <path d="M10,10 h80 v80 h-80 z M25,25 h20 v20 h-20 z M55,25 h20 v20 h-20 z M25,55 h20 v20 h-20 z M55,55 h20 v20 h-20 z" fillRule="evenodd" fill="currentColor" />
      </svg>
    );
  }

  if (nameLower.includes('block') || nameLower.includes('brick') || nameLower.includes('draine')) {
    return (
      <svg viewBox="0 0 100 100" className={className}>
        <rect x="10" y="25" width="80" height="50" rx="3" fill="transparent" stroke="currentColor" strokeWidth="5" />
        {nameLower.includes('hollow') && (
          <>
            <rect x="25" y="35" width="20" height="30" fill="currentColor" />
            <rect x="55" y="35" width="20" height="30" fill="currentColor" />
          </>
        )}
      </svg>
    );
  }

  // Generic fallback pattern
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <path d="M10,10 L90,90 M90,10 L10,90 M50,10 L50,90 M10,50 L90,50" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" />
      <circle cx="50" cy="50" r="20" fill="transparent" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
};

// Reusable Tile Component for the Gallery
const TileCard = ({ name, colorClass }) => (
  <div className="group relative bg-white p-2 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 overflow-hidden cursor-pointer">
    <div className={`aspect-square rounded-xl ${colorClass} relative overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.03]`}>
      <TilePattern name={name} className="absolute inset-0 w-full h-full text-white opacity-60 p-4 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3" />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
    </div>
    <div className="p-4 text-center">
      <p className="font-bold text-slate-800 text-sm">{name}</p>
      <p className="text-[10px] text-teal-600 font-bold uppercase tracking-widest mt-1.5 opacity-80">Premium Grade</p>
    </div>
  </div>
);

const slides = [
  {
    title: <>Modern <span className="text-teal-400">Concrete</span> Perfected.</>,
    desc: "Official manufacturers of premium interlocking pavers and hollow blocks. Engineered through hydraulic pressure for maximum strength.",
    image: "https://images.unsplash.com/photo-1541888009224-b5a1cfdf779f?auto=format&fit=crop&q=80&w=1200",
    cta: "Explore Catalog",
    link: "#products"
  },
  {
    title: <>Vibrant <span className="text-orange-400">Themes</span> & Designs.</>,
    desc: "From Shologhor Flower to Shapla Patterns, bring artistic brilliance to your floors with our theme-based concrete tiles.",
    image: "https://images.unsplash.com/photo-1621905252507-b354bcadcabc?auto=format&fit=crop&q=80&w=1200",
    cta: "View Gallery",
    link: "#products"
  },
  {
    title: <>Build for <span className="text-blue-400">Less.</span> Save More.</>,
    desc: "Our hollow blocks provide 40% cost reduction and 55% weight loss compared to traditional brick walls. Increase your space today.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1200",
    cta: "Savings Chart",
    link: "#savings"
  }
];

const flyerProducts = {
  parking: [
    { name: "Four eye Design", color: "bg-yellow-400", pattern: "grid" },
    { name: "Capsule", color: "bg-red-500", pattern: "dots" },
    { name: "Shologhor Flower", color: "bg-red-600", pattern: "lines" },
    { name: "Ten Bits", color: "bg-gray-300", pattern: "grid" },
    { name: "Shapla", color: "bg-orange-600", pattern: "dots" },
    { name: "Four Bits", color: "bg-red-500", pattern: "grid" },
    { name: "Biscuit", color: "bg-yellow-500", pattern: "lines" },
    { name: "Century Button", color: "bg-slate-800", pattern: "dots" },
    { name: "Fatocasto", color: "bg-gray-400", pattern: "grid" },
    { name: "Box Bit", color: "bg-yellow-400", pattern: "lines" },
    { name: "81 Buttons", color: "bg-gray-200", pattern: "dots" },
    { name: "Coil Design", color: "bg-slate-700", pattern: "grid" }
  ],
  paving: [
    { name: "Uni Paver", color: "bg-pink-400", pattern: "lines" },
    { name: "Rectangular", color: "bg-red-400", pattern: "grid" },
    { name: "Hexagonal Block", color: "bg-gray-400", pattern: "dots" },
    { name: "Grass Parking", color: "bg-teal-700", pattern: "grid" },
    { name: "Double Interlocking", color: "bg-blue-400", pattern: "lines" },
    { name: "Kerb Stone", color: "bg-slate-500", pattern: "lines" }
  ],
  blocks: [
    { name: "90mm Wall Block", color: "bg-stone-300", pattern: "grid" },
    { name: "100mm Wall Block", color: "bg-stone-400", pattern: "grid" },
    { name: "140mm Wall Block", color: "bg-stone-500", pattern: "grid" },
    { name: "190mm Wall Block", color: "bg-stone-600", pattern: "grid" },
    { name: "Hollow Brick", color: "bg-gray-400", pattern: "dots" },
    { name: "Saucer Draine", color: "bg-slate-300", pattern: "lines" }
  ]
};

// Automatically loads any image files placed inside the src/assets/gallery directory
const galleryModules = import.meta.glob('./assets/gallery/*.{png,jpg,jpeg,webp,avif,svg}', { eager: true });
const galleryImages = Object.values(galleryModules).map(module => module.default);

const App = () => {
  const [activeCategory, setActiveCategory] = useState('parking');
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(slideTimer);
    };
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl transform hover:rotate-6 transition-transform">
              <span className="text-white font-black text-2xl italic">P</span>
            </div>
            <div className={scrolled ? 'text-slate-900' : 'text-white'}>
              <h1 className="text-xl font-black tracking-tighter leading-none transition-colors">PERFECT</h1>
              <p className="text-[10px] font-bold tracking-[0.3em] text-teal-400">CONCRETE PRODUCTS</p>
            </div>
          </div>
          <div className={`hidden md:flex gap-8 font-bold text-xs uppercase tracking-widest items-center transition-colors ${scrolled ? 'text-slate-600' : 'text-white/80'}`}>
            <a href="#about" className="hover:text-teal-400">Why Us</a>
            <a href="#products" className="hover:text-teal-400">Catalog</a>
            <a href="#gallery" className="hover:text-teal-400">Gallery</a>
            <a href="#savings" className="hover:text-teal-400">Savings</a>
            <a href="#contact" className="bg-teal-600 text-white px-6 py-2.5 rounded-xl hover:bg-teal-500 transition-all shadow-lg">Contact Us</a>
          </div>
        </div>
      </nav>

      {/* Hero Slideshow */}
      <header className="relative h-[90vh] min-h-[600px] w-full bg-slate-900 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <img src={slide.image} alt="Concrete" className="w-full h-full object-cover opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
              <div className="max-w-3xl space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md text-teal-400 rounded-full font-bold text-xs tracking-widest uppercase border border-white/10">
                  <Activity className="w-4 h-4" /> Quality Comes First
                </div>
                <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.9]">
                  {slide.title}
                </h2>
                <p className="text-xl text-slate-300 leading-relaxed border-l-4 border-teal-500 pl-6 max-w-xl">
                  {slide.desc}
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <a href={slide.link} className="px-10 py-5 bg-teal-600 text-white rounded-2xl font-black shadow-2xl shadow-teal-900 hover:bg-teal-500 transition-all flex items-center gap-2 group">
                    {slide.cta} <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Controls */}
        <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-white/10 transition-colors backdrop-blur-md">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-white/10 transition-colors backdrop-blur-md">
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all ${i === currentSlide ? 'w-10 bg-teal-500' : 'w-4 bg-white/30'}`}
            />
          ))}
        </div>
      </header>

      {/* Advantages - Data from Flyer */}
      <section id="about" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h3 className="text-4xl md:text-5xl font-black">Why Choose Perfect Concrete?</h3>
            <p className="text-slate-500">Built with specialized hydraulic pressure technology for unmatched performance.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Activity />, title: "Hydraulic Pressure", desc: "Manufactured using high-pressure hydraulics for maximum structural integrity." },
              { icon: <Shield />, title: "Fire & Heat Resistant", desc: "Non-combustible material that withstands extreme thermal conditions." },
              { icon: <Leaf />, title: "Eco-Friendly", desc: "Sustainable production using crushed stone, sand, and high-grade cement." },
              { icon: <Hammer />, title: "Precision Joints", desc: "Zero-error molding ensures uniform joints and 30% faster installation." },
              { icon: <Droplets />, title: "Weather Proof", desc: "Low water absorption capacity ensures no salt leaching or deterioration." },
              { icon: <CheckCircle2 />, title: "Low Maintenance", desc: "Highly durable surfaces that require minimal upkeep over decades." },
              { icon: <Calculator />, title: "Cost Effective", desc: "Significantly reduces construction overhead compared to clay bricks." },
              { icon: <Building />, title: "Versatile Design", desc: "Electrical and sanitary pipes can be inserted without cutting walls." }
            ].map((adv, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-teal-200 hover:shadow-2xl hover:bg-white transition-all group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white transition-all">
                  {adv.icon}
                </div>
                <h4 className="font-bold text-lg mb-2">{adv.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog - Specific Products from Flyer */}
      <section id="products" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-16">
            <div className="space-y-4">
              <span className="text-teal-400 font-black uppercase tracking-widest text-xs">Vibrant Catalog</span>
              <h3 className="text-5xl font-black">Our Featured Designs</h3>
              <p className="text-slate-400 max-w-md">Discover our extensive range of theme-based concrete products as featured in our official catalog.</p>
            </div>
            <div className="flex bg-slate-800 p-1.5 rounded-2xl gap-2 w-full lg:w-auto overflow-x-auto">
              <button onClick={() => setActiveCategory('parking')} className={`px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${activeCategory === 'parking' ? 'bg-teal-500 text-white shadow-lg' : 'text-slate-400 hover:bg-slate-700'}`}>Parking Tiles</button>
              <button onClick={() => setActiveCategory('paving')} className={`px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${activeCategory === 'paving' ? 'bg-teal-500 text-white shadow-lg' : 'text-slate-400 hover:bg-slate-700'}`}>Pavers & Kerbs</button>
              <button onClick={() => setActiveCategory('blocks')} className={`px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${activeCategory === 'blocks' ? 'bg-teal-500 text-white shadow-lg' : 'text-slate-400 hover:bg-slate-700'}`}>Wall Blocks</button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {flyerProducts[activeCategory].map((p, i) => (
              <TileCard key={i} name={p.name} colorClass={p.color} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-slate-50 overflow-hidden border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col items-center text-center">
          <span className="text-teal-600 font-black uppercase tracking-widest text-xs">Project Showcase</span>
          <h3 className="text-4xl md:text-5xl font-black mt-4">Our Work Gallery</h3>
          <p className="text-slate-500 mt-4 max-w-2xl">Explore our portfolio of completed projects.</p>
        </div>

        {galleryImages.length > 0 ? (
          <div className="relative max-w-7xl mx-auto px-6 group">
            <div id="gallery-slider" className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {/* Note: Webkit scrollbar hiding can be done in CSS, but inline style works for Firefox/IE. */}
              <style dangerouslySetInnerHTML={{
                __html: `
                #gallery-slider::-webkit-scrollbar { display: none; }
              `}} />

              {galleryImages.map((src, idx) => (
                <div key={idx} className="flex-none w-[85vw] md:w-[600px] snap-center rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 bg-slate-200 flex items-center justify-center transform transition-all">
                  <div className="aspect-[16/10] w-full relative">
                    <img src={src} alt={`Gallery Installation ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1s]" />
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Buttons */}
            <button onClick={() => document.getElementById('gallery-slider').scrollBy({ left: -600, behavior: 'smooth' })} className="absolute top-1/2 -translate-y-1/2 left-10 w-16 h-16 bg-white/95 backdrop-blur text-slate-800 rounded-full shadow-2xl items-center justify-center pointer-events-auto hidden md:flex transition-all hover:bg-teal-500 hover:text-white hover:scale-110 z-10 border border-slate-100">
              <ChevronLeft className="w-8 h-8 ml-[-2px]" />
            </button>
            <button onClick={() => document.getElementById('gallery-slider').scrollBy({ left: 600, behavior: 'smooth' })} className="absolute top-1/2 -translate-y-1/2 right-10 w-16 h-16 bg-white/95 backdrop-blur text-slate-800 rounded-full shadow-2xl items-center justify-center pointer-events-auto hidden md:flex transition-all hover:bg-teal-500 hover:text-white hover:scale-110 z-10 border border-slate-100">
              <ChevronRight className="w-8 h-8 mr-[-2px]" />
            </button>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="bg-white p-16 rounded-[2.5rem] border border-slate-200 border-dashed shadow-sm">
              <p className="text-slate-800 text-xl font-black mb-2">No Images in Gallery Directory</p>
              <p className="text-sm text-slate-500">Add image files to <code className="bg-slate-50 text-slate-800 font-mono px-3 py-1.5 rounded-lg border border-slate-200">src/assets/gallery/</code> to see them presented here.</p>
            </div>
          </div>
        )}
      </section>

      {/* Savings Chart - Exact Data from Flyer */}
      <section id="savings" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-teal-500 to-blue-700 rounded-[3rem] p-10 md:p-20 text-white relative shadow-2xl">
            {/* Decoration */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div className="space-y-8">
                <h3 className="text-5xl font-black leading-tight">Cost-Effective Analysis</h3>
                <p className="text-teal-50 text-lg leading-relaxed">
                  Our concrete blocks outperform traditional 5-inch and 10-inch brick walls in every metric. Save money, reduce weight, and gain square footage.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                    <p className="text-3xl font-black">40%</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest mt-1">Cost Reduction</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                    <p className="text-3xl font-black">55%</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest mt-1">Weight Loss</p>
                  </div>
                </div>
              </div>

              <div id="savings-table-container" className="bg-white rounded-[2.5rem] shadow-2xl p-4 overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <style dangerouslySetInnerHTML={{__html: `
                  #savings-table-container::-webkit-scrollbar { display: none; }
                `}} />
                <table className="w-full text-left text-slate-900 min-w-[500px]">
                  <thead>
                    <tr className="border-b border-slate-100">
                      <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-400">Block Type</th>
                      <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-400">vs Brick</th>
                      <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-400">Savings</th>
                      <th className="p-4 font-black text-xs uppercase tracking-widest text-slate-400">Space Inc.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50 font-bold text-sm">
                    <tr>
                      <td className="p-4 text-slate-800">90 mm Block</td>
                      <td className="p-4 text-slate-500">5" Brick</td>
                      <td className="p-4 text-teal-600">20-25%</td>
                      <td className="p-4 text-blue-600">7-9 Sq Ft</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-slate-800">100 mm Block</td>
                      <td className="p-4 text-slate-500">5" Brick</td>
                      <td className="p-4 text-teal-600">20-25%</td>
                      <td className="p-4 text-blue-600">5-8 Sq Ft</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-slate-800">140 mm Block</td>
                      <td className="p-4 text-slate-500">10" Brick</td>
                      <td className="p-4 text-teal-600">30-35%</td>
                      <td className="p-4 text-blue-600">12 Sq Ft</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-slate-800 font-black">190 mm Block</td>
                      <td className="p-4 text-slate-500">10" Brick</td>
                      <td className="p-4 text-teal-600">35-40%</td>
                      <td className="p-4 text-blue-600 font-black">7-10 Sq Ft</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer & QR Section */}
      <footer id="contact" className="bg-slate-900 text-white pt-24 pb-12 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center font-black">P</div>
                <h4 className="text-xl font-black">PERFECT CONCRETE</h4>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Unit 1: Gabtoli Beribadh, Mirpur, Dhaka.<br />
                Unit 2: Bakchar, Singair, Manikganj.
              </p>
              <div className="flex gap-4 text-slate-400">
                <Phone className="w-5 h-5 hover:text-teal-400 cursor-pointer" />
                <Mail className="w-5 h-5 hover:text-teal-400 cursor-pointer" />
                <MapPin className="w-5 h-5 hover:text-teal-400 cursor-pointer" />
              </div>
            </div>

            <div className="space-y-6">
              <h5 className="font-black text-xs uppercase tracking-[0.2em] text-teal-400">Contacts</h5>
              <div className="space-y-4">
                <p className="font-bold flex flex-col">
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Mobile</span>
                  +88 01731 403 368
                </p>
                <p className="font-bold flex flex-col">
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Alternate</span>
                  +88 01743 673 648
                </p>
                <p className="font-bold flex flex-col">
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Email</span>
                  mamunsobhan@gmail.com
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h5 className="font-black text-xs uppercase tracking-[0.2em] text-teal-400">Links</h5>
              <ul className="space-y-3 text-slate-400 font-bold text-sm">
                <li className="hover:text-white cursor-pointer transition-colors">Project Gallery</li>
                <li className="hover:text-white cursor-pointer transition-colors">Technical Support</li>
                <li className="hover:text-white cursor-pointer transition-colors">Request Catalog</li>
                <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
              </ul>
            </div>

            {/* QR Code as a modern SVG component mirroring the flyer */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] flex flex-col items-center">
              <div className="w-32 h-32 bg-white rounded-2xl p-3 shadow-2xl">
                <svg viewBox="0 0 100 100" className="w-full h-full text-slate-900 fill-current">
                  <rect x="0" y="0" width="30" height="30" />
                  <rect x="10" y="10" width="10" height="10" fill="white" />
                  <rect x="70" y="0" width="30" height="30" />
                  <rect x="80" y="10" width="10" height="10" fill="white" />
                  <rect x="0" y="70" width="30" height="30" />
                  <rect x="10" y="80" width="10" height="10" fill="white" />
                  <rect x="40" y="40" width="20" height="20" />
                  <rect x="45" y="45" width="10" height="10" fill="white" />
                  <rect x="70" y="70" width="10" height="10" />
                  <rect x="85" y="85" width="15" height="15" />
                  <rect x="50" y="0" width="10" height="5" />
                  <rect x="0" y="50" width="5" height="10" />
                </svg>
              </div>
              <p className="mt-4 text-[10px] font-black uppercase tracking-[0.3em] text-teal-400 text-center">Scan For Updates</p>
            </div>
          </div>

          <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
            <p>© 2024 Perfect Concrete Products. All rights reserved.</p>
            <div className="flex gap-8 font-bold">
              <span className="hover:text-white cursor-pointer">Terms of Service</span>
              <span className="hover:text-white cursor-pointer">Sitemap</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
