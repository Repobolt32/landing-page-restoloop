/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  QrCode, 
  MessageSquare, 
  TrendingUp, 
  Cake, 
  Receipt, 
  LayoutDashboard, 
  Check, 
  X, 
  ChevronDown, 
  ArrowRight,
  Menu
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 md:py-4' : 'py-4 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className={`glass rounded-full px-4 md:px-8 py-2 md:py-3 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'shadow-2xl' : ''}`}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center shrink-0">
              <Receipt className="text-white w-5 h-5" />
            </div>
            <span className="text-lg md:text-xl font-serif font-bold tracking-tight">Restoloop</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <a href="#how-it-works" className="hover:text-accent transition-colors">How it Works</a>
            <a href="#pricing" className="hover:text-accent transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-accent transition-colors">FAQ</a>
          </div>

          <div className="flex items-center gap-2">
            <button className="hidden sm:block bg-accent hover:bg-accent/90 text-white px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-semibold transition-all hover:scale-105 active:scale-95">
              Get Started Free
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-2 px-4 md:hidden"
          >
            <div className="glass rounded-3xl p-6 flex flex-col gap-4 shadow-2xl">
              <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium py-2 border-b border-white/5">How it Works</a>
              <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium py-2 border-b border-white/5">Pricing</a>
              <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium py-2 border-b border-white/5">FAQ</a>
              <button className="bg-accent text-white w-full py-4 rounded-full font-bold mt-2">
                Get Started Free
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[600px] bg-accent/10 blur-[60px] md:blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[137px] leading-[1.1] md:leading-[0.9] mb-6 md:mb-8 tracking-tighter">
            Turn one-time diners into <br className="hidden md:block" />
            <span className="shimmer italic">repeat customers.</span> <br className="hidden md:block" />
            Automatically.
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-xl text-white/60 mb-8 md:mb-10 leading-relaxed">
            Your restaurant is full tonight. But tomorrow? Most of those customers are gone forever — no way to reach them. Restoloop bring them back.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 md:mb-20">
            <button className="btn-accent w-full sm:w-auto px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center gap-2">
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </button>
            <button className="glass w-full sm:w-auto text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-colors">
              See how it works
            </button>
          </div>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div 
          style={{ y, scale, opacity }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="glass-card rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-2xl overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
              {[
                { label: 'Total Customers', value: '247', icon: MessageSquare },
                { label: 'Coupons Sent', value: '189', icon: TrendingUp },
                { label: 'Coupons Redeemed', value: '63', icon: Check },
                { label: 'Revenue Attributed', value: '₹42,800', icon: Receipt },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 p-3 md:p-4 rounded-xl md:rounded-2xl text-left border border-white/5">
                  <stat.icon className="w-4 h-4 md:w-5 md:h-5 text-accent mb-1 md:mb-2" />
                  <div className="text-lg md:text-2xl font-bold">{stat.value}</div>
                  <div className="text-[8px] md:text-xs text-white/40 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="h-48 md:h-64 bg-white/5 rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/5 flex flex-col justify-end">
              <div className="text-left mb-2 md:mb-4">
                <div className="text-[10px] md:text-sm font-medium text-white/60">Revenue from returning customers ₹</div>
              </div>
              <div className="flex items-end justify-between gap-1 md:gap-2 h-full">
                {[40, 65, 45, 80, 55, 90].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="flex-1 bg-accent/40 rounded-t-sm md:rounded-t-lg relative group"
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-accent text-white text-[8px] md:text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      ₹{(h * 500).toLocaleString()}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-between mt-2 md:mt-4 text-[8px] md:text-[10px] text-white/30 uppercase tracking-widest">
                <span>Oct</span><span>Nov</span><span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StatBar = () => {
  const stats = [
    { label: 'Setup cost', value: '₹0' },
    { label: 'To go live', value: '7 mins' },
    { label: 'Auto messages', value: '50/day' },
    { label: 'Avg ROI', value: '3x' },
  ];

  return (
    <div className="py-12 md:py-20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="text-center"
            >
              <div className="text-3xl md:text-5xl font-serif mb-1 md:mb-2">{stat.value}</div>
              <div className="text-[10px] md:text-sm text-white/40 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      icon: QrCode,
      title: "Scan QR Code",
      description: "Customer scans QR on table",
      step: "STEP 1"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Coupon",
      description: "Welcome coupon lands on their WhatsApp in seconds",
      step: "STEP 2"
    },
    {
      icon: TrendingUp,
      title: "Track Growth",
      description: "You watch revenue grow on dashboard",
      step: "STEP 3"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-7xl mb-4 md:mb-6">How it works</h2>
          <p className="text-white/60 text-lg md:text-xl">Three steps. Fully automatic.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 relative">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center relative">
              {/* Step Label */}
              <div className="text-accent font-bold text-xs tracking-widest mb-8 opacity-50">
                {step.step}
              </div>
              
              {/* Icon */}
              <div className="mb-8">
                <step.icon className="w-16 h-16 md:w-20 md:h-20 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-serif mb-3">{step.title}</h3>
              <p className="text-white/40 text-sm md:text-base max-w-[250px]">{step.description}</p>

              {/* Connector Line (Desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-[120px] -right-6 translate-x-1/2 text-white/10 text-4xl font-light">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Comparison = () => {
  return (
    <section className="py-20 md:py-32 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Without */}
          <div className="p-6 md:p-8 rounded-[20px] border border-white/5 bg-white/[0.04] backdrop-blur-md">
            <h3 className="text-2xl md:text-3xl font-serif mb-6 md:mb-8 text-red-500/80 italic">Without Restoloop</h3>
            <ul className="space-y-4 md:space-y-6">
              {[
                "Customers visit once, disappear forever",
                "No way to reach them on WhatsApp after",
                "Spend on Instagram ads with zero tracking",
                "No idea which offer actually worked",
                "Birthday moments missed every single day"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 md:gap-4 text-sm md:text-base text-white/40">
                  <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* With */}
          <div className="p-6 md:p-8 rounded-[20px] border border-white/5 bg-white/[0.04] backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-3xl rounded-full" />
            <h3 className="text-2xl md:text-3xl font-serif mb-6 md:mb-8 text-green-500 italic">With Restoloop</h3>
            <ul className="space-y-4 md:space-y-6">
              {[
                "Own your customer WhatsApp database",
                "Automated outreach — zero manual effort",
                "Pay only per message, no wasted spend",
                "Dashboard shows exact ₹ attributed to us",
                "Birthday + win-back sent automatically"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 md:gap-4 text-sm md:text-base text-white/90">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const ROIBlock = () => {
  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="glass-card rounded-[32px] md:rounded-[40px] p-8 md:p-24 text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-accent/5 blur-3xl -z-10" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-6xl md:text-9xl font-serif mb-4 text-accent">₹42,800</div>
            <p className="text-lg md:text-2xl text-white/60 mb-12 md:mb-16 max-w-2xl mx-auto">
              Average monthly revenue attributed by Restoloop for an active restaurant
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 md:pt-12 border-t border-white/5">
              <div>
                <div className="text-2xl md:text-3xl font-bold mb-1">63</div>
                <div className="text-xs md:text-sm text-white/40 uppercase tracking-widest">coupons redeemed</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold mb-1">247</div>
                <div className="text-xs md:text-sm text-white/40 uppercase tracking-widest">customers captured</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold mb-1">₹0</div>
                <div className="text-xs md:text-sm text-white/40 uppercase tracking-widest">ad spend</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TestimonialMarquee = () => {
  const testimonials = [
    {
      stars: "★★★★★",
      quote: "Ek mahine mein 31 purane customers wapas aaye. Dashboard pe dekha toh believe hi nahi hua.",
      author: "Rajesh Sharma, Sharma's Dhaba, Delhi"
    },
    {
      stars: "★★★★★",
      quote: "Setup mein sirf 10 minute lage. QR print kiya, table pe rakha, system khud kaam karne laga.",
      author: "Imran Shaikh, Spice Garden, Hyderabad"
    },
    {
      stars: "★★★★★",
      quote: "Credits expire nahi hote — isi liye tension nahi. Jab chahiye tab use karo.",
      author: "Vikram Nair, The Biryani House, Bangalore"
    },
    {
      stars: "★★★★★",
      quote: "Birthday coupon automatically jaata hai. Customers khush hote hain aur actually aate bhi hain.",
      author: "Sunita Verma, Annapurna Kitchen, Jaipur"
    },
    {
      stars: "★★★★★",
      quote: "Sach mein set and forget hai. Maine ek baar setup kiya, baaki sab automatic hota hai.",
      author: "Deepa Nair, Kerala Kitchen, Kochi"
    }
  ];

  return (
    <section className="py-20 overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-content">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="glass-card p-8 rounded-[20px] min-w-[350px] max-w-[350px]">
              <div className="text-accent mb-4">{t.stars}</div>
              <p className="text-white/80 mb-6 italic">"{t.quote}"</p>
              <div className="text-sm font-bold text-white/40">— {t.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const tiers = [
    {
      name: 'Starter',
      price: '₹1,799',
      credits: '500 credits',
      note: '₹3.60 per message',
      features: [
        '500 WhatsApp messages',
        'All 3 coupon types',
        'QR code + lead form',
        'Billing counter',
        'Credits never expire'
      ],
      cta: 'Get started',
      popular: false
    },
    {
      name: 'Popular',
      price: '₹2,999',
      credits: '1,000 credits',
      note: '₹3.00 per message',
      features: [
        '1,000 WhatsApp messages',
        'All 3 coupon types',
        'QR code + lead form',
        'Revenue dashboard',
        'Birthday automation',
        'Credits never expire'
      ],
      cta: 'Get started',
      popular: true
    },
    {
      name: 'Growth',
      price: '₹5,999',
      credits: '2,500 credits',
      note: '₹2.40 per message',
      features: [
        '2,500 WhatsApp messages',
        'All automations included',
        'Full dashboard + analytics',
        'Priority support',
        'Credits never expire'
      ],
      cta: 'Get started',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-7xl mb-4 md:mb-6">Choose the Right Plan</h2>
          <p className="text-white/60">Expand your schema as per your requirements</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {tiers.map((tier, i) => (
            <div 
              key={i} 
              className={`relative p-6 md:p-8 rounded-[24px] md:rounded-[32px] flex flex-col ${
                tier.popular 
                ? 'bg-accent/10 border-2 border-accent shadow-[0_0_40px_rgba(223,118,86,0.2)]' 
                : 'glass-card'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6 md:mb-8">
                <div className="text-lg md:text-xl font-medium mb-2 md:mb-4 text-white/60">{tier.name}</div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl md:text-5xl font-bold">{tier.price}</span>
                </div>
                <div className="text-accent font-bold text-sm mb-1">{tier.credits}</div>
                <div className="text-white/40 text-[10px] md:text-xs italic">{tier.note}</div>
              </div>

              <div className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-grow">
                {tier.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-3 text-xs md:text-sm text-white/70">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-accent" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-3 md:py-4 rounded-full font-bold transition-all ${
                tier.popular 
                ? 'bg-accent text-white hover:scale-[1.02]' 
                : 'glass hover:bg-white/10'
              }`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto glass-card rounded-xl md:rounded-2xl p-4 md:p-6 text-center border-accent/20">
          <p className="text-sm md:text-lg">
            🎁 New? <span className="text-accent font-bold">Get 50 free credits.</span> Sign up and WhatsApp us. No card required.
          </p>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "Do I need technical knowledge to set this up?",
      a: "Not at all. Create an account, enter your restaurant name, print the QR code, and place it on your tables. Ready in 7 minutes. The system handles everything after that."
    },
    {
      q: "Will my existing WhatsApp number be used?",
      a: "No. We use the official Meta WhatsApp Business API — messages are sent from a dedicated verified number. Your personal number stays safe, and delivery rates are much better."
    },
    {
      q: "What if the customer doesn't use the coupon?",
      a: "No problem. The coupon expires automatically. Your credits are only deducted when a message is successfully delivered — not on redemption. You lose nothing."
    },
    {
      q: "When do credits expire?",
      a: "Never. Buy 1000 credits and use them over 2 years — they stay as they are. No monthly subscription, no expiry. Your money won't be wasted."
    },
    {
      q: "What if there's a problem with the system?",
      a: "We are available on WhatsApp. There's a button on the dashboard — it sends a message directly to our WhatsApp. A real human responds, not a bot."
    },
    {
      q: "Is this only for large restaurants?",
      a: "No. Whether it's a small dhaba or a large restaurant — as long as you have customers and want to bring them back, Restoloop works. You can start with even 50 customers."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-5xl md:text-7xl text-center mb-16 italic font-serif">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <span className="font-medium text-lg">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-white/60 leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 md:py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <Receipt className="text-white w-5 h-5" />
            </div>
            <span className="text-xl md:text-2xl font-serif font-bold">Restoloop</span>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-sm font-medium text-white/40">
            <a href="#how-it-works" className="hover:text-accent transition-colors">How it Works</a>
            <a href="#pricing" className="hover:text-accent transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-accent transition-colors">FAQ</a>
          </div>

          <div className="text-sm text-white/40 font-display text-lg md:text-xl">
            Made with ❤️ in India
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] md:text-xs text-white/20 uppercase tracking-widest">
          <div>© 2026 Restoloop</div>
          <div className="flex gap-6 md:gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="glass-card rounded-[32px] md:rounded-[40px] p-8 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-accent/10 blur-[120px] -z-10" />
          <h2 className="text-4xl md:text-8xl mb-4 md:mb-6 tracking-tighter">
            Your regulars <br />
            <span className="italic shimmer">are waiting for you.</span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 mb-8 md:mb-12 max-w-xl mx-auto">
            Set up in 7 minutes. First 50 messages are free.
          </p>
          <button className="btn-whatsapp w-full sm:w-auto px-10 py-5 rounded-full text-lg md:text-xl font-bold flex items-center justify-center gap-2 mx-auto">
            Start Free Trial <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <main className="min-h-screen selection:bg-accent selection:text-white">
      <Navbar />
      <Hero />
      <StatBar />
      <HowItWorks />
      <Comparison />
      <ROIBlock />
      <TestimonialMarquee />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
