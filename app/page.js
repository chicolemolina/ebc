import FlexBox from "./components/box";
import LinkSimple from "./components/LinkSimple";
import Link from 'next/link';
import { HiMiniUserGroup,
        HiMiniBriefcase, 
        HiMiniCalendarDays,
        HiMiniIdentification   
        } from "react-icons/hi2";



export const metadata = {
  title: 'Escritorio',
  description: 'Esta es la página de inicio',
}

export default function Home() {

  const HeadingSTyle="mb-4 text-3xl font-semibold leading-none tracking-tight md:text-2xl lg:text-4xl"
  const GridStyle="w-100 md:w-1/2 mb-4"

  return (
    
    <div className="mx-[40px] mt-[100px] md:ml-[300px]">

      <h1 className={HeadingSTyle}>Escritorio</h1>

      <div className="md:flex gap-6 mt-[40px]">

        <div className={GridStyle}>

            <FlexBox>

              <HiMiniUserGroup className="h-10 w-10 text-[#d0a53d] mb-5"/>

              <h2 className="text-3xl font-semibold tracking-normal"><span>41</span> Socios pertenencen a EBC</h2>

              <LinkSimple>
              
                <Link href="/socios" >Ver socios</Link>

              </LinkSimple>

            </FlexBox>

        </div>

        <div className={GridStyle}>

            <FlexBox>

              <HiMiniBriefcase className="h-10 w-10 text-[#d0a53d] mb-5"/>

              <h2 className="text-3xl font-semibold tracking-normal"><span>41</span> Ofertas de empleo</h2>

              <LinkSimple>
              
                <Link href="/mis-ofertas" >Ver empleos</Link>

              </LinkSimple>

            </FlexBox>

        </div>
        
      </div>

      <div className="md:flex mb-4 gap-6">

        <div className={GridStyle}>

            <FlexBox>

              <HiMiniCalendarDays  className="h-10 w-10 text-[#d0a53d] mb-5"/>

              <h2 className="text-3xl font-semibold tracking-normal"><span>1</span> próximo(s) evento(s)</h2>

              <LinkSimple>
              
                <Link href="/agenda" >Ver eventos</Link>

              </LinkSimple>

            </FlexBox>

        </div>

        <div className={GridStyle}>

           <FlexBox>

              <HiMiniIdentification  className="h-10 w-10 text-[#d0a53d] mb-5"/>

              <h2 className="text-3xl font-semibold tracking-normal"><span>1</span> Promociones</h2>

              <LinkSimple>
              
                <Link href="/promociones" >Ver promociones</Link>

              </LinkSimple>

            </FlexBox>

        </div>
        
      </div>

     

    </div>

  );
}



