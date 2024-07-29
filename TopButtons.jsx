import React from "react";

const TopButtons = ({ SetQuery }) => {
    const cities = [
        {
            id: 1,
            name: "London",
        },
        {
            id: 2,
            name: "Sydney",
        },
        {
            id: 3,
            name: "Tokyo",
        },
        {
            id: 4,
            name: "Paris",
        },
        {
            id: 5,
            name: "Toronto",
        },
    ];
  return (
    <div className="flex items-center justify-around my-6">
    {cities.map((city) => (
            <button 
            key={city.id}
            className="text-white text-lg font-medium "
            onClick={() => SetQuery({ q: city.title })}
            >
             {city.name}
            </button>  
        ))}
    </div>
  );
};

export default TopButtons;