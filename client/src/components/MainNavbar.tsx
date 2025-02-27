import { IoLogoGithub } from "react-icons/io";

const MainNavbar = () => {
  return (
    <div className="bg-zinc-100 w-full h-[65px] bg-green-400 flex items-center justify-between p-[2rem] fixed z-[100]">
        <div className="text-[3rem]">
            <IoLogoGithub/>
            {/* <img></img> */}
        </div>
        <div className="flex items-center space-x-4">
            <p className="cursor-pointer font-light hover:font-normal transition-all ">Inicio</p>
            <p className="cursor-pointer font-light hover:font-normal transition-all ">Servicios</p>
            <p className="cursor-pointer font-light hover:font-normal transition-all ">Nosotros</p>
            <button className="bg-black px-3 py-2 text-white font-normal rounded-md cursor-pointer hover:font-bold transition-all">Consultar</button>
        </div>
    </div>
  )
}

export default MainNavbar