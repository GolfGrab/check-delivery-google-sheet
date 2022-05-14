import Image from 'next/image'
import React from 'react'

function TitleSection() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center pt-[3rem]">
        <div className="flex items-center justify-center space-x-2 ">
          <img
            src="https://www.svgrepo.com/show/299502/heart.svg"
            alt="icon"
            className="h-8 w-8"
          />
          <h1 className="mb-[1rem]  text-center text-4xl font-bold text-[#ff7979]  decoration-[#f77aec] decoration-wavy decoration-2 ">
            Dracula Code <br /> Check Order
          </h1>
          <img
            src="https://www.svgrepo.com/show/299502/heart.svg"
            alt="icon"
            className="h-8 w-8"
          />
        </div>
        <div className="mb-10 mt-5 flex h-20 w-full items-center justify-center ">
          <Image
            src="/DC.jpg"
            width="100px"
            height="100px"
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  )
}

export default TitleSection
