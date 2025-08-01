import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./ui/arrows.tsx";

export default function About() {
    // Carousel settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5, 
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
            breakpoint: 1920,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
            },
            {
            breakpoint: 1440,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
            },
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
            },
            {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
            },
        ]
    };

    // Mock data for slides
    const slides = [
        { src: "https://www.shape.com/thmb/XhaeY6hfYXOUEmpvxZKjOi_-H5A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/running-longer-or-faster-31e97070bda14ffc8afdea52094504c7.jpg", text: "Somos vidActiva" },
        { src: "https://thumbs.dreamstime.com/b/active-young-brunette-woman-running-single-park-summer-healthy-perfect-tone-body-fit-workout-outside-lifestyle-concept-vertical-143896206.jpg", text: "Somos vidActiva" },
        { src: "https://expertosenmedicinaestetica.es/wp-content/uploads/2017/03/amar-running.jpg", text: "Somos vidActiva" },
        { src: "https://www.mensjournal.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MjA0NjU0OTA3MTEzMjg1MjIx/fitness-health-and-city-man-running-on-street-with-motivation-healthy-mindset-and-summer-morning-energy-for-training-urban-workout-cardio-exercise-and-runner-on-bridge-focus-on-sports-lifestyle.jpg", text: "Somos vidActiva" },
        { src: "https://hips.hearstapps.com/hmg-prod/images/man-running-on-track-royalty-free-image-1674216446.jpg", text: "Somos vidActiva" },
        { src: "https://www.hola.com/horizon/43/5c8fd02e953d-gettyimages-1445516635.jpg", text: "Somos vidActiva" },
        { src: "https://img.saludsavia.com/wp-content/uploads/2024/07/entrenamiento-funcional-mejorar-rendimiento-trabajo.jpg", text: "Somos vidActiva" },
        { src: "https://www.mueveteconbea.com/wp-content/uploads/2023/11/entrenamiento-funcional-clases-1024x576.jpg", text: "Somos vidActiva" },
        { src: "https://pro.queondaus.com/wp-content/uploads/2023/10/Familia-.webp", text: "Somos vidActiva" },
        { src: "https://queridoseducadores.com/wp-content/uploads/2025/01/family-7392843_1280.jpg", text: "Somos vidActiva" },
    ];

    // Mock data for cards
    const cards = [
        { title: "Misión", text: "Impulsar una vida activa y saludable a través de la hidratación más pura y natural. Ofrecemos VidActiva, el agua mineral que revitaliza cada paso de tu día." },
        { title: "Visión", text: "Ser el referente de hidratación consciente y saludable en Venezuela, inspirando a una comunidad activa y vibrante." },
        { title: "Valores", text: "Lorem ipsum is simply dummy text of the printing and typesetting industry." },
    ]
    
    return (
        <section id="nosotros" className="relative overflow-hidden bg-white">
            {/* About us section */}
            <div className="flex flex-col lg:flex-row items-center justify-center py-12 lg:py-20 px-0 md:px-10 lg:px-20 mt-8">
                <div className="hidden md:flex flex-1 md:w-full lg:w-2/5 items-center justify-center">
                    <img src="https://media.istockphoto.com/id/168623510/es/foto/familia-para-trotar.jpg?s=612x612&w=0&k=20&c=CD_-xBKSapPdQFgF24ndIIf9Ng9T89QIF6cOgobRsh0=" alt="" className="rounded-full overflow-hidden" width={300} height={300}/>
                </div>
                <div className="w-full lg:w-3/5 items-center justify-center space-y-6 px-8 md:px-16 lg:px-20 md:pt-16 lg:pt-0">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-publicsans bg-gradient-to-r from-[#1E9DF1] via-[#022D90] to-[#022D90] bg-clip-text text-transparent">Somos vidActiva</h1>
                    <p className="text-sm lg:text-base text-justify opacity-80">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <p className="text-sm lg:text-base text-justify opacity-80">When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic. </p>
                </div>
            </div>

            {/* Carousel section */}
            <div className="w-full relative overflow-visible bg-white py-8 lg:py-20 mx-auto">
                <Slider {...settings}>
                    {slides.map((slide, index) => (
                        <div key={index} className="flex justify-center px-4">
                            <div className="group relative w-full max-w-[25rem] h-[25rem] lg:h-[30rem] overflow-hidden rounded-2xl mx-auto">
                                <img src={slide.src} alt={`Slide ${index}`} className="w-full h-full object-cover rounded-xl"/>
                                <div className="absolute inset-0 flex items-end justify-start bg-black/40 ">
                                    <h2 className="w-1/4 text-3xl text-white font-montserrat font-semibold drop-shadow-lg py-6 pl-6">{slide.text}</h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Values section */}
            <div id="valores" className="flex flex-col items-center justify-center space-y-10 py-10 lg:py-20 px-8 md:px-15 lg:px-20">
                <div className="w-full items-center space-y-6 px-0 md:px-5 lg:px-20">
                    <h1 className="text-3xl lg:text-4xl font-bold font-publicsans bg-[#0EA5E9] bg-clip-text text-transparent">Nuestros valores</h1>
                    <p className="text-sm lg:text-base text-justify opacity-80">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. 
                        When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-0 md:px-5 lg:px-20">
                    {cards.map((card, index) => (
                        <div key={index} className="w-full bg-white border border-gray-300 rounded-lg shadow-md space-y-2 p-6">
                            <h2 className="text-lg lg:text-xl font-semibold text-gray-900">{card.title}</h2>
                            <p className="text-sm lg:text-base opacity-80">{card.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Visit us section */}
            <div className="w-full relative overflow-hidden py-12 lg:py-20 mx-auto">
                <img src="https://b2399578.smushcdn.com/2399578/wp-content/uploads/2019/12/iStock-1041010724.jpg?lossy=1&strip=1&webp=1" className="w-full h-55 md:h-70 lg:h-95 object-cover" />
                <div className="absolute inset-0 h-55 md:h-70 lg:h-95 flex flex-col items-center justify-center bg-black/70 space-y-4 py-4 translate-y-12 lg:translate-y-20">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl text-center text-white font-publicsans font-bold drop-shadow-lg">Juntos en EduActiva</h2>
                    <p className="md:text-lg lg:text-xl text-center text-white font-inter font-medium">Visítanos y descubre nuestros procesos</p>
                    <a href="/visitas" className="text-sm md:text-base lg:text-lg text-black font-bold hover:font-extrabold bg-white hover:bg-gray-200 transition-all duration-300 py-2 px-12 mt-2 md:mt-4 rounded-3xl cursor-pointer">Ver más</a>
                </div>
            </div>
        </section>
    )
}