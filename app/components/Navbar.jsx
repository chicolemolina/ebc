
'use client'

import { useState } from "react";
import Link from 'next/link';
import { HiBell } from "react-icons/hi";
import { HiCalendar } from "react-icons/hi";
import { HiUser } from "react-icons/hi";
import { HiLogin } from "react-icons/hi";
import { HiMiniUserGroup } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { HiDocumentText } from "react-icons/hi2";
import { HiBriefcase } from "react-icons/hi";
import { RiShieldUserLine } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { CiBookmarkRemove } from "react-icons/ci";
import { PiFolderUserThin } from "react-icons/pi";





export default function Navbar() 
{

    const btnLink="flex items-center text-1xl uppercase tracking-widest"
    const LiOnclick="py-4 text-[#d0d4e9] hover-text-[#fff] cursor-pointer flex border-b-[1px] border-[#737b89]"
    const LinKDropdown="text-sm text-[#3f4254] hover:text-[#a1a5b7] font-semibold py-2 flex"

    const [menuIcon, setIcon] = useState( false );

    const handleSmallerScreensNavigation = () =>
    {
        setIcon( !menuIcon );
    }

     const [dropdownOpen, setdropdownOpen] = useState(false);
    
    
    return (
        <header className="bg-[#ffffff] border-b-[1px] border-[#181c32] text-[#181c32] w-full ease-in duration-200 fixed top-0 left-0 z-10">
            <nav className="max-w-[1366] mx-auto flex justify-between items-center p-4 pt-2 pb-2">

                <div>
                    <Link href="/">

                        <img src={'https://socios.excellencebusinessclub.com/assets/media/logo.jpg'} alt="Logo EBC" /> 

                    </Link>
                </div>

                {/*Large Screen Navigation*/}
                <ul className="hidden md:flex">

                <li className="mx-2 hidden md:flex">
                    <Link href="/notificaciones" className="text-[#d6d6d6] hover:text-[#181c32]"><HiBell className="h-6 w-6"/><span className="hidden">Notificaciones</span></Link>
                    
                </li>
                <li className="mx-2 hidden md:flex">
                    <Link href="/agenda" className="text-[#d6d6d6] hover:text-[#181c32]"><HiCalendar className="h-6 w-6"/><span className="hidden">Agenda</span></Link>
                    
                </li>
                <li className="mx-2">
                    <Link href="" onClick={() => setdropdownOpen(!dropdownOpen)} className="text-[#d6d6d6] hover:text-[#181c32]"><HiUser className="h-6 w-6"/><span className="hidden">Mi cuenta</span></Link>
                    <div class={`${dropdownOpen ? `top-full opacity-100 visible` : 'top-[110%] invisible opacity-0'} absolute right-10 z-40 mt-[-10px] w-[275px] rounded-lg shadow-lg border-light bg-white p-5 transition-all`}>

                        <ul className="">

                            <li><Link href="/mis-datos" className={LinKDropdown}>Mis datos</Link></li>
                            <li><Link href="/mis-productos" className={LinKDropdown}>Mis productos</Link></li>
                            <li><Link href="/mis-ofertas" className={LinKDropdown}>Mis empleos</Link></li>
                            <li className=""><Link href="/login" className={LinKDropdown}><HiLogin className="mr-2 "/> Cerrar sesión</Link></li>

                        </ul>
                        

                    </div>
                    
                </li>

                </ul>

                <div onClick={handleSmallerScreensNavigation} className="flex md:hidden">

                    {menuIcon ?
                    
                        (<AiOutlineClose size={25} className="text-[#181c32]" />)
                        :
                        (<AiOutlineMenu size={25} className="text-[#181c32]" />)    
                    }
                </div>

                <div className={menuIcon ?  

                    'md:hidden absolute top-[75px] right-0 bottom-0 left-0 justify-center items-center w-full h-screen bg-slate-800 text-white ease-in duration-200' 
                    : 
                    
                    'md:hidden absolute top-[75px] right-0 left-[-100%] justify-center items-center w-full h-screen bg-slate-800 text-white text-center ease-in duration-200'
                
                    }>

                    {/*Smaller Screen Navigation*/}

                    <div className="w-full px-10 py-5">

                        <div className="py-3">
                            <h3 className="text-gray-300 font-weight-bold text-xl">Jose Molina Nubeado</h3>
                            <span className="text-white text-base">creativo@nubeado.com</span>
                        </div>

                        <ul className="font-medium">

                            <li onClick={handleSmallerScreensNavigation}  className={LiOnclick}>
                                
                                <Link href="/socios" className={btnLink}><HiMiniUserGroup className="mr-4 text-xl "/> Socios</Link>

                            </li>

                            <li onClick={handleSmallerScreensNavigation}  className={LiOnclick}>
                                
                                <Link href="/facturas" className={btnLink}><HiClipboardDocumentList className="mr-4 text-xl "/> Facturas</Link>

                            </li>

                            <li onClick={handleSmallerScreensNavigation}  className={LiOnclick}>
                                
                                <Link href="/documentacion" className={btnLink}><HiDocumentText className="mr-4 text-xl "/> Documentación</Link>

                            </li>

                            <li onClick={handleSmallerScreensNavigation}  className={LiOnclick}>
                                
                                <Link href="/mis-ofertas" className={btnLink}><HiBriefcase className="mr-4 text-xl "/> Empleo</Link>

                            </li>

                            
                            <li onClick={handleSmallerScreensNavigation}  className={LiOnclick}>
                                
                                <Link href="/notificaciones" className={btnLink}><HiBell className="mr-4 text-xl "/> Notificaciones</Link>

                            </li>

                            <li onClick={handleSmallerScreensNavigation}  className={LiOnclick}>
                                
                                <Link href="/promociones" className={btnLink}><RiShieldUserLine className="mr-4 text-xl "/> Promociones</Link>

                            </li>

                            <li onClick={handleSmallerScreensNavigation}  className={LiOnclick}>
                                
                                <Link href="/Agenda" className={btnLink}><HiCalendar className="mr-4 text-xl "/> Agenda</Link>

                            </li>

                            <li onClick={handleSmallerScreensNavigation}  className={LiOnclick}>

                                <Link href="/mis-datos" className={btnLink}><CiEdit  className="mr-4 text-xl "/>  Mis datos</Link>

                            </li>
                            <li onClick={handleSmallerScreensNavigation}  className={LiOnclick}>

                                <Link href="/mis-productos" className={btnLink}><CiBookmarkRemove className="mr-4 text-xl "/> Mis productos</Link>

                            </li>
                             <li onClick={handleSmallerScreensNavigation}  className={LiOnclick}>

                                <Link href="/mis-ofertas" className={btnLink}><PiFolderUserThin className="mr-4 text-xl "/> Mis empleos</Link>

                            </li>
                            <li onClick={handleSmallerScreensNavigation}  className={LiOnclick}>

                                <Link href="/login" className={btnLink}><HiLogin className="mr-2 "/> Cerrar sesión</Link>

                            </li>

                        </ul>
                        
                    </div>


                
                </div>
            </nav>
        </header>
    );
}