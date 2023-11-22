import actionTypes from './actionTypes'
import * as apis from '../../apis'

export const getAllSongs = () => async (dispatch) => {
  try {
    const response = await apis.apiGetAllSong()
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_ALL_SONG,
        songsData: response.data.data.song,
      })
    } else {
      dispatch({
        type: actionTypes.GET_ALL_SONG,
        songsData: null,
      })
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_ALL_SONG,
      songsData: null,
    })
  }
}
export const getSong = () => async (dispatch) => {
  try {
    const response = await apis.apiGetSong()

    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_SONG,
        songData: response.data.data.song,
      })
    } else {
      dispatch({
        type: actionTypes.GET_SONG,
        songData: null,
      })
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_SONG,
      songData: null,
    })
  }
}

export const getTopTen = () => async (dispatch) => {
  try {
    const response = await apis.apiGetTopTen()
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_TOP_TEN,
        topTenData: response.data.data.song,
      })
    } else {
      dispatch({
        type: actionTypes.GET_TOP_TEN,
        topTenData: null,
      })
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_TOP_TEN,
      topTenData: null,
    })
  }
}

export const getTopNation = () => async (dispatch) => {
  try {
    const response = await apis.apiGetTopNation()
    console.log(response)
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_TOP_NATION,
        topNationData: response?.data?.data.song,
      })
    } else {
      dispatch({
        type: actionTypes.GET_TOP_NATION,
        topNationData: null,
      })
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_TOP_NATION,
      topNationData: null,
    })
  }
}

export const getGenrePop = () => async (dispatch) => {
  try {
    const response = await apis.apiGetPOPGenre()
    console.log(response)
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_GENRE_POP,
        genrePopData: response?.data?.data.song,
      })
    } else {
      dispatch({
        type: actionTypes.GET_GENRE_POP,
        genrePopData: null,
      })
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_GENRE_POP,
      genrePopData: null,
    })
  }
}
