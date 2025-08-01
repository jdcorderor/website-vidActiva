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
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
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
            breakpoint: 768,
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
        { title: "Water Treatment Plant Tour", description: "Explore modern water treatment.", img: "https://cdn.hswstatic.com/gif/bottled-water-5.jpg" },
        { title: "Water Treatment Plant Tour", description: "Explore modern water treatment.", img: "https://media.rnztools.nz/rnz/image/upload/s--G5a20yIh--/c_scale,f_auto,q_auto,w_1050/v1643736132/4O95RKB_copyright_image_120791?_a=BACCd2AD" },
        { title: "Water Treatment Plant Tour", description: "Explore modern water treatment.", img: "https://cdn.hswstatic.com/gif/gettyimages-520277484.jpg" },
        { title: "Water Treatment Plant Tour", description: "Explore modern water treatment.", img: "https://media.npr.org/assets/img/2024/01/09/gettyimages-1258833682-bdd8ee9eddc072e4ffe6590b7e7c3a58cfe4f54a.jpg" },
    ]

    return (
        <section className="relative overflow-hidden bg-white space-y-24 md:space-y-40 py-12 lg:py-20">
            {/* Carousel section */}
            <div className="w-full relative overflow-visible bg-white mx-auto">
                <Slider {...settings}>
                    {slides.map((slide, index) => (
                        <div key={index} className="justify-center">
                            <div className="group relative w-[22.5rem] h-[27.5rem] md:w-[24rem] md:h-[28.75rem] lg:w-[25rem] lg:h-[30rem] overflow-hidden rounded-2xl mx-auto">
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
                    <h1 className="text-3xl lg:text-4xl font-bold font-publicsans bg-gradient-to-r from-[#1E9DF1] via-[#022D90] to-[#022D90] bg-clip-text text-transparent">Alternative title</h1>
                    <h2 className="lg:text-lg text-gray-400 font-medium font-publicsans">Lorem Ipsum is simply dummy text</h2>
                    <p className="text-sm lg:text-base text-justify font-inter opacity-80 py-6">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
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
