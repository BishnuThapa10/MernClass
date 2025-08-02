import { Button, Input, Option, Select, Typography } from "@material-tailwind/react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import * as Yup from 'yup';
import { addEmployee } from "./employeeSlice";
import { nanoid } from "@reduxjs/toolkit";

export const valSchema = Yup.object({
  name: Yup.string().min(3).max(20).required(),
  email: Yup.string().email().required(),
  job: Yup.string().required(),
  employed: Yup.string().required()
});


export default function AddEmployee() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  return (
    <div className="p-2 min-h-screen flex items-center justify-center bg-gray-50">
      <Formik

        initialValues={{
          name: '',
          email: '',
          job: '',
          employed: ''
        }}

        onSubmit={(val) => {
          dispatch(addEmployee({...val, id: nanoid()}));
          nav(-1);
        }}

        validationSchema={valSchema}

      >
        {({ handleChange, handleSubmit, values, errors, touched, setFieldValue }) => (
          <form onSubmit={handleSubmit} className=" w-80 max-w-screen-lg sm:w-96 bg-white p-6 rounded-lg shadow-md">
            <div className="mb-1 flex flex-col gap-6">

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Employee Name
              </Typography>
              <Input
                onChange={handleChange}
                name="name"
                size="lg"
                label="Name"
              />
              {errors.name && touched.name && <h1 className="text-pink-700">{errors.name}</h1>}

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Email
              </Typography>
              <Input
                onChange={handleChange}
                name="email"
                size="lg"
                label="Email"
              />
              {errors.email && touched.email && <h1 className="text-pink-700">{errors.email}</h1>}

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Job
              </Typography>
              <Select
                onChange={(e) => setFieldValue('job', e)}
                name="job"
                size="lg"
                label="Select Job"
              >
                <Option value="manager">Manager</Option>
                <Option value="developer">Developer</Option>
                <Option value="executive">Executive</Option>
              </Select>
              {errors.job && touched.job && <h1 className="text-pink-700">{errors.job}</h1>}

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Employed
              </Typography>
              <Input
                onChange={handleChange}
                name="employed"
                label="Select Date"
                type="date"
                className="!text-gray-700"
              />
              {errors.employed && touched.employed && <h1 className="text-pink-700">{errors.employed}</h1>}


            </div>

            <Button type="submit" className="mt-6" fullWidth>
              Add Employee
            </Button>

          </form>
        )}

      </Formik>
    </div>
  )
}
