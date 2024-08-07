import Link from 'next/link'
import React from 'react'
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxLinkedinLogo
} from "react-icons/rx"

const Footer = () => {
  return (
    <div className='w-full h-auto bg-transparent text-gray-200 shadow-lg p-[15px]'>
        <div className='w-full flex flex-col items-center justify-center m-auto'>
            <div className='w-full h-full flex flex-row items-center justify-around flex-wrap'>
                <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                    <div className='font-bold text-[16px]'>Community</div>
                    <Link legacyBehavior href='https://discord.gg/D6DEqg85Ef' passHref>
                        <a className='flex flex-row items-center my-[15px] text-gray-200 hover:text-blue-500' target='_blank' rel="noopener noreferrer">
                            <RxDiscordLogo className='text-[20px]'/>
                            <span className='text-[15px] ml-[6px]'>Discord</span>
                        </a>
                    </Link>
                    <Link legacyBehavior href='https://github.com/JH-A-Kim' passHref>
                        <a className='flex flex-row items-center my-[15px] text-gray-200 hover:text-black' target='_blank' rel="noopener noreferrer">
                            <RxGithubLogo className='text-[20px]'/>
                            <span className='text-[15px] ml-[6px]'>Github</span>
                        </a>
                    </Link>
                </div>
                <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                    <div className='font-bold text-[16px]'>Social Media</div>
                    <Link legacyBehavior href='https://www.instagram.com/andaruce/' passHref>
                        <a className='flex flex-row items-center my-[15px] text-gray-200 hover:text-pink-500' target='_blank' rel="noopener noreferrer">
                            <RxInstagramLogo className='text-[20px]'/>
                            <span className='text-[15px] ml-[6px]'>Instagram</span>
                        </a>
                    </Link>
                    <Link legacyBehavior href='https://www.linkedin.com/in/jung-hyun-andrew-kim-bb04822b6/' passHref>
                        <a className='flex flex-row items-center my-[15px] text-gray-200 hover:text-blue-600' target='_blank' rel="noopener noreferrer">
                            <RxLinkedinLogo className='text-[20px]'/>
                            <span className='text-[15px] ml-[6px]'>LinkedIn</span>
                        </a>
                    </Link>
                </div>
                <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                    <div className='font-bold text-[16px]'>About</div>
                    
                    <p className='flex flex-row items-center my-[15px]'>
                        <span className='text-[15px] ml-[6px]'>Learning About Me</span>
                    </p>
                    <p className='flex flex-row items-center my-[15px]'>
                        <span className='text-[15px] ml-[6px]'>JHAKIMCS03@outlook.com</span>
                    </p>
                </div>
            </div>
            <div className='mb-[20px] text-[15px] text-center'>
                &copy; Jung-Hyun Andrew Kim 2024 All Rights Reserved. Logo Designed by FreePik.
            </div>
        </div>
    </div>
  )
}

export default Footer
