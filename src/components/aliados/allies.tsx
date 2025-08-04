export default function Allies() {
    // Mock data for steps to become an ally
    const steps = [
        {
            id: 1,
            title: "Conoce Nuestra Misión",
            description: "Descubre nuestro compromiso con la sostenibilidad, la pureza del agua y el impacto comunitario — el corazón de nuestra esencia."
        },
        {
            id: 2,
            title: "Conecta con Nosotros",
            description: "Comunícate con nosotros mediante el formulario de contacto o visítanos en nuestra sede."
        },
        {
            id: 3,
            title: "Presenta Tu Propuesta",
            description: "Envíanos tu idea o portafolio que refleje cómo tu experiencia técnica o creativa puede sumar a nuestro crecimiento."
        },
        {
            id: 4,
            title: "Alinea y Refina",
            description: "Participa en sesiones de retroalimentación, afina el concepto y definamos juntos objetivos compartidos como el impacto social y ambiental."
        },
        {
            id: 5,
            title: "Conviértete en un Aliado",
            description: "Forma parte de nuestra red de aliados para futuras campañas, iniciativas sostenibles y evolución de marca."
        }
    ];

    return (
        <section className="bg-white">
            {/* Navigator */}
            <nav className="w-full flex fixed items-center justify-between px-6 md:px-8 lg:px-10 py-6 z-10 backdrop-blur-3xl bg-white/80">
                <a href="../" className="flex items-center justify-start"><img src="/logo.png" alt="vidActiva" className="w-[60px] md:w-[80px] h-auto" /></a>
            </nav>

            {/* Allies guidance */}
            <div className="p-6 lg:px-20 py-40 mx-2 lg:mx-6">
                <h1 className="text-4xl md:text-5xl font-publicsans font-bold pb-4 border-b border-gray-100 bg-gradient-to-r from-[#1E9DF1] via-[#022D90] to-[#022D90] bg-clip-text text-transparent">¿Quieres ser un aliado de vidActiva?</h1>
                <p className="text-sm md:text-base text-justify opacity-80 py-6">
                    En vidActiva creemos que la verdadera energía proviene de lo esencial: el agua pura, el compromiso sincero y el deseo constante de mejorar. Cada paso que damos busca conectar con personas 
                    que valoran la vida activa, el bienestar y el respeto por el entorno. Sumarte como aliado significa formar parte de una comunidad que cree en el cambio positivo, en la innovación con propósito 
                    y en la fuerza de las acciones conscientes.
                </p>
                <div className="w-full flex flex-col py-6 lg:py-8 px-10 lg:px-20 mt-8 bg-gray-50 rounded-xl">
                    {steps.map((step) => (
                        <div key={step.id} className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8 lg:gap-6 py-10 sm:py-6">
                            <div className="w-20 sm:w-16 md:w-20 lg:w-22 aspect-square flex items-center justify-center border border-blue-100 bg-[#022D90] rounded-full shrink-0">
                                <span className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
                                    {step.id}
                                </span>
                            </div>
                            <div className="w-full space-y-2 text-center sm:text-left">
                                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#022D90]">
                                    {step.title}
                                </h2>
                                <p className="text-sm sm:text-sm md:text-base lg:text-lg opacity-90 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}