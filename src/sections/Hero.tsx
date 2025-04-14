import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";

export const HeroSection = () => {
  return (
    <div className="py-32">
      <div className="container">
        <div className="flex flex-col items-center justify-cente gap-2">
          <Image src={memojiImage}
                className = "size-[100px]"
                alt="Person behind computer" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="font-medium">Available for new Android and Web Development projects</div>
          </div>
          <h1 className="text-3xl text-center justify-center mt-8 tracking-wide">PRIYANSHU YADAV</h1>
          <p className="mt-4 text-center tex-white/80">
            I am a Second Year Information Technology and Mathematics student at Cluster Innovation Center, University of Delhi.
            <br/>
            Passionate developer with a keen interest in Android and Web Development.
            <br/> 
            Looking for opportunities to work on exciting projects and collaborate with talented individuals.
          </p>
        </div>  
        
        <div className="flex flex-col items-center justify-center mt-8 gap-4">
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