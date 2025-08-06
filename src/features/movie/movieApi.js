import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



const API_KEY = '92c1e33f015755d27a231793c44ecfed'

export const movieApi = createApi({
    reducerPath:'movieApi',
    baseQuery: fetchBaseQuery({ baseUrl: ' https://api.themoviedb.org/3' }),

    endpoints: (builder) => ({

        getNowPlayingMovie: builder.query({
            query: (page) => ({
                url:'/movie/now_playing',
                params:{
                    api_key: API_KEY,
                    page
                },
                method:'GET'
            })
        }),

        getPouplarMovie: builder.query({
            query: (page)=>({
                url:'/movie/popular',
                params:{
                    api_key: API_KEY,
                    page
                },
                method:'GET'
            })
        }),

        searchMovie: builder.query({
            query: ({q, page}) =>({
                url:'/search/movie',
                params:{
                    query: q,
                    api_key: API_KEY,
                    page
                },
                method:'GET'
            })
        }),

        getTopRatedMovie: builder.query({
            query: (page)=>({
                url:'/movie/top_rated',
                params:{
                    api_key: API_KEY,
                    page
                },
                method:'GET'
            })
        }),

         getUpcomingMovie: builder.query({
            query: (page)=>({
                url:'/movie/upcoming',
                params:{
                    api_key: API_KEY,
                    page
                },
                method:'GET'
            })
        }),

    })


});

export const {useGetNowPlayingMovieQuery, useGetPouplarMovieQuery, useSearchMovieQuery, useGetTopRatedMovieQuery, useGetUpcomingMovieQuery} = movieApi