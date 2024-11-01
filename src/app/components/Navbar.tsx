import Link from 'next/link'
export default function Navbar (){
    return(
             <div>
            <nav className="flex justify-between items-center bg-gray-900 text-white w-full h-8">
                
                <p className="flex p-5 mx-8"><img src="/images/mobile.png" className="h-6 mx-3"/>Download App via SMS</p>
                <div className="flex ">
                <p className="p-2 text-red-600 font-extrabold ">اردو</p>
                    <p className="p-2"> Sign Up </p>
                    <p className="p-2 mx-6">Sign In</p>
                </div>
           </nav>
           <nav className="flex justify-between items-center bg-blue-900 text-white w-full h-18">
            <img src="/images/logo.png" className="h-14 mx-14 "/>
                <div className="flex">
                    <Link href="/"><p className="p-6"> Home</p></Link>   
                    <p className="p-6">Used Cars</p>
                    <p className="p-6">New Cars </p>
                    <p className="p-6">Bikes </p>
                    <p className="p-6">Auto Store</p>
                    <p className="p-6">Videos </p>
                    <p className="p-6">Forums </p>
                    <p className="p-6">Blogs </p>
                    <p className="p-6">More</p>
                    <button className="flex p-6 m-3 justify-center items-center h-2 font-bold rounded-md bg-red-600">Post an Ad</button>
                </div>
                </nav>
        </div>
    )
}