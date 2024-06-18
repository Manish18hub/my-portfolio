import logo from "../assets/logoManish.png"
import { TfiEmail } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

const Navbar = () => {
  return <nav className=" mb-10 flex items-center justify-between py-6"> 
  <div className="flex flex-shrink-0 items-center">
    <img className=" w-20"src={logo} alt="logo" />
  </div>
  <div className="m-8 flex items-center justify-center gap-4 text-2xl">
    <a href="mailto:manishprasad2002@gmail.com">
      <TfiEmail/>
    </a>
    <a href="https://www.linkedin.com/in/manish-pd18/">
    <FaLinkedin/>
    </a>
    <a href="https://github.com/Manish18hub">
    <FaGithub/>
    </a>
    <a href="https://www.instagram.com/themanish.18?igsh=Z2tieWRmaW1veXdv">
    <FaInstagram/>
    </a>
    

  </div>
  </nav>
}

export default Navbar
