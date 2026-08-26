'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import Link from "next/link";
import { rooms } from "@/data/getRooms";

const experiences = [
  { slug: "bird-watching", title: "Bird watching", icon: "/icons/binoculars-eye-svgrepo-com.svg", text: "Follow vibrant sunbirds and soaring raptors across quiet open landscapes." },
  { slug: "farm-tours", title: "Farm tours", icon: "/icons/tour-pin-tear-svgrepo-com.svg", text: "Meet the animals, taste fresh produce, and slow down into countryside life." },
  { slug: "wildlife-spotting", title: "Wildlife spotting", icon: "/icons/deer-svgrepo-com.svg", text: "Join a guided drive or nature walk for close encounters with Magadi's wildlife." },
  { slug: "maa-culture", title: "Maa culture", icon: "/icons/star-alt-4-svgrepo-com.svg", text: "Share stories, music, beadwork, and daily life through a respectful cultural exchange." },
  { slug: "shooting-range", title: "Shooting range", icon: "/icons/crosshair-svgrepo-com.svg", text: "Test your focus in a safe, controlled setting with guidance from trained instructors." },
  { slug: "nature-spa", title: "Nature spa", icon: "/icons/massage-session-svgrepo-com.svg", text: "Reset with restorative treatments surrounded by warm breezes and wide views." },
];

const reviews = [
  { name: "Lydya Nyambura", image: "/night-client-one.png", quote: "A beautiful spot to catch the sunrise and moonrise. Privacy, seclusion, and the best evening bonfire." },
  { name: "Derek", image: "/night-client-three.png", quote: "The location is stunning, the staff were warm, and the rooms blend comfort with the wild beauty of the bush." },
  { name: "Martin Murimi", image: "/night-client-two.png", quote: "Very welcoming. A great stay, and I would come back again." },
];

export default function Home() {
  const sliderRef = useRef<Slider | null>(null);
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 450,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{ breakpoint: 1024, settings: { slidesToShow: 2 } }, { breakpoint: 640, settings: { slidesToShow: 1 } }],
  };

  return (
    <main className="bg-[#f5f1e9] text-[#24231f]">
      <section className="relative flex min-h-[calc(100vh-64px)] items-end overflow-hidden bg-[#302d25] text-white">
        <video autoPlay muted loop playsInline poster="/HeroImgTwo.jpg" aria-label="A starry night at Star Nights Magadi" className="absolute inset-0 h-full w-full object-cover object-center opacity-75"><source src="/Hero-video-bg.mp4" type="video/mp4" />Your browser does not support background video.</video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#171812] via-[#171812]/40 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-14 pt-32 sm:px-10 lg:px-16 lg:pb-20">
          <p className="mb-5 font-inter text-sm font-semibold uppercase tracking-[0.24em] text-[#e7c889]">Star Nights Magadi</p>
          <h1 className="max-w-4xl font-raleway text-5xl leading-[0.98] sm:text-7xl lg:text-8xl">Sleep beneath a sky full of stories.</h1>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/book" className="inline-flex w-fit items-center gap-3 rounded-md bg-[#d7ad62] px-6 py-3 font-inter text-sm font-semibold text-[#211d16] transition hover:bg-[#ebc77e]">Reserve your star bed <span aria-hidden="true">→</span></Link>
            <Link href="#discover" className="inline-flex w-fit items-center gap-2 px-2 py-3 font-inter text-sm font-semibold text-white underline decoration-white/50 underline-offset-8 transition hover:decoration-white">Explore the experience <span aria-hidden="true">↓</span></Link>
          </div>
          <div className="mt-16 grid max-w-2xl grid-cols-3 gap-5 border-t border-white/30 pt-5 font-inter text-xs text-white/80 sm:text-sm"><span>Open-air star beds</span><span>Guided night skies</span><span>45 min from Nairobi</span></div>
        </div>
      </section>

      <section id="discover" className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-16 lg:py-28">
        <div className="overflow-hidden rounded-sm"><img src="/discover.webp" alt="The open savannah surrounding Star Nights Magadi" className="aspect-[4/3] w-full object-cover" /></div>
        <div className="lg:pl-8"><p className="mb-4 font-inter text-sm font-semibold uppercase tracking-[0.2em] text-[#a36f35]">A different kind of getaway</p><h2 className="max-w-xl font-raleway text-4xl leading-tight sm:text-6xl">Come for the stars. Stay for the stillness.</h2><p className="mt-6 max-w-xl font-inter text-lg leading-8 text-[#5d5a52]">At Star Nights Magadi, the savannah is your view and the night sky is your ceiling. Trade busy schedules for bonfires, slow mornings, and the kind of quiet you can feel.</p><Link href="/about" className="mt-8 inline-flex items-center gap-3 font-inter text-sm font-semibold text-[#7b512b] underline underline-offset-8">Learn about the stay <span aria-hidden="true">→</span></Link></div>
      </section>

      <section className="border-y border-[#dcd4c6] bg-[#ebe5d9] px-6 py-20 sm:px-10 lg:px-16 lg:py-24"><div className="mx-auto max-w-7xl"><div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="mb-3 font-inter text-sm font-semibold uppercase tracking-[0.2em] text-[#a36f35]">Make the day yours</p><h2 className="font-raleway text-4xl sm:text-6xl">Beyond the bed</h2></div><p className="max-w-sm font-inter text-[#5d5a52]">Thoughtful experiences connect your stay to the land, the people, and the sky.</p></div><div className="grid gap-px overflow-hidden border border-[#d5ccbd] bg-[#d5ccbd] sm:grid-cols-2 lg:grid-cols-3">{experiences.map((experience) => <Link href={`/about#${experience.slug}`} key={experience.slug} className="group bg-[#f5f1e9] p-7 transition hover:bg-white"><img src={experience.icon} alt="" className="mb-8 h-11 w-11" /><h3 className="font-raleway text-2xl">{experience.title}</h3><p className="mt-3 font-inter leading-7 text-[#656158]">{experience.text}</p><span className="mt-6 inline-flex font-inter text-sm font-semibold text-[#a36f35] opacity-0 transition group-hover:opacity-100">Explore feature →</span></Link>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28"><div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="mb-3 font-inter text-sm font-semibold uppercase tracking-[0.2em] text-[#a36f35]">Choose your view</p><h2 className="font-raleway text-4xl sm:text-6xl">Find your star bed</h2></div><Link href="/book" className="font-inter text-sm font-semibold text-[#7b512b] underline underline-offset-8">See all rooms →</Link></div><div className="room-slider -mx-3"><Slider ref={sliderRef} {...settings}>{rooms.map((room) => <article key={room.id} className="overflow-hidden rounded-sm bg-white shadow-sm"><img src={room.img} alt={room.room} className="aspect-[4/3] w-full object-cover" /><div className="p-6"><div className="flex items-start justify-between gap-4"><h3 className="font-raleway text-2xl">{room.room}</h3><p className="whitespace-nowrap font-inter text-sm font-semibold text-[#a36f35]">${room.price}<span className="font-normal text-[#77736b]"> / night</span></p></div><p className="mt-3 line-clamp-2 font-inter leading-7 text-[#656158]">{room.details}</p><Link href={`/book/${room.slug}`} className="mt-6 inline-flex rounded-md bg-[#282820] px-5 py-3 font-inter text-sm font-semibold text-white transition hover:bg-[#a36f35]">View room</Link></div></article>)}</Slider></div><div className="mt-8 flex justify-end gap-3"><button type="button" aria-label="Previous room" onClick={() => sliderRef.current?.slickPrev()} className="h-11 w-11 rounded-full border border-[#bdb4a4] text-xl transition hover:bg-[#282820] hover:text-white">←</button><button type="button" aria-label="Next room" onClick={() => sliderRef.current?.slickNext()} className="h-11 w-11 rounded-full border border-[#bdb4a4] text-xl transition hover:bg-[#282820] hover:text-white">→</button></div></section>

      <section className="relative overflow-hidden bg-[#282820] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-24"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center"><div><p className="mb-3 font-inter text-sm font-semibold uppercase tracking-[0.2em] text-[#e7c889]">The night, understood</p><h2 className="font-raleway text-4xl leading-tight sm:text-6xl">A closer look at the cosmos.</h2><p className="mt-6 max-w-xl font-inter text-lg leading-8 text-white/70">Learn the constellations, hear the stories behind them, and see the universe with fresh eyes through our astro-tourism experience.</p><Link href="/about" className="mt-8 inline-flex rounded-md bg-white px-5 py-3 font-inter text-sm font-semibold text-[#282820] transition hover:bg-[#e7c889]">Discover astro-tourism</Link></div><video src="/VID-20260306-WA0002.mp4" muted loop autoPlay playsInline aria-label="Astro-tourism experience" className="aspect-video w-full rounded-sm object-cover opacity-90" /></div></section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28"><div className="mb-12 text-center"><p className="mb-3 font-inter text-sm font-semibold uppercase tracking-[0.2em] text-[#a36f35]">Kind words from the wild</p><h2 className="font-raleway text-4xl sm:text-6xl">Guests leave lighter.</h2></div><div className="grid gap-5 md:grid-cols-3">{reviews.map((review) => <figure key={review.name} className="flex flex-col bg-white p-7"><div className="mb-6 flex items-center gap-4"><img src={review.image} alt="" className="h-14 w-14 rounded-full object-cover" /><figcaption><h3 className="font-raleway text-xl">{review.name}</h3><div className="mt-1 text-[#c58c3b]" aria-label="5 out of 5 stars">★★★★★</div></figcaption></div><blockquote className="font-inter leading-7 text-[#656158]">“{review.quote}”</blockquote></figure>)}</div></section>

      <section className="bg-[#d7ad62] px-6 py-16 sm:px-10 lg:px-16"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 sm:flex-row sm:items-center"><div><p className="font-inter text-sm font-semibold uppercase tracking-[0.2em] text-[#5a3a20]">Your quiet place is waiting</p><h2 className="mt-2 font-raleway text-4xl text-[#211d16] sm:text-5xl">Make a night of it.</h2></div><Link href="/book" className="rounded-md bg-[#282820] px-6 py-3 font-inter text-sm font-semibold text-white transition hover:bg-black">Book your stay →</Link></div></section>
    </main>
  );
}