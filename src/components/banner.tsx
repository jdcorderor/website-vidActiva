import { useState } from "react"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet.tsx"

export default function Banner() {
    // State for toggle menu management
    const [isOpen, setIsOpen] = useState(false)

    // Routes array
    const routes = [
        { href: "#aliados", label: "Aliados" },
        { href: "#productos", label: "Productos" },
        { href: "#nosotros", label: "Nosotros" },
        { href: "#contacto", label: "Contacto" },
    ]

    return (
        <section className="relative overflow-hidden bg-white text-white">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#022D90] to-[#010D2A] to-[#000511] transition-colors opacity-90 border-b-2 z-0" />

            {/* Navigator */}
            <header className="flex items-center justify-between px-6 md:px-10 py-6 z-10">
                <div className="w-full flex items-center justify-start z-10">
                    <div className="flex-1">
                        <img src="/logo.png" alt="Embotelladora Activa C.A." className="w-[60px] md:w-[80px] h-auto"/>
                    </div>

                    {/* Main menu */}
                    <nav className="hidden lg:flex font-inter font-medium gap-12 px-32">
                        {routes.map((route) => (
                            <a key={route.href} href={route.href} className="text-white hover:font-semibold">{route.label}</a>
                        ))}
                    </nav>
        
                    {/* Toggle menu */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild className="lg:hidden">
                            <button className="justify-end">
                                <Menu className="h-5 w-5" />
                            </button>
                        </SheetTrigger>
                        
                        <SheetContent className="lg:hidden">
                            <nav className="flex flex-col gap-6 my-12">
                                {routes.map((route) => (
                                    <a key={route.href} href={route.href} className="text-lg text-gray-800 font-inter font-medium hover:font-semibold" onClick={() => setIsOpen(false)}>{route.label}</a>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </header>

            {/* Higher curve */}
            <div className="absolute w-full top-0 overflow-hidden leading-none z-0">
                <svg viewBox="0 0 1440 250" preserveAspectRatio="none" className="w-full h-[130px]">
                    <path d="M0,0 L0,235 C300,280 350,80 600,15 C600,15 655,3 680,0 Z" fill="#ffffff"/>
                </svg>
            </div>

            {/* Hero section */}
            <div className="relative flex flex-col md:flex-row h-90 md:h-150 pt-8 md:pt-12 my-2 md:my-4 z-10">
                <div>
                    <img src="/decoration.png" className="hidden lg:block relative -translate-x-10 -translate-y-20 z-15" width={400} height={400} />
                </div>
                <div className="relative text-left space-y-5 px-12 lg:px-0 py-4 md:py-12 z-15">
                    <h1 className="text-4xl lg:text-5xl font-publicsans font-medium">Tu salud empieza <br /> con <span className="font-bold">vidActiva</span></h1>
                    <p className="text-sm md:text-base lg:text-lg font-montserrat">Calidad en cada botella, bienestar en cada día.</p>
                    <a href="#valores" className="inline-block text-sm md:text-base lg:text-lg font-semibold hover:font-extrabold bg-[#3D9C55] hover:bg-[#2e7f41] transition-all duration-300 py-2 px-12 rounded-3xl cursor-pointer">Nuestros valores</a>
                </div>
                <img src="/banner.png" className="hidden [@media(min-width:700px)]:block relative -translate-y-20 mx-auto z-15" width={390} height={550}  />
            </div>

            {/* Lower curve */}
            <div className="absolute w-full bottom-0 overflow-hidden leading-none z-0">
                <svg viewBox="0 0 1440 150" preserveAspectRatio="none" className="w-full h-[80px] md:h-[150px]">
                    <path d="M0,0 C400,-5 780,150 1100,145 C1100,145 1360,150 1440,120 L1440,150 L0,150 Z" fill="#ffffff"/>
                </svg>
            </div>
        </section>
    );
}
