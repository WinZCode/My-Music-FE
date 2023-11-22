import React from 'react'
import { Lists } from '../../components'
import { useSelector } from 'react-redux'

const Topten = () => {
  const { topTen } = useSelector((state) => state.app)

  return (
    <div className='mt-[70px] px-[60px]'>
      <div className='pt-[30px] pb-[50px]'>
        <h1 className='text-[40px] font-bold text-gray-700'>
          Bảng xếp hạng TOP 10
        </h1>
        <Lists isHideAlbum={true} isHideNote isHideTime={true} />
      </div>
    </div>
  )
}

export default Topten
