import React from "react";
import { useEffect, useState } from "react";

interface ModalProps {
    isVisible: boolean;
}

const SuccessModal: React.FC<ModalProps> = ({ isVisible }) => (
    <div className={`fixed inset-0 flex items-center justify-center z-50 bg-transparent bg-opacity-30 backdrop-blur-xl transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-sm w-full flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <span className="text-xl font-semibold text-center mb-2">¡Su mensaje ha sido enviado!</span>
            <span className="text-center text-sm text-gray-600 my-2">
                Estimado usuario, su mensaje ha sido enviado exitosamente. Ante cualquier duda, comuníquese con atención al cliente: <strong>+58 424-4483713</strong>
            </span>
        </div>
    </div>
);

const ErrorModal: React.FC<ModalProps> = ({ isVisible }) => (
    <div className={`fixed inset-0 flex items-center justify-center z-50 bg-transparent bg-opacity-30 backdrop-blur-xl transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-sm w-full flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            <span className="text-xl font-semibold text-center mb-2">¡Ups, ha ocurrido un error!</span>
            <span className="text-center text-sm text-gray-600 my-2">
                Estimado usuario, ha ocurrido un error inesperado. Por favor, intente nuevamente. <br /><br />
                Si el problema persiste, comuníquese con atención al cliente: <strong>+58 424-4483713</strong>
            </span>
        </div>
    </div>
);

const Modals = () => {
    const [status, setStatus] = useState<"success" | "error" | null>(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const status = localStorage.getItem("form-status");

        if (status === "success" || status === "error") {
            setStatus(status);

            localStorage.removeItem("form-status");

            window.scrollTo({ top: 0, behavior: "smooth" });

            const timer = setTimeout(() => {
                setIsVisible(false);
                setTimeout(() => setStatus(null), 500);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <>
            {status === "success" && <SuccessModal isVisible={isVisible} />}
            {status === "error" && <ErrorModal isVisible={isVisible} />}
        </>
    );
};

export default Modals;