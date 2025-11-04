import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <p>About us</p>
            <Link to="/about/more" >More About</Link>
            <Outlet />
        </div>
        

    )
}

export default About