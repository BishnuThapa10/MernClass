import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router"
import { useApiHooks } from "../../hooks/apiHook";

export default function Category() {

  const [search, setSearch] = useSearchParams();
  const [data,load, err] = useApiHooks('https://www.thecocktaildb.com/api/json/v1/1/filter.php', { c: search.get('c')})
  const [visibleCount, setVisbleCount] = useState(10);
  const nav = useNavigate();


  const loadMore = ()=>{
    setVisbleCount(prev => prev + 10);
  };

  console.log(data);

  if(load) return <h1>Loading...</h1>
  if(err) return <h1 className="text-pink-400">{err}</h1>

  return (
    <div>
      <Typography variant="h6" color="gray" className="pt-4 pl-8 uppercase">
          {search.get('c')}
        </Typography>
        <div className="grid grid-cols-5 gap-4 p-2 justify-center">
      {data && data.drinks.slice(0, visibleCount).map((drink) => {
        return <Card onClick={()=>nav(`/detail/${drink.idDrink}`)} key={drink.idDrink} className="w-[200px]">
      <CardHeader floated={false} className="h-[180px]">
        <img className="w-full h-full" src={drink.strDrinkThumb} alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography color="blue-gray" className="font-medium" textGradient>
         {drink.strDrink}
        </Typography>
      </CardBody>
    </Card>
      })}
      </div>

      {data && visibleCount < data.drinks.length && (
        <div className="flex justify-end mr-12 mb-2">
        <button
          onClick={loadMore}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-800 "
        >
          Load More
        </button>
        </div>
      )}
    </div>
  )
}
