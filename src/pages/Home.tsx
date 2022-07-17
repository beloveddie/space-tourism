import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="Home min-h-screen w-full pt-32 pb-4 text-center md:pt-60">
      <h5 className="text-base text-secondary tracking-[2.7px] md:text-xl">
        SO, YOU WANT TO TRAVEL TO
      </h5>
      <h1 className="text-[80px] md:text-[150px]">SPACE</h1>
      <p className="sm:text-[15px] text-secondary px-3 mt-4 font-light leading-relaxed md:w-[444px] md:px-1 md:mx-auto md:mt-0 md:text-base md:leading-7">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>

      <button className="noSelect transition ease-linear delay-150 bg-primary hover:transition-all focus:outline hover:outline outline-primary/10 outline-[50px] text-dark tracking-[2px] font-bellefair text-xl rounded-full w-[160px] h-[160px] mx-auto mt-12  flex justify-center items-center md:w-60 md:h-60 md:text-[32px] md:mt-40">
        <Link to={"/destination"}>EXPLORE</Link>
      </button>
    </section>
  );
};

export default Home;
