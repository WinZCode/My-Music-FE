import React, { memo } from 'react'
import { List } from './'
import icons from '../ultis/icons'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { Topten } from '../containers/public'

const { BsDot } = icons

const Lists = ({ isHideTime, isHideAlbum, isHideOrder }) => {
  const { topTen } = useSelector((state) => state.app)
  return (
    <div className='w-full flex flex-col text-xs text-gray-600'>
      <div className='  p-[10px] font-semibold'>
        <div className='flex justify-between items-center'>
          {!isHideOrder && <span className='font-bold text-lg'>STT</span>}
          <span className={isHideTime ? 'font-bold text-lg' : ''}>BÀI HÁT</span>
          {!isHideAlbum && <span>ALBUM</span>}
          <span className='font-bold text-lg'>LƯỢT NGHE</span>
        </div>
      </div>
      <div className='flex flex-col'>
        {topTen?.map((item, index) => (
          <div className='flex w-full justify-center items-center'>
            <span className='text-sm'>{index + 1}</span>
            <div className='w-full'>
              <List key={item.encodeId} isHideNote songData={item} />
            </div>
          </div>
        ))}
      </div>
      <div className='h-[50px]'></div>
    </div>
  )
}

export default memo(Lists)
