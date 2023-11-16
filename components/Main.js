import React from "react";
import Image from "next/image";


const Main = () =>{
    return(
        <div>
            <section >
                <div className="relative top-0">
                    <Image src={"https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/3b600139-8e3a-456a-99c2-847b0a204e54/TR-tr-20231106-popsignuptwoweeks-perspective_alpha_website_medium.jpg"} alt={"Netflix page"}
                            width={1980}
                           height={1080}
                            className="brightness-50 h-[87vh]"
                    />
                </div>

                <div className="absolute w-full top-24  sm:top-24 md:top-24 lg:top-36 xl:top-64">
                    <div className="text-white sm:px-10 md:px-20 lg:px-52 xl:px-80">
                        <h1 className="text-center text-4xl md:text-5xl xl:text-6xl font-extrabold">Âlâsı !</h1>
                        <p className="text-center text-medium sm:text-2xl py-6">En iyi  dizi, film, belgesel ve çok daha fazlası burada.</p>
                        <p className="text-center text-2xl sm:text-2xl">İzlemeye hazır mısınız? Üye olmak ya da hesabınıza tekrar ulaşmak için tek yapmanız gereken e-posta adresinizi girmek.
                        </p>

                        <div className="flex  flex-col sm:flex-row mt-3 md:ml-auto lg:ml-28 px-5">
                            <div>
                                <input className="py-3 h-16 mt-1 w-96 px-2 bg-transparent border-1 border-gray-500  rounded-[10px]  text-white" type="text" placeholder="E-posta adresi"/>
                            </div>

                            <div className="text-center lg:ml-2  py-1">
                                <button className="bg-[#f01621] text-base p-1 sm:p-2 w-40 h-16 rounded-[10px] text-white font-semibold "> Başlayın  </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default  Main