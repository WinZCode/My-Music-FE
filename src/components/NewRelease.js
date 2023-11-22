import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { SongItem } from './'
const NewRelease = () => {
  const { allSongs } = useSelector((state) => state.app)
  // const [isActived, setIsActived] = useState(0)
  // const [songs, setSongs] = useState([])

  // useEffect(() => {
  //   isActived
  //     ? setSongs(allSongs?.data?.others)
  //     : setSongs(allSongs?.data?.vPop)
  // }, [isActived, newRelease])
  return (
    <div className='mt-12 px-[59px] flex flex-col gap-5'>
      <div className='flex items-center justify-between'>
        <h3 className='text-[20px] font-bold'>Nhạc gần đây</h3>
        <span className='text-xs'>TẤT CẢ</span>
      </div>
      {/* <div className='flex items-center gap-5 text-xs'>
        <button
          type='button'
          onClick={() => setIsActived(0)}
          className={`py-1 px-4 rounded-l-full rounded-r-full border border-gray-400 bg-transparent ${
            isActived === 0 && 'bg-main-500 text-white'
          }`}
        >
          VIỆT NAM
        </button>
        <button
          type='button'
          onClick={() => setIsActived(1)}
          className={`py-1 px-4 rounded-l-full rounded-r-full border border-gray-400 bg-transparent ${
            isActived === 1 && 'bg-main-500 text-white'
          }`}
        >
          QUỐC TẾ
        </button>
      </div> */}
      <div className='flex flex-wrap w-full justify-between'>
        {allSongs?.map((item) => (
          <div key={item.id} className='w-[45%] min-[1024px]:w-[30%]'>
            <SongItem
              thumbnail={item.image}
              title={item.title}
              artists={item.artist[0]?.name}
              releaseDate={item.release_date}
              sid={item.id}
              size='w-[60px] h-[60px]'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewRelease
