import React from 'react';
import './Skills.css';
import { FormattedMessage } from 'react-intl';
//importando iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaBootstrap } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaPhp } from "react-icons/fa6";
import { BiLogoJava } from "react-icons/bi";
import { FaDatabase } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { BiLogoTypescript } from "react-icons/bi";
import {
    faGitAlt, faGithub, faCss3Alt,
    faHtml5, faReact, faBootstrap,
    faJs, faJava, faPhp
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
    return (
        <div className='container_skills' id='skills'>
            <svg className='skills_efecto_onda' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#E6D5BB" d="M0,256L48,250.7C96,245,192,235,288,240C384,245,480,267,576,266.7C672,267,768,245,864,240C960,235,1056,245,1152,256C1248,267,1344,277,1392,282.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <div className='cajapadre-skill'>
                <h1 className='letraTitulo skill_title' >
                    <FormattedMessage
                        id="Skills.Titulo"
                        defaultMessage="Habilidades"
                    />

                </h1>
                <div className='container_skills_iconos'>
                    <div className='caja'>
                        <IoLogoHtml5 className="img" style={{ color: "#b65520", }} />
                        <h1 className='texto'>HTML</h1>
                    </div>
                    <div className='caja'>
                        <FaCss3Alt className="img" style={{ color: "#1f3356", }} />
                        <h1 className='texto'>CSS</h1>
                    </div>
                    <div className='caja'>
                        <FaGitAlt className="img" style={{ color: "#e94b07", }} />
                        <h1 className='texto'>GIT</h1>
                    </div>
                    <div className='caja'>
                        <FaGithub className="img" style={{ color: "#220231", }} />
                        <h1 className='texto'>GITHUB</h1>
                    </div>
                    <div className='caja'>
                        <RiReactjsFill className="img" style={{ color: "#2d68cd", }} />
                        <h1 className='texto'>REACT</h1>
                    </div>
                    <div className='caja'>
                        <RiReactjsFill className="img" style={{ color: "#37a9b9", }} />
                        <h1 className='texto'>REACT NATIVE</h1>
                    </div>
                    <div className='caja'>
                        <FaBootstrap className="img" style={{ color: "#563a98", }} />
                        <h1 className='texto'>BOOSTRAP</h1>
                    </div>
                    <div className='caja'>
                        <RiTailwindCssFill className="img" style={{ color: "#37a9b9", }} />
                        <h1 className='texto'>Tailwind</h1>
                    </div>
                    <div className='caja'>
                        <FontAwesomeIcon className="img" icon={faJs} style={{ color: "#c9af2c", }} />
                        <h1 className='texto'>JavaScript</h1>
                    </div>
                    <div className='caja'>
                        <BiLogoTypescript className="img" style={{ color: "#2d68cd", }} />
                        <h1 className='texto'>Typescript</h1>
                    </div>

                    <div className='caja'>
                        <FaPhp className="img" style={{ color: "#474A8A", }} />
                        <h1 className='texto'>PhP</h1>
                    </div>
                    <div className='caja'>
                        <BiLogoJava className="img" style={{ color: "#770b03", }} />
                        <h1 className='texto'>JAVA</h1>
                    </div>
                    <div className='caja'>
                        <FaDatabase className="img" style={{ color: "#26282b", }} />
                        <h1 className='texto'>SQL Server</h1>
                    </div>
                    <div className='caja'>
                        <GrMysql className="img" style={{ color: "#00758F", }} />
                        <h1 className='texto'>MySQL</h1>
                    </div>
                </div>
            </div>
            <svg className='skills_efecto_onda' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#E6D5BB" d="M0,128L48,144C96,160,192,192,288,181.3C384,171,480,117,576,117.3C672,117,768,171,864,170.7C960,171,1056,117,1152,106.7C1248,96,1344,128,1392,144L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
        </div>
    );
}

export default Skills;