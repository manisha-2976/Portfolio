import React from "react";
import { FaCss3, FaHtml5, FaJs, FaPython, FaNodeJs, FaJava, FaGitAlt, FaGithub, FaBootstrap } from "react-icons/fa";
//import { SiRadis } from "react-icons/si";
import { FaReact } from "react-icons/fa";
// import { SiVscode } from "react-icons/si";
import { SiMongodb, SiExpress, SiTailwindcss, SiPostman, SiAxios } from "react-icons/si";

const Skills = () => {
    return (
        <div id="Skills" className='p-10 md:p-24'>
            <h1 className='text-2xl md:text-4xl text-white font-bold text-center'>Technical Skills</h1>
            
            <div className='flex flex-wrap justify-center gap-6 sm:p-5 md:p-16 lg:px-40 py-16'>

                <div className='p-3 w-36 bg-zinc-950 flex flex-col items-center rounded-2xl hover:scale-105 duration-300'>
                    <FaHtml5 color="#E34F26" size={90} />
                    <h3 className="text-white p-4">HTML</h3>
                </div>

                <div className='p-3 w-36 bg-zinc-950 flex flex-col items-center rounded-2xl hover:scale-105 duration-300'>
                    <FaCss3 color="#1572B6" size={90} />
                    <h3 className="text-white p-4">CSS3</h3>
                </div>

                <div className='p-3 w-36 bg-zinc-950 flex flex-col items-center rounded-2xl hover:scale-105 duration-300'>
                    <FaReact color="#61DAFB" size={90} />
                    <h3 className="text-white p-4">React Js</h3>
                </div>

                <div className='p-3 w-36 bg-zinc-950 flex flex-col items-center rounded-2xl hover:scale-105 duration-300'>
                    <SiExpress color="gray-400" size={90} />
                    <h3 className="text-white p-4">Express Js</h3>
                </div>

                <div className='p-3 w-36 bg-zinc-950 flex flex-col items-center rounded-2xl hover:scale-105 duration-300'>
                    <FaJs color="#F7DF1E" size={90} />
                    <h3 className="text-white p-4">JavaScript</h3>
                </div>

                <div className='p-3 w-36 bg-zinc-950 flex flex-col items-center rounded-2xl hover:scale-105 duration-300'>
                    <FaNodeJs color="#3C873A" size={90} />
                    <h3 className="text-white p-4">Node Js</h3>
                </div>

                <div className='p-3 w-36 bg-zinc-950 flex flex-col items-center rounded-2xl hover:scale-105 duration-300'>
                    <FaJava color="#007396" size={90} />
                    <h3 className="text-white p-4">Java</h3>
                </div>

                <div className='p-3 w-36 bg-zinc-950 flex flex-col items-center rounded-2xl hover:scale-105 duration-300'>
                    <FaPython color="#3776AB" size={90} />
                    <h3 className="text-white p-4">Python</h3>
                </div>

                <div className='p-3 w-36 bg-zinc-950 flex flex-col items-center rounded-2xl hover:scale-105 duration-300'>
                    <SiMongodb color="#47A248" size={90} />
                    <h3 className="text-white p-4">MongoDB</h3>
                </div>

                <div className='p-3 w-36 bg-zinc-950 flex flex-col items-center rounded-2xl hover:scale-105 duration-300'>
                    <SiTailwindcss color="#06B6D4" size={90} />
                    <h3 className="text-white p-4">Tailwind Css</h3>
                </div>

                <div className='p-3 w-36 bg-zinc-950 flex flex-col items-center rounded-2xl hover:scale-105 duration-300'>
                    <FaBootstrap color="#7952B3" size={90} />
                    <h3 className="text-white p-4">Bootstrap</h3>
                </div>

                <div className='p-3 w-36 bg-zinc-950 flex flex-col items-center rounded-2xl hover:scale-105 duration-300'>
                    <FaGitAlt color="#F05032" size={90} />
                    <h3 className="text-white p-4">Git</h3>
                </div>

                <div className='p-3 w-36 bg-zinc-950 flex flex-col items-center rounded-2xl hover:scale-105 duration-300'>
                    <FaGithub color="white" size={90} />
                    <h3 className="text-white p-4">Github</h3>
                </div>

                {/* <div className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <FaCode color="#47A248" size={50} />
                    </div> */}

                <div className='p-3 w-36 bg-zinc-950 flex flex-col items-center rounded-2xl hover:scale-105 duration-300'>
                    <SiPostman color="#FF6C37" size={90} />
                    <h3 className="text-white p-4">Rest API</h3>
                </div>

            </div>

        </div>
    )
}

export default Skills;
