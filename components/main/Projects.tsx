import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20' id="projects">My Projects</h1>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
            <ProjectCard src='/SFUConnect3.png' title='SFUConnect' description='SFU Connect is a dynamic app designed to streamline the process of discovering events and engaging with clubs at Simon Fraser University (SFU). By consolidating all club and event information into one user-friendly platform, SFU Connect makes it easier for students to find and join clubs that match their interests.' />
            <ProjectCard src='/CustomShell.png' title='Custom Shell' description='This is a simple program written in C that provides basic command-line functionality, including executing commands, managing history, handling signals, and supporting built in commands like cd, pwd, history, and exit.' />
            <ProjectCard src='/HaunTower.png' title='HaunTower' description='Simple 2D game that uses Java libraries like JFrame, JWindow, etc' link='https://github.com/JH-A-Kim/HaunTower'/>
        </div>
    </div>
  )
}

export default Projects