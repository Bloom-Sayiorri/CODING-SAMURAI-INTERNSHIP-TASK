// import React from 'react'
// import { NavLink } from 'react-router-dom'

// function Home() {
//   return (
//     <section className="flex justify-center items-center">
//         <div className="">
//             <h3 className="text-[3.2rem] font-bold">Hello, It's Me</h3>
//             <h1 className="text-[5.6rem] font-bold leading-[1.3]">Bloom Tauta</h1>
//             <h3 className="mb-[2rem]">And I'm a <span className="multiple-text">Frontend Developer</span></h3>
//             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit quod iusto vel et, architecto quasi aliquam facere minima iste corporis labore sed ratione officia, cupiditate aspernatur fugiat, qui dicta laborum!</p>
//             <div className="inline-flex justify-center items-center text-[#0ef]">
//                 <NavLink href="#" className="font-[2rem] hover:text-[#0ef] hover:bg-[#323946]"><i className="bx bxl-facebook"></i></NavLink>
//                 <NavLink href="#"><i className="bx bxl-twitter"></i></NavLink>
//                 <NavLink href="#"><i className="bx bxl-instagram-alt"></i></NavLink>
//                 <NavLink href="#"><i className="bx bxl-linkedin"></i></NavLink>
//             </div>
//             <a href="#" className="btn">Download CV</a>
//         </div>
        
//         <div className="home-img">
//             <img src="images/home.jpg" alt="Home" height="300px" width="270px" style={{borderRadius: "10px"}}/>
//         </div>
//     </section>
//   )
// }

// export default Home
import React from 'react';
import '../styles/home.css';
import dev from '../assets/dev.png';

function Home() {
  return (
    <div className='home'>
      <section className='details'>
        <h1 className='heading'>Software Developer</h1>
        <p>After writing my first line of code which was <span className='code'><q>Hello, World!</q></span>, I was hooked. I started to enjoy coding and was keen to explore this new path having come from the field of Aeronautical Engineering.</p>
        <p>Since then I have developed an interest in creating websites to showcase my ideas and how I bring them to lfe.</p>
        {/* <p>I'm a Software Engineer from Nairobi, Kenya passionate about coming up with solutions to everday problems in life.</p>
        <p>Having attended a bootcamp, I realized how much untapped potential there is in the tech industry.</p> */}
      </section>
      <section className='img_container'>
        <img className='image' src={dev} alt='dev_image'/>
      </section>
    </div>
  )
}

export default Home