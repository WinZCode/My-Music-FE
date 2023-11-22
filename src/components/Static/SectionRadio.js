import React, { memo } from 'react'
import radio1 from '../../assets/staticData/Radio/radio1.jpg'
import radio2 from '../../assets/staticData/Radio/radio2.jpg'
import radio3 from '../../assets/staticData/Radio/radio3.jpg'
import radio4 from '../../assets/staticData/Radio/radio4.jpg'
import radio5 from '../../assets/staticData/Radio/radio5.jpg'
import SectionItem from '../SectionItem'

const SectionRadio = ({ data }) => {
  const radios = [
    {
      thumbnail: radio1,
      title: 'XONE - Digital Radio',
    },
    {
      thumbnail: radio2,
      title: 'V-POP Radio',
    },
    {
      thumbnail: radio3,
      title: 'Live 247 - Nghe ngày nghe đêm',
    },
    {
      thumbnail: radio4,
      title: 'Chạm Radio',
    },
    {
      thumbnail: radio5,
      title: 'Bolero Radio',
    },
  ]
  return (
    <div className='mt-12 px-[59px] flex flex-col gap-5'>
      <div className='flex items-center justify-between'>
        <h3 className='text-[20px] font-bold pr-4 py-4'>Radio nổi bật</h3>
        <span className='text-xs'>TẤT CẢ</span>
      </div>
      <div className='flex items-start justify-between gap-[28px]'>
        {radios?.map((item, index) => (
          <SectionItem
            key={item.index}
            title={item.title}
            thumbnailM={item.thumbnail}
          />
        ))}
      </div>
    </div>
  )
}

export default memo(SectionRadio)
