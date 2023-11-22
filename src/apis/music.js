import axios from '../axios'

export const apiGetAllSong = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: '/songs',
        method: 'get',
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })

export const apiGetSong = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: `/song/${id}`,
        method: 'get',
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })

export const apiGetTopTen = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: '/topbaihatall',
        method: 'get',
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })

export const apiGetTopNation = (name) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: `/topbaihat/${name}`,
        method: 'get',
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })

export const apiGetPOPGenre = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: `/genre/POP`,
        method: 'get',
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })

export const apiGetEDMGenre = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: `/genre/EDM`,
        method: 'get',
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })

export const apiGetDetaiPlaylist = (pid) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: '/detailplaylist',
        method: 'get',
        params: { id: pid },
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })

export const apiSearch = (keyword) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: '/search',
        method: 'get',
        params: { keyword },
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })

export const apiGetArtistSongs = (singerId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: '/artistSong',
        method: 'get',
        params: {
          id: singerId,
          page: 1,
          count: 50,
        },
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })

export const apiGetArtist = (alias) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: '/artist',
        method: 'get',
        params: {
          name: alias,
        },
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })
