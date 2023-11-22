import React, { useEffect } from 'react'
import { Lists } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../store/actions'

const SearchSongs = () => {
  const { searchData } = useSelector((state) => state.music)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.getSearchSongs(searchData?.top?.playlistId))
  }, [searchData])
  return (
    <div className='w-full px-[60px]'>
      <Lists isHideTime isHideAlbum={true} />
    </div>
  )
}

export default SearchSongs
