import aboutImg from "../assets/about.png"
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2 
         whileInView={{opacity:1,y:0}}
         initial ={{opacity:0 , y:-100}}
         transition={{duration:1}}
        className="my-12 text-center text-4xl">
            About me
           
            </motion.h2>
            <div className="flex flex-wrap">
                <motion.div 
                 whileInView={{opacity:1 , x:0}}
                 initial={{opacity:0, x:-100}}
                 transition={{duration:1}}
                
                className="  mr-12 w-full lg:w-4/12 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className="rounded-2xl" src={aboutImg} alt="about" />
                </div>
               </motion.div>
               <motion.div 
               whileInView={{opacity:1,x:0}}
               initial={{opacity:0, x:100}}
               transition={{duration:0.7}}
               
               className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2  max-w-xl py-12 font-light tracking-" >
                    


                 I am a recent passout student of batch 2024 with a B.Tech degree in Computer Science and Engineering,
                  equipped with a robust foundation in both theoretical and practical aspects of the field. 
                 My academic journey has provided me with comprehensive knowledge in areas such as software development, 
                 data structures and algorithms,web development and database management system
                and I am eager to contribute with my strong technical skills and having a keen desire to learn 
                in a challenging entry-level software development roles.
                Possesses hands-on project experience in Java and Web development, 
                with a focus on problem-solving and delivering high-quality solutions.
                A proactive team player with excellent communication skills 
                and a passion for leveraging emerging technologies to drive innovation.
                    </p>
                    </div>
                    </motion.div>
            </div>
             </div>
  )
}

export default About
