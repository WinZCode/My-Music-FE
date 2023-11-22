import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import banner from '../../assets/staticData/Banner/banner.jpg'
import { SongItem } from '../../components'
import { useSelector } from 'react-redux'
const Genre = () => {
  const { genrePop } = useSelector((state) => state.app)
  const [isPopGenre, setIsPopGenre] = useState(false)
  const [isEDMGenre, setIsEDMGenre] = useState(false)
  const [isRapGenre, setIsRapGenre] = useState(false)
  return (
    <>
      <div className='mt-[70px] px-[60px]'>
        <div>
          <h3 className='text-[20px] font-bold pr-4 py-4'>Nổi bật</h3>
        </div>
        <div>
          <div className='flex items-start justify-between gap-[28px]'>
            <div
              className='flex items-center justify-center w-[33.3333%] h-[174px] bg-red-500 rounded'
              onClick={() => {
                setIsPopGenre(true)
                setIsEDMGenre(false)
                setIsRapGenre(false)
              }}
            >
              <h3 className='text-white font-bold text-[32px]'>POP</h3>
            </div>
            <div
              className='flex items-center justify-center w-[33.3333%] h-[174px] bg-slate-400 rounded'
              onClick={() => {
                setIsPopGenre(false)
                setIsEDMGenre(true)
                setIsRapGenre(false)
              }}
            >
              <h3 className='text-white font-bold text-[32px]'>EDM</h3>
            </div>
            <div
              className='flex items-center justify-center w-[33.3333%] h-[174px] bg-main-500 rounded'
              onClick={() => {
                setIsPopGenre(false)
                setIsEDMGenre(false)
                setIsRapGenre(true)
              }}
            >
              <h3 className='text-white font-bold text-[32px]'>RAP</h3>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='flex flex-wrap w-full justify-between px-[60px] pt-6'>
          {isPopGenre &&
            genrePop?.map((item) => (
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
          {isEDMGenre && <span>EDM</span>}
          {isRapGenre && <span>RAp</span>}
        </div>
      </div>
      <div className='h-[120px]'></div>
    </>
  )
}

export default Genre
