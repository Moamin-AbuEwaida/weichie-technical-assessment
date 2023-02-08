import React from "react";
import { BsChevronRight } from "react-icons/bs";

const About = () => {
  return (
    <div className="w-full pt-8 px-16">
      {/* upper part */}
      <div className="flex flex-col md:flex-row justify-between gap-3 py-16">
        {/* left side */}
        <div className="flex flex-row md:flex-col w-full md:w-[50%] justify-center items-center">
          {/* content */}
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl w-full md-w[60%] text-center">
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            <p className="py-4 w-full md:w-[60%] text-center">
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
              officia deleniti sed id aut provident? Harum facere porro laborum
              necessitatibus.
            </p>
            <button className="bg-[#E38C20] text-white flex items-center gap-x-[10px] group">
              Register for Expo <BsChevronRight size={15} />
            </button>
          </div>
        </div>
        {/* right side */}
        <div className="grid grid-rows-2 md:w-[50%] justify-center">
          {/* upper images */}
          <div className="flex gap-x-3 p-4">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="/"
              className="w-[150px] h-[150px]"
            />
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="/"
              className="w-[110px] h-[110px]"
            />
          </div>
          {/* lower image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1563807894768-f28bee0d37b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="/"
              className="w-[150px] h-[150px]"
            />
          </div>
        </div>
      </div>
      {/* lower part */}
      <div className="hidden md:block">
        <div className="w-full text-center text-[#E38C20] text-4xl">-</div>
        {/* text */}
        <div className="py-2 items-center justify-center w-full">
          <p className="text-center w-full lg:w-[50%] m-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
            eveniet voluptatibus id, quas nihil facilis illum mollitia iste,
            iusto quae, ullam ipsum eligendi suscipit fugit et consequatur magni
            enim vitae autem voluptas incidunt ab blanditiis ipsam! Pariatur,
            perferendis quasi sint repudiandae totam nesciunt harum eligendi
            tempora, quod, incidunt facere quae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
