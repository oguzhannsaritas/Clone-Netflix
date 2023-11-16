import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import DefaultContent from "@/defaultContent/defaultContent";
import NetflixCost from "@/defaultContent/NetflixCost";
import WheretoWatch from "@/defaultContent/WheretoWatch";
import Cancel from "@/defaultContent/Cancel";
import WhattoWatch from "@/defaultContent/WhattoWatch";
import SuitableChild from "@/defaultContent/SuitableChild";

const Answer = ()=>{

    return(
        <section className="  mt-2 " >
            <div className=" bg-black lg:flex-row xl:px-20">
                <div className=" items-center flex relative flex-col   sm:py-4  md:top-1 xl:top-28 lg:top-3  " >
                    <h1 className="text-4xl md:text-5xl sm:4xl md:mb-3 text-white text-center">
                        Sıkça Sorulan Sorular
                    </h1>
                </div>

                <div className="md:px-10  lg:px-36 xl:p-52 " >
                    <Accordion
                        motionProps={{
                            variants: {
                                enter: {
                                    y: 0,
                                    opacity: 1,
                                    height: "auto",
                                    transition: {
                                        height: {
                                            type: "spring",
                                            stiffness: 500,
                                            damping: 30,
                                            duration: 1,
                                        },
                                        opacity: {
                                            easings: "ease",
                                            duration: 1,
                                        },
                                    },
                                },
                                exit: {
                                    y: -10,
                                    opacity: 0,
                                    height: 0,
                                    transition: {
                                        height: {
                                            easings: "ease",
                                            duration: 0.25,
                                        },
                                        opacity: {
                                            easings: "ease",
                                            duration: 0.3,
                                        },
                                    },
                                },
                            },
                        }}
                    >
                        <AccordionItem className="text-white items-center rounded-[10px] sm:mb-3 lg:right-32 md:mt-1 lg:w-[1100px] bg-[#18181B]    hover:bg-[#2C2C2E] relative " key="1" aria-label="Accordion 1" title={<span className="text-white text-[1.5rem] font-[400] relative ml-3">Netflix nedir?</span>}>
                            <DefaultContent/>
                        </AccordionItem>

                        <AccordionItem className="text-white bg-[#18181B] rounded-[10px] sm:mb-3 items-center  lg:right-32  lg:w-[1100px]    relative hover:bg-[#2C2C2E]" key="2" aria-label="Accordion 2" title={<span className="text-white text-[1.5rem] font-[400] relative ml-3">Netflix'in maliyeti nedir?</span>}>
                            <NetflixCost/>
                        </AccordionItem>
                        <AccordionItem  className=" text-white bg-[#18181B] rounded-[10px] sm:mb-3 items-center  lg:right-32  lg:w-[1100px]    relative hover:bg-[#2C2C2E]" key="3" aria-label="Accordion 3" title={<span className="text-white text-[1.5rem] font-[400] relative ml-3">Nerde izleyebilirim ?</span>}>
                            <WheretoWatch/>
                        </AccordionItem>
                        <AccordionItem className="text-white bg-[#18181B] rounded-[10px] sm:mb-3 items-center  lg:right-32 lg:w-[1100px]   relative hover:bg-[#2C2C2E] " key="1" aria-label="Accordion 1" title={<span className="text-white text-[1.5rem] font-[400] relative ml-3">Nasıl iptal edebilirim?</span>}>
                            <Cancel/>
                        </AccordionItem>
                        <AccordionItem className="text-white bg-[#18181B] rounded-[10px] sm:mb-3 items-center lg:right-32  lg:w-[1100px]  relative hover:bg-[#2C2C2E]" key="2" aria-label="Accordion 2" title={<span className="text-white text-[1.5rem] font-[400] relative ml-3">Netflix'te ne izleyebilirim?</span>}>
                            <WhattoWatch/>
                        </AccordionItem>
                        <AccordionItem  className=" text-white bg-[#18181B] rounded-[10px] sm:mb-3 items-center  lg:right-32  lg:w-[1100px] lg:mt-3 relative hover:bg-[#2C2C2E]" key="3" aria-label="Accordion 3" title={<span className="text-white relative text-[1.5rem] font-[400] ml-3">Netflix çoçuklar için uygunmudur?</span>}>
                            <SuitableChild/>
                        </AccordionItem>
                    </Accordion>
                    <div className="py-10">
                        <h1  className="text-2xl md:text-3xl text-white text-center" >
                            İzlemeye hazır mısınız? Üye olmak ya da hesabınıza tekrar ulaşmak için tek yapmanız gereken e-posta adresinizi girmek.
                        </h1>
                    </div>
                    <div className="flex  flex-col sm:flex-row mt-3 lg:mt-0 lg:py-0 md:py-16 md:ml-36 sm:ml-8 sm:py-8 lg:ml-36 px-5">
                        <div>
                            <input className="py-3 h-16 mt-1 w-96 px-2 rounded-[10px] border-1 border-gray-500 bg-[#101010] " type="text" placeholder="E-posta adresi"/>
                        </div>

                        <div className="text-center lg:ml-2  py-2">
                            <button className="bg-[#f01621] text-base p-1 sm:p-2 w-40 h-14 rounded-[10px] text-white font-semibold "> Başlayın  </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
};

export default Answer
