export default function Allies() {
    // Mock data for steps to become an ally
    const steps = [
        {
            id: 1,
            title: "Discover Our Mission",
            description: "Learn about our dedication to sustainability, water purity, and community impact — the heart of our enterprise."
        },
        {
            id: 2,
            title: "Reach Out",
            description: "Connect with us via our contact form or meet us at green industry expos to start the conversation."
        },
        {
            id: 3,
            title: "Propose Your Idea",
            description: "Submit your concept or portfolio that highlights how your technical or creative expertise can support our growth."
        },
        {
            id: 4,
            title: "Co-Create with Us",
            description: "Collaborate on a prototype like a microsite, interactive carousel, or water-inspired visual design that reflects our brand."
        },
        {
            id: 5,
            title: "Align and Refine",
            description: "Join us for a feedback session, refine the concept, and align on shared goals like digital engagement and environmental impact."
        },
        {
            id: 6,
            title: "Become an Ally",
            description: "Become part of our creative network for future campaigns, sustainability initiatives, and brand evolution."
        }
    ];

    return (
        <section className="bg-white">
            {/* Navigator */}
            <nav className="w-full flex fixed items-center justify-between px-6 md:px-8 lg:px-10 py-6 z-10 backdrop-blur-3xl bg-white/80">
                <a href="../" className="flex items-center justify-start"><img src="/logo.png" alt="vidActiva" className="w-[80px] h-auto" /></a>
            </nav>

            {/* Allies guidance */}
            <div className="p-6 lg:px-20 py-40 mx-4 lg:mx-6">
                <h1 className="text-4xl md:text-5xl font-publicsans font-bold pb-6 border-b border-gray-100 bg-gradient-to-r from-[#1E9DF1] via-[#022D90] to-[#022D90] bg-clip-text text-transparent">¿Quieres ser un aliado de vidActiva?</h1>
                <p className="text-sm md:text-base text-justify opacity-80 py-6">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. 
                    When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.
                </p>

                <div className="w-full flex flex-col py-6 lg:py-8 px-10 lg:px-20 mt-8 bg-gray-50 rounded-xl">
                    {steps.map((step) => (
                    <div key={step.id} className="flex flex-col md:flex-row items-center gap-5 md:gap-8 lg:gap-6 py-10 md:py-6">
                        <div className="w-20 md:w-24 lg:w-22 h-20 flex items-center justify-center border border-blue-100 bg-[#022D90] rounded-full">
                            <span className="text-4xl font-extrabold text-white">{step.id}</span>
                        </div>
                        <div className="w-full h-20 space-y-2 text-center md:text-left">
                            <h2 className="text-xl lg:text-2xl lg:text-4xl font-semibold text-[#022D90]">{step.title}</h2>
                            <p className="text-sm lg:text-base lg:text-lg opacity-90 leading-relaxed">{step.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
