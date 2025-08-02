import { Card, List, ListItem } from "@material-tailwind/react";
import { useNavigate } from "react-router";
import { useApiHooks } from "../../hooks/apiHook";

export default function 
() {

  const [data, load, err] = useApiHooks('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    const nav = useNavigate();

    if(load) return <h1>Loading...</h1>
    if(err) return <h1 className="text-pink-800">{err}</h1>

  return (
    <div className="flex flex-col items-center space-y-1 p-2">
      <h1 className="text-xl p-2 font-semibold">Available Categories</h1>
        {data && data.drinks.map((drink, i) => {
            return <Card key={i} className="w-96">
      <List>
        <a href="">
          <ListItem onClick={()=>nav(`/category?c=${drink.strCategory}`)}>{drink.strCategory}</ListItem>
        </a>
      </List>
    </Card>
        
        })};
      
    </div>
  )
}
