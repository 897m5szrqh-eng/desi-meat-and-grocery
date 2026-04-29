import storefront from "@/assets/storefront.jpeg";
import sign from "@/assets/sign.jpeg";
import produceBaskets from "@/assets/produce-baskets.jpeg";
import spices from "@/assets/spices.jpeg";
import snacks from "@/assets/snacks.jpeg";
import aisle from "@/assets/aisle.jpeg";
import produceCooler from "@/assets/produce-cooler.jpeg";
import dairyCooler from "@/assets/dairy-cooler.jpeg";
import meatCooler from "@/assets/meat-cooler.jpeg";
import logo from "@/assets/logo.svg";
import { Phone, MapPin, Clock, Truck, Star, CreditCard, ParkingCircle, ArrowRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE = "817-743-2817";
const PHONE_TEL = "+18177432817";
const ADDRESS = "701 W White St Suite 1, Anna, TX 75409";
const MAPS = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Desi Halal Meat & Grocery, " + ADDRESS)}`;
const INSTAGRAM = "https://www.instagram.com/desimeatandgrocery";

const categories = [
  { title: "Halal Meat", desc: "Fresh goat, chicken & lamb cut to order.", img: meatCooler },
  { title: "Fresh Produce", desc: "Indian vegetables, herbs, chilies & root crops.", img: produceCooler },
  { title: "Spices & Masalas", desc: "Whole & ground — Laxmi, Swagat & more.", img: spices },
  { title: "Snacks & Sweets", desc: "Pani puri, namkeen, mithai and tea-time bites.", img: snacks },
  { title: "Frozen & Dairy", desc: "Paneer, ghee, frozen parathas & curd.", img: dairyCooler },
  { title: "Pantry Staples", desc: "Atta, dals, rice, oils, pickles and more.", img: aisle },
];

const reviews = [
  { name: "Lowest Deep", text: "Warm welcomed Indian Store. Family owned, very friendly and customer service oriented. Prices were competitive and the store is well maintained.", stars: 5 },
  { name: "Rose Verzyl", text: "So grateful for an Indian grocery in Anna. They have fresh meat & veg to make Indian dishes at home. A one-stop shop — really nice & helpful.", stars: 5 },
  { name: "Charan Reddy", text: "Fresh meat and fresh vegetables in Anna. Saves a lot of time for the people around here.", stars: 5 },
  { name: "Akshatha Dandamudi", text: "Warm welcoming and accommodating. Found the prices reasonable.", stars: 5 },
  { name: "Phani Krishna", text: "Thought it would be costly compared to major Indian grocery stores but the pricing is the same. Everything seems fresh.", stars: 5 },
  { name: "Cedric Kayisaki", text: "Great place — definitely good to have one in the area since the closest ones are 30+ minutes away.", stars: 5 },
];

const galleryImages = [
  { src: produceBaskets, alt: "Sweet potatoes, taro and turmeric root in baskets" },
  { src: spices, alt: "Aisle of Indian spices and masalas" },
  { src: aisle, alt: "Snacks and sweets aisle" },
  { src: dairyCooler, alt: "Cooler with paneer, curd and fresh produce" },
  { src: meatCooler, alt: "Halal meat cooler with fresh cuts" },
  { src: snacks, alt: "Packaged snacks and ready mixes" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="Desi Halal Meat & Grocery" className="h-10 md:h-12 w-auto" />
            <div className="leading-tight hidden sm:block">
              <div className="font-display text-lg md:text-xl font-bold text-primary">Desi</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground -mt-0.5">Halal Meat & Grocery</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#categories" className="hover:text-primary transition-colors">Shop</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Store</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Reviews</a>
            <a href="#visit" className="hover:text-primary transition-colors">Visit</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="icon" className="hidden sm:inline-flex text-primary hover:text-accent" aria-label="Instagram">
              <a href={INSTAGRAM} target="_blank" rel="noreferrer"><Instagram className="h-5 w-5" /></a>
            </Button>
            <Button asChild variant="default" className="bg-accent hover:bg-accent-glow text-accent-foreground">
              <a href={`tel:${PHONE_TEL}`}><Phone className="mr-2 h-4 w-4" />Call</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={storefront} alt="Desi Halal Meat & Grocery storefront in Anna, TX" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="relative container py-24 md:py-36 lg:py-44">
          <div className="max-w-2xl text-primary-foreground">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent-glow text-xs font-medium uppercase tracking-widest mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" /> Now open in Anna, TX
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-700 leading-[0.95] text-balance">
              Your neighborhood <span className="italic text-accent-glow">desi</span> grocery — fresh, halal, close to home.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-xl text-balance">
              Family-owned in Anna & Melissa. Fresh halal meat, Indian produce, spices, snacks and pantry staples — at prices that match the big stores.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent-glow text-accent-foreground h-14 px-7 text-base shadow-glow">
                <a href={`tel:${PHONE_TEL}`}><Phone className="mr-2 h-5 w-5" />{PHONE}</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-7 text-base bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <a href={MAPS} target="_blank" rel="noreferrer"><MapPin className="mr-2 h-5 w-5" />Get Directions</a>
              </Button>
            </div>

            <div className="mt-12 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary-foreground/10 backdrop-blur border border-primary-foreground/15">
              <Truck className="h-5 w-5 text-accent-glow" />
              <span className="text-sm font-medium">Free home delivery on orders over $50</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-card">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-6 py-6 text-sm">
          <div className="flex items-center gap-3"><Star className="h-5 w-5 text-accent fill-accent" /><span><b className="text-primary">4.5</b> · 22 Google reviews</span></div>
          <div className="flex items-center gap-3"><Clock className="h-5 w-5 text-accent" /><span>Open today · Closes 8:30 PM</span></div>
          <div className="flex items-center gap-3"><ParkingCircle className="h-5 w-5 text-accent" /><span>On-site parking</span></div>
          <div className="flex items-center gap-3"><CreditCard className="h-5 w-5 text-accent" /><span>Accepts credit cards</span></div>
        </div>
      </section>

      {/* About */}
      <section className="container py-24 md:py-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft">
            <img src={sign} alt="Desi Halal Meat & Grocery roadside sign" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-accent text-accent-foreground rounded-2xl px-6 py-5 shadow-glow max-w-[200px]">
            <div className="font-display text-3xl font-700 leading-none">30+ min</div>
            <div className="text-xs mt-2 opacity-90">saved per trip — the closest desi store used to be that far away.</div>
          </div>
        </div>
        <div className="lg:col-span-7 lg:pl-8">
          <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-4">Our Story</div>
          <h2 className="font-display text-4xl md:text-5xl font-700 text-primary text-balance">
            One stop for every desi kitchen in Anna & Melissa.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            We opened Desi Halal Meat & Grocery to bring the flavors of home closer — without the hour-long drive. From freshly cut halal meat to coriander, curry leaves, basmati and your favorite masalas, we stock what you actually cook with.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            We're a family-run shop. Walk in, ask for what you need — if we don't have it, we'll try to get it for you next time.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            <div><div className="font-display text-3xl font-700 text-primary">Fresh</div><div className="text-xs text-muted-foreground mt-1">Daily produce & meat</div></div>
            <div><div className="font-display text-3xl font-700 text-primary">Halal</div><div className="text-xs text-muted-foreground mt-1">Certified meat</div></div>
            <div><div className="font-display text-3xl font-700 text-primary">Local</div><div className="text-xs text-muted-foreground mt-1">Family owned</div></div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="bg-gradient-band py-24 md:py-32">
        <div className="container">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3">What we stock</div>
              <h2 className="font-display text-4xl md:text-5xl font-700 text-primary text-balance max-w-2xl">
                A full desi pantry — from sabzi to sweets.
              </h2>
            </div>
            <Button asChild variant="ghost" className="text-primary hover:text-accent">
              <a href={`tel:${PHONE_TEL}`}>Call to check stock <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c) => (
              <article key={c.title} className="group relative overflow-hidden rounded-2xl bg-card shadow-soft hover:-translate-y-1 transition-transform duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-700 text-primary">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="container py-24 md:py-32">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3">Inside the store</div>
          <h2 className="font-display text-4xl md:text-5xl font-700 text-primary text-balance">
            Bright, clean, and stocked with what you came for.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-xl ${i === 0 ? "md:row-span-2 md:col-span-2 aspect-square md:aspect-auto" : "aspect-square"}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="bg-primary text-primary-foreground py-24 md:py-32">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-accent-glow font-semibold mb-3">Loved by neighbors</div>
              <h2 className="font-display text-4xl md:text-5xl font-700 text-balance max-w-xl">
                4.5 stars from 22 Google reviews.
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex">
                {[0,1,2,3,4].map((i) => (
                  <Star key={i} className="h-6 w-6 text-accent fill-accent" />
                ))}
              </div>
              <span className="text-primary-foreground/70 text-sm">Average rating</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <figure key={r.name} className="rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 p-7 backdrop-blur">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-accent fill-accent" />
                  ))}
                </div>
                <blockquote className="font-display text-lg leading-relaxed text-primary-foreground/95">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-5 text-sm text-primary-foreground/60">— {r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="container py-24 md:py-32 grid lg:grid-cols-2 gap-12">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3">Visit us</div>
          <h2 className="font-display text-4xl md:text-5xl font-700 text-primary text-balance">
            Stop by, or call ahead — we'll have it ready.
          </h2>
          <div className="mt-10 space-y-6">
            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">Address</div>
                <a href={MAPS} target="_blank" rel="noreferrer" className="font-display text-xl text-primary hover:text-accent">{ADDRESS}</a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-accent" />
              </div>
              <div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">Phone</div>
                <a href={`tel:${PHONE_TEL}`} className="font-display text-xl text-primary hover:text-accent">{PHONE}</a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <Clock className="h-5 w-5 text-accent" />
              </div>
              <div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">Hours</div>
                <div className="font-display text-xl text-primary">Open daily · Closes 8:30 PM</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <Truck className="h-5 w-5 text-accent" />
              </div>
              <div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">Delivery</div>
                <div className="font-display text-xl text-primary">Free home delivery over $50</div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent-glow text-accent-foreground">
              <a href={`tel:${PHONE_TEL}`}><Phone className="mr-2 h-5 w-5" />Call the store</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={MAPS} target="_blank" rel="noreferrer"><MapPin className="mr-2 h-5 w-5" />Open in Maps</a>
            </Button>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-soft min-h-[420px]">
          <iframe
            title="Desi Halal Meat & Grocery — Anna, TX"
            src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground/80">
        <div className="container py-14 grid md:grid-cols-3 gap-10">
          <div>
            <div className="mb-4 bg-primary-foreground/5 rounded-xl p-3 inline-block">
              <img src={logo} alt="Desi Halal Meat & Grocery" className="h-12 w-auto" />
            </div>
            <p className="text-sm text-primary-foreground/60 max-w-xs">A family-owned Indian grocery & halal meat shop serving Anna, Melissa and the surrounding North Texas community.</p>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm text-primary-foreground hover:text-accent-glow transition-colors">
              <Instagram className="h-4 w-4" /> @desimeatandgrocery
            </a>
          </div>
          <div className="text-sm space-y-2">
            <div className="font-display text-base text-primary-foreground mb-3">Visit</div>
            <a href={MAPS} target="_blank" rel="noreferrer" className="block hover:text-accent-glow">{ADDRESS}</a>
            <a href={`tel:${PHONE_TEL}`} className="block hover:text-accent-glow">{PHONE}</a>
            <div>Open daily · Closes 8:30 PM</div>
          </div>
          <div className="text-sm space-y-2">
            <div className="font-display text-base text-primary-foreground mb-3">Follow & Browse</div>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="hover:text-accent-glow inline-flex items-center gap-2"><Instagram className="h-4 w-4" />Instagram</a>
            <a href="#categories" className="block hover:text-accent-glow">Shop categories</a>
            <a href="#gallery" className="block hover:text-accent-glow">Inside the store</a>
            <a href="#reviews" className="block hover:text-accent-glow">Reviews</a>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10">
          <div className="container py-5 text-xs text-primary-foreground/50 flex flex-wrap justify-between gap-3">
            <span>© {new Date().getFullYear()} Desi Halal Meat & Grocery. All rights reserved.</span>
            <span>Anna, TX · Made with care.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
