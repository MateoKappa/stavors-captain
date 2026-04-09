import Image from "next/image";
import {
	Anchor,
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
} from "lucide-react";
import MobileNav from "./mobile-nav";

const PHONE = "+306980316639";
const PHONE_DISPLAY = "+30 698 031 6639";
const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(
	"Hello! I'd like to book a fishing tour with Captain Stavros.",
)}`;

function WhatsAppIcon({ className }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
			<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
		</svg>
	);
}

/* ─── Decorative SVG elements ─────────────────────────────── */
function WaveDecoration({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			viewBox="0 0 1440 200"
			fill="none"
			aria-hidden="true"
			preserveAspectRatio="none"
		>
			<path
				d="M0 50 Q180 10 360 50 T720 50 T1080 50 T1440 50"
				stroke="currentColor"
				strokeWidth="1.5"
				opacity="0.15"
			/>
			<path
				d="M0 100 Q180 60 360 100 T720 100 T1080 100 T1440 100"
				stroke="currentColor"
				strokeWidth="1"
				opacity="0.1"
			/>
			<path
				d="M0 150 Q180 110 360 150 T720 150 T1080 150 T1440 150"
				stroke="currentColor"
				strokeWidth="0.75"
				opacity="0.07"
			/>
		</svg>
	);
}

function FishDecoration({ className }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 80 40" fill="currentColor" aria-hidden="true">
			<path d="M60 20 C50 8 30 4 10 20 C30 36 50 32 60 20Z" opacity="0.06" />
			<path d="M10 20 L0 12 L0 28Z" opacity="0.06" />
			<circle cx="52" cy="18" r="2" opacity="0.08" />
		</svg>
	);
}

function AnchorDecoration({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			viewBox="0 0 60 80"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
			aria-hidden="true"
			opacity="0.07"
		>
			<circle cx="30" cy="12" r="8" />
			<line x1="30" y1="20" x2="30" y2="70" />
			<path d="M10 55 Q30 80 50 55" />
			<line x1="22" y1="35" x2="38" y2="35" />
		</svg>
	);
}

function RopeDecoration({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			viewBox="0 0 20 400"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
			aria-hidden="true"
			opacity="0.06"
		>
			<path d="M10 0 Q0 20 10 40 Q20 60 10 80 Q0 100 10 120 Q20 140 10 160 Q0 180 10 200 Q20 220 10 240 Q0 260 10 280 Q20 300 10 320 Q0 340 10 360 Q20 380 10 400" />
		</svg>
	);
}

function ShellDecoration({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			viewBox="0 0 60 60"
			fill="currentColor"
			aria-hidden="true"
			opacity="0.05"
		>
			<path d="M30 5 C15 5 5 20 5 35 C5 50 15 55 30 55 C45 55 55 50 55 35 C55 20 45 5 30 5Z" />
			<path d="M30 10 Q30 55 30 55" stroke="white" strokeWidth="0.5" fill="none" opacity="0.3" />
			<path d="M20 12 Q28 35 15 52" stroke="white" strokeWidth="0.4" fill="none" opacity="0.2" />
			<path d="M40 12 Q32 35 45 52" stroke="white" strokeWidth="0.4" fill="none" opacity="0.2" />
		</svg>
	);
}

/* ─── Navigation ──────────────────────────────────────────── */
function Navbar() {
	return (
		<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-cream/80 border-b border-sand/50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between">
				<a href="#hero" className="flex items-center gap-2 sm:gap-3 group">
					<Image
						src="/images/Logo.jpg"
						alt="Captain Stavros Fishing Tourism logo"
						width={44}
						height={44}
						className="rounded-full sm:w-[52px] sm:h-[52px]"
						priority
					/>
					<div>
						<span className="font-[family-name:var(--font-playfair)] text-base sm:text-lg font-bold text-navy tracking-wide">
							Captain Stavros
						</span>
						<span className="block text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-text-muted font-medium -mt-0.5">
							Fishing Tourism
						</span>
					</div>
				</a>

				{/* Desktop nav */}
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

				{/* Mobile hamburger menu */}
				<MobileNav whatsappUrl={WHATSAPP_URL} phone={PHONE} />
			</div>
		</nav>
	);
}

/* ─── Hero · full-bleed aerial Skiathos ───────────────────── */
function Hero() {
	return (
		<section
			id="hero"
			className="relative min-h-screen flex items-center justify-center overflow-hidden"
		>
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

			<div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-12 sm:pb-16">
				{/* Logo badge */}
				<div className="animate-fade-in-up mb-5 sm:mb-6">
					<Image
						src="/images/Logo.jpg"
						alt="Captain Stavros logo"
						width={80}
						height={80}
						className="rounded-full mx-auto border-2 border-white/20 shadow-2xl sm:w-[100px] sm:h-[100px]"
						priority
					/>
				</div>

				<div className="animate-fade-in-up delay-100 inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 sm:px-5 py-2 mb-6 sm:mb-8">
					<MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold" />
					<span className="text-xs sm:text-sm font-medium text-white/80 tracking-wide">
						Skiathos Island, Greece
					</span>
				</div>

				<h1 className="animate-fade-in-up delay-200 font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] sm:leading-[1.05] tracking-tight drop-shadow-lg">
					Experience Authentic
					<br />
					<span className="relative inline-block">
						<span className="relative z-10">Fishing</span>
						<span className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-2.5 sm:h-3 md:h-4 bg-gold/30 z-0 rounded-sm" />
					</span>{" "}
					in Skiathos
				</h1>

				<p className="animate-fade-in-up delay-300 mt-5 sm:mt-8 text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
					Step aboard a traditional wooden boat and live the life of a Greek fisherman.
					Crystal-clear waters, freshly caught seafood, and hidden bays await you.
				</p>

				<div className="animate-fade-in-up delay-500 mt-8 sm:mt-10">
					<a
						href="#booking"
						className="cta-phone inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold tracking-wide"
					>
						Book Your Spot
						<ChevronDown className="w-5 h-5 -rotate-90" />
					</a>
				</div>

				<div className="animate-fade-in delay-700 mt-10 sm:mt-14 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-white/60">
					<div className="flex items-center justify-center gap-2">
						<Clock className="w-4 h-4 text-gold" />
						<span>Departs daily at 9:00 AM</span>
					</div>
					<div className="flex items-center justify-center gap-2">
						<Users className="w-4 h-4 text-gold" />
						<span>Small groups only</span>
					</div>
					<div className="flex items-center justify-center gap-2">
						<Fish className="w-4 h-4 text-gold" />
						<span>Fresh seafood on board</span>
					</div>
				</div>

				<div className="animate-fade-in delay-800 mt-10 sm:mt-16 hidden sm:block">
					<a
						href="#experience"
						className="inline-flex flex-col items-center gap-2 text-white/40 hover:text-gold transition-colors"
					>
						<span className="text-xs tracking-[0.2em] uppercase">Discover More</span>
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
		<section
			id="experience"
			className="relative py-20 sm:py-28 md:py-36 bg-experience overflow-hidden"
		>
			{/* Decorative elements */}
			<WaveDecoration className="absolute top-0 left-0 w-full h-16 sm:h-24 text-navy" />
			<FishDecoration className="absolute top-12 sm:top-16 right-[4%] sm:right-[8%] w-16 sm:w-24 h-8 sm:h-12 text-navy" />
			<FishDecoration className="absolute bottom-24 sm:bottom-32 left-[3%] sm:left-[5%] w-12 sm:w-16 h-6 sm:h-8 text-navy -scale-x-100" />
			<AnchorDecoration className="absolute top-1/3 left-[2%] sm:left-[3%] w-10 sm:w-14 text-navy hidden sm:block" />
			<ShellDecoration className="absolute bottom-16 sm:bottom-20 right-[4%] sm:right-[6%] w-10 sm:w-16 text-navy" />
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
				<div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
					<div className="divider-dots justify-center mb-6">
						<span />
						<span />
						<span />
					</div>
					<h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
						Live the Life of
						<br />a Fisherman
					</h2>
					<div className="gold-line mx-auto mt-5 sm:mt-6" />
					<p className="mt-6 sm:mt-8 text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
						Step aboard our traditional wooden boat and discover a side of Skiathos most visitors
						never see. We&apos;ll take you to hidden fishing grounds where locals have cast their
						nets for generations — far from the crowds, close to the heart of the island.
					</p>
				</div>

				{/* Photo strip — 3 real images */}
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-12 sm:mb-20">
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

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
					{highlights.map((item) => (
						<div key={item.id} className="highlight-card rounded-2xl p-6 sm:p-8 group">
							<div className="w-14 h-14 rounded-xl bg-gold-dim flex items-center justify-center text-gold mb-5 group-hover:bg-gold group-hover:text-white transition-all">
								{item.icon}
							</div>
							<h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-navy mb-3">
								{item.title}
							</h3>
							<p className="text-text-muted leading-relaxed text-[15px]">{item.desc}</p>
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
		<section className="bg-about py-20 sm:py-28 md:py-36">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				{/* Header */}
				<div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
					<h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-navy leading-tight">
						Taste the <span className="text-gold">Sea</span>
					</h2>
					<div className="gold-line mx-auto mt-6" />
					<p className="mt-6 text-lg text-text-muted leading-relaxed max-w-xl mx-auto">
						Every tour ends with a feast. We cook the freshest catch right on the boat — octopus,
						shrimp, local fish, and classic Greek sides.
					</p>
				</div>

				{/* Bento grid — 1 large hero + 3 smaller */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
					{/* Large hero food image — octopus & fish (high-res) */}
					<div className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden group">
						<div className="relative aspect-3/2 md:aspect-auto md:h-full min-h-[300px]">
							<Image
								src="/images/att.fBlSo8IJ6-SvOG2wqsNGI39qc6avmZHpdWvk5i-Wxcs.dat.jpeg"
								alt="Grilled octopus, fried fish, and fresh sides — a feast on board"
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

					{/* Bottom right — Greek salad & grilled fish */}
					<div className="relative rounded-2xl overflow-hidden group">
						<div className="relative aspect-4/3">
							<Image
								src="/images/IMG_1374.JPG"
								alt="Greek salad and grilled fish spread on the boat"
								fill
								className="object-cover group-hover:scale-105 transition-transform duration-700"
								sizes="(max-width: 768px) 100vw, 33vw"
							/>
							<div className="absolute inset-0 bg-linear-to-t from-navy/60 via-transparent to-transparent" />
							<p className="absolute bottom-4 left-4 text-white/90 text-sm font-semibold">
								Greek Classics
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
		<section id="why-us" className="bg-navy py-20 sm:py-28 md:py-36">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
					<h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
						Why Choose <span className="text-gold">Our Tours</span>
					</h2>
					<div className="gold-line mx-auto mt-6" />
					<p className="mt-6 sm:mt-8 text-base sm:text-lg text-white/60 leading-relaxed max-w-xl mx-auto">
						We don&apos;t offer just another boat trip. We offer a day you&apos;ll never forget.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-4xl mx-auto">
					{reasons.map((item) => (
						<div
							key={item.id}
							className="flex gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/30 transition-all"
						>
							<div className="shrink-0 w-14 h-14 rounded-xl bg-gold/15 flex items-center justify-center text-gold">
								{item.icon}
							</div>
							<div>
								<h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-white mb-2">
									{item.title}
								</h3>
								<p className="text-white/50 leading-relaxed text-[15px]">{item.desc}</p>
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
		<section id="about" className="relative py-20 sm:py-28 md:py-36 bg-cream overflow-hidden">
			{/* Decorative elements */}
			<AnchorDecoration className="absolute bottom-12 sm:bottom-16 right-[3%] sm:right-[5%] w-14 sm:w-20 text-navy" />
			<ShellDecoration className="absolute top-16 sm:top-24 left-[3%] sm:left-[4%] w-10 sm:w-14 text-gold hidden sm:block" />
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
				<div className="max-w-5xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
						{/* Photo — shows second on mobile, first on desktop */}
						<div className="relative order-2 md:order-1">
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

						{/* Text — shows first on mobile, second on desktop */}
						<div className="order-1 md:order-2">
							<div className="divider-dots mb-6">
								<span />
								<span />
								<span />
							</div>
							<h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-navy leading-tight">
								Who We Are
							</h2>
							<div className="gold-line mt-6" />
							<div className="mt-8 space-y-5 text-text-dark/70 leading-relaxed">
								<p>
									We are local fishermen with a deep passion for the sea and the traditions that
									shaped our lives. For us, fishing isn&apos;t a job — it&apos;s who we are.
								</p>
								<p>
									Our mission is simple: share the authentic fishing lifestyle of Skiathos with
									visitors from around the world. No scripts, no performances — just a genuine day
									at sea with people who love what they do.
								</p>
								<p>
									With years of experience navigating these waters, we know every hidden bay, every
									fishing ground, and every story worth telling. Come aboard, and we promise you a
									day you&apos;ll remember long after you leave the island.
								</p>
							</div>

							<div className="relative mt-10 pl-6 border-l-2 border-gold">
								<p className="font-[family-name:var(--font-playfair)] text-lg italic text-navy/80">
									&ldquo;The sea teaches patience, respect, and gratitude. We want to share that
									with you.&rdquo;
								</p>
								<p className="mt-2 text-sm text-gold font-semibold">— Captain Stavros</p>
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
		<section id="booking" className="relative bg-booking py-20 sm:py-28 md:py-36 overflow-hidden">
			{/* Decorative elements */}
			<WaveDecoration className="absolute bottom-0 left-0 w-full h-12 sm:h-16 text-gold rotate-180" />
			<FishDecoration className="absolute top-20 sm:top-16 left-[4%] sm:left-[6%] w-12 sm:w-20 h-6 sm:h-10 text-white/20" />
			<RopeDecoration className="absolute top-0 right-[4%] sm:right-[5%] w-4 sm:w-5 h-48 sm:h-64 text-gold hidden sm:block" />
			<div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
				<h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
					Be a Fisherman
					<br />
					<span className="text-gold">for a Day</span>
				</h2>
				<div className="gold-line mx-auto mt-6" />

				<p className="mt-8 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
					Leave the beach behind and step into the real world of the sea. Feel the salt, the sun,
					and the rhythm of traditional fishing.
					<br />
					<span className="text-white/80 font-medium">
						This is not just a tour — it&apos;s a way of life.
					</span>
				</p>

				<div className="mt-10 sm:mt-14 bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 max-w-2xl mx-auto">
					<h3 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
						Book Your Experience
					</h3>
					<p className="text-white/50 mb-10">
						Ready to join us? Get in touch and reserve your spot today.
						<br />
						Spots are limited — we keep groups small on purpose.
					</p>

					<div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
						<a
							href={`tel:${PHONE}`}
							className="cta-phone inline-flex items-center gap-3 px-6 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold tracking-wide w-full sm:w-auto justify-center"
						>
							<Phone className="w-5 h-5" />
							{PHONE_DISPLAY}
						</a>
						<a
							href={WHATSAPP_URL}
							target="_blank"
							rel="noopener noreferrer"
							className="cta-whatsapp inline-flex items-center gap-3 px-6 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold tracking-wide w-full sm:w-auto justify-center"
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
						<span className="text-white/30 text-sm">&middot; Skiathos, Greece</span>
					</div>
					<p className="text-white/25 text-sm">
						&copy; {new Date().getFullYear()} Captain Stavros Fishing Tours. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
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
		</>
	);
}
