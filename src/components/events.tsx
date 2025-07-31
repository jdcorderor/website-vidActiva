export default function Events() { 
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

    // Click handler, redirects to the events page
    const handleClick = (index: number) => {
        localStorage.setItem("event-index", index.toString());
        window.location.href = "/eventos";
    };

    return (
        <section className="relative overflow-hidden bg-white py-12 lg:py-20 px-8 md:px-20">
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