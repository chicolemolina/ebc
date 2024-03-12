
import Link from 'next/link';
import { 
        
        HiMiniUserGroup, 
        HiMiniDocumentText, 
        HiMiniCalendarDays,
        HiMiniClipboardDocumentList, 
        HiMiniBell, 
        HiMiniBriefcase, 
        HiMiniCursorArrowRays
    } from "react-icons/hi2";


export default function SideBarNav() 
{

    const btnLink="flex items-center uppercase text-xs text-[#898b95] hover:text-[#d0a53d] ease duration-100 tracking-widest"   
    
    return (
        <div className="sidebar hidden md:flex flex-column-fluid bg-[#181c32] w-[265px] h-full fixed top-[75px] left-0">
            <nav className="w-full px-4 flex ease-in duration-200">


                    <div className="w-full py-6">

                        <ul className="font-semibold">

                            <li   className="py-3 border-b-[1px] border-[#898b952e]">
                                
                                <Link href="/socios" className={btnLink}><HiMiniUserGroup className="mr-4 text-2xl "/> Socios</Link>

                            </li>

                            <li   className="py-3 border-b-[1px] border-[#898b952e]">
                                
                                <Link href="/facturas" className={btnLink}><HiMiniClipboardDocumentList className="mr-4 text-2xl "/> Facturas</Link>

                            </li>

                            <li   className="py-3 border-b-[1px] border-[#898b952e]">
                                
                                <Link href="/documentacion" className={btnLink}><HiMiniDocumentText className="mr-4 text-2xl "/> Documentación</Link>

                            </li>

                            <li   className="py-3 border-b-[1px] border-[#898b952e]">
                                
                                <Link href="/mis-ofertas" className={btnLink}><HiMiniBriefcase className="mr-4 text-2xl "/> Empleo</Link>

                            </li>

                            
                            <li   className="py-3 border-b-[1px] border-[#898b952e]">
                                
                                <Link href="/notificaciones" className={btnLink}><HiMiniBell className="mr-4 text-2xl "/> Notificaciones</Link>

                            </li>

                            <li   className="py-3 border-b-[1px] border-[#898b952e]">
                                
                                <Link href="/promociones" className={btnLink}><HiMiniCursorArrowRays className="mr-4 text-2xl "/> Promociones</Link>

                            </li>

                            <li className="py-3 border-b-[1px] border-[#898b952e]">
                                
                                <Link href="/agenda" className={btnLink}><HiMiniCalendarDays className="mr-4 text-2xl "/> Agenda</Link>

                            </li>

                        </ul>

                    </div>

            </nav>
        </div>
    );
}