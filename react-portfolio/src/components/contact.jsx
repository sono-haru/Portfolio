import React from 'react'

const Contact = () => {
  return (
    <>
        <p className='text-center mt-24 text-2xl'>お問い合わせ</p>
        <div className='container mt-20 max-w-full px-40 flex justify-around'>

            <div>
              <p className='text-center'>メール</p>
              <div className='flex justify-between items-center mt-3'>
                <a href="">
                  <img src="/mail-img.jpg" alt="メールアイコン" className='w-16' />
                </a>
                <a href="mailto:mit2471549@stu.o-hara.ac.jp">mit2471549@stu.o-hara.ac.jp</a>
              </div>
            </div>

            <div>
              <p className='text-center'>Instagram</p>
              <div className='flex justify-between items-center mt-4'>
                <a href="">
                  <img src="/instagram_794343.png" alt="インスタアイコン" className='w-8'/>
                </a>
                <a href="https://www.instagram.com/ds._.nb">ds._.nb</a>
              </div>
            </div>

        </div>
    </>
  )
}

export default Contact