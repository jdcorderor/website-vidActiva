export default function Allies() {
    // Mock data for allies
    const allies = [
        { id: 1, name: "RedVital", img: "https://neuropsicofarmave.com/wp-content/uploads/2024/08/Logo-Redvital-copy.png" },
        { id: 2, name: "Makro", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Makro_logo_la.svg/500px-Makro_logo_la.svg.png" },
        { id: 3, name: "Empresas Polar", img: "https://cdn.worldvectorlogo.com/logos/empresas-polar.svg" },
        { id: 4, name: "Coca Cola", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/1024px-Coca-Cola_logo.svg.png" },
    ];

    return (
        <section id="aliados" className="relative overflow-hidden bg-white py-12 lg:py-20">
            {/* Allies section */}
            <div className="flex items-center justify-center px-15 md:px-20">
                <h1 className="text-4xl lg:text-5xl font-bold font-publicsans bg-black bg-clip-text text-transparent text-center">Sé parte de nuestros aliados</h1>
            </div>

            {/* Grid section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20 px-10 md:px-20 mt-10">
                {allies.map((ally, index) => (
                    <div key={index} className="justify-center px-20 md:px-10 lg:px-0 py-4 md:py-6 lg:py-8">
                        <img src={ally.img} alt={ally.name} />
                    </div>
                ))}
            </div>
        </section>
    )
}