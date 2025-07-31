import { useState } from "react";

export default function Contact() {
    // State to manage form data and submission status
    const [formData, setFormData] = useState({ name: "", email: "", issue: "", category: "", message: "" });

    // Handle form input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (res.ok && data.success) {
                localStorage.setItem("form-status", "success");
                setFormData({ name: "", email: "", issue: "", category: "", message: "" });
            } else {
                localStorage.setItem("form-status", "error");
            }
        } catch (err) {
            localStorage.setItem("form-status", "error");
        }
    };

    return (
        <section id="contacto" className="relative overflow-hidden bg-white mx-10 lg:mx-40 py-12 lg:py-20">
            {/* Contact section */}
            <div className="flex flex-col md:flex-row items-start justify-between gap-6 lg:gap-16 px-6 lg:px-10">
                {/* Contact info */}
                <div className="flex-1 md:w-1/2 lg:w-2/5 space-y-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl text-black font-publicsans font-semibold">Contáctanos</h2>
                    <div className="py-4 lg:py-6">
                        <p className="text-sm lg:text-base font-inter text-justify">
                            ¿Tienes preguntas o necesitas más información sobre nuestros productos y servicios?
                            Nuestro equipo está listo para ayudarte.
                        </p>
                    </div> 
                    <div className="bg-gray-100 space-y-1 p-4 rounded-lg">
                        <h4 className="text-base md:text-sm lg:text-lg font-inter font-semibold pb-2">Oficina</h4>
                        <p className="text-sm md:text-xs lg:text-base"><span className="font-semibold">Dirección:</span> Calle 123, Ciudad, País</p>
                        <p className="text-sm md:text-xs lg:text-base"><span className="font-semibold">Teléfono:</span> +58 424-4483713</p>
                        <p className="text-sm md:text-xs lg:text-base"><span className="font-semibold">Correo electrónico:</span> atencion@vidactiva.com</p>
                        <p className="text-sm md:text-xs lg:text-base"><span className="font-semibold">Horario:</span> Lunes a Viernes, 9:00 AM - 5:00 PM</p>
                    </div> 
                </div>

                {/* Contact form */}
                <div className="w-full md:w-1/2 lg:w-3/5 flex justify-center font-inter">
                    <form onSubmit={handleSubmit} className="w-full md:w-4/5 lg:w-3/5 flex flex-col space-y-2 py-4">
                        <label htmlFor="name">Nombre completo *</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nombre completo" required />
                        <label htmlFor="email">Correo electrónico *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Correo electrónico" required />
                        <label htmlFor="issue">Asunto *</label>
                        <input type="text" name="issue" value={formData.issue} onChange={handleChange} placeholder="Asunto" required />
                        <label htmlFor="category">Categoría *</label>
                        <select name="category" className={`${(!formData.category || formData.category === "") ? "text-[#78808D]" : ""} h-10`} value={formData.category} onChange={handleChange} required>
                            <option value="" disabled>Seleccione una categoría</option>
                            <option value="Solicitud de información">Solicitud de información</option>
                            <option value="Sugerencia">Sugerencia</option>
                            <option value="Soporte técnico">Soporte técnico</option>
                            <option value="Reporte de error">Reporte de error</option>
                            <option value="Reclamo">Reclamo</option>
                            <option value="Otro">Otro</option>
                        </select>
                        <label htmlFor="message">Mensaje *</label>
                        <textarea rows={3} name="message" value={formData.message} onChange={handleChange} placeholder="Mensaje" required />
                        <button type="submit" className="w-[99%] text-sm text-white font-plusjakarta font-bold bg-[#022D90] hover:bg-[#0140c2] transition-colors duration-300 px-10 py-2 mx-auto rounded-full">Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    )
}