"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [{ href: "/about", label: "About" }, { href: "/gallery", label: "Gallery" }, { href: "/contact", label: "Contact" }]

export default function LargeNav() {
  const pathname = usePathname()
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  return <header className="border-b border-[#e7e0d5] bg-[#f5f1e9]/95 px-6 shadow-sm backdrop-blur sm:px-10 lg:px-16"><nav aria-label="Primary navigation" className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8"><Link href="/" className="shrink-0 font-raleway text-lg font-semibold uppercase tracking-[0.16em] text-[#282820]" aria-label="Star Nights Magadi home">Star Nights</Link><div className="flex items-center gap-7">{links.map((link) => <Link key={link.href} href={link.href} aria-current={isActive(link.href) ? "page" : undefined} className={`relative py-2 font-inter text-sm font-semibold transition after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#a36f35] after:transition-all ${isActive(link.href) ? "text-[#7b512b] after:w-full" : "text-[#656158] after:w-0 hover:text-[#282820] hover:after:w-full"}`}>{link.label}</Link>)}<Link href="/book" className="inline-flex items-center gap-3 rounded-md bg-[#282820] px-5 py-2.5 font-inter text-sm font-semibold text-white transition hover:bg-[#a36f35]">Book a room <span aria-hidden="true">→</span></Link></div></nav></header>
}