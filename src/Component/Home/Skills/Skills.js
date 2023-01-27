import React from 'react';

import html from '../../../Files/image/logo/Html.png';
import css from '../../../Files/image/logo/Css.png';
import bootstrap from '../../../Files/image/logo/Bootstrap.png';
import tailwind from '../../../Files/image/logo/tailwind-css-icon.png';
import material from '../../../Files/image/logo/material-ui-seeklogo.com.svg';
import JavaScript from '../../../Files/image/logo/JavaScript-logo.png';
import react from '../../../Files/image/logo/React.png';
import node from '../../../Files/image/logo/Node.png';
import express from '../../../Files/image/logo/Express.png';
import mongodb from '../../../Files/image/logo/MongoDB.png';
import firebase from '../../../Files/image/logo/Firebase.png';
import next from '../../../Files/image/logo/Nextjs-logo.svg.png';
import redux from '../../../Files/image/logo/Redux.png';
import jwt from '../../../Files/image/logo/Jwt.png';
import mysql from '../../../Files/image/logo/MySQL.png';
import typescript from '../../../Files/image/logo/typescript.png';
import Skill from './Skill';



const Skills = () => {
    const skillsInfo = [
        {
            id: "01",
            name: "HTML",
            img: html
        },
        {
            id: "02",
            name: "CSS",
            img: css
        },
        {
            id: "03",
            name: "Bootstrap",
            img: bootstrap
        },
        {
            id: "04",
            name: "TailwindCSS",
            img: tailwind
        },
        {
            id: "05",
            name: "JavaScript",
            img: JavaScript
        },
        {
            id: "06",
            name: "React JS",
            img: react
        },
        {
            id: "07",
            name: "Firebase",
            img: firebase
        },
        {
            id: "08",
            name: "Node JS",
            img: node
        },
        {
            id: "09",
            name: "Express JS",
            img: express
        },
        {
            id: "10",
            name: "MongoDB",
            img: mongodb
        },
        {
            id: "11",
            name: "Material UI",
            img: material
        },
        {
            id: "12",
            name: "Next JS",
            img: next
        },
        {
            id: "13",
            name: "Redux",
            img: redux
        },
        {
            id: "14",
            name: "TypeScript",
            img: typescript
        },
        {
            id: "15",
            name: "JSON Web Tokens",
            img: jwt
        },
        {
            id: "16",
            name: "MySQL",
            img: mysql
        },
    ]
    return (
        <div>
            <div className='my-9'>
                <h2 className='text-4xl font-mono font-semibold'>Skills</h2>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-16 xl:w-[1280px] xl:mx-auto mx-4 gap-4'>
                {
                    skillsInfo.map(skillInfo => <Skill
                        key={skillInfo.id}
                        skillInfo={skillInfo}
                    ></Skill>)
                }
            </div>
        </div>
    );
};

export default Skills;