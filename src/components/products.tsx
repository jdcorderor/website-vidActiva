import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NextArrowDark, PrevArrowDark } from "./ui/arrows.tsx";
import { FlipCard, ProductFront, ProductBack } from "./ui/flipcards.tsx";
import { useState } from "react";

export default function Products() {
    // Carousel settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrowDark />,
        prevArrow: <PrevArrowDark />,
        responsive: [
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

    // Mock data for products
    const products = [
        { id: 1, text: "Botella", description: "Lorem ipsum...", img: "/bottle.png", volume: "500 ml", price: " 4.99 USD", props: ["Dureza Total: 147 mg/L","Bicarbonato: 134 mg/L","Calcio: 50 mg/L","Potasio: 0.1 mg/L","Cloruro: 13 mg/L","Fluoruro: 0.3 mg/L","Hierro: 0.1 mg/L","Sólidos Disueltos: 235 mg/L","Alcalinidad Total: 135 mg/L","pH: 7.6"] },
        { id: 2, text: "Botella", description: "Lorem ipsum...", img: "/bottle.png", volume: "500 ml", price: " 4.99 USD", props: ["Dureza Total: 147 mg/L","Bicarbonato: 134 mg/L","Calcio: 50 mg/L","Potasio: 0.1 mg/L","Cloruro: 13 mg/L","Fluoruro: 0.3 mg/L","Hierro: 0.1 mg/L","Sólidos Disueltos: 235 mg/L","Alcalinidad Total: 135 mg/L","pH: 7.6"] },
        { id: 3, text: "Botella", description: "Lorem ipsum...", img: "/bottle.png", volume: "500 ml", price: " 4.99 USD", props: ["Dureza Total: 147 mg/L","Bicarbonato: 134 mg/L","Calcio: 50 mg/L","Potasio: 0.1 mg/L","Cloruro: 13 mg/L","Fluoruro: 0.3 mg/L","Hierro: 0.1 mg/L","Sólidos Disueltos: 235 mg/L","Alcalinidad Total: 135 mg/L","pH: 7.6"] },
        { id: 4, text: "Botella", description: "Lorem ipsum...", img: "/bottle.png", volume: "500 ml", price: " 4.99 USD", props: ["Dureza Total: 147 mg/L","Bicarbonato: 134 mg/L","Calcio: 50 mg/L","Potasio: 0.1 mg/L","Cloruro: 13 mg/L","Fluoruro: 0.3 mg/L","Hierro: 0.1 mg/L","Sólidos Disueltos: 235 mg/L","Alcalinidad Total: 135 mg/L","pH: 7.6"] },
    ];

    // State to manage flip card states
    const [flippedStates, setFlippedStates] = useState<boolean[]>(products.map(() => false));

    // Function to handle card flip
    const handleFlip = (index: number) => {
        setFlippedStates(prev =>
            prev.map((val, i) => (i === index ? !val : val))
        );
    };

    return (
        <section id="productos" className="relative overflow-hidden bg-white py-12 lg:py-20 lg:px-20">
            {/* Products section */}
            <div className="w-full flex items-center justify-center px-24 md:px-20">
                <h1 className="text-4xl lg:text-5xl font-bold font-publicsans bg-gradient-to-r from-[#1E9DF1] via-[#022D90] to-[#022D90] bg-clip-text text-transparent text-center">Productos de Calidad</h1>
            </div>

            {/* Carousel section */}
            <div className="w-full relative overflow-visible bg-white px-6 md:px-10 mx-auto mt-8 md:mt-12 lg:mt-16">
                <Slider {...settings}>
                    {products.map((product, index) => (
                        <div key={product.id} onMouseOver={() => { if (!flippedStates[index]) { handleFlip(index) } }} onMouseLeave={() => { if (flippedStates[index]) { handleFlip(index) }} } className="min-h-[300px] justify-center rounded-2xl [@media(min-width:700px)]:px-3">
                            <FlipCard isFlipped={flippedStates[index]} frontContent={<ProductFront product={product} />} backContent={<ProductBack product={product} />}/>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}