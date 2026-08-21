'use client'

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const galleryImages = [
  { src: "/HeroImgTwo.jpg", alt: "A star bed beneath the night sky", title: "Sleep beneath the stars", className: "md:col-span-2 md:row-span-2" },
  { src: "/discover.webp", alt: "Open savannah surrounding the camp", title: "The Magadi landscape", className: "" },
  { src: "/HeroBg.webp", alt: "A peaceful room at Star Nights Magadi", title: "A room with a view", className: "" },
  { src: "/RoomCards/Chef.jpg", alt: "Fresh food prepared for guests", title: "Gather around the table", className: "" },
  { src: "/discover.webp", alt: "A guest enjoying a Star Nights experience", title: "Make it yours", className: "" },
  { src: "/Hero-Image-0ne.jpeg", alt: "A quiet view across the Kajiado landscape", title: "Room to breathe", className: "md:col-span-2" },
];

const sliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 450,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") sliderRef.current?.slickPrev();
      if (event.key === "ArrowRight") sliderRef.current?.slickNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  const openGallery = (index: number) => {
    setActiveIndex(index);
    window.setTimeout(() => sliderRef.current?.slickGoTo(index, true), 0);
  };

  return (
    <main className="min-h-screen bg-[#f5f1e9] text-[#24231f]">
      <section className="relative overflow-hidden bg-[#282820] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-24">
        <div className="absolute inset-0 bg-[url('/discover.webp')] bg-cover bg-center opacity-20" />
        <div className="relative mx-auto max-w-7xl">
          <Link href="/" className="font-inter text-sm text-white/70 transition hover:text-white">← Back to Star Nights</Link>
          <p className="mt-12 font-inter text-sm font-semibold uppercase tracking-[0.24em] text-[#e7c889]">A glimpse of the stay</p>
          <h1 className="mt-4 max-w-4xl font-raleway text-5xl leading-tight sm:text-7xl">See the space between the stars.</h1>
          <p className="mt-6 max-w-xl font-inter text-lg leading-8 text-white/70">Browse the rooms, landscapes, and small moments that make Star Nights Magadi feel like nowhere else.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="font-inter text-sm font-semibold uppercase tracking-[0.2em] text-[#a36f35]">The gallery</p><h2 className="mt-3 font-raleway text-4xl sm:text-5xl">A closer look</h2></div><p className="max-w-sm font-inter text-sm leading-6 text-[#656158]">Select any image to step into the full view.</p></div>
        <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <button type="button" key={image.src} onClick={() => openGallery(index)} className={`group relative overflow-hidden rounded-sm bg-[#d5ccbd] text-left focus:outline-none focus:ring-2 focus:ring-[#a36f35] focus:ring-offset-4 ${image.className}`} aria-label={`Open image: ${image.title}`}>
              <img src={image.src} alt={image.alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-focus:scale-105" />
              <span className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/75 to-transparent px-5 pb-5 pt-12 font-inter text-sm font-semibold text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100">{image.title} <span aria-hidden="true">↗</span></span>
            </button>
          ))}
        </div>
      </section>

      <section className="bg-[#d7ad62] px-6 py-16 sm:px-10 lg:px-16"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"><div><p className="font-inter text-sm font-semibold uppercase tracking-[0.2em] text-[#5a3a20]">Ready to see it in person?</p><h2 className="mt-2 font-raleway text-4xl text-[#211d16] sm:text-5xl">Find your star bed.</h2></div><Link href="/book" className="rounded-md bg-[#282820] px-6 py-3 font-inter text-sm font-semibold text-white transition hover:bg-black">Browse rooms →</Link></div></section>

      {activeIndex !== null && (
        <div role="dialog" aria-modal="true" aria-label="Gallery viewer" className="fixed inset-0 z-[200] flex items-center justify-center bg-[#11120f]/95 p-4 sm:p-8" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveIndex(null); }}>
          <button type="button" onClick={() => setActiveIndex(null)} aria-label="Close gallery" className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-2xl text-white transition hover:bg-white hover:text-[#282820]">×</button>
          <button type="button" onClick={() => sliderRef.current?.slickPrev()} aria-label="Previous image" className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 text-2xl text-white transition hover:bg-white hover:text-[#282820] sm:left-8">←</button>
          <button type="button" onClick={() => sliderRef.current?.slickNext()} aria-label="Next image" className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 text-2xl text-white transition hover:bg-white hover:text-[#282820] sm:right-8">→</button>
          <div className="w-full max-w-5xl"><Slider ref={sliderRef} {...sliderSettings} afterChange={setActiveIndex}>{galleryImages.map((image) => <div key={image.src} className="px-2"><div className="flex h-[70vh] flex-col items-center justify-center"><img src={image.src} alt={image.alt} className="max-h-[calc(70vh-56px)] w-full object-contain" /><p className="mt-4 font-inter text-sm text-white/70">{image.title}</p></div></div>)}</Slider></div>
        </div>
      )}
    </main>
  );
}