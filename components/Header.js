import React from "react";
import Image from "next/image";

const Header = () =>{

    return(
        <header className="flex items-center z-50 absolute w-full px-4 ">
            <div >
                <Image
                    className="lg:left-44 lg:flex lg:items-center lg:relative"
                    alt={"Netflix"} src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-500x281.png"
                    width={150}
                    height={80}
                />
            </div>
            <div className=" flex items-center absolute right-28">
                <div className="px-5">
                    <select name="Languge" id="Languge"
                    className="bg-transparent outline outline-1 outline-white text-white p-1">
                        <option  value="Turkish">Turkish</option>
                        <option value="English">English</option>
                    </select>
                </div>
                <div className="text-center py-2">
                    <button  className="bg-[#f01621] text-base font-semibold font-sans p-1 rounded-sm text-white">Oturum Aç</button>
                </div>
            </div>



        </header>
    )
}
export default Header