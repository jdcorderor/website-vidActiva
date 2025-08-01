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
            title: "Conferencia sobre el Futuro de la Tecnología",
            date: "15 de octubre de 2025 - 9:00 AM - 5:00 PM",
            description: "Únete a líderes de la industria e innovadores para explorar las últimas tendencias en tecnología.",
            img: "https://www.cetys.mx/educon/wp-content/uploads/2021/09/Conference.jpg",
            purpose: [
                "Impulsar el reconocimiento de marca y la confianza comunitaria mostrando prácticas de abastecimiento, filtración y sostenibilidad.",
                "Destacar innovaciones en el acceso al agua potable y promover los beneficios de la hidratación."
            ],
            target: [
                "Consumidores conscientes de la salud, defensores del medio ambiente, minoristas locales y distribuidores potenciales.",
                "Escuelas y familias interesadas en la calidad del agua y la responsabilidad ambiental."
            ],
            details: [
                "Tour por la planta de la empresa + centro comunitario local.",
                "Exhibiciones interactivas, demostración en vivo de filtración, charlas del equipo y desafío de hidratación.",
                "Bolsas ecológicas de obsequio, botellas personalizadas con nombre del asistente, estación de hidratación con aguas infusionadas."
            ]
        },
        {
            id: 2,
            title: "Taller sobre IA en los Negocios",
            date: "5 de noviembre de 2025 - 10:00 AM - 4:00 PM",
            description: "Un taller enfocado en aplicaciones prácticas de la inteligencia artificial en el mundo empresarial.",
            img: "https://cevents.es/wp-content/uploads/2022/03/evento-corporativo.jpg",
            purpose: [
                "Impulsar el reconocimiento de marca y la confianza comunitaria mostrando prácticas de abastecimiento, filtración y sostenibilidad.",
                "Destacar innovaciones en el acceso al agua potable y promover los beneficios de la hidratación."
            ],
            target: [
                "Consumidores conscientes de la salud, defensores del medio ambiente, minoristas locales y distribuidores potenciales.",
                "Escuelas y familias interesadas en la calidad del agua y la responsabilidad ambiental."
            ],
            details: [
                "Tour por la planta de la empresa + centro comunitario local.",
                "Exhibiciones interactivas, demostración en vivo de filtración, charlas del equipo y desafío de hidratación.",
                "Bolsas ecológicas de obsequio, botellas personalizadas con nombre del asistente, estación de hidratación con aguas infusionadas."
            ]
        },
        {
            id: 3,
            title: "Expo Tecnología Verde",
            date: "1 de diciembre de 2025 - 11:00 AM - 3:00 PM",
            description: "Un evento que muestra los últimos avances en tecnología sostenible.",
            img: "https://guillermoygloria.com/wp-content/uploads/2020/05/2020-05-17_eventos_empresariales_herramienta.jpg",
            purpose: [
                "Impulsar el reconocimiento de marca y la confianza comunitaria mostrando prácticas de abastecimiento, filtración y sostenibilidad.",
                "Destacar innovaciones en el acceso al agua potable y promover los beneficios de la hidratación."
            ],
            target: [
                "Consumidores conscientes de la salud, defensores del medio ambiente, minoristas locales y distribuidores potenciales.",
                "Escuelas y familias interesadas en la calidad del agua y la responsabilidad ambiental."
            ],
            details: [
                "Tour por la planta de la empresa + centro comunitario local.",
                "Exhibiciones interactivas, demostración en vivo de filtración, charlas del equipo y desafío de hidratación.",
                "Bolsas ecológicas de obsequio, botellas personalizadas con nombre del asistente, estación de hidratación con aguas infusionadas."
            ]
        },
        {
            id: 4,
            title: "Feria de Hidratación y Bienestar",
            date: "20 de enero de 2026 - 9:00 AM - 2:00 PM",
            description: "Explora la ciencia de la hidratación y su impacto en el rendimiento diario y la salud a largo plazo. Una excelente introducción a la sostenibilidad.",
            img: "https://www.threetomatoes.com/wp-content/uploads/2023/10/common-corporate-events.jpg",
            purpose: [
                "Educar al público sobre el papel vital del agua en el bienestar físico y mental.",
                "Posicionar la marca como líder en soluciones de agua orientadas a la salud."
            ],
            target: [
                "Entusiastas del fitness, nutricionistas, influencers del bienestar y profesionales de la salud.",
                "Familias y estudiantes interesados en la salud y el estilo de vida sostenible."
            ],
            details: [
                "Estaciones de hidratación en el sitio con degustaciones guiadas.",
                "Talleres liderados por expertos en salud.",
                "Zonas interactivas con retos físicos, trivia del agua y impresión personalizada de botellas."
            ]
        },
        {
            id: 5,
            title: "Foro de Embotellado Inteligente",
            date: "12 de febrero de 2026 - 10:00 AM - 4:30 PM",
            description: "Encuentro de ingenieros y emprendedores redefiniendo el futuro del empaquetado y la sostenibilidad en el agua.",
            img: "https://erpnews.com/v2/wp-content/uploads/2022/09/Corporate-Event-1.webp",
            purpose: [
                "Compartir tecnologías emergentes para el embotellado y la filtración sostenibles.",
                "Fomentar conexiones B2B en torno a innovaciones en empaques ecológicos."
            ],
            target: [
                "Ingenieros en empaques, gerentes de cadenas de suministro, startups ecológicas y defensores de la sostenibilidad.",
                "Minoristas interesados en el abastecimiento de productos ecológicos."
            ],
            details: [
                "Demostraciones tecnológicas de empaques biodegradables y sistemas de etiquetas inteligentes.",
                "Panel de discusión: 'Diseñando la Botella del Futuro'.",
                "Zona de networking con startups locales."
            ]
        },
        {
            id: 6,
            title: "Cumbre Agua para el Mañana",
            date: "8 de marzo de 2026 - 9:30 AM - 5:00 PM",
            description: "Plataforma para líderes ambientales, educadores y empresas que colaboran en soluciones futuras para el agua.",
            img: "https://creativando.es/wp-content/uploads/2018/08/tipos-de-eventos-10.jpg",
            purpose: [
                "Concienciar sobre la escasez de agua y estrategias de adaptación climática.",
                "Destacar la hoja de ruta de sostenibilidad y metas globales de la empresa."
            ],
            target: [
                "ONG ambientales, responsables políticos, educadores y expertos del sector.",
                "Estudiantes y miembros de la comunidad interesados en la resiliencia climática."
            ],
            details: [
                "Proyección de documental + sesión de preguntas con expertos.",
                "Muro interactivo: 'Dibuja tu Futuro Limpio'.",
                "Zona de compromiso comunitario con incentivos de reforestación y botellas personalizadas."
            ]
        }
    ];

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
                                    <h4 className="text-[0.6rem] [@media(min-width:700px)]:text-lg [@media(min-width:840px)]:text-xl font-semibold m-2">Propósito</h4>
                                    <div className="text-[0.5rem] [@media(min-width:700px)]:text-sm [@media(min-width:840px)]:text-lg mx-6 mb-4">
                                        <ul>
                                            {events[parseInt(selectedEvent) - 1].purpose.map((item, index) => (
                                                <li key={index} className="list-disc">{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="w-full text-white justify-center px-12 [@media(min-width:700px)]:px-20">
                                    <h4 className="text-[0.6rem] [@media(min-width:700px)]:text-lg [@media(min-width:840px)]:text-xl font-semibold m-2">¿A quién va dirigido?</h4>
                                    <div className="text-[0.5rem] [@media(min-width:700px)]:text-sm [@media(min-width:840px)]:text-lg mx-6 mb-4">
                                        <ul>
                                            {events[parseInt(selectedEvent) - 1].target.map((item, index) => (
                                                <li key={index} className="list-disc">{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="w-full text-white justify-center px-12 [@media(min-width:700px)]:px-20">
                                    <h4 className="text-[0.6rem] [@media(min-width:700px)]:text-lg [@media(min-width:840px)]:text-xl font-semibold m-2">Sobre el evento</h4>
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
                                <a href="/eventos" className="text-center text-black text-[0.5rem] [@media(min-width:700px)]:text-xs [@media(min-width:840px)]:text-sm font-plusjakarta font-medium bg-[#FFFFFF] transition-colors duration-300 rounded-full px-8 py-1 [@media(min-width:700px)]:py-2 cursor-pointer">Asiste</a>
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
                                <h4 className="text-sm lg:text-base font-semibold m-2">Propósito</h4>
                                <div className="text-xs lg:text-sm mx-6 mb-4">
                                    <ul>
                                        {event.purpose.map((item, index) => (
                                            <li key={index} className="list-disc">{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <h4 className="text-sm lg:text-base font-semibold m-2">¿A quién va dirigido?</h4>
                                <div className="text-xs lg:text-sm text-sm mx-6 mb-4">
                                    <ul>
                                        {event.target.map((item, index) => (
                                            <li key={index} className="list-disc">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <h4 className="text-sm lg:text-base font-semibold m-2">Sobre el evento</h4>
                                <div className="text-xs lg:text-sm text-sm mx-6 mb-4">
                                    <ul>
                                        {event.details.map((item, index) => (
                                            <li key={index} className="list-disc">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="flex items-end justify-end mt-4">
                                <a href="/eventos" className="text-center text-white text-xs lg:text-sm font-plusjakarta font-medium bg-[#003366] hover:bg-[#022D90] transition-colors duration-300 rounded-full px-8 py-2 cursor-pointer">Asiste</a>
                            </div>
                        </div>
                    ))}
                </div>
                
                {(filteredEvents.length === 0) && (
                    <div className="m-6 px-12">
                        <div className="w-full flex justify-center text-sm text-gray-500 text-center py-6">No se encontraron coincidencias. Por favor, modifique su búsqueda.</div>
                    </div>
                )}
            </div>
        </section>
    )
}