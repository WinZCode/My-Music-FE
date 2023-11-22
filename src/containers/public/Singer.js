import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiGetArtist } from '../../apis/music'
import icons from '../../ultis/icons'

const { AiOutlineUserAdd, BsFillPlayFill } = icons
const Singer = () => {
  const { singer } = useParams()
  const [artistData, setArtistData] = useState(null)
  const [isHoverPlay, setIsHoverPlay] = useState(false)
  useEffect(() => {
    const fetchArtistData = async () => {
      const res = await apiGetArtist(singer)
      if (res.data.err === 0) {
        setArtistData(res.data.data)
      }
    }
    singer && fetchArtistData()
  }, [singer])
  return (
    <div className='flex flex-col w-full relative'>
      <div className='relactive'>
        <img
          src={artistData?.cover}
          alt='bg'
          className='h-[400px] object-cover w-full'
        />
        <div className='absolute text-white top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent '>
          <div className='absolute bottom-0 pb-6 px-[60px]'>
            <div className='flex gap-8 items-center'>
              <h1 className='text-[60px] font-bold mb-4'>{artistData?.name}</h1>
              <span
                className='relative p-2 rounded-full bg-white text-main-500  hover:text-gray-300 cursor-pointer'
                onMouseEnter={() => setIsHoverPlay(true)}
                onMouseLeave={() => setIsHoverPlay(false)}
              >
                <div className='w-8 h-8'></div>
                {isHoverPlay && (
                  <span className='absolute top-[-1px] left-[-1px] bottom-[-1px] right-[-1px] rounded-full animate-scale-up-center bg-main-500'></span>
                )}
                <span className='absolute p-2 top-0 left-0 right-0 bottom-0 z-50'>
                  <BsFillPlayFill size={32} />
                </span>
              </span>
            </div>
            <div className='flex items-center gap-4'>
              <span className='text-sm text-gray-300'>{`${Number(
                artistData?.totalFollow.toFixed(1)
              ).toLocaleString()} người quan tâm`}</span>
              <button
                type='button'
                className='bg-main-500 px-4 py-1 text-white text-sm rounded-l-full rounded-r-full flex items-center justify-center gap-1'
              >
                <span>
                  <AiOutlineUserAdd />
                </span>
                <span className='text-xs opacity-90'>QUAN TÂM</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Singer
