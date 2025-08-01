type FlipCardProps = {
    frontContent: React.ReactNode;
    backContent: React.ReactNode;
    isFlipped: boolean;
};

export function ProductFront({ product }: { product: any }) {
  return (
    <div className="w-full h-full border border-gray-300 rounded-xl overflow-hidden py-10 px-6">
      <img src={product.img} alt={product.text} className="h-60 object-cover mx-auto" />
      <div className="flex items-center mt-6">
        <h3 className="flex-1 text-left text-lg font-publicsans font-semibold">{product.text}</h3>
        <span className="text-sm font-montserrat font-semibold bg-gray-200 rounded-3xl px-3 py-1">{product.volume}</span>
      </div>
      <div className="mt-2">
        <p className="text-sm text-gray-600 font-inter font-semibold">{product.description.split(",")[0]}</p>
        <p className="text-sm text-gray-600 font-inter">{product.description.split(",")[1]}</p>
      </div>
      <div className="w-1/2 mx-auto mt-6">
        <p className="text-sm text-center bg-gray-200 font-inter font-semibold rounded-3xl px-3 py-1">{product.price}</p>
      </div>
    </div>
  );
}

export function ProductBack({ product }: { product: any }) {
  return (
    <div className="w-full h-full border border-gray-300 rounded-xl overflow-hidden py-10 px-8">
      <div className="flex">
        <h3 className="flex-1 text-left text-lg font-publicsans font-semibold">{product.text}</h3>
        <span className="text-sm font-montserrat font-semibold bg-gray-200 rounded-3xl px-3 py-1">{product.volume}</span>
      </div>
      <div className="w-1/2 mx-auto mt-6">
        <p className="text-sm text-center bg-gray-200 font-inter font-semibold rounded-3xl px-3 py-1">{product.price}</p>
      </div>
      <div className="mt-6">
        <h4 className="text-gray-700 font-semibold py-1">Información nutricional</h4>
        {product.props.nutritional.map((prop: string, index: number) => (
          <p key={index} className="text-sm text-gray-600 font-inter"><span className="font-semibold">{prop.split("/")[0].trim()}:</span>{prop.split("/")[1]} / {prop.split("/")[2]}</p>
        ))}

        <h4 className="text-gray-700 font-semibold py-1 mt-4">Análisis físico-químico</h4>
        {product.props.physiochemical.map((prop: string, index: number) => (
          <p key={index} className="text-sm text-gray-600 font-inter"><span className="font-semibold">{prop.split("/")[0].trim()}:</span>{prop.split("/")[1]} / {prop.split("/")[2]}</p>
        ))}
      </div>
    </div>
  );
}

export function FlipCard({ frontContent, backContent, isFlipped }: FlipCardProps) {
    return (
        <div className="flip-card">
            <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                <div className="flip-card-front">{frontContent}</div>
                <div className="flip-card-back">{backContent}</div>
            </div>
        </div>
    );
}