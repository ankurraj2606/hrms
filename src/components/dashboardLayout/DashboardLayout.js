import React from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs'
import { AiTwotoneSetting } from 'react-icons/ai'
import { CgFileDocument } from 'react-icons/cg'
import { HiOutlineDocumentReport } from 'react-icons/hi'
import {FaCalendarAlt} from 'react-icons/fa'
const navItems = [
    {
        name: "Dashboard",
        icon:<BiHomeAlt/>
    },
    {
        name: "Recruitment",
        icon:<BsPeople/>
    },
    {
        name: "OnBoarding",
        icon:<CgFileDocument/>
    },
    {
        name: "Reports",
        icon:<HiOutlineDocumentReport/>
    },
    {
        name: "Calendar",
        icon:<FaCalendarAlt/>
    },
    {
        name: "Settings",
        icon:<AiTwotoneSetting/>
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
                        <div key={index} className="nav-item">
                            {navItem.icon}
                            <label className="item-name">{navItem.name}</label>
                            
                        </div>
                    ))}
                </div>
                </nav>
            <div className="main-container">
                here are children
                 {children}
            </div>
                
        </div>
    )
}

export default DashboardLayout;