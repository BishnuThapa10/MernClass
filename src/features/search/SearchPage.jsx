import { useNavigate, useSearchParams } from "react-router";
import SearchInput from "./SearchInput";
import { useGetProductsQuery } from "../product/productApi";
import { Button, Card, CardBody, CardFooter, CardHeader, Rating, Typography } from "@material-tailwind/react";
import { baseUrl } from "../../app/appUrl.js";

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, isLoading, error } = useGetProductsQuery({search: searchParams.get('q')});
  const nav = useNavigate();
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1 className="text-red-500">{error.data}</h1>
  return (
    <div className="p-5">

      <SearchInput setSearchParams={setSearchParams} />
      <div className="grid grid-cols-4 gap-4 p-4">
      {data.data && data.data.map(({ _id, title, image, price, description, rating }) => {
        return <Card key={_id} className="mt-6 ">
          <CardHeader color="blue-gray" className="relative h-56 p-0">
            <img
              src={`${baseUrl}/${image}`}
              className="h-full w-full object-cover"
              alt="card-image"
            />
          </CardHeader>
          <CardBody>
            <div className="flex justify-between">
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {title}
              </Typography>
              <p>Rs.{price}</p>
            </div>
            <Rating readonly value={rating} />
            <p className="line-clamp-3">
              {description}
            </p>
          </CardBody>
          <CardFooter className="pt-0">
            <Button size="md" color="blue"
              onClick={() => nav(`/product/${_id}`)}
            >View Detail</Button>
          </CardFooter>
        </Card>
        
      })}

    </div>
    </div>
  )
}