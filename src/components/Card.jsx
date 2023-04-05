import React from 'react'

export default function Card({data}) {
  return (
    <div
    className={`rounded-[30px] border-none shadow-xl flex flex-col gap-2 md:gap-4 p-6 md:p-[2rem] transition-all duration-300 ease-in-out`}
  >
    <div className="flex sm:flex-row flex-col gap-4 justify-start items-center w-full">
      <img src={data.img} alt="img" />
      <div>
        <h1
          className={`text-base md:text-[1.75rem] sm:text-start text-center font-semibold capitalize `}
        >
          {data.name}
        </h1>
        <p
          className={`text-xs md:text-[1.25rem] sm:text-start text-center font-medium capitalize`}
        >
          {data.title}
        </p>
      </div>
    </div>
    <p
      className={`text-[0.7rem] md:text-[18px] sm:text-start text-center font-normal `}
    >
      {data.para}{" "}
    </p>
  </div>
  )
}
