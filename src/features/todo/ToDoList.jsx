import { Button, Card, CardBody, IconButton, Input } from "@material-tailwind/react";
import { nanoid } from "@reduxjs/toolkit";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup';
import { addTask, removeTask } from "./taskSlice";
import { useNavigate } from "react-router";

export const valSchema = Yup.object({
  task: Yup.string().min(3).max(20).required(),
  done: Yup.boolean().required()
});

export default function ToDoList() {

    const dispatch = useDispatch();
    const nav  = useNavigate();
    const {tasks} = useSelector((state)=> state.taskSlice);

    return (<div className="p-2 min-h-screen flex  justify-center bg-gray-50">
      <Formik

        initialValues={{
          task: '',
          done: false
        }}

        onSubmit={(val, {resetForm}) => {
             dispatch(addTask({...val, id: nanoid()}));
             resetForm();
        }}

        validationSchema={valSchema}

      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <div className=" w-80 max-w-screen-lg sm:w-96 bg-white flex flex-col rounded-lg shadow-md p-6">
            <h1 className="text-center mb-4 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">To-Do List</h1>

            
                <form onSubmit={handleSubmit}
                className="flex space-x-4">
                <Input
                onChange={handleChange}
                    name="task"
                    size="lg"
                    label="Add a new task..."
                    value={values.task}
                    className="flex-1 min-w-0"
                />
                <button type="submit" 
                aria-label="Add item"
                className="text-blue-600 hover:text-blue-800 mr-2"><i class="fa-solid fa-plus"></i></button>
                </form>
                
                {errors.task && touched.task && <h1 className="text-pink-700">{errors.task}</h1>}
                <div className="space-y-1 py-2">
                    {tasks.map((task,i)=>{
                        return <Card
                        key={task.id}
                        className={`w-full p-1 shadow-md ${task.done ? `opacity-50` :``}`} >
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-2 ml-4 shrink-0">
                    <button className={` ${task.done ? `text-gray-400` : `text-green-500  hover:text-green-700`}`}>
                    <i class="fa-regular fa-circle-check"/>
                    </button>
                    <span
                  className={`${task.done ? `line-through text-gray-400`: `text-sm text-gray`}`} >
                  {task.task}
                </span>
                    </div>
                    
                 <div className="flex items-center gap-2 ml-4 shrink-0">
                    <button className="text-green-500  hover:text-green-700"
                    onClick={()=> nav(`/update-task/${task.id}`)}>
                    <i class="fa-regular fa-pen-to-square"/>
                    </button>

                    <button className="text-pink-500  hover:text-pink-700"
                    onClick={()=> dispatch(removeTask(i))}>
                    <i className="fas fa-trash"/>
                    </button>
                    </div>
                    </div>
                    </Card>
                    })}
                </div>
            
        </div>
        )}

      </Formik>
    </div>
        
    )
}
