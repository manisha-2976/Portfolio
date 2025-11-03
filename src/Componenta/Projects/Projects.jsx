import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div Id="Projects" className='py-10 md:p-20 text-white'>
      <h1 className='text-2xl md:text-4xl text-white font-bold text-center'>Projects</h1>
      <div className='py-12 px-0 flex flex-wrap justify-center gap-4'>
        <ProjectCard title="WanderLust" tech="JavaScript, CSS, Express.js, Node.js, MongoDB, EJS."
          main="A travel destination web app where users can create, manage, and explore listings. Built with Node.js, Express.js, EJS, and MongoDB using the MVC pattern, with map integration and secure user authentication." image="wanderlust.png" github="https://github.com/manisha-2976/WanderLust" link="https://wanderlust-ki6a.onrender.com"
        />
        <ProjectCard title="Weather App" tech="Technologies:  HTML, CSS, JavaScript, openweatherapi"
          main="A responsive weather forecasting web app built with HTML, CSS, and JavaScript. Fetches real-time weather data using a Weather API and displays 3-hour interval forecasts for the next 24 hours." image="weather-app.png" github="https://github.com/manisha-2976/Weather-App" link="https://weather-app-dlyt.onrender.com" 
        />
        <ProjectCard title="Food delivery website" tech="Technologies:  HTML, CSS, JavaScript"
          main="A front-end food delivery web application developed using HTML, CSS, and JavaScript. Includes an interactive menu, responsive design, and dynamic cart functionality for a seamless user experience." image="foodapp.png" github="https://github.com/manisha-2976/Food-Delivery-Website" link="https://food-delivery-amber-pi.vercel.app/"
        />
      </div>
    </div>
  )
}

export default Projects
