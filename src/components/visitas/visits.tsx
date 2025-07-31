import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { NextArrowDark } from "../ui/arrows";

export default function Visits() {
    // States for dates array and selected date
    const [dates, setDates] = useState<Date[]>([]);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    
    // Effect to generate dates automatically
    useEffect(() => {
        generateDates();
    }, []);
    
    // Function for date generation
    const generateDates = () => {
        const today = new Date();
        const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        
        const generatedDates: Date[] = [];
        for (let i = 0; i < 62; i++) {
            const date = new Date();
            date.setDate(today.getDate() + i);
            generatedDates.push(date);
        }
        
        setDates(generatedDates);
    };
    
    // Function for day formatting
    const formatDay = (date: Date) => {
        return date.getDate();
    };
    
    // Function for weekday formatting
    const formatWeekday = (date: Date) => {
        const weekdays = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
        return weekdays[date.getDay()];
    };
    
    // Date selection handler
    const handleDateSelect = (date: Date) => {
        setSelectedDate(date);
    };

    // --------------------------------------------------------------------------

    // State to manage keyword
    const [keyword, setKeyword] = useState<string>("");

    // Mock data for visits
    const visits = [
        {
            img: "https://stmaaprodfwsite.blob.core.windows.net/assets/sites/1/2020/09/FactoryLine-243457637_F_C_sergeyklopotov_AdobeStock.jpg",
            title: "Water Source Evaluation",
            description: "Inspect the natural spring for flow rate and purity standards.",
            guide: "Marta Valdés, Engineer",
            characteristics: ["Source testing", "Environmental compliance", "Logistics check"],
            date: "2025-08-02",
            hour: "08:00 AM"
        },
        {
            img: "https://media.istockphoto.com/id/1369027900/photo/bottling-plant.jpg?s=612x612&w=0&k=20&c=a9dmbUpPzNbUekBeBVuA3cq1VQaKrXSKGJnW-V4K6Rg=",
            title: "Filtration System Audit",
            description: "Review the filtration equipment and assess performance metrics.",
            guide: "José Mena, Technician",
            characteristics: ["Equipment check", "Technical assessment", "Safety protocols"],
            date: "2025-08-02",
            hour: "10:30 AM"
        },
        {
            img: "https://smfgmbh.com/wp-content/uploads/2023/03/how-to-start-water-a-water-company.jpg",
            title: "Packaging Line Review",
            description: "Observe bottle filling, sealing and label accuracy.",
            guide: "Ana Ruiz, Supervisor",
            characteristics: ["Quality control", "Automation overview", "Product consistency"],
            date: "2025-08-09",
            hour: "09:15 AM"
        },
        {
            img: "https://cdn.hswstatic.com/gif/bottled-water-5.jpg",
            title: "Health & Safety Inspection",
            description: "Ensure staff compliance and evaluate emergency procedures.",
            guide: "Luis Torres, Inspector",
            characteristics: ["PPE checks", "Facility walkthrough", "Training evaluation"],
            date: "2025-08-12",
            hour: "01:45 PM"
        },
        {
            img: "https://www.ecan.govt.nz/assets/Uploads/News-and-events/News-stories/November-2018/ECan-News-item-Water-bottling.jpg",
            title: "Marketing Showcase Visit",
            description: "Present branding initiatives to potential partners.",
            guide: "Carla Méndez, Brand Lead",
            characteristics: ["Presentation", "Brand storytelling", "Product sampling"],
            date: "2025-08-16",
            hour: "03:00 PM"
        },
        {
            img: "https://stmaaprodfwsite.blob.core.windows.net/assets/sites/1/2020/09/FactoryLine-243457637_F_C_sergeyklopotov_AdobeStock.jpg",
            title: "Supplier Coordination Meeting",
            description: "Align logistics and delivery timelines with bottle supplier.",
            guide: "Juan Peña, Logistics chief",
            characteristics: ["Supply chain", "Contract check", "Delivery planning"],
            date: "2025-08-20",
            hour: "11:00 AM"
        },
        {
            img: "https://media.istockphoto.com/id/1369027900/photo/bottling-plant.jpg?s=612x612&w=0&k=20&c=a9dmbUpPzNbUekBeBVuA3cq1VQaKrXSKGJnW-V4K6Rg=",
            title: "Wastewater Treatment Check",
            description: "Review system efficiency and test post-treatment samples.",
            guide: "Laura Gómez, Environmental Officer",
            characteristics: ["Sustainability", "System monitoring", "Compliance"],
            date: "2025-08-24",
            hour: "08:45 AM"
        },
        {
            img: "https://smfgmbh.com/wp-content/uploads/2023/03/how-to-start-water-a-water-company.jpg",
            title: "R&D Flavor Testing",
            description: "Experiment with mineral-infused flavor profiles.",
            guide: "Ricardo Salas, Lab Scientist",
            characteristics: ["Taste trials", "Innovation", "Ingredient analysis"],
            date: "2025-08-29",
            hour: "02:30 PM"
        },
        {
            img: "https://cdn.hswstatic.com/gif/bottled-water-5.jpg",
            title: "Customer Experience Tour",
            description: "Invite retail clients to experience bottling and branding.",
            guide: "Paula Díaz, Sales Coordinator",
            characteristics: ["Retail insights", "Networking", "Product spotlight"],
            date: "2025-09-03",
            hour: "10:00 AM"
        },
        {
            img: "https://www.ecan.govt.nz/assets/Uploads/News-and-events/News-stories/November-2018/ECan-News-item-Water-bottling.jpg",
            title: "Maintenance System Check",
            description: "Validate preventive maintenance workflows and software.",
            guide: "Víctor Moreno, Operations Head",
            characteristics: ["Efficiency", "Preventive routines", "System logs"],
            date: "2025-09-06",
            hour: "07:30 AM"
        }
    ];
    
    // Filtered visits array
    const filteredVisits = visits.filter((visit) => {
        return ((keyword === "" && !selectedDate && visit.date) ||
        (keyword === "" && visit.date === selectedDate?.toISOString().split("T")[0]) ||
        (keyword != "" && !selectedDate && visit.date && 
            (visit.title.toLowerCase().includes(keyword.toLowerCase()) ||
            visit.description.toLowerCase().includes(keyword.toLowerCase()) ||
            visit.guide.toLowerCase().includes(keyword.toLowerCase()))
        ) ||
        (keyword != "" && visit.date === selectedDate?.toISOString().split("T")[0] &&
            (visit.title.toLowerCase().includes(keyword.toLowerCase()) ||
            visit.description.toLowerCase().includes(keyword.toLowerCase()) ||
            visit.guide.toLowerCase().includes(keyword.toLowerCase()))
        ))
    });

    return (
        <section className="bg-white">
            {/* Navigator */}
            <nav className="w-full flex fixed items-center justify-between px-6 md:px-8 lg:px-10 py-6 z-10 backdrop-blur-3xl bg-white/80">
                <a href="../" className="flex items-center justify-start"><img src="/logo.png" alt="vidActiva" className="w-[80px] h-auto" /></a>
            
                {/* Search bar */}
                <div className="w-full flex flex-row items-center justify-end md:px-6">
                    <input type="text" placeholder="Buscar..." className="search flex w-60 md:w-90 bg-white outline-none text-sm text-gray-700 border border-gray-300 rounded-full px-6 py-2 my-auto" value={keyword} onChange={(e) => setKeyword(e.target.value)}/><FaSearch className="w-10 h-5 text-gray-500 flex-shrink-0" />
                </div>
            </nav>
            
            {/* Calendar section */}
            <div className="w-full justify-center overflow-hidden px-3 md:px-12 lg:px-8 pt-36 pb-15">
                <div className="text-center my-2">
                    <p className="text-lg text-gray-800 font-semibold">
                        {selectedDate ? (selectedDate.toLocaleDateString('es-ES', {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'})) : (new Date().toLocaleDateString('es-ES', {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'}))}
                    </p>
                </div>

                <div className="w-full flex items-center justify-center p-8">
                    <button className="w-12 h-12 transform text-gray-300 text-2xl rounded-full p-2 cursor-pointer" aria-label="Scroll left" onClick={() => document.querySelector('.scroll-container')?.scrollBy({ left: -192, behavior: 'smooth' })}>
                        ◀
                    </button>

                    <div className="w-full lg:w-1/3 flex space-x-4 pl-4 mx-4 overflow-hidden scroll-container scroll-smooth border border-white">
                        {dates.map((date, index) => {
                            const isSelected = selectedDate && selectedDate.getDate() === date.getDate() && selectedDate.getMonth() === date.getMonth() && selectedDate.getFullYear() === date.getFullYear();

                            return (
                                <div key={index} id={`date-${index}`} className={`flex flex-col items-center justify-center cursor-pointer ${isSelected ? 'font-semibold' : ''}`} onClick={() => { if (!isSelected) { handleDateSelect(date) } else { setSelectedDate(null) }}}>
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isSelected ? 'bg-[#003366] text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200 border-3 border-blue-100'}`}>
                                        {formatDay(date)}
                                    </div>
                                    <span className="text-xs mt-1 text-gray-500">{formatWeekday(date)}</span>
                                </div>
                            );
                        })}
                    </div>

                    <button className="w-12 h-12 transform text-gray-300 text-2xl rounded-full p-2 cursor-pointer" aria-label="Scroll right" onClick={() => document.querySelector('.scroll-container')?.scrollBy({ left: 192, behavior: 'smooth' })}>
                        ▶
                    </button>
                </div>
            </div>

            {/* Visits section */}
            <h2 className="flex text-4xl font-publicsans font-bold border-b border-gray-100 py-8 mx-12 my-6 bg-gradient-to-r from-[#1E9DF1] via-[#022D90] to-[#022D90] bg-clip-text text-transparent">Próximas visitas</h2>
            <div className="flex bg-gray-50 rounded-lg px-8 lg:px-12 mx-8 lg:mx-12 mb-10 lg:mb-20 ">
                {(filteredVisits.length != 0) && (
                    <div className="w-full grid grid-cols-1 rounded-xl mx-auto">
                        {filteredVisits.map((visit, index) => (
                            <div key={index} className={`w-full flex items-start justify-center md:justify-between gap-4 py-12 ${index != (filteredVisits.length - 1) ? "border-b-1 border-gray-200" : ""}`}>
                                <div className="w-full flex flex-col md:flex-row lg:flex-row items-center gap-6">
                                    <img src={visit.img} alt={visit.title} className="md:w-60 md:h-48 lg:w-72 lg:h-50 object-cover rounded-lg shadow"/>
                                    <div className="w-full font-inter space-y-1 lg:mx-8"> 
                                        <h3 className="font-semibold lg:text-xl">{visit.title}</h3>
                                        <p className="text-xs lg:text-sm text-gray-600">{visit.date.split("-")[2]}/{visit.date.split("-")[1]}/{visit.date.split("-")[0]} - {visit.hour}</p>
                                        <p className="text-xs lg:text-base text-gray-800 my-3">{visit.description}</p>
                                        <ul className="text-xs lg:text-sm list-disc m-4">
                                            {visit.characteristics.map((characteristic, i) => (
                                                <li key={i}>{characteristic}</li>
                                            ))}
                                        </ul>
                                        <p><span className="text-xs lg:text-base text-gray-900 font-bold font-publicsans">{visit.guide.split(",")[0]}</span> -{" "}<span className="text-xs lg:text-base text-gray-900 text-sm">{visit.guide.split(",")[1]}</span></p>
                                    </div>

                                    <div className="lg:w-full md:h-48 lg:h-50 lg:px-6">
                                        <div className="flex items-end justify-end">
                                            <a href="/eventos" className="text-center text-white text-xs font-plusjakarta font-medium bg-[#003366] hover:bg-[#022D90] transition-colors duration-300 rounded-full px-8 py-2 cursor-pointer">Book now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {(filteredVisits.length === 0) && (
                    <div className="w-full flex justify-center text-sm text-gray-500 py-6">No se encontraron coincidencias. Por favor, verifique otras fechas y/o modifique su búsqueda.</div>
                )}
            </div>
        </section>
    )
}
