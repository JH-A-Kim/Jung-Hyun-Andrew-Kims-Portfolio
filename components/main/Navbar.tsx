"use client";

import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

export const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
        <div className='w-full h-full flex flex-row items-center justify-between'>
           <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
            <Image 
                src="/NavLogo.png"
                alt="logo"
                width={40}
                height={40}
                className="cursor-pointer hover:animate-slowspin"
            />

            <span className='font-bold ml-[10px] hidden md:block text-gray-300'>
                Jung-Hyun Andrew Kim
            </span>
            </a> 
            <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
                <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
                    <a href='#about-me' className='cursor-pointer'>About Me</a>
                    <a href='#skills' className='cursor-pointer'>Skills</a>
                    <a href='#projects' className='cursor-pointer'>Projects</a>
                </div>
            </div>

            <div className='flex flex-row gap-5'>
                <Link href={'https://www.instagram.com/andaruce/'}>
                    <Image
                    key={'Instagram'}
                    src={'/instagram.svg'}
                    alt={'Instagram'}
                    width={24}
                    height={24}
                    />
                </Link>
                <Link href={"https://discord.gg/D6DEqg85Ef"}>
                    <Image
                    key={'Discord'}
                    src={'/discord.svg'}
                    alt={'Discord'}
                    width={24}
                    height={24}
                    />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar