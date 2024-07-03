import React from 'react'
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import './Drawer.css';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Drawer = ({ isOpen, toggleDrawer, img }) => {
    return (
        <>
            <div
                className={`container-drawer ${isOpen ? "block" : "hidden"}`}
                onClick={toggleDrawer}
            ></div>
            <section
                className={`section-drawer ${isOpen ? "open" : "notOpen"}`}
            >
                <div className='drawer-header'>
                    <FaRegArrowAltCircleLeft
                        style={{ fontSize: "30px", cursor: "pointer" }}
                        onClick={toggleDrawer}
                    />
                    <Link to="/">
                        <img
                            src={img}
                            alt="logo"
                            style={{ width: '180px' }}
                        />
                    </Link>
                </div>
                <div className='nav-container'>
                    <Nav drawerOpen={isOpen} />
                </div>
            </section>
        </>
    )
}

export default Drawer;