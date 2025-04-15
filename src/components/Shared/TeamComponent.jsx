import React from 'react';

const TeamComponent = () => {

    const OurTeameAll = [
        {
            img: "assets/images/Leonard.png",
            icon1: "assets/icons/facebook.png",
            icon2: "assets/icons/Twitter.png",
            icon3: "assets/icons/linkedin.png",
            name: "Leonard John Davies",
            designation: "Cofounder, CEO"
        },


        {
            img: "assets/images/Francis.png",
            icon1: "assets/icons/facebook.png",
            icon2: "assets/icons/Twitter.png",
            icon3: "assets/icons/linkedin.png",
            name: "Leonard John Davies",
            designation: "Vice Chairman"
        },


        {
            img: "assets/images/Kyla.png",
            icon1: "assets/icons/facebook.png",
            icon2: "assets/icons/Twitter.png",
            icon3: "assets/icons/linkedin.png",
            name: "Leonard John Davies",
            designation: "Head of Authority"
        },


        {
            img: "assets/images/Adrian.png",
            icon1: "assets/icons/facebook.png",
            icon2: "assets/icons/Twitter.png",
            icon3: "assets/icons/linkedin.png",
            name: "Leonard John Davies",
            designation: "Support Executive"
        },


        {
            img: "assets/images/Freddy.png",
            icon1: "assets/icons/facebook.png",
            icon2: "assets/icons/Twitter.png",
            icon3: "assets/icons/linkedin.png",
            name: "Leonard John Davies",
            designation: "Project Manager"
        },


        {
            img: "assets/images/Dale.png",
            icon1: "assets/icons/facebook.png",
            icon2: "assets/icons/Twitter.png",
            icon3: "assets/icons/linkedin.png",
            name: "Leonard John Davies",
            designation: "Accountant, Finance"
        },


        {
            img: "assets/images/Mariam.png",
            icon1: "assets/icons/facebook.png",
            icon2: "assets/icons/Twitter.png",
            icon3: "assets/icons/linkedin.png",
            name: "Leonard John Davies",
            designation: "Cofounder, CEO"
        },


        {
            img: "assets/images/Allen.png",
            icon1: "assets/icons/facebook.png",
            icon2: "assets/icons/Twitter.png",
            icon3: "assets/icons/linkedin.png",
            name: "Leonard John Davies",
            designation: "Vice Chairman"
        },
    ];

    return (
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-7">
            {
                OurTeameAll.map(item => (
                    <div key={item.name} className="bg-white max-w-[296px] rounded-lg hover:shadow-md">
                        <img src={item.img} className="w-full mb-4" alt="team-image" />
                        <div className="text-center">
                            <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                            <p className="text-sm text-gray-600 mb-4">{item.designation}</p>
                            <div className="flex justify-center gap-4">
                                <img src={item.icon1} className="max-w-[20px]" alt="" />
                                <img src={item.icon2} className="max-w-[20px]" alt="" />
                                <img src={item.icon3} className="max-w-[20px]" alt="" />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default TeamComponent;
