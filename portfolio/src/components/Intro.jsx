import React from "react";

function Intro() {
  return (
    <div
      className="flex items-center
        justify-center flex-col text-center
        pt-20 pb-6"
    >
      <h1 className="text-2xl md:text-5xl dark:text-white mb-1 md:mb-3 font-bold">
        AmirHossinDoosti - AmirSenpai
      </h1>
      <p className="text-stone-700 text-base md:text-lg mb-3 font-medium dark:text-stone-300">
        Hello, My name is AmirHossin. I'm a indie-freelancer junior developer
        from Iran, nice to meet you!
      </p>
      {/* TODO fix p tags */}
      <p className="text-sm max-w-xl mb-6 font-bold">
        -
      </p>{" "}
      <a
        href="htps://www.github.com/AmirSenpai"
        terget="_blank"
        className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
        rel="noreferrer noopener"
      >
        CLick To See My Profile And Other Projects On{" "}
        <span className="text-stone-900 ">GitHub</span>
      </a>
    </div>
  );
}

export default Intro;
