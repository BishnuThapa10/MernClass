import { Card, CardBody, Chip, Progress, Typography } from "@material-tailwind/react"
import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css";

export default function MovieList({movies}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-2 px-4">

      {movies.map((movie) =>{
        return <Card key={movie.id} className=" shadow-md">
          <div className="relative">
      <img
        src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
        alt=""
        className=" w-full lg:h-96 md:h-96 h-auto object-cover"
      />
      <div className="w-8 h-8 absolute -bottom-4 left-3 bg-black rounded-full p-0.5  shadow-md">
      <CircularProgressbar
        value={movie.vote_average*10}
        text={`${(movie.vote_average*10).toFixed(0)}%`}
        styles={buildStyles({
          textColor: "#EDEFEF",
          pathColor: (movie.vote_average*10) >= 70 ? "#22c55e" : "#D2D531", // green/yellow
          trailColor: "#e5e7eb",
          textSize: "28px",
        })}
      />
    </div>
    </div>
      <CardBody>
        <Typography variant="h6">{movie.title}</Typography>
        <Typography color="gray" className="text-sm">
          {new Date(movie.release_date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })}
        </Typography>
        
       
      </CardBody>
    </Card>
      })}
    </div>
  )
};
