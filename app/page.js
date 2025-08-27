import AnimatedText from "@/components/AnimatedText";
import Workxp from "@/components/Workxp";

export default function Home() {
  return (
    <>
      <div className="front my-20 flex md:flex-row flex-col justify-between md:px-40 items-center min-h-[50vh]">
        <div className="left flex flex-col gap-4">
          <div className="text mb-11 gap-2 flex flex-col">
            <h1 className="text-4xl flex items-end">
              <div className="flex flex-col md:flex-row gap-2 md:gap-0">
                <span>Hi,</span>
                <span className="md:pl-2">My name is</span>
              </div>
              <span className="text-violet-600 pl-2"><AnimatedText text={"Aritrik"} /></span>
            </h1>
            <h1 className="text-4xl">and I am a passionate</h1>
            <h1 className="text-4xl text-violet-600">Web Developer</h1>
          </div>
          <div className="button flex gap-3">
            <button className="bg-gray-900 text-gray-200 px-2 p-1 rounded-md border-2 border-gray-500">Download Resume</button>
            <button className="bg-gray-900 text-gray-200 px-2 p-1 rounded-md border-2 border-gray-500">Visit Github</button>
          </div>
        </div>
        <div className="right md:mt-0 mt-20">
          <img src="developer.png" className="rounded-full border-3 border-violet-900" width={350} height={200} alt="" />
        </div>
      </div>
      <h1 className="border-b border-white/10 my-20"></h1>
      <div className="workexperience md:mx-40 mx-auto">
        <div className="flex flex-col my-5">
          <span className="text-violet-700">What I have done so far</span>
          <h1 className="text-3xl font-bold">Work Experience</h1>
        </div>

        <div className="flex w-full md:gap-0 gap-4 md:flex-row flex-col">
          <Workxp
            role={"Web Developer"}
            comp={"Company Name | 2022 - Present"}
            desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
          />
          <Workxp
            role={"Web Developer"}
            comp={"Company Name | 2022 - Present"}
            desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
          />
          <Workxp
            role={"Web Developer"}
            comp={"Company Name | 2022 - Present"}
            desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
          />
          <Workxp
            role={"Web Developer"}
            comp={"Company Name | 2022 - Present"}
            desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
          />
          <Workxp
            role={"Web Developer"}
            comp={"Company Name | 2022 - Present"}
            desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
          />
          <Workxp
            role={"Web Developer"}
            comp={"Company Name | 2022 - Present"}
            desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
          />
        </div>
      </div>
    </>
  );
}
