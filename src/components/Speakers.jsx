import React from "react";

// speakers infos array
const speaker = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    name: "John Doe",
    title: "Project Manager",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "John Doe",
    title: "Project Manager",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "John Doe",
    title: "Project Manager",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "John Doe",
    title: "Project Manager",
  },
];

const Speakers = () => {
  return (
    <div className="bg-[#FFF8F0] w-full p-8" id="speakers">
      {/* upper side */}
      <div>
        <h1 className="w-full text-center text-2xl">Our Speakers</h1>
        <div className="w-full text-center text-[#E38C20] text-4xl">-</div>
      </div>
      {/* lower side */}
      <div className="w-full flex justify-center items-center gap-5 px-2">
        {/* mapping the speakers info array */}
        {speaker.map((sp, i) => (
          <div key={i}>
            {/* imgae */}
            <div>
              <img
                src={sp.img}
                alt="/"
                className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"
              />
            </div>
            {/* content */}
            <div className="p-2">
              <h2>{sp.name}</h2>
              <p className="text-gray-400 text-sm">{sp.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
