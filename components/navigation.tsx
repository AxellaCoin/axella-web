"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#021C24]/95 backdrop-blur-xl shadow-lg border-b border-[#26C8B8]/30"
          : "bg-[#021C24]/80 backdrop-blur-md"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#26C8B8] focus:text-[#021C24] focus:rounded-lg"
      >
        Skip to content
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group min-h-[44px]">
            <div className="w-11 h-11 rounded-full overflow-hidden shadow-lg group-hover:shadow-[#26C8B8]/50 transition-all duration-300 group-hover:scale-105">
              <Image
                src="/images/design-mode/image03(1).png"
                alt="AxellaCoin Logo"
                width={44}
                height={44}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-xl font-light text-[#26C8B8] tracking-tight">AxellaCoin</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#how-it-works"
              className="text-white/90 hover:text-[#26C8B8] transition-colors duration-300 font-light text-sm min-h-[44px] flex items-center"
            >
              How It Works
            </Link>
            <Link
              href="#staking"
              className="text-white/90 hover:text-[#26C8B8] transition-colors duration-300 font-light text-sm min-h-[44px] flex items-center"
            >
              Staking
            </Link>
            <Link
              href="#documents"
              className="text-white/90 hover:text-[#26C8B8] transition-colors duration-300 font-light text-sm min-h-[44px] flex items-center"
            >
              Documents
            </Link>
            <Link
              href="#roadmap"
              className="text-white/90 hover:text-[#26C8B8] transition-colors duration-300 font-light text-sm min-h-[44px] flex items-center"
            >
              Roadmap
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex text-white hover:text-[#26C8B8] hover:bg-[#094068]/50 font-light border border-[#26C8B8]/40 bg-transparent px-4 text-sm backdrop-blur-sm transition-all duration-300 min-h-[44px]"
              asChild
            >
              <a href="#community">Community</a>
            </Button>
            

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white hover:text-[#26C8B8] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#26C8B8]/20 pt-4 animate-fade-in-up">
            <div className="flex flex-col gap-4">
              <Link
                href="#how-it-works"
                className="text-white/90 hover:text-[#26C8B8] transition-colors font-light text-base py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="#staking"
                className="text-white/90 hover:text-[#26C8B8] transition-colors font-light text-base py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Staking
              </Link>
              <Link
                href="#documents"
                className="text-white/90 hover:text-[#26C8B8] transition-colors font-light text-base py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Documents
              </Link>
              <Link
                href="#roadmap"
                className="text-white/90 hover:text-[#26C8B8] transition-colors font-light text-base py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Roadmap
              </Link>
              <Button
                variant="outline"
                size="sm"
                className="sm:hidden text-white hover:text-[#26C8B8] hover:bg-[#094068]/50 font-light border border-[#26C8B8]/40 bg-transparent text-sm backdrop-blur-sm transition-all duration-300 min-h-[44px] justify-start"
                asChild
              >
                <a href="#community" onClick={() => setIsMobileMenuOpen(false)}>
                  Community
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
