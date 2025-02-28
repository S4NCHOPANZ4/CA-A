import MainNavbar from "../components/MainNavbar"
import ImageHomePage from "../assets/images/hero.jpg"
import ImageAboutUs from "../assets/images/oficina.png"
import ImageConsulta from "../assets/images/consulta.jpg"
import { useEffect, useState } from 'react'

const HomePage = () => {
    // Estado para controlar la opacidad del gradiente
    const [gradientOpacity, setGradientOpacity] = useState(.7);

    // Efecto para detectar el scroll y ajustar la opacidad del gradiente
    useEffect(() => {
        const handleScroll = () => {
            // Calcula la opacidad basada en cuánto ha scrolleado el usuario
            // Comenzamos en 0.2 y aumentamos hasta 1 después de scrollear 200px
            const scrolled = window.scrollY;
            const newOpacity = Math.min(.7 + (scrolled / 200), 1);
            setGradientOpacity(newOpacity);
        };
    
        // Ejecutar una vez al montar para establecer la opacidad inicial
        handleScroll();
        
        // Agregar el event listener
        window.addEventListener('scroll', handleScroll);
        
        // Limpiar el event listener cuando el componente se desmonte
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className="bg-zinc-100 min-h-screen flex flex-col">
            <MainNavbar />

            {/* Hero Section - Imagen a pantalla completa con gradiente que aparece al scrollear */}
            <div className="relative w-full h-[80vh]"
                style={{
                    backgroundImage: `url(${ImageHomePage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}>
                {/* Solo el overlay con gradiente que cambia de opacidad al scrollear */}
                <div 
                    className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent transition-opacity duration-300"
                    style={{ opacity: gradientOpacity }}
                ></div>

                {/* Contenido sobre la imagen */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-7">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-2xl text-shadow-lg">Cárdenas Abogados & Asociados</h1>
                        <p className="text-xl md:text-2xl max-w-2xl mx-auto drop-shadow-2xl text-shadow-lg">
                            Expertos en soluciones legales a su servicio
                        </p>
                    </div>
                </div>
            </div>

            {/* Nuestros Servicios Section */}
            <div className="w-full bg-white py-16">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Nuestros Servicios</h2>
                    <p className="mb-8 max-w-2xl mx-auto">
                        Asesoría legal especializada en derecho civil, corporativo, laboral y
                        tributario. Soluciones efectivas y personalizadas, con la garantía de
                        excelencia que su caso merece.
                    </p>
                    <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">
                        Servicios
                    </button>
                </div>
            </div>

            {/* Quienes Somos Section */}
            <div className="w-full py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl font-bold mb-8">Quienes Somos</h2>

                            <div className="mb-8">
                                <h3 className="font-bold mb-2">Excelencia</h3>
                                <p className="text-gray-600">
                                    Soluciones legales precisas respaldadas por conocimiento actualizado.
                                </p>
                            </div>

                            <div className="mb-8">
                                <h3 className="font-bold mb-2">Integridad</h3>
                                <p className="text-gray-600">
                                    Práctica legal transparente y ética que genera confianza en cada cliente y contraparte.
                                </p>
                            </div>

                            <div className="mb-8">
                                <h3 className="font-bold mb-2">Compromiso</h3>
                                <p className="text-gray-600">
                                    Dedicación total a cada caso con enfoque en resultados efectivos.
                                </p>
                            </div>

                            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">
                                Nosotros
                            </button>
                        </div>

                        <div className="w-full md:w-1/2 flex items-center justify-center">
                            <div className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer">
                                <img
                                    src={ImageAboutUs}
                                    alt="Oficina moderna"
                                    className="w-full h-auto max-h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Overlay con gradiente que aparece en hover */}
                                <div 
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: 'linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%)'
                                    }}
                                ></div>
                                {/* Texto que aparece */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <h3 className="font-medium text-white text-3xl font-bold opacity-0 transform translate-y-8 transition-all duration-600 group-hover:opacity-100 group-hover:translate-y-0 drop-shadow-lg">
                                        Conocenos
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Consulta tu Trámite Section con imagen de fondo fija */}
            <div className="relative w-full py-16"
                style={{
                    backgroundImage: `url(${ImageConsulta})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}>
                {/* Overlay con gradiente para efecto de desvanecimiento */}
                <div className="absolute inset-0" style={{
                    background: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 41%, rgba(0,0,0,0.8) 100%)'
                }}></div>

                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <h2 className="text-2xl font-bold mb-4 text-white">Consulta tu Trámite</h2>
                    <p className="mb-8 max-w-3xl text-white">
                        Acceda a nuestro sistema en línea para verificar el estado de sus trámites
                        legales en tiempo real. Información actualizada sobre su caso disponible
                        con un solo clic.
                    </p>
                    <button className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 transition-colors">
                        Consultar
                    </button>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-white py-12 mt-auto w-full border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="font-bold mb-4">Cárdenas Abogados & Asociados.</h3>

                            <div className="flex space-x-4 mb-4">
                                <a href="#" className="text-gray-600 hover:text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-600 hover:text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                        <rect x="2" y="9" width="4" height="12"></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-600 hover:text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-600 hover:text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold mb-3">Contacto</h4>
                            <p className="text-gray-600 mb-1">contacto@cardenas.com</p>
                            <p className="text-gray-600 mb-1">(+57) 310-567-8900</p>
                            <p className="text-gray-600 mb-1">(+57) 602-555555</p>
                        </div>

                        <div>
                            <h4 className="font-bold mb-3">Enlaces</h4>
                            <ul className="text-gray-600">
                                <li className="mb-1"><a href="#" className="hover:text-black">Inicio</a></li>
                                <li className="mb-1"><a href="#" className="hover:text-black">Servicios</a></li>
                                <li className="mb-1"><a href="#" className="hover:text-black">Consultas</a></li>
                            </ul>
                        </div>

                        <div>
                            <p className="text-gray-600">todos los derechos reservados</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default HomePage