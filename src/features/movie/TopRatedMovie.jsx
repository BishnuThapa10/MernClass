import { useSearchParams } from "react-router";
import { useGetTopRatedMovieQuery } from "./movieApi";
import { Button } from "@material-tailwind/react";
import MovieList from "./MovieList";

export default function TopRatedMovie() {

    const [searchParams, setSearchParams] = useSearchParams();
    
        const page = Number(searchParams.get('page') || 1) ; 
        const {isLoading, data, error} = useGetTopRatedMovieQuery(page);
    
        if (isLoading) return <h1>Loading...</h1>
        if (error) return <h1>{error.data.status_message}</h1>
  return (
    <div>
      <h1 className="pl-4 text-xl font-semibold p-2">Top Rated Movies</h1>
                    
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
