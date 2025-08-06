import { Button, Input } from "@material-tailwind/react";
import { Formik } from "formik";
import { useNavigate } from "react-router";
import * as Yup from 'yup';

export const valSchema = Yup.object({
  search: Yup.string().min(3).max(15).required()
});

export default function SearchInput({isHome, setSearchParams }) {
  const nav = useNavigate()
  return (
    <div>
      <Formik

      initialValues={{
        search: ''
      }}

      onSubmit={(val, {resetForm}) => {

        if(isHome) {
          nav(`/search-movie?search=${val.search}`)
        } else {
          setSearchParams({ search: val.search})
        }

        resetForm();

      }}

      validationSchema={valSchema}

      >

        {({handleChange, handleSubmit, values ,errors, touched}) => (
          <div className="p-2">
          <form onSubmit={handleSubmit}
          className="flex gap-3 max-w-[400px] p-1"
          >
            <Input
            onChange={handleChange}
            name="search"
            value={values.search}
            label="Search Movies"
            />
            <Button type="submit" className="bg-blue-600 hover:bg-blue-800">Search</Button>
            
          </form>
          {errors.search && touched.search && <h1 className="text-pink-500 pl-1">{errors.search}</h1> }
          </div>
          
        )}

      </Formik>
    </div>
  )
}
