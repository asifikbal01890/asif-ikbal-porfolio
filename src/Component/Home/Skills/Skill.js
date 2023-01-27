import React from 'react';

const Skill = ({ skillInfo }) => {
    const { name, img } = skillInfo;
    return (
        <div>
            <div className="flex justify-center">
                <div className="w-24 h-24 bg-white mask mask-squircle flex justify-center items-center">
                    <img src={img} alt=""/>
                </div>
            </div>
            <div className='mt-3 mb-6 text-2xl font-semibold'>
                {name}
            </div>
        </div>
    );
};

export default Skill;