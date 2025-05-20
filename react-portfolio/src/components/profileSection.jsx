import React from 'react'

function ProfileSection({ title, titleBg,  imgSrc, text, reverse }) {
  return (
    <>
      <p
        className="w-64 md:w-80 inline-block py-4 rounded-full my-6 text-[#FEFBF4] text-[15px]"
        style={{ backgroundColor: titleBg}}
      >
        {title}
      </p>

      <div
        className={`flex flex-col md:${reverse ? 'flex-row-reverse' : 'flex-row'} justify-center items-center gap-4 md:gap-10`}
      >
        <img
          src={`/${imgSrc}.jpg`}
          alt=""
          className="border-2 border-black w-52 md:w-80 rounded-xl"
        />
        
        <div className="w-60 text-start border border-black rounded-3xl mt-2 md:my-6 py-4 px-6 md:px-12 text-[12px] md:text-base space-y-2">
          {Array.isArray(text)
            ? text.map((line, idx) => <p key={idx}>{line}</p>)
            : <p>{text}</p>}
        </div>
      </div>
    </>
  )
}

export default ProfileSection
