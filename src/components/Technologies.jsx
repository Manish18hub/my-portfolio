import { TbBrandCpp } from "react-icons/tb";
import { FaJava } from "react-icons/fa6";
import { RiHtml5Fill } from "react-icons/ri";
import { RiCss3Fill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { RiReactjsFill } from "react-icons/ri"
import { RiTailwindCssFill } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";
import { animate, motion } from "framer-motion";

const iconVariants=(duration) => ({
    initial: {y: -10},
    animate: {
        y : [10, -10],
        transition :{
            duration : duration,
            ease: "linear",
            repeat : Infinity,
            repeatType: "reverse",
        },
    },

})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial ={{opacity:0 , y:-100}}
        transition={{duration:1.5}}

        className="my-20 text-center text-4xl"> Technical Skills</motion.h2>

        <motion.div 
        whileInView={{opacity:1, x:0} }
        initial={{opacity:0, x: -100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-3 ">
            
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"

            className="round-2xl border-4 border-neutral-800 p-3 ">
                  
                  <TbBrandCpp className="text-7xl text-sky-500"/>
              
               </motion.div>
            <motion.div 
            
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="=rounded-2xl border-4 border-neutral-800 p-3">
                <FaJava className="text-7xl "/>
            </motion.div>
            <motion.div 
             variants={iconVariants(6)}
             initial="initial"
             animate="animate"
            className="=rounded-2xl border-4 border-neutral-800 p-3">
                

                <RiHtml5Fill className="text-7xl text-red-400"/> 
            </motion.div>

            <motion.div 
             variants={iconVariants(6.5)}
             initial="initial"
             animate="animate"
            className="=rounded-2xl border-4 border-neutral-800 p-3">
                <RiCss3Fill className="text-7xl text-blue-700"/>
            </motion.div>

            <motion.div 
             variants={iconVariants(5)}
             initial="initial"
             animate="animate"
            className="=rounded-2xl border-4 border-neutral-800 p-3">
                <RiJavascriptFill className="text-7xl text-yellow-400"/>
            </motion.div>

            <motion.div 
             variants={iconVariants(4.5)}
             initial="initial"
             animate="animate"
            className="=rounded-2xl border-4 border-neutral-800 p-3">
                <RiReactjsFill className="text-7xl text-cyan-400"/>
            </motion.div>
            
            <motion.div 
             variants={iconVariants(3.5)}
             initial="initial"
             animate="animate"
            className="=rounded-2xl border-4 border-neutral-800 p-3">
                <RiTailwindCssFill className="text-7xl text-blue-400"/>
            </motion.div>
            <motion.div
             variants={iconVariants(6)}
             initial="initial"
             animate="animate"
              className="=rounded-2xl border-4 border-neutral-800 p-3">
                <FaDatabase className="text-7xl text-orange-500"/>
            </motion.div>
           
          
            
        </motion.div>
      </div>
  )
}

export default Technologies
