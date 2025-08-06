import { useSearchParams } from "react-router";
import { useGetNowPlayingMovieQuery } from "../movie/movieApi"
import MovieList from "../movie/MovieList";
import SearchInput from "../movie/SearchInput";
import { Button } from "@material-tailwind/react";

export default function Home() {

    const [searchParams, setSearchParams] = useSearchParams();

    const page = Number(searchParams.get('page') || 1) ; 

  const {isLoading, data, error } = useGetNowPlayingMovieQuery(page);

  if(isLoading) return <h1>Loading...</h1>
  if(error)  return <h1>{error.data.status_message}</h1>



  return (
    <div>

      <div className=" flex flex-col-reverse md:flex md:items-baseline md:justify-between md:flex-row ">
        <h1 className="pl-4 text-xl font-semibold">Now Playing Movies</h1>
        <SearchInput isHome={true} />
        
      </div>
      

      {data && <MovieList movies={data.results}/>}

      <div className="flex justify-center items-center gap-5 mb-3">
                      <Button onClick={() => setSearchParams({ page: Number(page) - 1 })} 
                      disabled={page===1}
                      className="btn bg-blue-500 text-white px-3 py-1 text-[10px]  rounded-md">Prev</Button>
                      <h1 className="font-semibold text-[14px] ">{page}</h1>
                      <Button
                      onClick={() => setSearchParams({ page: Number(page) + 1 })} 
                      className="btn bg-blue-500 text-white px-3 py-1 text-[10px]  rounded-md">Next</Button>
                  </div>
      
    </div>
  )
}
