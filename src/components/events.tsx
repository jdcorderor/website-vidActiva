export default function Events() { 
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

    // Click handler, redirects to the events page
    const handleClick = (index: number) => {
        localStorage.setItem("event-index", index.toString());
        window.location.href = "/eventos";
    };

    return (
        <section id="eventos" className="relative overflow-hidden bg-white py-12 lg:py-20 px-8 md:px-20">
            {/* Events section */}
            <h2 className="text-3xl font-publicsans font-semibold pb-6">Próximos eventos</h2>
            <div className="grid grid-cols-1 bg-[#F8F8F8] rounded-lg gap-8 p-4 md:p-6 mx-auto">
                {events.map((event, index) => index < 3 && (
                    <div key={index} className="flex flex-col [@media(min-width:700px)]:flex-row [@media(min-width:700px)]:space-x-6 p-2">
                        <div className="flex flex-1 flex-col [@media(min-width:700px)]:flex-row items-center space-y-4 [@media(min-width:700px)]:space-y-0 space-x-0 [@media(min-width:700px)]:space-x-4">
                            <img src={event.img} alt={event.title} className="max-w-[280px] [@media(min-width:700px)]:w-20 [@media(min-width:700px)]:h-20 object-cover rounded-lg"/>
                            <div className="w-full items-start justify-start font-inter space-y-1">    
                                <h3 className="font-semibold">{event.title}</h3>
                                <p className="text-xs md:text-sm text-gray-600">{event.date}</p>
                                <p className="text-xs md:text-sm text-gray-800">{event.description}</p>
                            </div>
                        </div>
                        <div className="flex items-center [@media(min-width:700px)]:items-start justify-center [@media(min-width:700px)]:justify-end mt-5 [@media(min-width:700px)]:mt-0">
                            <button type="button" onClick={() => { handleClick(event.id) }} className="text-xs md:text-sm font-plusjakarta font-medium bg-[#E9F4FF] hover:bg-[#d3e9ff] hover:font-semibold transition-colors duration-300 px-8 py-2 rounded-full cursor-pointer">Ver detalles</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}