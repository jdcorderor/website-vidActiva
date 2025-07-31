import { useEffect, useState } from "react";

export default function Loading() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 1500);
    return () => clearTimeout(timer);
  }, []);

    return (
    <section aria-hidden={!isVisible} className={`fixed inset-0 flex items-center justify-center bg-white z-[9999] ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"} transition-opacity duration-500`}>
        <div className="dots-container-loading flex">
            {[...Array(5)].map((_, i) => (
                <div key={i} className={`dot-loading animate-pulse delay-[${i * 150}ms]`} />
            ))}
        </div>
    </section>
    );
}
