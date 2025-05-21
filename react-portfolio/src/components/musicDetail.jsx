import React from 'react'

function MusicDetail({ imgSrc, artistName, title }) {
  return (
    <div className='flex justify-center items-center'>
      <img src={`/${imgSrc}.jpg`} alt={artistName} className="w-28 rounded-md" />
      <p className='ml-4 text-sm'>
        {artistName}
        <br />
        {title}
      </p>
    </div>
  )
}

export default MusicDetail
