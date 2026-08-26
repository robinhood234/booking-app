"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useEffect } from "react"

interface Props { open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>> }
const links = [{ href: "/about", label: "About" }, { href: "/gallery", label: "Gallery" }, { href: "/contact", label: "Contact" }]

export default function SideNav({ open, setOpen }: Props) {
  const pathname = usePathname()
  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false) }
    document.addEventListener("keydown", closeOnEscape)
    document.body.style.overflow = "hidden"
    return () => { document.removeEventListener("keydown", closeOnEscape); document.body.style.overflow = "" }
  }, [open, setOpen])

  return <div className={`fixed inset-0 z-[150] transition ${open ? "visible" : "hidden pointer-events-none"}`} aria-hidden={!open}><button type="button" aria-label="Close navigation menu" onClick={() => setOpen(false)} className={`absolute inset-0 bg-[#171812]/60 transition-opacity ${open ? "opacity-100" : "opacity-0"}`} /><aside aria-label="Mobile menu" className={`fixed right-0 top-0 h-screen w-[min(84vw,360px)] overflow-y-auto bg-[#f5f1e9] p-6 shadow-2xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}><div className="flex items-center justify-between border-b border-[#d5ccbd] pb-5"><span className="font-raleway text-lg font-semibold uppercase tracking-[0.14em] text-[#282820]">Menu</span><button type="button" onClick={() => setOpen(false)} aria-label="Close navigation menu" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d5ccbd] text-2xl text-[#282820] transition hover:bg-[#ebe5d9]">×</button></div><div className="flex flex-col gap-2 pt-8">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} aria-current={pathname === link.href ? "page" : undefined} className={`rounded-md px-4 py-3 font-inter text-lg transition ${pathname === link.href ? "bg-[#ebe5d9] font-semibold text-[#7b512b]" : "text-[#656158] hover:bg-[#ebe5d9] hover:text-[#282820]"}`}>{link.label}</Link>)}<Link href="/book" onClick={() => setOpen(false)} className="mt-5 inline-flex items-center justify-between rounded-md bg-[#282820] px-4 py-3 font-inter text-sm font-semibold text-white transition hover:bg-[#a36f35]">Book a room <span aria-hidden="true">→</span></Link></div><p className="mt-10 border-t border-[#d5ccbd] pt-5 font-inter text-sm leading-6 text-[#77736b]">Sleep beneath a sky full of stories in Magadi.</p></aside></div>
}