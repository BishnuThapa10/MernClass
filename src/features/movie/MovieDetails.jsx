import React from 'react'
import { useGetMovieDetailsQuery } from './movieApi.js'
import { useParams } from 'react-router'

export default function MovieDetails() {
  const { id } = useParams();
  const { isLoading, isError, error, data } = useGetMovieDetailsQuery(id);
  if (isLoading) return <h1 className='mx-auto'>Loading...</h1>
  if (isError) return <h1 className='mx-auto'>{error.data.status_message}</h1>
  console.log(data);
  return (
    <section className='p-2'>
      <div className='max-w-2xs rounded-lg overflow-hidden'>
        <img className='w-full h-full' 
        src={`https://image.tmdb.org/t/p/w342${data.poster_path}`} 
        alt={data.title} />
      </div>
    </section>
  )
}
