import React from "react";
import Image from "next/image";

const ChildProfil = ()=>{
    return(
        <section className="  mt-2 bg-black" >
            <div className="py-10 flex items-center justify-center flex-col  lg:flex-row xl:px-20">
                <div className="text-white  text-center px-10 lg:text-start">
                    <h1 className="text-4xl md:text-5xl">
                        Çocuklarınız için profiller oluşturun
                    </h1>
                    <p className="text-xl md:text-2xl  py-4">
                        Üyeliğinize dâhil olan bu ücretsiz deneyim sayesinde çocuklarınız, sadece onlara özel bir alanda en sevdikleri karakterlerle maceralara atılabilir.                    </p>
                </div>
                <Image src="https://occ-0-3175-1432.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABf9FUgiWN4GTIJexNEV8ZW_SPzGYmxKo7TaBfIoriNNfn85AMMEcvM61PwQ-NhPzGXz2qu53lDDcCuf0rH9FWOYBpvhUc2dQxIAQ.png?r=533"
                       width={600}
                       height={500}
                       alt="Children">
                </Image>

            </div>
        </section>
    )
}

export default ChildProfil
