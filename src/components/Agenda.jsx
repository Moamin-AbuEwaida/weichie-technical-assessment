import React from "react";

//events array
const events = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    head: "Lorem ipsum dolor sit amet consectetur.",
    day: "Day I",
    text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodiofficia deleniti sed ",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1563807894768-f28bee0d37b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    head: "Lorem ipsum dolor sit amet consectetur.",
    day: "Day II",
    text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodiofficia deleniti sed ",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    head: "Lorem ipsum dolor sit amet consectetur.",
    day: "Day III",
    text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodiofficia deleniti sed ",
  },
];

const Agenda = () => {
  return (
    <div className="w-full p-8" id="agenda">
      {/* upper part */}
      <div>
        <h1 className="w-full text-center text-2xl">Our Agenda</h1>
        <div className="w-full text-center text-[#E38C20] text-4xl">-</div>
      </div>
      {/* lower part */}
      <div className="w-full block lg:flex justify-center items-center gap-4 p-4 relative">
        {events.map((event, i) => (
          <div
            key={i}
            className="flex lg:relative p-2 lg:w-[300px] lg:h-[320px] w-[60%] h-[70%]"
          >
            <img src={event.img} alt="/" className="object-cover h-full" />
            <div className=" flex lg:top-36  lg:absolute lg:left-5 top-32 left-5">
              <div className="bg-[#E38C20] text-white rounded-xl h-[30px] w-[100px] lg:px-2 lg:py-1 ml-2 lg:ml-0 justify-center items-center lg:absolute lg:-top-4 lg:left-6  ">
                <p className="text-center">{event.day}</p>
              </div>
              <div className="bg-white w-full lg:w-[260px] p-2 lg:px-8 lg:py-6 rounded-md ">
                <h1 className="font-semibold">{event.head}</h1>
                <p className="hidden md:block pt-2 text-sm">{event.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agenda;
