import profilePic from "../assets/premium.jpg"
import { delay, motion } from "framer-motion" 

const container =(delay) => ({
  hidden: {x:- 100, opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration: 0.5 , delay: delay},
  }
})
const Hero = () => {
  return (
    
         <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
               <motion.h1 
                variants={container(0)}
                initial="hidden"
                animate="visible"
               className="pb-4 text-5xl font-thin tracking-tight lg:mt-1/2 lg:text-8xl">
                Manish Prasad 
                </ motion.h1>
                <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
               
                className="bg-gradient-to-r from-sky-300 via-blue-300 to bg-cyan-700 bg-clip-text text-3xl tracking-tight text-transparent"> 
                    Frontend Developer
                    </motion.span> 
               <motion.p 
               variants={container(1)}
               initial="hidden"
               animate="visible"
               className="my-2 max-w-xl py-8 font-light tracking-">
               A highly motivated and innovative individual with profound knowledge of programming 
               languages with expertise in Front-end development and seeking to leverage my technical skills and collaborative mindset to contribute effectively within a dynamic team environment.
              
               </motion.p>
               
        </div>
        </div>
        <div className="w-full  lg:w-1/2 lg:p- ">
       <div className="flex justify-center ">
        <motion.img 
         initial={{x:100 , opacity:0}}
         animate={{x:0, opacity:1}}
         transition={{duration:1, delay:1.2}}
        src={profilePic} alt="Manish Prasad" />
        </div>
        </div>
        </div>
       </div>
  )
}

export default Hero
