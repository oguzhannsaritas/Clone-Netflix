import Image from "next/image";
import React from "react";


const Telephone=()=>{
    return(
        <section className="  mt-2 bg-black" >
            <div className="py-20  flex items-center justify-center flex-col bg-black lg:flex-row xl:px-20 ">
                <div className="text-white sm:px-10  md:px-20 text-center   lg:text-start">
                    <h1 className="text-4xl sm:text-3xl sm:items-center sm:justify-center font-extrabold py-5  leading-3  sm:mr-auto md:mr-auto lg:mr-28 md:text-5xl">
                        İstediğiniz her yerde izleyin                        </h1>
                    <p className="text-sm md:text-xl sm:text-sm whitespace-break-spaces py-5 leading-loose">
                        Telefonda, tablette, bilgisayarda, televizyonda sınırsız film ve dizi izleyin.                        </p>
                </div>
                <Image className=" lg:right-24 flex relative flex-col"
                       src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
                       width={500}
                       height={500}
                       alt="Tele">
                </Image>
            </div>
        </section>
    )
}
export default Telephone
