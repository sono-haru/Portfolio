import React from 'react'

const Contact = ({ id }) => {
  return (
    <>
      <div id={id} className="mt-10"></div>
      <p className='text-center mt-24 text-2xl'>~ お問い合わせ ~</p>
     
      <div className='container my-24 max-w-full px-40 flex justify-center gap-20 text-[#FEFBF4] target'>
        
        {/* 左側（Instagram） */}
          <a 
            href="https://www.instagram.com/ds._.nb"
            className='text-center bg-[#D66C52] py-4 px-8 rounded-full w-1/4 block relative' 
            style={{ textDecoration: 'none' }}
          >
            <img src="/inst-icon.svg" alt="Instagramアイコン" className='w-9 absolute top-[-60px] left-1/2 transform -translate-x-1/2'/>
            <p className=''>Instagram</p>
            <p className='text-lg'>ds._.nb</p>
          </a>
       

        {/* 真ん中（メール） */}
        <a 
          href="mailto:mit2471549@stu.o-hara.ac.jp"
          className='text-center bg-[#4BA2A5] py-4 px-4 rounded-full w-1/2 block relative' 
          style={{ textDecoration: 'none' }}
        >
          <img src="/mail-icon.svg" alt="Instagramアイコン" className='w-10 absolute top-[-55px] left-1/2 transform -translate-x-1/2'/>
          <p className=''>Email</p>
          <p className='text-lg'>mit2471549@stu.o-hara.ac.jp</p>
        </a>

        {/* 右側（GitHub） */}
        <a 
          href="https://github.com/sono-haru"
          className='text-center bg-[#C2C852] py-4 px-8 rounded-full w-1/4 block relative' 
          style={{ textDecoration: 'none' }}
        >
          <img src="/github-icon.svg" alt="Instagramアイコン" className='w-11 absolute top-[-60px] left-1/2 transform -translate-x-1/2'/>
          <p className=''>GitHub</p>
          <p className='text-lg'>sono-haru</p>
        </a>

      </div>
    </>
  )
}

export default Contact
