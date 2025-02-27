import MainNavbar from "../components/MainNavbar"
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import BalanzaImage from "../assets/images/hero.jpg" // Asegúrate de tener esta imagen

const AboutUsPage = () => {
    return (
        <ParallaxProvider>
            <div className="bg-zinc-100 min-h-screen flex flex-col">
                <MainNavbar />
                
                <div className="w-full py-16">
                    <div className="max-w-6xl mx-auto px-4">
                        <Parallax translateY={[40, -40]}>
                            <h1 className="text-4xl font-bold mb-12">Nosotros</h1>
                        </Parallax>
                        
                        <div className="flex flex-col md:flex-row gap-12 mb-16">
                            <div className="w-full md:w-1/2">
                                <Parallax translateY={[60, -30]}>
                                    <div className="mb-12">
                                        <h2 className="text-2xl font-bold mb-4">Misión</h2>
                                        <p className="text-gray-700 mb-4">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                            Maecenas lectus mi, cursus non dui non, maximus maximus 
                                            quam. Donec non hendrerit diam. Nullam cursus lectus enim, id 
                                            rhoncus sem tempus vitae. Donec tincidunt felis lectus, sit amet 
                                            facilisis lorem facilisis a. Curabitur sed tristique sapien. Mauris 
                                            nec euismod urna. Donec eu erat eros.
                                        </p>
                                        <p className="text-gray-700 mb-4">
                                            Praesent lobortis nulla ipsum, vel viverra ligula dignissim eu. 
                                            Maecenas porttitor, nulla vel viverra tristique, ante elit euismod 
                                            felis, ac congue ligula ex vel augue. Donec et justo quam. 
                                            Pellentesque habitant morbi tristique senectus et netus et 
                                            malesuada fames ac turpis egestas. Duis volutpat, nisl et 
                                            ultricies.
                                        </p>
                                    </div>
                                
                                    <div>
                                        <h2 className="text-2xl font-bold mb-4">Visión</h2>
                                        <p className="text-gray-700 mb-4">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                            Maecenas lectus mi, cursus non dui non, maximus maximus 
                                            quam. Donec non hendrerit diam. Nullam cursus lectus enim, id 
                                            rhoncus sem tempus vitae. Donec tincidunt felis lectus, sit amet 
                                            facilisis lorem facilisis a. Curabitur sed tristique sapien. Mauris 
                                            nec euismod urna. Donec eu erat eros.
                                        </p>
                                        <p className="text-gray-700 mb-4">
                                            Praesent lobortis nulla ipsum, vel viverra ligula dignissim eu. 
                                            Maecenas porttitor, nulla vel viverra tristique, ante elit euismod 
                                            felis, ac congue ligula ex vel augue. Donec et justo quam. 
                                            Pellentesque habitant morbi tristique senectus et netus et 
                                            malesuada fames ac turpis egestas. Duis volutpat, nisl et 
                                            ultricies.
                                        </p>
                                    </div>
                                </Parallax>
                            </div>
                            
                            <div className="w-full md:w-1/2 flex items-center justify-center">
                                <Parallax translateY={[80, -20]}>
                                    <img 
                                        src={BalanzaImage} 
                                        alt="Balanza de la justicia" 
                                        className="w-full h-auto max-h-[600px] object-cover shadow-md"
                                    />
                                </Parallax>
                            </div>
                        </div>
                        
                        {/* Sección de Contacto */}
                        <div className="mt-16">
                            <Parallax translateY={[50, -30]}>
                                <h2 className="text-3xl font-bold mb-8">Contáctanos</h2>
                                
                                <form className="max-w-2xl">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                                                Nombre
                                            </label>
                                            <input
                                                type="text"
                                                id="nombre"
                                                name="nombre"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                                                placeholder="Juan"
                                            />
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 mb-1">
                                                Apellido
                                            </label>
                                            <input
                                                type="text"
                                                id="apellido"
                                                name="apellido"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                                                placeholder="Rodriguez"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="mb-6">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Correo electrónico
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                                            placeholder="email@yourwebdomain.net"
                                        />
                                    </div>
                                    
                                    <div className="mb-6">
                                        <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                                            Mensaje
                                        </label>
                                        <textarea
                                            id="mensaje"
                                            name="mensaje"
                                            rows={6}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                                            placeholder="Escribe tu pregunta o mensaje"
                                        ></textarea>
                                    </div>
                                    
                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </Parallax>
                        </div>
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

export default AboutUsPage