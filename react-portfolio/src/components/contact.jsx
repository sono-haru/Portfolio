import React from 'react';

const Contact = ({ id }) => {
  return (
    <>
      <div id={id} className="mt-10"></div>
      <p className='text-center mt-24 text-2xl'>~ お問い合わせ ~</p>

      <div className='container mt-20 mb-14 md:my-24 max-w-full px-20 md:px-40 flex flex-col md:flex-row justify-center items-center gap-14 md:gap-20 text-[#FEFBF4]'>

        {/* Instagram */}
        <div className="relative w-full md:w-1/4 flex justify-center">
          <img
            src="/inst-icon.svg"
            alt="Instagramアイコン"
            className="w-6 md:w-9 absolute top-[-40px] md:top-[-60px] z-10"
          />
          <a
            href="https://www.instagram.com/ds._.nb"
            className="text-center bg-[#D66C52] py-3 md:py-4 px-8 rounded-full w-full block hover:opacity-95 hover:scale-[99%] active:scale-[96%] transition-transform ease-in-out duration-200"
            style={{ textDecoration: 'none' }}
          >
            <p>Instagram</p>
            <p className="md:text-lg">ds._.nb</p>
          </a>
        </div>

        {/* Email */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <img
            src="/mail-icon.svg"
            alt="メールアイコン"
            className="w-6 md:w-8 absolute top-[-35px] md:top-[-55px] z-10"
          />
          <a
            href="mailto:mit2471549@stu.o-hara.ac.jp"
            className="text-center bg-[#4BA2A5] py-3 md:py-4 px-2 md:px-4 rounded-full w-full block hover:opacity-95 hover:scale-[99%] active:scale-[97%] transition-transform ease-in-out duration-200"
            style={{ textDecoration: 'none' }}
          >
            <p>Email</p>
            <p className="text-[12px] md:text-lg">mit2471549@stu.o-hara.ac.jp</p>
          </a>
        </div> 

        {/* GitHub */}
        <div className="relative w-full md:w-1/4 flex justify-center">
          <img
            src="/github-icon.svg"
            alt="GitHubアイコン"
            className="w-7 md:w-11 absolute top-[-40px] md:top-[-60px] z-10"
          />
          <a
            href="https://github.com/sono-haru"
            className="text-center bg-[#C2C852] py-3 md:py-4 px-8 mb-6 md:mb-0 rounded-full w-full block hover:opacity-95 hover:scale-[99%] active:scale-[96%] transition-transform ease-in-out duration-200"
            style={{ textDecoration: 'none' }} 
          >
            <p>GitHub</p>
            <p className="md:text-lg">sono-haru</p>
          </a>
        </div>

      </div>
    </>
  );
};

export default Contact;
