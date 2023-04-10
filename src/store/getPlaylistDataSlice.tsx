import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const playlistApi = createApi({
  reducerPath: 'playlistApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/categoryList'}),
  endpoints: ((builder) => ({
    getPlaylistData: builder.query({
      query: () => ``,
    })
  }))
})

export const { useGetPlaylistDataQuery } = playlistApi