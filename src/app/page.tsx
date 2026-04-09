import Image from "next/image";
import {
  ChevronDown,
  Clock,
  Compass,
  Fish,
  Heart,
  MapPin,
  Phone,
  Shield,
  Sun,
  Users,
  Waves,
  Anchor,
} from "lucide-react";

const PHONE = "+306980316639";
const PHONE_DISPLAY = "+30 698 031 6639";
const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hello! I'd like to book a fishing tour with Captain Stavros."
)}`;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ─── Navigation ──────────────────────────────────────────── */
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-cream/80 border-b border-sand/50">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <Image
            src="/images/Logo.jpg"
            alt="Captain Stavros Fishing Tourism logo"
            width={52}
            height={52}
            className="rounded-full"
            priority
          />
          <div className="hidden sm:block">
            <span className="font-[family-name:var(--font-playfair)] text-lg font-bold text-navy tracking-wide">
              Captain Stavros
            </span>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-text-muted font-medium -mt-0.5">
              Fishing Tourism
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted">
          <a href="#experience" className="hover:text-navy transition-colors">
            Experience
          </a>
          <a href="#why-us" className="hover:text-navy transition-colors">
            Why Us
          </a>
          <a href="#about" className="hover:text-navy transition-colors">
            About
          </a>
          <a
            href="#booking"
            className="cta-phone inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
          >
            <Phone className="w-4 h-4" />
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ─── Hero · full-bleed aerial Skiathos ───────────────────── */
function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/IMG_1365.JPG"
          alt="Aerial view of Skiathos bay with turquoise water"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-navy/60 via-navy/40 to-navy/70 z-10" />
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center pt-24 pb-16">
        {/* Logo badge */}
        <div className="animate-fade-in-up mb-6">
          <Image
            src="/images/Logo.jpg"
            alt="Captain Stavros logo"
            width={100}
            height={100}
            className="rounded-full mx-auto border-2 border-white/20 shadow-2xl"
            priority
          />
        </div>

        <div className="animate-fade-in-up delay-100 inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-8">
          <MapPin className="w-4 h-4 text-gold" />
          <span className="text-sm font-medium text-white/80 tracking-wide">
            Skiathos Island, Greece
          </span>
        </div>

        <h1 className="animate-fade-in-up delay-200 font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight drop-shadow-lg">
          Experience Authentic
          <br />
          <span className="relative inline-block">
            <span className="relative z-10">Fishing</span>
            <span className="absolute bottom-2 left-0 right-0 h-3 md:h-4 bg-gold/30 z-0 rounded-sm" />
          </span>{" "}
          in Skiathos
        </h1>

        <p className="animate-fade-in-up delay-300 mt-8 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
          Step aboard a traditional wooden boat and live the life of a Greek
          fisherman. Crystal-clear waters, freshly caught seafood, and hidden
          bays await you.
        </p>

        <div className="animate-fade-in-up delay-500 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${PHONE}`}
            className="cta-phone inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold tracking-wide"
          >
            <Phone className="w-5 h-5" />
            Call to Book Now
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-whatsapp inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold tracking-wide"
          >
            <WhatsAppIcon className="w-5 h-5" />
            WhatsApp Us
          </a>
        </div>

        <div className="animate-fade-in delay-700 mt-14 flex flex-wrap justify-center gap-6 text-sm text-white/60">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gold" />
            <span>Departs daily at 9:00 AM</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-gold" />
            <span>Small groups only</span>
          </div>
          <div className="flex items-center gap-2">
            <Fish className="w-4 h-4 text-gold" />
            <span>Fresh seafood on board</span>
          </div>
        </div>

        <div className="animate-fade-in delay-800 mt-16">
          <a
            href="#experience"
            className="inline-flex flex-col items-center gap-2 text-white/40 hover:text-gold transition-colors"
          >
            <span className="text-xs tracking-[0.2em] uppercase">
              Discover More
            </span>
            <ChevronDown className="w-5 h-5 animate-float" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Experience · white with photo strip ─────────────────── */
const highlights = [
  {
    id: "traditional-fishing",
    icon: <Fish className="w-6 h-6" />,
    title: "Traditional Fishing",
    desc: "Learn authentic techniques passed down through generations of Greek fishermen.",
  },
  {
    id: "seafood-on-board",
    icon: <Sun className="w-6 h-6" />,
    title: "Seafood On Board",
    desc: "Taste the freshest catch of the day, prepared and cooked right on the boat.",
  },
  {
    id: "hidden-bays",
    icon: <Compass className="w-6 h-6" />,
    title: "Hidden Bays",
    desc: "Swim in secluded coves and pristine waters far from the tourist crowds.",
  },
  {
    id: "coastal-cruise",
    icon: <Waves className="w-6 h-6" />,
    title: "Coastal Cruise",
    desc: "Relax and soak in the stunning Skiathos coastline from the water.",
  },
  {
    id: "small-groups",
    icon: <Users className="w-6 h-6" />,
    title: "Small Groups",
    desc: "Intimate tours with personal attention — never more than a handful of guests.",
  },
  {
    id: "authentic-culture",
    icon: <Heart className="w-6 h-6" />,
    title: "Authentic Culture",
    desc: "This isn't a tourist trap. It's a window into real island life.",
  },
];

function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 md:py-32 bg-experience">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="divider-dots justify-center mb-6">
            <span />
            <span />
            <span />
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
            Live the Life of
            <br />a Fisherman
          </h2>
          <div className="gold-line mx-auto mt-6" />
          <p className="mt-8 text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
            Step aboard our traditional wooden boat and discover a side of
            Skiathos most visitors never see. We&apos;ll take you to hidden
            fishing grounds where locals have cast their nets for generations —
            far from the crowds, close to the heart of the island.
          </p>
        </div>

        {/* Photo strip — 3 real images */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
          <div className="relative aspect-3/2 rounded-2xl overflow-hidden">
            <Image
              src="/images/IMG_1364.JPG"
              alt="Crystal clear waters and rock arch in Skiathos"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>
          <div className="relative aspect-3/2 rounded-2xl overflow-hidden">
            <Image
              src="/images/att.25z8zjcDWtVckMZVL4n7tOyqL0lqaO_CZLL2o5M4GZQ.jpg"
              alt="Traditional fishing boat in the harbor"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>
          <div className="relative aspect-3/2 rounded-2xl overflow-hidden">
            <Image
              src="/images/att.bxj22ReNRQmC5NsGkvlcNo_4QpqOOeTAWyzzQqVTwgE.jpg"
              alt="Sunset over a small island chapel in the Aegean Sea"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div key={item.id} className="highlight-card rounded-2xl p-8 group">
              <div className="w-14 h-14 rounded-xl bg-gold-dim flex items-center justify-center text-gold mb-5 group-hover:bg-gold group-hover:text-white transition-all">
                {item.icon}
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-navy mb-3">
                {item.title}
              </h3>
              <p className="text-text-muted leading-relaxed text-[15px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Taste the Sea · bento food gallery ──────────────────── */
function TasteTheSeaSection() {
  return (
    <section className="bg-about py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-navy leading-tight">
            Taste the <span className="text-gold">Sea</span>
          </h2>
          <div className="gold-line mx-auto mt-6" />
          <p className="mt-6 text-lg text-text-muted leading-relaxed max-w-xl mx-auto">
            Every tour ends with a feast. We cook the freshest catch right on
            the boat — octopus, shrimp, local fish, and classic Greek sides.
          </p>
        </div>

        {/* Bento grid — 1 large hero + 3 smaller */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {/* Large hero food image — the full spread */}
          <div className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden group">
            <div className="relative aspect-3/2 md:aspect-auto md:h-full min-h-[300px]">
              <Image
                src="/images/IMG_1374.JPG"
                alt="Greek salad, grilled fish, and fresh sides spread out on the boat table"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-gold text-sm font-semibold uppercase tracking-wider">
                  Straight from the net
                </span>
                <p className="text-white font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-bold mt-1">
                  A feast cooked fresh on board
                </p>
              </div>
            </div>
          </div>

          {/* Top right — razor clams */}
          <div className="relative rounded-2xl overflow-hidden group">
            <div className="relative aspect-4/3">
              <Image
                src="/images/att.h3BBa-Tvjr2jgIeZC5Yv5NKTSM5hvrm5x2O24Zf2OEs.jpg"
                alt="Fresh razor clams beautifully plated"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 text-white/90 text-sm font-semibold">
                Local Delicacies
              </p>
            </div>
          </div>

          {/* Bottom right — octopus */}
          <div className="relative rounded-2xl overflow-hidden group">
            <div className="relative aspect-4/3">
              <Image
                src="/images/att.fBlSo8IJ6-SvOG2wqsNGI39qc6avmZHpdWvk5i-Wxcs.dat.jpeg"
                alt="Grilled octopus with fried fish and fresh sides"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 text-white/90 text-sm font-semibold">
                Grilled to Perfection
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row — shrimp + bay scenery for variety */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl mx-auto mt-4">
          <div className="relative rounded-2xl overflow-hidden group">
            <div className="relative aspect-21/9">
              <Image
                src="/images/att.wXYW6Ifjp-m0mNFPO7uIQYYRJ1XkkT7m7O-Z9H7wDFw.jpg"
                alt="Fresh shrimp sizzling on the grill"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 text-white/90 text-sm font-semibold">
                Fresh Off the Grill
              </p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden group">
            <div className="relative aspect-21/9">
              <Image
                src="/images/att.gi10_DVA8LqD3DtXyYNBKEPdGjOcozoC90nbT2t6iWw.jpg"
                alt="Secluded bay where we stop to cook and swim"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 text-white/90 text-sm font-semibold">
                Where We Dine
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Why Choose Us · aegean blue ─────────────────────────── */
const reasons = [
  {
    id: "local-fishermen",
    icon: <Anchor className="w-7 h-7" />,
    title: "Local Professional Fishermen",
    desc: "Not tour guides playing pretend — real fishermen who live and breathe the sea every single day.",
  },
  {
    id: "safe-comfortable",
    icon: <Shield className="w-7 h-7" />,
    title: "Safe & Comfortable",
    desc: "Your safety is our priority. Our boat is fully equipped and well-maintained so you can relax completely.",
  },
  {
    id: "warm-personal",
    icon: <Heart className="w-7 h-7" />,
    title: "Warm & Personal",
    desc: "Small groups mean you get real attention, real stories, and a real connection with the crew.",
  },
  {
    id: "perfect-for-everyone",
    icon: <Users className="w-7 h-7" />,
    title: "Perfect for Everyone",
    desc: "Couples, families, or groups of friends — every tour is tailored to make everyone feel at home.",
  },
];

function WhyUsSection() {
  return (
    <section id="why-us" className="bg-navy py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Why Choose <span className="text-gold">Our Tours</span>
          </h2>
          <div className="gold-line mx-auto mt-6" />
          <p className="mt-8 text-lg text-white/60 leading-relaxed max-w-xl mx-auto">
            We don&apos;t offer just another boat trip. We offer a day
            you&apos;ll never forget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((item) => (
            <div
              key={item.id}
              className="flex gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/30 transition-all"
            >
              <div className="shrink-0 w-14 h-14 rounded-xl bg-gold/15 flex items-center justify-center text-gold">
                {item.icon}
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/50 leading-relaxed text-[15px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/15 rounded-full px-8 py-4">
            <Clock className="w-5 h-5 text-gold" />
            <span className="text-gold font-[family-name:var(--font-playfair)] text-lg font-semibold">
              Tours depart daily at 9:00 AM
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── About · warm sand with boat photo ───────────────────── */
function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left — photo of the boat */}
            <div className="relative">
              <div className="relative aspect-4/5 rounded-3xl overflow-hidden">
                <Image
                  src="/images/att.25z8zjcDWtVckMZVL4n7tOyqL0lqaO_CZLL2o5M4GZQ.jpg"
                  alt="Captain Stavros traditional fishing boat in the harbor"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border-2 border-gold/20 -z-10" />
            </div>

            {/* Right — text */}
            <div>
              <div className="divider-dots mb-6">
                <span />
                <span />
                <span />
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-navy leading-tight">
                Who We Are
              </h2>
              <div className="gold-line mt-6" />
              <div className="mt-8 space-y-5 text-text-dark/70 leading-relaxed">
                <p>
                  We are local fishermen with a deep passion for the sea and the
                  traditions that shaped our lives. For us, fishing isn&apos;t a
                  job — it&apos;s who we are.
                </p>
                <p>
                  Our mission is simple: share the authentic fishing lifestyle of
                  Skiathos with visitors from around the world. No scripts, no
                  performances — just a genuine day at sea with people who love
                  what they do.
                </p>
                <p>
                  With years of experience navigating these waters, we know every
                  hidden bay, every fishing ground, and every story worth
                  telling. Come aboard, and we promise you a day you&apos;ll
                  remember long after you leave the island.
                </p>
              </div>

              <div className="relative mt-10 pl-6 border-l-2 border-gold">
                <p className="font-[family-name:var(--font-playfair)] text-lg italic text-navy/80">
                  &ldquo;The sea teaches patience, respect, and gratitude. We
                  want to share that with you.&rdquo;
                </p>
                <p className="mt-2 text-sm text-gold font-semibold">
                  — Captain Stavros
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Booking · deep navy ─────────────────────────────────── */
function BookingSection() {
  return (
    <section id="booking" className="bg-booking py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Be a Fisherman
          <br />
          <span className="text-gold">for a Day</span>
        </h2>
        <div className="gold-line mx-auto mt-6" />

        <p className="mt-8 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
          Leave the beach behind and step into the real world of the sea. Feel
          the salt, the sun, and the rhythm of traditional fishing.
          <br />
          <span className="text-white/80 font-medium">
            This is not just a tour — it&apos;s a way of life.
          </span>
        </p>

        <div className="mt-14 bg-white/5 border border-white/10 rounded-3xl p-10 md:p-14 max-w-2xl mx-auto">
          <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-white mb-3">
            Book Your Experience
          </h3>
          <p className="text-white/50 mb-10">
            Ready to join us? Get in touch and reserve your spot today.
            <br />
            Spots are limited — we keep groups small on purpose.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href={`tel:${PHONE}`}
              className="cta-phone inline-flex items-center gap-3 px-10 py-5 rounded-full text-lg font-bold tracking-wide w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-whatsapp inline-flex items-center gap-3 px-10 py-5 rounded-full text-lg font-bold tracking-wide w-full sm:w-auto justify-center"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ──────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-[#071222] border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/Logo.jpg"
              alt="Captain Stavros logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="font-[family-name:var(--font-playfair)] text-sm font-semibold text-white/80">
              Captain Stavros
            </span>
            <span className="text-white/30 text-sm">
              &middot; Skiathos, Greece
            </span>
          </div>
          <p className="text-white/25 text-sm">
            &copy; {new Date().getFullYear()} Captain Stavros Fishing Tours. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── Sticky Mobile CTA ──────────────────────────────────── */
function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden sticky-cta p-3">
      <div className="flex items-center gap-3">
        <a
          href={`tel:${PHONE}`}
          className="cta-phone flex-1 inline-flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-bold"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-whatsapp flex-1 inline-flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-bold"
        >
          <WhatsAppIcon className="w-4 h-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ExperienceSection />
      <TasteTheSeaSection />
      <WhyUsSection />
      <AboutSection />
      <BookingSection />
      <Footer />
      <StickyCTA />
    </>
  );
}
