import React from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs'
import { AiTwotoneSetting } from 'react-icons/ai'
import { CgFileDocument } from 'react-icons/cg'
import { HiOutlineDocumentReport } from 'react-icons/hi'
import { FaCalendarAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import om from '../dashboardLayout/om.png'
const navItems = [
    {
        name: "Dashboard",
        icon: <BiHomeAlt />,
        link:"/"
    },
    {
        name: "Recruitment",
        icon: <BsPeople />,
        link:"/recruitment"
    },
    {
        name: "OnBoarding",
        icon: <CgFileDocument />,
        link:"/onboarding"
    },
    {
        name: "Reports",
        icon: <HiOutlineDocumentReport />,
        link:"/reports"
    },
    {
        name: "Calendar",
        icon: <FaCalendarAlt />,
        link:"/calendar"
    },
    {
        name: "Settings",
        icon: <AiTwotoneSetting />,
        link:"/settings"
    }
]

const DashboardLayout = ({ children }) => {
    return (
        <div className="dashboard-layout">
            <nav className="side-nav-bar">
                <div className="logo-container">
                <h3>Newton HR</h3>
                </div>
                <div className="nav-container">
                    {navItems.map((navItem, index) => (
                        <Link key={index} to = {navItem.link}>
                        <div key={index} className="nav-item">
                            {navItem.icon}
                            <label className="item-name">{navItem.name}</label>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="image-container">
                <img src={om} alt="logo" width="80px" height="80px"/>
                </div>
                </nav>
            <div className="main-container">
                 {children}
            </div>
                
        </div>
    )
}

export default DashboardLayout;