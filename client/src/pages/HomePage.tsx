import MainNavbar from "../components/MainNavbar"
import ImageHomePage from "../assets/images/hero.jpg"
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'

const HomePage = () => {
    return (
        <ParallaxProvider>
            <div className="bg-zinc-100 min-h-screen flex flex-col">
                <MainNavbar />
                
                {/* Hero Section - Imagen principal a pantalla completa con fade */}
                <div className="relative w-full h-screen">
                    <img 
                        src={ImageHomePage}
                        alt="Asesoría legal" 
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay con gradiente para efecto de desvanecimiento */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-800 to-transparent"></div>
                    
                    {/* Contenido opcional sobre la imagen con efecto parallax */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white p-6">
                            <Parallax translateY={[-20, 20]} speed={-10}>
                                <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Cárdenas Abogados & Asociados</h1>
                            </Parallax>
                            <Parallax translateY={[-15, 15]} speed={-5}>
                                <p className="text-xl md:text-2xl max-w-2xl mx-auto drop-shadow-lg">
                                    Expertos en soluciones legales a su servicio
                                </p>
                            </Parallax>
                        </div>
                    </div>
                </div>

                {/* Nuestros Servicios Section */}
                <div className="w-full bg-white py-16">
                    <div className="max-w-6xl mx-auto px-4 text-center">
                        <Parallax translateY={[20, -20]}>
                            <h2 className="text-3xl font-bold mb-4">Nuestros Servicios</h2>
                            <p className="mb-8 max-w-2xl mx-auto">
                                Asesoría legal especializada en derecho civil, corporativo, laboral y 
                                tributario. Soluciones efectivas y personalizadas, con la garantía de 
                                excelencia que su caso merece.
                            </p>
                        </Parallax>
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
                                <Parallax translateY={[10, -10]}>
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
                                </Parallax>
                                
                                <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">
                                    Nosotros
                                </button>
                            </div>
                            
                            <div className="w-full md:w-1/2 flex items-center justify-center">
                                <Parallax translateY={[15, -15]}>
                                    <img 
                                        src="/images/office.jpg" 
                                        alt="Oficina moderna" 
                                        className="w-full h-auto max-h-[400px] object-cover shadow-md"
                                    />
                                </Parallax>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Consulta tu Trámite Section */}
                <div className="w-full bg-white py-16">
                    <div className="max-w-6xl mx-auto px-4">
                        <Parallax translateY={[20, -20]}>
                            <h2 className="text-2xl font-bold mb-4">Consulta tu Trámite</h2>
                            <p className="mb-8 max-w-3xl">
                                Acceda a nuestro sistema en línea para verificar el estado de sus trámites
                                legales en tiempo real. Información actualizada sobre su caso disponible
                                con un solo clic.
                            </p>
                        </Parallax>
                        <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">
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
                                <p className="text-gray-600">Calle +57 2</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </ParallaxProvider>
    )
}

export default HomePage