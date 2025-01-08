import Link from 'next/link';
import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
const Footer = () => {
    return (
        <div className='block text-center mx-auto'>
            <div className='my-3 flex justify-center items-center gap-2 mx-auto text-center'>
            <Link className='icon' href={"https://www.linkedin.com/in/leman-gahramanova-0a3b6b2a5/"}>
                <FaLinkedinIn />
            </Link>
            <Link className='icon' href={"https://github.com/Gahramanoval301"}>
                <FaGithub />
            </Link>
            <a className='icon' href="mailto:gahramanovalamann@gmail.com"><IoMailOutline/></a>
            </div>
            <div className='flex justify-center items-center gap-1 my-2'>Copyright <FaRegCopyright /> Gahramanova Leman</div>
        </div>
    )
}

export default Footer