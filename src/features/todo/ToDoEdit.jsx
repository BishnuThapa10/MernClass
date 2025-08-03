import { Button, Input, Radio, Typography } from "@material-tailwind/react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { updateTask } from "./taskSlice";
import { valSchema } from "./ToDoList";

export default function ToDoEdit() {

    const {id} = useParams();
    const {tasks} = useSelector((state)=> state.taskSlice);
    const nav = useNavigate();
    const dispatch = useDispatch();
  const task = tasks.find((task) => task.id === id)

  return (
   <div className="p-2 min-h-screen flex  justify-center bg-gray-50">
      <Formik

        initialValues={{
          task: task.task,
          done: task.done
        }}

        onSubmit={(val) => {
            dispatch(updateTask({ ...val, id: task.id }));
            nav(-1);
        }}

        validationSchema={valSchema}

      >
        {({ handleChange, handleSubmit, values, errors, touched, setFieldValue }) => (
          <div className=" w-fit h-fit bg-white flex flex-col rounded-lg shadow-md p-6 max-h-fit">
            <h1 className="text-center mb-4 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Edit Task</h1>

            
                <form onSubmit={handleSubmit}
                className="flex gap-3 flex-col">
                    <Typography className="text-sm text-gray">
                Task
              </Typography>
                <Input
                onChange={handleChange}
                    name="task"
                    size="lg"
                    label="Edit task..."
                    value={values.task}
                    className="flex-1 min-w-0"
                />
                {errors.task && touched.task && <p className="text-pink-700">{errors.task}</p>}

                <Typography className="text-sm text-gray">Completed</Typography>
                <div className="flex items-center gap-4 text-sm"> 
              <Radio
                checked={values.done === true}
                onChange={() => setFieldValue('done', true)}
                label='Yes' value="true" name="done"
                className="p-0 h-3 w-3"
                labelProps={{ className: "text-sm font-medium text-gray-700" }}/>
              <Radio
                onChange={() => setFieldValue('done', false)}
                checked={values.done === false}
                label='No' value="false" name="done" 
                className="p-0 h-3 w-3"
                labelProps={{ className: "text-sm font-medium text-gray-700" }}/>
                </div>
              {errors.done && touched.done && <p className="text-pink-700">{errors.done}</p>}

              <Button type="submit" className="mt-6 !mb-0 bg-blue-600 " fullWidth>
              Update Task
            </Button>
                </form>
                
            
        </div>
        )}

      </Formik>
    </div>
  )
}
