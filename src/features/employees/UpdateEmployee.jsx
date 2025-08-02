import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router"
import { updateEmployee } from "./employeeSlice";
import { valSchema } from "./AddEmployee";
import { Button, Input, Option, Select, Typography } from "@material-tailwind/react";

export default function UpdateEmployee() {

  const { id } = useParams();
  const { employees } = useSelector((state) => state.employeeSlice);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const employee = employees.find((employee) => employee.id === id)

  return (
    <div className="p-2 flex items-center justify-center min-h-screen bg-gray-50">

      <Formik

        initialValues={{
          name: employee.name,
          email: employee.email,
          job: employee.job,
          employed: employee.employed
        }}

        onSubmit={(val) => {
          dispatch(updateEmployee({ ...val, id: employee.id }));
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
                value={values.name}
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
                value={values.email}
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
                value={values.job}
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
                value={values.employed}
                onChange={handleChange}
                name="employed"
                label="Select Date"
                type="date"
                className="!text-gray-700"
              />
              {errors.employed && touched.employed && <h1 className="text-pink-700">{errors.employed}</h1>}


            </div>

            <Button type="submit" className="mt-6" fullWidth>
              Update Employee
            </Button>

          </form>
        )}

      </Formik>

    </div>
  )
}
