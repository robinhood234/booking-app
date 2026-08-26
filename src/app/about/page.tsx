import Link from "next/link";

const experiences = [
  {
    number: "01",
    slug: "bird-watching",
    title: "Dine under open skies",
    image: "/bird-sighting.jpg",
    alt: "Giraffes across the open landscape",
    text: "Follow vibrant sunbirds and soaring raptors across quiet open landscapes. Whether you are an avid birder or a curious beginner, the changing light and wide horizon make every walk rewarding.",
  },
  {
    number: "02",
    slug: "farm-tours",
    title: "Farm tours",
    image: "/car-tour.jpg",
    alt: "Fresh food prepared for guests",
    text: "Meet the animals, taste fresh produce, and slow down into countryside life. A guided farm tour offers a grounded connection to the food and daily rhythms that shape the stay.",
  },
  {
    number: "03",
    slug: "wildlife-spotting",
    title: "Wildlife spotting",
    image: "/girrafes.jpg",
    alt: "Zebras in the Magadi landscape",
    text: "Join a guided drive or nature walk for close encounters with Magadi's wildlife. Each outing is a chance to notice the landscape's quiet movement and unexpected moments.",
  },
  {
    number: "04",
    slug: "maa-culture",
    title: "Maa cultural immersion",
    image: "/discover.webp",
    alt: "The open landscape around Magadi",
    text: "Share stories, music, beadwork, and daily life through a respectful cultural exchange. It is an opportunity to learn from the people and heritage connected to this land.",
  },
  {
    number: "05",
    slug: "shooting-range",
    title: "Shooting range",
    image: "/car-tour.jpg",
    alt: "A guided outdoor tour in Magadi",
    text: "Test your focus in a safe, controlled setting with guidance from trained instructors. It is a purposeful daytime activity for guests seeking a little adventure.",
  },
  {
    number: "06",
    slug: "nature-spa",
    title: "Nature spa",
    image: "/spa.jpg",
    alt: "Water flowing through the landscape",
    text: "Reset with restorative treatments surrounded by warm breezes and wide views. Give your body and attention the same unhurried care as the rest of your stay.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#f5f1e9] text-[#24231f]">
      <section className="relative flex min-h-[68vh] items-end overflow-hidden bg-[#282820] text-white">
        <img src="/HeroImgTwo.jpg" alt="A quiet view across the Magadi landscape" className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171812] via-[#171812]/35 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-14 pt-32 sm:px-10 lg:px-16 lg:pb-20">
          <Link href="/" className="font-inter text-sm text-white/70 transition hover:text-white">← Back to Star Nights</Link>
          <p className="mt-16 font-inter text-sm font-semibold uppercase tracking-[0.24em] text-[#e7c889]">The Star Nights feeling</p>
          <h1 className="mt-4 max-w-4xl font-raleway text-5xl leading-[1.02] sm:text-7xl lg:text-8xl">A place to come back to yourself.</h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-16 lg:py-28">
        <div><p className="font-inter text-sm font-semibold uppercase tracking-[0.2em] text-[#a36f35]">More than a getaway</p><h2 className="mt-4 max-w-lg font-raleway text-4xl leading-tight sm:text-6xl">Slow travel, with the whole sky above you.</h2></div>
        <div className="space-y-6 font-inter text-lg leading-8 text-[#5d5a52]"><p>Star Nights Magadi is an invitation to trade the pace of ordinary life for something more elemental: warm evenings, open landscapes, and a bed beneath the stars.</p><p>Set in the quiet beauty of Kajiado, the experience is shaped by the land around us. Days can be active or still. Nights are for stories, firelight, and looking up.</p><Link href="/book" className="inline-flex items-center gap-3 font-inter text-sm font-semibold text-[#7b512b] underline underline-offset-8">Find your star bed <span aria-hidden="true">→</span></Link></div>
      </section>

      <section className="bg-[#282820] px-6 py-16 text-white sm:px-10 lg:px-16 lg:py-20"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center"><div className="overflow-hidden rounded-sm"><iframe src="https://www.youtube.com/embed/qQE62f3ls1I" title="A look inside Star Nights Magadi" className="aspect-video w-full" allowFullScreen /></div><div><p className="font-inter text-sm font-semibold uppercase tracking-[0.2em] text-[#e7c889]">See the feeling for yourself</p><h2 className="mt-4 font-raleway text-4xl leading-tight sm:text-5xl">The wild is not far away.</h2><p className="mt-5 font-inter leading-7 text-white/70">Come for a night, stay for the perspective. The simplest details become memorable when the horizon is wide enough.</p></div></div></section>

      <section className="border-b border-[#dcd4c6] bg-[#ebe5d9] px-6 py-16 sm:px-10 lg:px-16 lg:py-20"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"><div><p className="font-inter text-sm font-semibold uppercase tracking-[0.2em] text-[#a36f35]">Look up</p><h2 className="mt-3 font-raleway text-4xl leading-tight sm:text-5xl">What is astro-tourism?</h2></div><div className="max-w-2xl"><p className="font-inter text-lg leading-8 text-[#5d5a52]">Astro-tourism is travel shaped around the night sky: stargazing, learning the constellations, and hearing the stories people have told about them for generations.</p><p className="mt-4 font-inter leading-7 text-[#656158]">At Star Nights, it means stepping outside after dark, slowing down, and experiencing the universe from the quiet of the Magadi landscape.</p><Link href="/book" className="mt-6 inline-flex items-center gap-3 font-inter text-sm font-semibold text-[#7b512b] underline underline-offset-8">Stay beneath the stars <span aria-hidden="true">→</span></Link></div></div></section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28"><div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="font-inter text-sm font-semibold uppercase tracking-[0.2em] text-[#a36f35]">Shape your stay</p><h2 className="mt-3 font-raleway text-4xl sm:text-6xl">Make the day yours.</h2></div><p className="max-w-sm font-inter leading-7 text-[#656158]">There is no single way to experience Magadi. Follow your curiosity, or follow the quiet.</p></div>
<div className="grid md:grid-cols-2">
  {experiences.map((experience, index) => (
    <article
      id={experience.slug}
      key={experience.slug}
      className={`scroll-mt-24 bg-[#f5f1e9] p-7 sm:p-9 border border-[#d5ccbd]`}
    >
      <div className="mb-7 overflow-hidden rounded-sm">
        <img
          src={experience.image}
          alt={experience.alt}
          className="aspect-[16/9] w-full object-cover"
        />
      </div>
      <span className="font-inter text-sm font-semibold text-[#a36f35]">
        {experience.number}
      </span>
      <h3 className="mt-5 font-raleway text-3xl">{experience.title}</h3>
      <p className="mt-4 max-w-xl font-inter leading-7 text-[#656158]">
        {experience.text}
      </p>
    </article>
  ))}
</div>      
</section>

      <section className="bg-[#ebe5d9] px-6 py-20 sm:px-10 lg:px-16 lg:py-24"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="font-inter text-sm font-semibold uppercase tracking-[0.2em] text-[#a36f35]">Your quiet place is waiting</p><h2 className="mt-3 max-w-3xl font-raleway text-4xl leading-tight sm:text-6xl">Leave with a little more sky in you.</h2></div><Link href="/book" className="inline-flex w-fit rounded-md bg-[#282820] px-6 py-3 font-inter text-sm font-semibold text-white transition hover:bg-[#a36f35]">Plan your stay <span className="ml-3" aria-hidden="true">→</span></Link></div></section>
    </main>
  );
}