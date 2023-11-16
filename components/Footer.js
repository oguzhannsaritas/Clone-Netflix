import React from "react";

const Footer =()=>{
    return(
        <section className="  mt-2 bg-black " >
            <div className="py-10   text-gray-500  bg-black lg:flex-row lg:px-20 xl:px-52 ">
                <h1 className="px-5">
                    Sorularınız mı var? 0850-390-7444 numaralı telefonu arayın
                </h1 >
                <div  className="flex  flex-col sm:flex-row justify-between py-5 px-5 flex-wrap">
                    <ul className="text-gray-400 cursor-pointer w-36">
                        <li className="hover:underline">SSS</li>
                        <li className="hover:underline">Yatırımcı İlişkileri</li>
                        <li className="hover:underline">Kullanım Koşulları</li>
                        <li className="hover:underline">Bize Ulaşın</li>
                    </ul>
                    <ul className="text-gray-400 cursor-pointer w-36">
                        <li className="hover:underline">Yardım Merkezi</li>
                        <li className="hover:underline">İş İmkanları</li>
                        <li className="hover:underline">Gizlilik</li>
                        <li className="hover:underline">Hız Testi</li>
                    </ul>
                    <ul className="text-gray-400 cursor-pointer w-36" >
                        <li className="hover:underline">Hesap</li>
                        <li className="hover:underline">Hediye Kartı Kullan</li>
                        <li className="hover:underline">Çerez Tercihleri</li>
                        <li className="hover:underline">Yasal Hükümler</li>
                    </ul>
                    <ul className="text-gray-400 cursor-pointer w-36">
                        <li className="hover:underline">Medya Merkezi</li>
                        <li className="hover:underline">İzleme Yolları</li>
                        <li className="hover:underline">Kurumsal Bilgiler</li>
                        <li className="hover:underline">Sadece Netflix'te</li>
                    </ul>
                </div>

            </div>
            <div className="px-5">
                <select name="Languge" id="Languge"
                        className="bg-transparent outline outline-1 outline-white text-white p-1">
                    <option value="Turkish">Turkish</option>
                    <option value="English">English</option>
                </select>
            </div>
            <h1 className="px-5 py-4 text-white">
                Netflix Türkiye
            </h1>

        </section>
    )
}
export default Footer