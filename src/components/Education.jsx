import { EDUCATION } from "../constants"
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2 
         whileInView={{opacity:1,y:0}}
         initial ={{opacity:0 , y:-100}}
         transition={{duration:0.5}}
        className="my-20 text-center text-4xl"> Education
        </motion.h2>
      <div>
     {EDUCATION.map((education, index) => (

<div key={index} className="mb-8 flex flex-wrap lg:justify-center">
<motion.div 
whileInView={{opacity:1, x:0} }
initial={{opacity:0, x: -100}}
transition={{duration:1}}
className="w-full lg:w-3/12">
<p className="mt-2 mr-2 mb-2 text-sm text-violet-400"> 
    {education.year} </p>
</motion.div>
<motion.div 
whileInView={{opacity:1, x:0} }
initial={{opacity:0, x: 100}}
transition={{duration:1}}
className="w-full max-w-xl lg:w-3/4">
<h6 className="mb-2 text-xl font-bold">
    {education.name} <br/>
    <span className="text-sm font-semibold"> {education.degree} </span>
    
</h6>
<p className=" mb-4 text-sm font-semibold text-neutral-400"> {education.cgpa}</p>

</motion.div>
</div>
   
     ))}
      </div>
    </div>
  );
};

export default Education
