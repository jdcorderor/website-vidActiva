import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Visits() {
    // State to manage keyword
    const [keyword, setKeyword] = useState<string>("");

    // Mock data for visits
    const visits = [
        {
            img: "https://stmaaprodfwsite.blob.core.windows.net/assets/sites/1/2020/09/FactoryLine-243457637_F_C_sergeyklopotov_AdobeStock.jpg",
            title: "Evaluación de Fuente de Agua",
            description: "Inspeccionar el manantial natural para verificar el caudal y los estándares de pureza.",
            guide: "Marta Valdés, Ingeniera",
            characteristics: ["Pruebas de fuente", "Cumplimiento ambiental", "Revisión logística"],
            date: "2025-08-02",
            hour: "08:00 AM"
        },
        {
            img: "https://media.istockphoto.com/id/1369027900/photo/bottling-plant.jpg?s=612x612&w=0&k=20&c=a9dmbUpPzNbUekBeBVuA3cq1VQaKrXSKGJnW-V4K6Rg=",
            title: "Auditoría de Sistema de Filtración",
            description: "Revisión del equipo de filtración y evaluación de métricas de rendimiento.",
            guide: "José Mena, Técnico",
            characteristics: ["Revisión de equipo", "Evaluación técnica", "Protocolos de seguridad"],
            date: "2025-08-02",
            hour: "10:30 AM"
        },
        {
            img: "https://smfgmbh.com/wp-content/uploads/2023/03/how-to-start-water-a-water-company.jpg",
            title: "Revisión de Línea de Empaque",
            description: "Observar el llenado de botellas, sellado y precisión de etiquetado.",
            guide: "Ana Ruiz, Supervisora",
            characteristics: ["Control de calidad", "Resumen de automatización", "Consistencia del producto"],
            date: "2025-08-09",
            hour: "09:15 AM"
        },
        {
            img: "https://cdn.hswstatic.com/gif/bottled-water-5.jpg",
            title: "Inspección de Salud y Seguridad",
            description: "Verificar el cumplimiento del personal y evaluar los procedimientos de emergencia.",
            guide: "Luis Torres, Inspector",
            characteristics: ["Revisión de EPP", "Recorrido por la planta", "Evaluación de formación"],
            date: "2025-08-12",
            hour: "01:45 PM"
        },
        {
            img: "https://www.ecan.govt.nz/assets/Uploads/News-and-events/News-stories/November-2018/ECan-News-item-Water-bottling.jpg",
            title: "Visita de Presentación de Marketing",
            description: "Presentar iniciativas de marca a socios potenciales.",
            guide: "Carla Méndez, Líder de Marca",
            characteristics: ["Presentación", "Narrativa de marca", "Muestras de producto"],
            date: "2025-08-16",
            hour: "03:00 PM"
        },
        {
            img: "https://stmaaprodfwsite.blob.core.windows.net/assets/sites/1/2020/09/FactoryLine-243457637_F_C_sergeyklopotov_AdobeStock.jpg",
            title: "Reunión de Coordinación con Proveedores",
            description: "Alinear logística y cronograma de entregas con el proveedor de botellas.",
            guide: "Juan Peña, Jefe de Logística",
            characteristics: ["Cadena de suministro", "Revisión de contrato", "Planificación de entregas"],
            date: "2025-08-20",
            hour: "11:00 AM"
        },
        {
            img: "https://media.istockphoto.com/id/1369027900/photo/bottling-plant.jpg?s=612x612&w=0&k=20&c=a9dmbUpPzNbUekBeBVuA3cq1VQaKrXSKGJnW-V4K6Rg=",
            title: "Revisión de Tratamiento de Aguas Residuales",
            description: "Evaluar la eficiencia del sistema y analizar muestras post-tratamiento.",
            guide: "Laura Gómez, Encargada Ambiental",
            characteristics: ["Sostenibilidad", "Monitoreo del sistema", "Cumplimiento"],
            date: "2025-08-24",
            hour: "08:45 AM"
        },
        {
            img: "https://smfgmbh.com/wp-content/uploads/2023/03/how-to-start-water-a-water-company.jpg",
            title: "Pruebas de Sabor en I+D",
            description: "Experimentar con perfiles de sabor mineralizados.",
            guide: "Ricardo Salas, Científico de Laboratorio",
            characteristics: ["Pruebas de sabor", "Innovación", "Análisis de ingredientes"],
            date: "2025-08-29",
            hour: "02:30 PM"
        },
        {
            img: "https://cdn.hswstatic.com/gif/bottled-water-5.jpg",
            title: "Recorrido de Experiencia del Cliente",
            description: "Invitar a clientes minoristas a conocer el embotellado y la marca.",
            guide: "Paula Díaz, Coordinadora de Ventas",
            characteristics: ["Perspectiva comercial", "Networking", "Destacado del producto"],
            date: "2025-09-03",
            hour: "10:00 AM"
        },
        {
            img: "https://www.ecan.govt.nz/assets/Uploads/News-and-events/News-stories/November-2018/ECan-News-item-Water-bottling.jpg",
            title: "Revisión del Sistema de Mantenimiento",
            description: "Validar los flujos de mantenimiento preventivo y el software asociado.",
            guide: "Víctor Moreno, Jefe de Operaciones",
            characteristics: ["Eficiencia", "Rutinas preventivas", "Registros del sistema"],
            date: "2025-09-06",
            hour: "07:30 AM"
        }
    ];

    // Filtered visits array
    const filteredVisits = visits.filter((visit) => 
        (keyword === "") || 
        (keyword != "" && 
            (visit.title.toLowerCase().includes(keyword.toLowerCase()) || 
            visit.description.toLowerCase().includes(keyword.toLowerCase()) || 
            visit.guide.toLowerCase().includes(keyword.toLowerCase()))
        )
    );

    return (
        <section className="bg-white">
            {/* Navigator */}
            <nav className="w-full flex fixed items-center justify-between px-6 md:px-8 lg:px-10 py-6 z-10 backdrop-blur-3xl bg-white/80">
                <a href="../" className="flex items-center justify-start"><img src="/logo.png" alt="vidActiva" className="w-[80px] h-auto" /></a>
            
                {/* Search bar */}
                <div className="w-full flex flex-row items-center justify-end md:px-6">
                    <input type="text" placeholder="Buscar..." className="search flex w-40 md:w-60 lg:w-90 bg-white outline-none text-sm text-gray-700 border border-gray-300 rounded-full px-6 py-2 my-auto" value={keyword} onChange={(e) => setKeyword(e.target.value)}/><FaSearch className="w-10 h-5 text-gray-500 flex-shrink-0" />
                </div>
            </nav>

            {/* Visits section */}
            <h2 className="flex text-4xl font-publicsans font-bold border-b border-gray-100 pt-42 pb-4 mx-8 lg:mx-12 mb-6 bg-gradient-to-r from-[#1E9DF1] via-[#022D90] to-[#022D90] bg-clip-text text-transparent">Próximas visitas</h2>
            <div className="flex bg-gray-50 rounded-lg px-8 lg:px-12 mx-8 lg:mx-12 mb-15 lg:mb-25 ">
                {(filteredVisits.length != 0) && (
                    <div className="w-full grid grid-cols-1 rounded-xl mx-auto">
                        {filteredVisits.map((visit, index) => (
                            <div key={index} className={`w-full flex items-start justify-center md:justify-between gap-4 py-12 ${index != (filteredVisits.length - 1) ? "border-b-1 border-gray-200" : ""}`}>
                                <div className="w-full flex flex-col [@media(min-width:700px)]:flex-row items-center gap-6">
                                    <img src={visit.img} alt={visit.title} className="[@media(min-width:700px)]:hidden [@media(min-width:800px)]:flex md:w-60 md:h-48 lg:w-72 lg:h-50 object-cover rounded-lg shadow"/>
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

                                    <div className="w-fit md:w-1/2 lg:w-fit [@media(min-width:700px)]:h-48 lg:h-50 lg:px-6">
                                        <div className="flex items-start justify-end">
                                            <a href="/eventos" className="text-center text-white text-xs font-plusjakarta font-medium bg-[#003366] hover:bg-[#022D90] transition-colors duration-300 rounded-full px-8 py-2 cursor-pointer">Asiste</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {(filteredVisits.length === 0) && (
                    <div className="w-full flex justify-center text-sm text-gray-500 text-center py-6">No se encontraron coincidencias. Por favor, modifique su búsqueda.</div>
                )}
            </div>
        </section>
    )
}