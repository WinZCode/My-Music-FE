import {
  Home,
  Login,
  Public,
  Personal,
  Album,
  WeekRank,
  ZingChart,
  Search,
  SearchSongs,
  SearchAll,
  Singer,
  SearchPlaylist,
  BXH,
  Genre,
  Topten,
} from './containers/public/'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Routes, Route } from 'react-router-dom'
import path from './ultis/path'
import { useEffect } from 'react'
import * as actions from './store/actions'
import { useDispatch } from 'react-redux'
import SignUp from './containers/public/SignUp'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.getAllSongs())
  }, [])

  useEffect(() => {
    dispatch(actions.getTopTen())
  }, [])

  useEffect(() => {
    dispatch(actions.getGenrePop())
  }, [])

  useEffect(() => {
    dispatch(actions.getSong())
  }, [])

  return (
    <>
      <div className=''>
        <Routes>
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.SIGNUP} element={<SignUp />} />
          <Route path={path.PUBLIC} element={<Public />}>
            <Route path={path.HOME} element={<Home />} />
            <Route path={path.MY_MUSIC} element={<Personal />} />
            <Route path={path.ALBUM__TITLE__PID} element={<Album />} />
            <Route path={path.PLAYLIST__TITLE__PID} element={<Album />} />
            <Route path={path.WEEKRANK__TITLE__PID} element={<WeekRank />} />
            <Route path={path.ZING_CHART} element={<ZingChart />} />
            <Route path={path.HOME_ARTIST_SINGER} element={<Singer />} />
            <Route path={path.HOME__SINGER} element={<Singer />} />
            <Route path={path.SEARCH} element={<Search />}>
              <Route path={path.ALL} element={<SearchAll />} />
              <Route path={path.SONG} element={<SearchSongs />} />
              <Route path={path.PLAYLIST_SEARCH} element={<SearchPlaylist />} />
            </Route>
            <Route path={path.GENRE} element={<Genre />} />
            <Route path={path.GENRE_DETAIL} element={<Genre />} />
            <Route path={path.TOP10} element={<Topten />} />
            <Route path={path.STAR} element={<Home />} />
          </Route>
        </Routes>
      </div>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  )
}

export default App
