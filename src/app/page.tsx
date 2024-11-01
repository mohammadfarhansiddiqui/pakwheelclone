
import HeroSection from "./components/HeroSection"  
import Featuring from "./components/Featuring" 

export default function Home() {return (
  <div  className= " bg-white ">
    <div className=" items-center justify-items-center min-h-screen p-8 pb-20 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <HeroSection/>
          <Featuring/>
    </div> </div>
  )
}