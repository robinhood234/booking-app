"use client"

import Link from "next/link"
import { useState } from "react"
import SideNav from "./SideNav"

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  return <header className="border-b border-[#e7e0d5] bg-[#f5f1e9]/95 px-5 shadow-sm backdrop-blur"><nav aria-label="Mobile navigation" className="flex h-16 items-center justify-between"><Link href="/" className="font-raleway text-lg font-semibold uppercase tracking-[0.16em] text-[#282820]" aria-label="Star Nights Magadi home">Star Nights</Link><button type="button" onClick={() => setOpen(true)} aria-label="Open navigation menu" aria-expanded={open} className="flex h-10 w-10 items-center justify-center rounded-md border border-[#d5ccbd] text-xl text-[#282820] transition hover:bg-[#ebe5d9]">☰</button></nav><SideNav open={open} setOpen={setOpen} /></header>
}