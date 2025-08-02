import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { useApiHooks } from "../../hooks/apiHook";

export default function Detail() {

    const {id} = useParams();
    const [data, load, err] = useApiHooks('https://www.thecocktaildb.com/api/json/v1/1/lookup.php', { i: id })
    
     console.log(data);

     if(load) return <h1>Loading...</h1>
     if(err) return <h1 className="text-shadow-pink-500">{err}</h1>

  return (
    <div className="flex justify-center m-8">
      {data && data.drinks.map((drink)=>{
        return <Card key={drink.idDrink} className="w-full max-w-md">
            <CardHeader floated={false} className="h-auto flex justify-center">
                <img src={drink.strDrinkThumb} alt={drink.strDrink} className="object-cover w-full h-full" />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">{drink.strDrink}</Typography>

                <Typography color="gray" className="text-sm mb-2">
                    <strong className="font-bold">Category: </strong>{drink.strCategory} <br/>
                    <strong className="font-bold">Type: </strong>{drink.strAlcoholic} <br/>
                    <strong className="font-bold">Glass: </strong>{drink.strGlass} 
                </Typography>
                <Typography color="gray" className="text-sm mt-3">
                    <strong className="font-bold">Instruction: </strong>{drink.strInstructions}
                </Typography>
            </CardBody>
        </Card>
        
      })}
    </div>
  )
}
