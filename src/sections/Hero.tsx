import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import StarIcon from "@/assets/icons/star.svg";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="size-[720px] hero_ring"></div>
      <div className="size-[920px] hero_ring"></div>
      <div className="size-[1120px] hero_ring"></div>
      <div className="size-[1320px] hero_ring"></div>
      <div className="size-[1520px] hero_ring"></div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="border border-red-500 size-[800px] animate-spin [animation-duration:30s]">
          <div className="border border-red-500 inline-flex animate-spin [animation-duration:5s]">
            <StarIcon className="size-28 text-emerald-300" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="flex flex-col items-center justify-cente gap-2">
          <Image src={memojiImage}
                className = "size-[100px]"
                alt="Person behind computer" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="font-medium">Available for new Android and Web Development projects</div>
          </div>

          <div className="max-w-lg mx-auto">
            <h1 className="text-3xl md:text-5xl text-center justify-center mt-8 tracking-wide">PRIYANSHU YADAV</h1>
            <p className="mt-8 text-center text-white/80 md:text-lg">
              I am a Second Year Information Technology and Mathematics student at Cluster Innovation Center, University of Delhi.
              <br/>
              Passionate developer with a keen interest in Android and Web Development.
            </p>
          </div>
        </div>  
        
        <div className="flex flex-col md:flex-row items-center justify-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/20 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore my work and experience</span>
            <ArrowDown className="size-4"/>
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl hover:bg-white/70 hover:text-gray-900">
            <span>👋</span>
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};