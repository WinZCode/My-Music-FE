import React, { memo } from 'react'
import chill1 from '../../assets/staticData/Chill/chill1.jpg'
import chill2 from '../../assets/staticData/Chill/chill2.jpg'
import chill3 from '../../assets/staticData/Chill/chill3.jpg'
import chill4 from '../../assets/staticData/Chill/chill4.jpg'
import chill5 from '../../assets/staticData/Chill/chill5.jpg'
import SectionItem from '../SectionItem'

const SectionChill = ({ data }) => {
  const chills = [
    {
      thumbnail: chill1,
      title: 'Va vào những giai điệu thư giãn của VPOP',
    },
    {
      thumbnail: chill2,
      title: 'Đắm say với những nỗi buồn qua những giai điệu cực chill',
    },
    {
      thumbnail: chill3,
      title: 'Khi bạn cần giai điệu để xoa dịu những tổn thương',
    },
    {
      thumbnail: chill4,
      title: 'Thả mình vào giai điệu lofi chill',
    },
    {
      thumbnail: chill5,
      title: 'Lắng nghe nhạc hoa lời việt nhẹ nhàng',
    },
  ]
  return (
    <div className='mt-12 px-[59px] flex flex-col gap-5'>
      <div className='flex items-center justify-between'>
        <h3 className='text-[20px] font-bold pr-4 py-4'>Playlist Chill</h3>
        <span className='text-xs'>TẤT CẢ</span>
      </div>
      <div className='flex items-start justify-between gap-[28px]'>
        {chills?.map((item, index) => (
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

export default memo(SectionChill)
