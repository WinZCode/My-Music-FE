import React from 'react'
import icons from '../ultis/icons'
import { Search } from './'
import { Link, useNavigate, useParams } from 'react-router-dom'
import path from '../ultis/path'

const { HiArrowNarrowLeft, HiArrowNarrowRight } = icons

const Header = () => {
  const navigate = useNavigate()
  const { singer } = useParams()
  return (
    <div className='flex w-full justify-between items-center'>
      <div className='flex gap-6 w-full items-center'>
        <div className='flex gap-6 cursor-pointer'>
          <span onClick={() => navigate(-1)}>
            <HiArrowNarrowLeft size={24} color={singer ? 'gray' : 'black'} />
          </span>
          <span onClick={() => navigate(1)}>
            <HiArrowNarrowRight size={24} color={singer ? 'gray' : 'black'} />
          </span>
        </div>
        <div className='w-1/2'>
          <Search />
        </div>
      </div>
      <Link to={path.LOGIN}>Login</Link>
    </div>
  )
}

export default Header
