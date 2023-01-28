import React from 'react';

const Project = ({info}) => {
    const {name, describe, liveSite, img, id} = info
    return (
        <div className="card bg-secondary shadow-xl text-white">
            <figure className="h-[280px] bg-gray-200">
                <img src={img} alt="Shoes" className="xl:w-2/3" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl">{name}</h2>
                <p>{describe}</p>
                <div className="card-actions">
                   <a href={liveSite}><button className="btn btn-accent text-white">Live Review</button></a>
                   
                </div>
            </div>
        </div>
    );
};

export default Project;