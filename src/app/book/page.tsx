import Link from "next/link";
import { rooms } from "@/data/getRooms";

const roomAmenities = [
  ["/icons/wifi-good-svgrepo-com.svg", "Wi-Fi"],
  ["/icons/bed-svgrepo-com.svg", "Comfortable bed"],
  ["/icons/drink-tea-svgrepo-com.svg", "Tea service"],
  ["/icons/food-svgrepo-com.svg", "Breakfast"],
];

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-[#f5f1e9] text-[#24231f]">
      <section className="relative overflow-hidden bg-[#282820] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-24">
        <div className="absolute inset-0 bg-[url('/HeroBg.webp')] bg-cover bg-center opacity-20" />
        <div className="relative mx-auto max-w-7xl">
          <Link href="/" className="font-inter text-sm text-white/70 transition hover:text-white">← Back to Star Nights</Link>
          <p className="mt-12 font-inter text-sm font-semibold uppercase tracking-[0.2em] text-[#e7c889]">Plan your escape</p>
          <h1 className="mt-4 max-w-3xl font-raleway text-5xl leading-tight sm:text-7xl">Choose your night under the stars.</h1>
          <p className="mt-6 max-w-xl font-inter text-lg leading-8 text-white/70">Each room is a quiet base for open skies, slow mornings, and the wild beauty of Magadi.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><p className="font-inter text-sm font-semibold uppercase tracking-[0.2em] text-[#a36f35]">Stay your way</p><h2 className="mt-3 font-raleway text-4xl sm:text-5xl">Our rooms</h2></div><p className="max-w-sm font-inter text-sm leading-6 text-[#656158]">Compare your options, then choose the room that feels like home in the wilderness.</p></div>
        <div className="grid gap-6 md:grid-cols-2">
          {rooms.map((room) => (
            <article key={room.id} className="overflow-hidden rounded-sm bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <img src={room.img} alt={room.room} className="aspect-[16/9] w-full object-cover" />
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4"><div><p className="font-inter text-xs font-semibold uppercase tracking-[0.15em] text-[#a36f35]">Star bed stay</p><h3 className="mt-2 font-raleway text-3xl">{room.room}</h3></div><p className="font-inter text-lg font-semibold text-[#7b512b]">${room.price}<span className="text-sm font-normal text-[#77736b]"> / night</span></p></div>
                <p className="mt-4 line-clamp-3 font-inter leading-7 text-[#656158]">{room.details}</p>
                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 border-t border-[#e7e0d5] pt-5">{roomAmenities.map(([icon, label]) => <span key={label} className="flex items-center gap-2 font-inter text-xs text-[#656158]"><img src={icon} alt="" className="h-5 w-5" />{label}</span>)}</div>
                <Link href={`/book/${room.slug}`} className="mt-7 inline-flex items-center gap-3 rounded-md bg-[#282820] px-5 py-3 font-inter text-sm font-semibold text-white transition hover:bg-[#a36f35]">View room and reserve <span aria-hidden="true">→</span></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}