import React, { memo } from 'react'
import icons from '../ultis/icons'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import * as actions from '../store/actions'
import { handleNumber } from '../ultis/fn'

const { BsMusicNoteBeamed } = icons

const List = ({ songData, isHideAlbum, isHideNote }) => {
  const dispatch = useDispatch()

  // console.log(songData);
  return (
    <div
      className='flex justify-between items-center p-[10px] border-t border-[rgba(0,0,0,0.05)] hover:bg-[#DDE4E4] cursor-pointer'
      onClick={() => {
        dispatch(actions.setCurSongId(songData?.id))
        dispatch(actions.play(true))
        dispatch(actions.playAlbum(true))
        dispatch(
          actions.setRecent({
            thumbnail: songData?.image,
            title: songData?.title,
            sid: songData?.id,
            artists: songData?.artist[0]?.name,
          })
        )
      }}
    >
      <div className='flex items-center gap-3 flex-1'>
        {!isHideNote && (
          <span>
            <BsMusicNoteBeamed />
          </span>
        )}
        <img
          src={songData?.image}
          alt='thumbnailM'
          className='w-10 h-10 object-cover rounded-md'
        />
        <span className='flex flex-col w-full'>
          <span className='text-sm font-semibold'>
            {songData?.title?.length > 30
              ? `${songData?.title?.slice(0, 30)}...`
              : songData?.title}
          </span>
          <span className='truncate text-xs opacity-70'>
            {songData?.artist[0].name}
          </span>
        </span>
      </div>
      {!isHideAlbum && (
        <div className='flex-1 flex items-center justify-center'>
          {songData?.album?.title?.length > 30
            ? `${songData?.album?.title?.slice(0, 30)}...`
            : songData?.album?.title}
        </div>
      )}
      <div className='flex-1 flex justify-end text-xs'>
        {handleNumber(songData?.listen)}
      </div>
    </div>
  )
}

export default memo(List)
