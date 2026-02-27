import { ThemeToggle } from "@/components/ThemeToggle"
import { Logo } from "@/components/Logo"
import { MobileMenu } from "@/components/MobileMenu"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, MessageCircle } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setContactOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <Logo />
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              О нас
            </a>
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">
              Портфолио
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Контакты
            </a>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative hidden md:block" ref={dropdownRef}>
              <Button
                size="sm"
                className="gap-1"
                onClick={() => setContactOpen((v) => !v)}
              >
                <MessageCircle className="h-4 w-4" />
                Связаться с нами
                <ChevronDown className={`h-4 w-4 transition-transform ${contactOpen ? "rotate-180" : ""}`} />
              </Button>

              {contactOpen && (
                <div className="absolute right-0 mt-2 w-52 rounded-xl border border-border bg-background/95 backdrop-blur-sm shadow-xl overflow-hidden z-50">
                  <a
                    href="https://max.ru/Nadejda_Pamyat_v_kadre"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setContactOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-primary/10 transition-colors"
                  >
                    <span className="text-xl">💬</span>
                    <div>
                      <p className="text-sm font-semibold">Max</p>
                      <p className="text-xs text-muted-foreground">Написать в Max</p>
                    </div>
                  </a>
                  <div className="h-px bg-border" />
                  <a
                    href="https://whatsapp.com/dl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setContactOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-primary/10 transition-colors"
                  >
                    <span className="text-xl">📱</span>
                    <div>
                      <p className="text-sm font-semibold">WhatsApp</p>
                      <p className="text-xs text-muted-foreground">Написать в WhatsApp</p>
                    </div>
                  </a>
                </div>
              )}
            </div>
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  )
}
