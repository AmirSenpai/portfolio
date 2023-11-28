import React from "react";

function Intro(){
    return(
        <div className="flex items-center
        justify-center flex-col text-center
        pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">AmirHossinD</h1>
            {/* TODO fix p tags */}
            <p className="text-base md:text-xl mb-3 font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            <p className="text-sm max-w-xl mb-6 font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, doloribus!</p>{' '}
            <a href="htps://www.github.com/AmirSenpai"
            terget="_blank"
            className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
            rel="noreferrer noopener">
                AmirHossin on GitHub
            </a>
        </div>
    )
}

export default Intro;