import { useSearchParams } from "react-router"
import { useSearchMovieQuery } from "./movieApi";
import SearchInput from "./SearchInput";
import MovieList from "./MovieList";
import { Button } from "@material-tailwind/react";

export default function MovieSearch() {

  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search')
   const page = Number(searchParams.get('page') || 1) ;

  const {isLoading, data, error} = useSearchMovieQuery({q: search, page});

  if(isLoading) return <h1>Loading...</h1>
  if(error) return <h1>{error.data.status_message}</h1>

  const handlePageChange = (newPage) => {
    setSearchParams({ search, page: newPage })
  }


  return (
    <div>

      <div className=" flex flex-col-reverse md:flex md:items-baseline md:justify-between md:flex-row">
              <h1 className="ml-6 text-xl font-semibold">Search result for "{search}"</h1>
              <SearchInput setSearchParams={setSearchParams} />
              
            </div>
            
      
            {data && <MovieList movies={data.results}/>}

            <div className="flex justify-center items-center gap-5 mb-3">
                            <Button onClick={() =>  handlePageChange(page - 1 )} 
                            disabled={page===1}
                            className="btn bg-blue-500 text-white px-3 py-1 text-[10px]  rounded-md">Prev</Button>
                            <h1 className="font-semibold text-[14px] ">{page}</h1>
                            <Button
                            onClick={() => handlePageChange(page + 1 )} 
                            className="btn bg-blue-500 text-white px-3 py-1 text-[10px]  rounded-md">Next</Button>
                        </div>
      

    </div>
  )
}
