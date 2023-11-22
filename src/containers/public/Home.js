import React, { useEffect } from 'react'
import {
  SliderBanner,
  Section,
  NewRelease,
  ChartSection,
  ArtistList,
} from '../../components'
import { SectionChill, SectionRadio } from '../../components/Static'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import * as apis from '../../apis'
import Slider from 'react-slick'
const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
  }
  const {
    friday,
    newEveryday,
    top100,
    xone,
    newMusic,
    weekChart,
    favoritedArtist,
    singers,
  } = useSelector((state) => state.app)

  return (
    <>
      <div className='overflow-y-auto w-full'>
        <div className='w-full h-[70px]'></div>
        {/* static */}
        <SliderBanner />
        <NewRelease />
        <SectionRadio />
        <SectionChill />
        {/* data */}

        <div className='w-full h-[100px]'></div>
      </div>
    </>
  )
}

export default Home
