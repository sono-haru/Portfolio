import React from 'react'

const Contact = ({ id }) => {
  return (
    <>
      <div id={id} className="mt-10"></div>
      <p className='text-center mt-24 text-2xl'>~ お問い合わせ ~</p>
      <div className='container my-20 max-w-full px-40 flex justify-center gap-20 text-[#FEFBF4] target'>
        
        {/* 左側（Instagram） */}
        <a 
          href="https://www.instagram.com/ds._.nb"
          className='text-center bg-[#D66C52] py-4 px-8 rounded-xl w-1/4 block' 
          style={{ textDecoration: 'none' }}
        >
          <p className=''>Instagram</p>
          <p>ds._.nb</p>
        </a>

        {/* 真ん中（メール） */}
        <a 
          href="mailto:mit2471549@stu.o-hara.ac.jp"
          className='text-center bg-[#4BA2A5] py-4 px-6 rounded-xl w-1/2 block' 
          style={{ textDecoration: 'none' }}
        >
          <p className=''>Email</p>
          <p>mit2471549@stu.o-hara.ac.jp</p>
        </a>

        {/* 右側（GitHub） */}
        <a 
          href="https://github.com/sono-haru"
          className='text-center bg-[#C2C852] py-4 px-8 rounded-xl w-1/4 block' 
          style={{ textDecoration: 'none' }}
        >
          <p className=''>GitHub</p>
          <p>sono-haru</p>
        </a>

      </div>
    </>
  )
}

export default Contact
