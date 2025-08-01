import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./ui/arrows.tsx";

export default function Gallery() {
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
            breakpoint: 1840,
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

    // Mock data for gallery images
    const slides = [
        {
            title: "Planta de Tratamiento",
            description: "Sumérgete en la infraestructura que convierte el agua cruda en potable de manera eficiente.",
            img: "https://cdn.hswstatic.com/gif/bottled-water-5.jpg"
        },
        {
            title: "Tecnología de Filtración Avanzada",
            description: "Conoce los sistemas que garantizan la pureza y seguridad en cada gota de agua.",
            img: "https://media.rnztools.nz/rnz/image/upload/s--G5a20yIh--/c_scale,f_auto,q_auto,w_1050/v1643736132/4O95RKB_copyright_image_120791?_a=BACCd2AD"
        },
        {
            title: "Proceso de Embotellado Inteligente",
            description: "Observa cómo se embotella el agua con precisión, limpieza y velocidad.",
            img: "https://cdn.hswstatic.com/gif/gettyimages-520277484.jpg"
        },
        {
            title: "Control de Calidad en Acción",
            description: "Asegura que cada botella cumpla con los más altos estándares de calidad.",
            img: "https://media.npr.org/assets/img/2024/01/09/gettyimages-1258833682-bdd8ee9eddc072e4ffe6590b7e7c3a58cfe4f54a.jpg"
        }
    ];

    return (
        <section id="galeria" className="relative overflow-hidden bg-white space-y-24 md:space-y-40 py-12 lg:py-20">
            {/* Carousel section */}
            <div className="w-full relative overflow-visible bg-white mx-auto">
                <Slider {...settings}>
                    {slides.map((slide, index) => (
                        <div key={index} className="flex justify-center px-4">
                            <div className="group relative w-full max-w-[25rem] h-[25rem] lg:h-[30rem] overflow-hidden rounded-2xl mx-auto">
                                <img src={slide.img} alt={`${index}`} className="w-full h-full object-cover rounded-xl"/>
                                <div className="absolute inset-0 flex flex-col justify-end bg-black/60 space-y-2 p-6 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h2 className="text-lg text-white font-montserrat font-semibold drop-shadow-lg">{slide.title}</h2>
                                    <p className="text-sm text-white font-montserrat font-normal drop-shadow-lg">{slide.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Alternative section */}
            <div className="flex flex-col lg:flex-row items-center justify-center px-8 md:px-14 lg:px-20">  
                <div className="lg:w-3/5 flex-1 items-center justify-center space-y-3 lg:px-10 pb-6 lg:pb-0">
                    <h1 className="text-3xl lg:text-4xl font-bold font-publicsans bg-gradient-to-r from-[#1E9DF1] via-[#022D90] to-[#022D90] bg-clip-text text-transparent">¿Quieres ser un aliado de vidActiva?</h1>
                    <h2 className="lg:text-lg text-gray-400 font-medium font-publicsans">Juntos podemos impulsar una vida más activa y saludable</h2>
                    <p className="text-sm lg:text-base text-justify font-inter opacity-80 py-6 lg:pr-8">
                        En vidActiva creemos que la pureza y la vitalidad pueden transformar vidas. Si compartes nuestro compromiso con el bienestar, la innovación y la sostenibilidad, 
                        queremos que formes parte de nuestra red de aliados. Explora cómo colaborar con nosotros en proyectos que conectan a más personas con hidratación consciente y con 
                        iniciativas que cuidan de nuestro entorno.
                    </p>
                    <a href="/aliados" className="text-sm lg:text-base float-right lg:float-left text-white font-plusjakarta font-bold bg-[#022D90] hover:bg-[#0140c2] transition-colors duration-300 px-12 py-3 rounded-full">Ver más</a>
                </div>
                <div className="flex lg:w-2/5 items-center justify-center">
                    <img src="https://www.accutekpackaging.com/wp-content/uploads/2021/03/1-WATER.jpg" alt="" className="h-90 w-90 overflow-hidden object-cover" width={400} height={400}/>
                </div>
            </div>
        </section>
    )
}