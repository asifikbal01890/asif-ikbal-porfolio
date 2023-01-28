import React from 'react';
import Project from './Project';

const Projects = () => {
    const projectInfos = [
        {
          id: "01",
          name: "MotorBike Buy Sell",
          img: "https://i.ibb.co/0tJHC94/motorcycle-buy-sell-web-app.png",
          describe: "MERN-Stack Website",
          liveSite: "https://motorcycle-buy-sell.web.app/"  
        },
        {
          id: "02",
          name: "Food Container",
          img: "https://i.ibb.co/wMwS5ng/food-corner-39565-web-app.png",
          describe: "MERN-Stack Website",
          liveSite: "https://food-corner-39565.web.app/"  
        },
        {
          id: "03",
          name: "Smart Learning",
          img: "https://i.ibb.co/ZBYBzdR/smart-learning-project-web-app.png",
          describe: "Front-End Website",
          liveSite: "https://smart-learning-project.web.app/"  
        }
    ]
    return (
        <div className='mt-36'>
            <div>
                <h1 className='text-4xl font-semibold'>Projects</h1>
            </div>
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-28 xl:w-[1280px] xl:mx-auto mx-4'>
                {
                 projectInfos.map(info=><Project
                 key={info.id}
                 info={info}
                 ></Project>)   
                }
            </div>
        </div>
    );
};

export default Projects;