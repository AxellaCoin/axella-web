"use client"

import Link from "next/link"
import { Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#021C24] border-t border-[#094068] text-white py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <h4 className="font-light text-lg mb-4 text-white">About</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/70 hover:text-[#26C8B8] transition-colors font-light text-sm">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="text-white/70 hover:text-[#26C8B8] transition-colors font-light text-sm"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-white/70 hover:text-[#26C8B8] transition-colors font-light text-sm">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-[#26C8B8] transition-colors font-light text-sm">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-light text-lg mb-4 text-white">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/70 hover:text-[#26C8B8] transition-colors font-light text-sm">
                  For Investors
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-[#26C8B8] transition-colors font-light text-sm">
                  For Researchers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-[#26C8B8] transition-colors font-light text-sm">
                  For Patients
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-[#26C8B8] transition-colors font-light text-sm">
                  For Vendors
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-light text-lg mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://drive.google.com/file/d/1KhDZWl2Kc3kQNmV77YwBKcIkGPUoYP5R/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#26C8B8] transition-colors font-light text-sm"
                >
                  Whitepaper
                </a>
              </li>
              <li>
                <Link
                  href="#documents"
                  className="text-white/70 hover:text-[#26C8B8] transition-colors font-light text-sm"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-[#26C8B8] transition-colors font-light text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-[#26C8B8] transition-colors font-light text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-light text-lg mb-4 text-white">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://x.com/AxellaCoin?t=9Kw--N8MxCQmoviLPoRs8g&s=03"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#094068]/50 border border-[#26C8B8]/30 flex items-center justify-center hover:bg-[#26C8B8] hover:border-[#26C8B8] hover:scale-110 transition-all duration-300 backdrop-blur-sm"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/axellacoin/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#094068]/50 border border-[#26C8B8]/30 flex items-center justify-center hover:bg-[#26C8B8] hover:border-[#26C8B8] hover:scale-110 transition-all duration-300 backdrop-blur-sm"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:axellacoin@axellaresearch.com"
                className="w-10 h-10 rounded-full bg-[#094068]/50 border border-[#26C8B8]/30 flex items-center justify-center hover:bg-[#26C8B8] hover:border-[#26C8B8] hover:scale-110 transition-all duration-300 backdrop-blur-sm"
                aria-label="Email us"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#094068] pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm font-light">© 2025 AxellaCoin. All rights reserved.</p>
            <p className="text-white/60 text-xs text-center max-w-2xl font-light leading-relaxed">
              Cryptocurrency investments are subject to market risk. Past performance is not indicative of future
              results. This is not financial advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
