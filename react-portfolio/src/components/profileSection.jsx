import React from 'react';
import SlideInImage from './slideInImage';
import FadeInText from './fadeInText';

function ProfileSection({ title, titleBg, imgSrc, text, reverse }) {
  return (
    <>
      <p
        className="inline-block py-4  rounded-full my-6 text-[#FEFBF4] w-64 mx-auto text-center"
        style={{ backgroundColor: titleBg }}
      >
        {title}
      </p>

      <div
        className={`flex flex-col md:${reverse ? 'flex-row-reverse' : 'flex-row'} justify-center items-center gap-4 md:gap-10`}
      >
        <SlideInImage
          src={`/${imgSrc}.jpg`}
          alt={`${title}の画像`}
          direction={reverse ? "left" : "right"}
          
        />
        <FadeInText>
          <div className="text-start border border-black rounded-3xl my-6 py-6 px-6 md:px-12 text-sm md:text-base space-y-2">
            {Array.isArray(text)
              ? text.map((line, idx) => <p key={idx}>{line}</p>)
              : <p>{text}</p>}
          </div>
        </FadeInText>
      </div>
    </>
  );
}

export default ProfileSection;
