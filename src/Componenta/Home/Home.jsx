import React from 'react'
import TextChange from '../TextChange'

const Home = () => {
  return (
    <div className="text-white justify-between item-start p-10 md:p-20">
      <div className="md:w-[48rem] md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-xl tracking-tight">
        Passionate about building responsive and user-friendly web applications using modern technologies.
        </p>

        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] ">
          Contact Me
        </button>

      </div>
              {/* <div >
                  <img className="w-2/5" src="" alt="" />
              </div> */}
    </div>
  );
};


export default Home