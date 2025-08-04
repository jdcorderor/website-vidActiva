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
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrowDark />,
        prevArrow: <PrevArrowDark />,
        responsive: [
            {
            breakpoint: 1920,
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

    // Mock data for products
    const products = [
        { id: 1, text: "Agua mineral", description: "24 unidades/caja, Peso aprox. por caja: 7.92 Kg", img: "/products/product1.png", volume: "330 mL", price: "11.40 USD", props: { nutritional: ["Energía / 0.0 kcal / 0%", "Grasa Total / 0.0 g / 0%", "Carbohidratos / 0.0 gr / 0%", "Colesterol / 0.0 mg / 0%", "Sodio / 1 mg / 0%"], physiochemical: ["pH / (mgL) 6.80", "Calcio / (mgL) 17.00", "Cloruros / (mgL) 10.00", "Magnesio / (mgL) 12.00", "Silicio / (mgL) 5.00"] } },
        { id: 2, text: "Agua mineral", description: "24 unidades/caja, Peso aprox. por caja: 14.40 Kg", img: "/products/product2.png", volume: "600 mL", price: "14.40 USD", props: { nutritional: ["Energía / 0.0 kcal / 0%", "Grasa Total / 0.0 g / 0%", "Carbohidratos / 0.0 gr / 0%", "Colesterol / 0.0 mg / 0%", "Sodio / 1 mg / 0%"], physiochemical: ["pH / (mgL) 6.80", "Calcio / (mgL) 17.00", "Cloruros / (mgL) 10.00", "Magnesio / (mgL) 12.00", "Silicio / (mgL) 5.00"] } },
        { id: 3, text: "Agua mineral", description: "12 unidades/caja, Peso aprox. por caja: 18.00 Kg", img: "/products/product3.png", volume: "1.5 L", price: "14.40 USD", props: { nutritional: ["Energía / 0.0 kcal / 0%", "Grasa Total / 0.0 g / 0%", "Carbohidratos / 0.0 gr / 0%", "Colesterol / 0.0 mg / 0%", "Sodio / 1 mg / 0%"], physiochemical: ["pH / (mgL) 6.80", "Calcio / (mgL) 17.00", "Cloruros / (mgL) 10.00", "Magnesio / (mgL) 12.00", "Silicio / (mgL) 5.00"] } },
        { id: 4, text: "Agua mineral", description: "4 unidades/caja, Peso aprox. por caja: 12.00 Kg", img: "/products/product4.png", volume: "3 L", price: "10.50 USD", props: { nutritional: ["Energía / 0.0 kcal / 0%", "Grasa Total / 0.0 g / 0%", "Carbohidratos / 0.0 gr / 0%", "Colesterol / 0.0 mg / 0%", "Sodio / 1 mg / 0%"], physiochemical: ["pH / (mgL) 6.80", "Calcio / (mgL) 17.00", "Cloruros / (mgL) 10.00", "Magnesio / (mgL) 12.00", "Silicio / (mgL) 5.00"] } },
        { id: 5, text: "Agua mineral", description: "4 unidades/caja, Peso aprox. por caja: 20.00 Kg", img: "/products/product5.png", volume: "5 L", price: "13.90 USD", props: { nutritional: ["Energía / 0.0 kcal / 0%", "Grasa Total / 0.0 g / 0%", "Carbohidratos / 0.0 gr / 0%", "Colesterol / 0.0 mg / 0%", "Sodio / 1 mg / 0%"], physiochemical: ["pH / (mgL) 6.80", "Calcio / (mgL) 17.00", "Cloruros / (mgL) 10.00", "Magnesio / (mgL) 12.00", "Silicio / (mgL) 5.00"] } },
        { id: 6, text: "Agua mineral", description: "2 unidades/caja, Peso aprox. por caja: 16.00 Kg", img: "/products/product6.png", volume: "8 L", price: "10.50 USD", props: { nutritional: ["Energía / 0.0 kcal / 0%", "Grasa Total / 0.0 g / 0%", "Carbohidratos / 0.0 gr / 0%", "Colesterol / 0.0 mg / 0%", "Sodio / 1 mg / 0%"], physiochemical: ["pH / (mgL) 6.80", "Calcio / (mgL) 17.00", "Cloruros / (mgL) 10.00", "Magnesio / (mgL) 12.00", "Silicio / (mgL) 5.00"] } },
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
                        <div key={product.id} onMouseOver={() => { if (!flippedStates[index]) { handleFlip(index) } }} onMouseLeave={() => { if (flippedStates[index]) { handleFlip(index) }} } className="justify-center rounded-2xl md:px-3">
                            <FlipCard isFlipped={flippedStates[index]} frontContent={<ProductFront product={product} />} backContent={<ProductBack product={product} />}/>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}