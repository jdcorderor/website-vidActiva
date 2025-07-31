import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';
import { FaThreads } from 'react-icons/fa6';

export default function Footer() {
    // Mock data for the footer
    const links = [
        { text: "Catálogo", href: "#" },
        { text: "Catálogo", href: "#" },
        { text: "Catálogo", href: "#" },
        { text: "Catálogo", href: "#" },
        { text: "Catálogo", href: "#" },
        { text: "Catálogo", href: "#" },
        { text: "Catálogo", href: "#" },
        { text: "Catálogo", href: "#" },
        { text: "Catálogo", href: "#" }
    ];

    return (
        <section className="bg-[#F7F7F7] text-gray-600 py-8">
            <div className="w-full flex flex-wrap items-center justify-center md:justify-between py-12 mx-auto">             
                {/* Decoration */}
                <div className="hidden lg:flex w-1/5 relative overflow-hidden z-10">
                    <img src="https://pngimg.com/d/water_PNG50134.png" className="w-full h-full object-contain"/>
                </div>
                
                {/* Links */}
                <div className="w-full lg:w-2/5 grid grid-cols-3 gap-4 mx-auto px-24 md:px-32 lg:px-0">
                    {links.map((link, index) => (
                        <a key={index} href={link.href} className="text-sm text-center font-inter font-medium hover:font-semibold transition-colors duration-200">{link.text}</a>
                    ))}
                </div>

                {/* Social media */}
                <div className="w-full lg:w-1/5 space-y-4 text-center pt-12 lg:pt-0">
                    <h4 className="text-sm md:text-base font-semibold">Síguenos</h4>
                    
                    <div className="flex items-center justify-center gap-4">
                        <a href="https://www.instagram.com/vidactiva.ve?igsh=MWE4MmVjcGp5d3VnNw==" aria-label="@vidactiva.ve">
                            <FaInstagram className="w-5 md:w-6 h-5 md:h-6 text-gray-600 hover:opacity-75 transition-opacity" />
                        </a>
                        <a href="https://www.tiktok.com/@vidactiva.ve?_t=ZM-8yQxK3bC58a&_r=1" aria-label="@vidactiva.ve">
                            <FaTiktok className="w-5 md:w-6 h-5 md:h-6 text-gray-600 hover:opacity-75 transition-opacity" />
                        </a>
                        <a href="https://www.facebook.com/share/14HjP6Xs4nc/" aria-label="Agua Mineral VidActiva">
                            <FaFacebookF className="w-5 md:w-6 h-5 md:h-6 text-gray-600 hover:opacity-75 transition-opacity" />
                        </a>
                        <a href="https://www.threads.com/@vidactiva.ve" aria-label="@vidactiva.ve">
                            <FaThreads className="w-5 md:w-6 h-5 md:h-6 text-gray-600 hover:opacity-75 transition-opacity" />
                        </a>
                    </div>
                </div>
            </div>
            
            {/* Copyright */}
            <div className="w-full text-center text-xs text-gray-500 px-12 md:px-0 pb-6">
                Copyright © 2025 Embotelladora Activa C.A. Todos los derechos reservados.
            </div>
        </section>
    )
}