import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../ui/arrows.tsx";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Events() {
    // Carousel settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    // State to manage keyword
    const [keyword, setKeyword] = useState<string>("");

    // State to manage slider (for mobile)
    const [showSlider, setShowSlider] = useState<boolean>(false);

    // Mock data for events
    const events = [
        {   
            id: 1,
            title: "Future of Tech Conference", 
            date: "October 15, 2025 - 9:00 AM - 5:00 PM", 
            description: "Join industry leaders and innovators to explore the latest trends in technology.", 
            img: "https://www.cetys.mx/educon/wp-content/uploads/2021/09/Conference.jpg", 
            purpose: ["Build brand awareness and community trust by showcasing your sourcing, filtration, and sustainability practices.", "Highlight innovations in clean water access and promote health benefits of hydration."], 
            target: ["Health-conscious consumers, environmental advocates, local retailers, and potential distributors.", "Schools and families curious about water quality and environmental responsibility."], 
            details: ["Company facility tour + local community center.", "Interactive exhibits, live filtration demo, talks from your team, and a hydration challenge.", "Eco-friendly giveaway bags, custom bottles with attendee names, hydration station with infused waters."] 
        },
        { 
            id: 2,
            title: "AI in Business Workshop", 
            date: "November 5, 2025 - 10:00 AM - 4:00 PM", 
            description: "A workshop focused on practical applications of AI in business.", 
            img: "https://cevents.es/wp-content/uploads/2022/03/evento-corporativo.jpg",
            purpose: ["Build brand awareness and community trust by showcasing your sourcing, filtration, and sustainability practices.", "Highlight innovations in clean water access and promote health benefits of hydration."], 
            target: ["Health-conscious consumers, environmental advocates, local retailers, and potential distributors.", "Schools and families curious about water quality and environmental responsibility."], 
            details: ["Company facility tour + local community center.", "Interactive exhibits, live filtration demo, talks from your team, and a hydration challenge.", "Eco-friendly giveaway bags, custom bottles with attendee names, hydration station with infused waters."] 
        },
        { 
            id: 3,
            title: "Green Tech Expo", 
            date: "December 1, 2025 - 11:00 AM - 3:00 PM", 
            description: "An event showcasing the latest advancements in sustainable technology.", 
            img: "https://guillermoygloria.com/wp-content/uploads/2020/05/2020-05-17_eventos_empresariales_herramienta.jpg",
            purpose: ["Build brand awareness and community trust by showcasing your sourcing, filtration, and sustainability practices.", "Highlight innovations in clean water access and promote health benefits of hydration."], 
            target: ["Health-conscious consumers, environmental advocates, local retailers, and potential distributors.", "Schools and families curious about water quality and environmental responsibility."], 
            details: ["Company facility tour + local community center.", "Interactive exhibits, live filtration demo, talks from your team, and a hydration challenge.", "Eco-friendly giveaway bags, custom bottles with attendee names, hydration station with infused waters."] 
        },
        {
            id: 4,
            title: "Hydration & Wellness Fair",
            date: "January 20, 2026 - 9:00 AM - 2:00 PM",
            description: "Explore the science of hydration and its impact on daily performance and long-term health. A great introduction to sustainability.",
            img: "https://www.threetomatoes.com/wp-content/uploads/2023/10/common-corporate-events.jpg",
            purpose: ["Educate the public on the vital role of water in physical and mental wellness.", "Position the brand as a leader in health-oriented water solutions."],
            target: ["Fitness enthusiasts, nutritionists, wellness influencers, and healthcare professionals.", "Families and students interested in health and sustainable living."],
            details: ["On-site hydration booths with guided tastings.", "Workshops led by health experts.","Interactive zones with fitness challenges, water trivia, and personalized bottle printing."]
        },
        {
            id: 5,
            title: "Smart Bottling Forum",
            date: "February 12, 2026 - 10:00 AM - 4:30 PM",
            description: "A gathering of engineers and entrepreneurs redefining the future of water packaging and sustainability.",
            img: "https://erpnews.com/v2/wp-content/uploads/2022/09/Corporate-Event-1.webp",
            purpose: ["Share emerging technologies for sustainable bottling and filtration.", "Encourage B2B connections around eco-packaging innovations."],
            target: ["Packaging engineers, supply chain managers, eco-startups, and sustainability advocates.", "Retailers interested in green product sourcing."],
            details: ["Tech demos of biodegradable packaging and smart label systems.", "Panel discussion: ‘Designing the Bottle of the Future’.", "Networking lounge with local startups."]
        },
        {
            id: 6,
            title: "Water for Tomorrow Summit",
            date: "March 8, 2026 - 9:30 AM - 5:00 PM",
            description: "A platform for environmental leaders, educators, and businesses to collaborate on future water solutions.",
            img: "https://creativando.es/wp-content/uploads/2018/08/tipos-de-eventos-10.jpg",
            purpose: ["Raise awareness on water scarcity and climate adaptation strategies.", "Highlight your company’s sustainability roadmap and global goals."],
            target: ["Environmental NGOs, policy makers, educators, and industry experts.", "Students and community members interested in climate resilience."],
            details: [ "Documentary screening + expert Q&A.", "Interactive wall: ‘Draw Your Clean Future’.", "Community pledge area with tree planting incentives and custom water bottles."]
        }
    ]

    // Filtered events array
    const filteredEvents = events.filter((event) =>
        (keyword === "") ||
        (keyword != "") && (event.title.toLowerCase().includes(keyword.toLowerCase()) || event.description.toLowerCase().includes(keyword.toLowerCase()))
    );

    // State to manage selected event
    const [selectedEvent, setSelectedEvent] = useState<string | null>();
 
    useEffect(() => {
        // Get selected index from localStorage
        const index = localStorage.getItem("event-index");
        setSelectedEvent(index);
    }, []);   

    return (
        <section className="bg-white">
            {/* Navigator */}
            <nav className="w-full flex fixed items-center justify-between px-6 md:px-8 lg:px-10 py-6 z-10 backdrop-blur-3xl bg-white/80" onClick={() => { setShowSlider(false); }}>
                <a href="../" className="flex items-center justify-start"><img src="/logo.png" alt="vidActiva" className="w-[80px] h-auto" /></a>
            
                {/* Search bar */}
                <div className="w-full flex flex-row items-center justify-end md:px-6">
                    <input type="text" placeholder="Buscar..." className="search flex w-40 md:w-60 lg:w-90 bg-white outline-none text-sm text-gray-700 border border-gray-300 rounded-full px-6 py-2 my-auto" value={keyword} onChange={(e) => setKeyword(e.target.value)}/><FaSearch className="w-10 h-5 text-gray-500 flex-shrink-0" />
                </div>
            </nav>

            {/* Selected event section */}
            <div className="w-full flex px-4 [@media(min-width:700px)]:px-20 pt-40 pb-15 mx-auto" onClick={() => { setShowSlider(true); }}>
                {selectedEvent && events[parseInt(selectedEvent) - 1] && (
                    <div className="group relative w-200 mx-auto rounded-2xl" >
                        <img src={events[parseInt(selectedEvent) - 1].img} alt={events[parseInt(selectedEvent) - 1].title} className="mx-auto rounded-xl"/>
                        <div className="absolute inset-0 flex flex-col justify-end rounded-xl px-4 [@media(min-width:700px)]:px-6 [@media(min-width:840px)]:px-8 [@media(min-width:700px)]:py-1 [@media(min-width:840px)]:py-2 mx-auto bg-black/60">
                            <div className="py-4 [@media(min-width:840px)]:py-6">
                                <h2 className="text-xl [@media(min-width:700px)]:text-2xl [@media(min-width:840px)]:text-3xl text-white font-montserrat font-semibold drop-shadow-lg">
                                    {events[parseInt(selectedEvent) - 1].title}
                                </h2>
                                <p className="text-xs [@media(min-width:700px)]:text-base text-white font-semibold font-montserrat mt-2">
                                    {events[parseInt(selectedEvent) - 1].date}
                                </p>
                            </div>
                        </div>
                        <div className={`absolute inset-0 flex flex-col justify-between bg-[#003366] [@media(min-width:700px)]:p-4 [@media(min-width:700px)]:space-y-2 rounded-xl transition-opacity duration-300 ${showSlider ? 'opacity-100' : 'opacity-0'} md:opacity-0 md:group-hover:opacity-100`}>
                            <div className="text-center font-bold px-10 [@media(min-width:700px)]:px-16 pt-6 [@media(min-width:700px)]:pt-8 [@media(min-width:840px)]:pt-16">    
                                <p className="text-white text-[0.7rem] [@media(min-width:700px)]:text-xl [@media(min-width:840px)]:text-2xl font-publicsans">{events[parseInt(selectedEvent) - 1].description}</p>
                            </div>
                            <Slider {...settings}>
                                <div className="w-full text-white justify-center px-12 [@media(min-width:700px)]:px-20">
                                    <h4 className="text-[0.6rem] [@media(min-width:700px)]:text-lg [@media(min-width:840px)]:text-xl font-semibold m-2">Purposes</h4>
                                    <div className="text-[0.5rem] [@media(min-width:700px)]:text-sm [@media(min-width:840px)]:text-lg mx-6 mb-4">
                                        <ul>
                                            {events[parseInt(selectedEvent) - 1].purpose.map((item, index) => (
                                                <li key={index} className="list-disc">{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="w-full text-white justify-center px-12 [@media(min-width:700px)]:px-20">
                                    <h4 className="text-[0.6rem] [@media(min-width:700px)]:text-lg [@media(min-width:840px)]:text-xl font-semibold m-2">Target public</h4>
                                    <div className="text-[0.5rem] [@media(min-width:700px)]:text-sm [@media(min-width:840px)]:text-lg mx-6 mb-4">
                                        <ul>
                                            {events[parseInt(selectedEvent) - 1].target.map((item, index) => (
                                                <li key={index} className="list-disc">{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="w-full text-white justify-center px-12 [@media(min-width:700px)]:px-20">
                                    <h4 className="text-[0.6rem] [@media(min-width:700px)]:text-lg [@media(min-width:840px)]:text-xl font-semibold m-2">About</h4>
                                    <div className="text-[0.5rem] [@media(min-width:700px)]:text-sm [@media(min-width:840px)]:text-lg mx-6 mb-4">
                                        <ul>
                                            {events[parseInt(selectedEvent) - 1].details.map((item, index) => (
                                                <li key={index} className="list-disc">{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Slider>
                            <div className="flex justify-center mb-4">
                                <a href="/eventos" className="text-center text-black text-[0.5rem] [@media(min-width:700px)]:text-xs [@media(min-width:840px)]:text-sm font-plusjakarta font-medium bg-[#FFFFFF] transition-colors duration-300 rounded-full px-8 py-1 [@media(min-width:700px)]:py-2 cursor-pointer">Book now</a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            
            {/* Events section */}
            <div className="p-4 lg:px-20 lg:py-20" onClick={() => { setShowSlider(false); }}>
                <h1 className="text-4xl font-publicsans font-bold lg:px-2 pb-4 lg:mx-6 border-b border-gray-100 bg-gradient-to-r from-[#1E9DF1] via-[#022D90] to-[#022D90] bg-clip-text text-transparent">Próximos eventos</h1>
                <div className="grid grid-cols-1 [@media(min-width:700px)]:grid-cols-2 [@media(min-width:840px)]:grid-cols-3 [@media(min-width:700px)]:gap-x-4 mx-auto">
                    {(filteredEvents.length != 0) && filteredEvents.map((event, index) => (
                        <div key={index} className={`${event.id.toString() === selectedEvent ? "hidden" : "flex flex-col"} rounded-xl transition-colors duration-300  bg-[#F8F8F8] p-4 lg:p-8 my-4 lg:m-6`} onClick={() => { setSelectedEvent(event.id.toString()); window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                            <img src={event.img} alt={event.title} className="w-full h-50 object-cover rounded-xl mb-"/>
                            <div className="items-start justify-start font-inter my-6 mx-2">    
                                <h3 className="md:text-lg lg:text-xl font-semibold pb-1">{event.title}</h3>
                                <p className="text-xs md:text-sm lg:text-base text-gray-600 pb-4">{event.date}</p>
                                <p className="text-xs md:text-sm lg:text-base text-gray-800">{event.description}</p>
                            </div>
                            <div className="text-gray-700">
                                <h4 className="text-sm lg:text-base font-semibold m-2">Purposes</h4>
                                <div className="text-xs lg:text-sm mx-6 mb-4">
                                    <ul>
                                        {event.purpose.map((item, index) => (
                                            <li key={index} className="list-disc">{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <h4 className="text-sm lg:text-base font-semibold m-2">Target public</h4>
                                <div className="text-xs lg:text-sm text-sm mx-6 mb-4">
                                    <ul>
                                        {event.target.map((item, index) => (
                                            <li key={index} className="list-disc">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <h4 className="text-sm lg:text-base font-semibold m-2">About</h4>
                                <div className="text-xs lg:text-sm text-sm mx-6 mb-4">
                                    <ul>
                                        {event.details.map((item, index) => (
                                            <li key={index} className="list-disc">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="flex items-end justify-end mt-4">
                                <a href="/eventos" className="text-center text-white text-xs lg:text-sm font-plusjakarta font-medium bg-[#003366] hover:bg-[#022D90] transition-colors duration-300 rounded-full px-8 py-2 cursor-pointer">Book now</a>
                            </div>
                        </div>
                    ))}
                </div>
                
                {(filteredEvents.length === 0) && (
                    <div className="m-6 px-12">
                        <div className="w-full flex justify-center text-sm text-gray-500 py-6">No se encontraron coincidencias. Por favor, modifique su búsqueda.</div>
                    </div>
                )}
            </div>
        </section>
    )
}