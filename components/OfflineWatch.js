import React from "react";
import Image from "next/image";
import {CircularProgress} from "@nextui-org/react";

const OfflineWatch =()=>{
    return(
        <section className=" relative mt-2 bg-black" >
            <div className="py-20  flex items-center justify-center flex-col bg-black lg:flex-row xl:px-20">
                <Image className=" lg:left-24 w-[550px] h-[400px] flex relative sm:left-auto flex-col"
                       src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                       width={550}
                       height={400}
                       alt="Tele">
                </Image>
                <div className="flex absolute w-80 h-24 lg:bottom-32 items-center  lg:left-[280px] md:left-auto  sm:left-56 bg-black rounded-xl border-[#18181B] border-3">
                    <Image  className="h-20 mt-1 ml-4 " src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                            width={50}
                            height={50}/>
                    <h1 className="text-white flex absolute  left-[90px] lg:left-[90px] lg:top-7 top:7   items-center justify-center font-semibold  "> Stranger Things</h1>
                    <p className=" flex absolute left-[90px] lg:left-[90px]  lg:top-14 top:14    items-center justify-center text-xs text-[#0071eb]" > İndiriliyor...</p>
                    <CircularProgress className="flex right-3 lg:right-3 absolute  lg:top-6 top-6  " label="Yükleniyor..." />
                </div>
                <div className="text-white sm:px-10  md:px-20 text-center md:mt-2   lg:text-start">
                    <h1 className="text-4xl  sm:text-3xl sm:items-center sm:justify-center font-extrabold py-5  leading-3  sm:ml-auto md:ml-auto lg:ml-16 md:text-3xl">
                        Çevrimdışı izlemek için içerikleri indirin
                    </h1>
                    <p className="text-sm md:text-xl sm:text-sm whitespace-break-spaces lg:ml-16 py-5  sm:ml-auto md:ml-auto lg:ml-16 leading-loose">
                        En sevdiğiniz içerikleri kolayca kaydedin ve her zaman izleyecek bir şeyleriniz olsun.
                    </p>
                </div>
            </div>
        </section>
    )
}
export default OfflineWatch