import React from "react";
import { BsPlusLg } from "react-icons/bs";

// questions array
const questions = [
  {
    id: 1,
    text: "Where is this expo?",
    icon: <BsPlusLg />,
  },
  {
    id: 2,
    text: "How can I park once I arrive to the expo? ",
    icon: <BsPlusLg />,
  },
  {
    id: 3,
    text: "Where can I find the PLM exhibit",
    icon: <BsPlusLg />,
  },
  {
    id: 4,
    text: "How can I park once I arrive to the expo?",
    icon: <BsPlusLg />,
  },
];

const Questions = () => {
  return (
    <div className="w-full p-8">
      {/* upper part */}
      <div>
        <h1 className="w-full text-center text-2xl">
          Have questions about the expo
        </h1>
        <div className="w-full text-center text-[#E38C20] text-4xl">-</div>
      </div>
      {/* lower part */}
      <div className="w-[80%] md:[60%] lg:w-[40%] justify-center items-center mx-auto py-4">
        {/* mapping through the questions array */}
        {questions.map((qu, i) => (
          <div
            className="w-full flex justify-between p-4 border border-gray-100 rounded-md m-2"
            key={i}
          >
            <p>{qu.text}</p>
            <p className="text-[#E38C20] text-xl">{qu.icon}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
