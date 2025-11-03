import React from 'react'
import { IoArrowForward } from "react-icons/io5";


const About = () => {
    return (<div
        id="About" className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black
        shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
        <div>
            <h2 className="text-2xl md:text-4xl font-bold md:px-12 text-center">About</h2>
            <div className="flex flex-col md:flex-row gap-10 md:gap-32 p-6 md:p-12 justify-center items-center">
                <img className="w-48 h-52 md:h-[21rem] md:w-60 object-cover rounded-2xl shadow-lg" src='me.jpg' alt="About Img" />

                <div className="flex w-[24rem]">
                    <p className="text-sm md:text-base leading-relaxed text-center leading-tight md:text-left">
                        I am a <b>Full-Stack Developer</b> with hands-on experience in developing and maintaining web applications using modern technologies such as <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>React.js</b>, <b>Node.js</b>, <b>Express.js</b>, and <b>MongoDB</b>. <br />
                        I have a solid understanding of both frontend and backend development, allowing me to build complete, end-to-end solutions. I pay close attention to code structure, performance, and usability, ensuring a smooth experience for users and easy maintainability for teams. <br />
                        I’m eager to apply my technical skills to real-world projects, collaborate with experienced professionals, and continue learning advanced tools and frameworks to grow as a developer.

                    </p>
                </div>


            </div>

        </div>

    </div>
    )
}

export default About