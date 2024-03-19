import React, { useState } from 'react';
import '../CSS/sidebar.css';
import Header from './Header';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Home",
            icon: <FaTh />
        },
        {
            path: "/AboutUs",
            name: "About",
            icon: <FaUserAlt />
        },
        {
            path: "/AddCourse",
            name: "AddCourse",
            icon: <FaRegChartBar />
        },
        {
            path: "/ViewCourses",
            name: "ViewCourse",
            icon: <FaCommentAlt />
        },
        {
            path: "/product",
            name: "Crop",
            icon: <FaShoppingBag />
        },
        {
            path: "/Admin",
            name: "All User List",
            icon: <FaThList />
        }
    ]
    return (
        <>
        <Header></Header>
        <div className="container ">
            <div style={{ left: isOpen ? "0" : "-200px" }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Logo</h1>
                    <div style={{ marginLeft: isOpen ? "200px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeClassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
        </>
    );
};

export default Sidebar;