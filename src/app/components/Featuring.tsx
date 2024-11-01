
export default function Feauturing() {
    return (
        <div className="w-fit" >
            <div className="mt-24 bg-gray-100 ">
                <h1 className=" py-8 mx-8 flex items-end text-gray-700 font-semibold text-xl justify-between "> Featured New Cars <a href="https://www.pakwheels.com/new-cars/"><span className="text-xs text-blue-600 mx-3 "> View All New Cars </span> </a> </h1>
                <h1 className="mx-8 flex text-gray-600 text-xl "> Popular <span className="mx-12"> Upcoming </span> Newly Launched</h1>
                <div className=" m-4 justify-between border-2  border-gray-200"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-1 font-extrabold">
                    <h1 className=" bg-white m-3 py-2 pt-2 flex flex-col justify-center items-center text-balance "><a href="/corolla"> <img src="/images/Featuringcars/Corolla.jpg" alt="Corolla" className="flex w-56 mt-1 pt-0" /> </a> <p className="text-blue-800 font-semibold "> Toyota Corolla</p><p className="font-light text-green-600">  PKR 59.7 - 75.5 lacs</p> <p className="font-light text-sm text-gray-600"> <span className="text-orange-500">★★★☆☆</span> 590 Reviews  </p> </h1>
                    <h1 className=" bg-white m-3 py-2 pt-2 flex flex-col justify-center items-center text-balance"><a href="/Alto"><img src="/images/Featuringcars/Alto.png" alt="Alto" className="flex w-56 mt-1 pt-0" /></a> <p className="text-blue-800 font-semibold "> Suzuki Alto</p><p className="font-light text-green-600">  PPKR 23.3 - 30.5 lacs</p> <p className="font-light text-sm text-gray-600"> <span className="text-orange-500">★★★☆☆</span> 520 Reviews  </p> </h1>
                    <h1 className=" bg-white m-3 py-2 pt-2 flex flex-col justify-center items-center text-balance "><a href="/City"><img src="/images/Featuringcars/City.jpg" alt="City" className="flex w-56 mt-1 pt-0" /> </a><p className="text-blue-800 font-semibold "> Honda City</p><p className="font-light text-green-600">  PKR 46.5 - 58.5 lacs</p> <p className="font-light text-sm text-gray-600"> <span className="text-orange-500">★★★☆☆</span> 825 Reviews  </p> </h1>
                    <h1 className=" bg-white m-3 py-2 pt-2 flex flex-col justify-center items-center text-balance "><a href="/Civic"><img src="/images/Featuringcars/Civic.jpg" alt="Civic" className="flex w-56 mt-1 pt-0" /> </a><p className="text-blue-800 font-semibold "> Honda Civic</p><p className="font-light text-green-600">  86.6 - 99.0 lacs</p> <p className="font-light text-sm text-gray-600"><span className="text-orange-500">★★★☆☆</span> 450 Reviews  </p> </h1>
                </div>
            </div>
        </div>

    )
}