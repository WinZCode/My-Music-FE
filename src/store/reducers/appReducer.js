import actionTypes from '../actions/actionTypes'

const initState = {
  allSongs: null,
  song: null,
  topTen: null,
  topNation: null,
  genrePop: null,
}

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_SONG:
      return {
        ...state,
        allSongs: action.songsData || null,
      }
    case actionTypes.GET_SONG:
      return {
        ...state,
        song: action.songData || null,
      }
    case actionTypes.GET_TOP_TEN:
      return {
        ...state,
        topTen: action.topTenData || [],
      }
    case actionTypes.GET_TOP_NATION:
      return {
        ...state,
        topNation: action.topNationData || [],
      }
    case actionTypes.GET_GENRE_POP:
      return {
        ...state,
        genrePop: action.genrePopData || [],
      }
    case actionTypes.LOADING:
      return {
        ...state,
        isLoading: action.flag,
      }

    default:
      return state
  }
}

export default appReducer
