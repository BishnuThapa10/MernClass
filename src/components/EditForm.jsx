'use client'
import { Label } from '@radix-ui/react-label'
import { Formik } from 'formik'
import React, { useTransition } from 'react'
import { Input } from './ui/input.jsx'
import { RadioGroup, RadioGroupItem } from './ui/radio-group.jsx'
import { updateTask } from '../lib/action.js'
import { valSchema } from './AddTask.jsx'
import { Loader2Icon } from 'lucide-react'
import { Button } from './ui/button.jsx'
import { useRouter } from 'next/navigation.js'

export default function EditForm({ task }) {
  const router = useRouter();
  const [isLoading, startTransition] = useTransition()
  return (
    <div className="p-2 min-h-screen flex  justify-center bg-gray-50">
      <Formik

        initialValues={{
          task: task.task,
          done: task.done
        }}

        onSubmit={(val) => {
          startTransition(async () => {
            try {
              await updateTask(task.id, val);
              router.back();
            } catch (err) {
              console.log(err.message)
            }
          })
        }}

        validationSchema={valSchema}

      >
        {({ handleChange, handleSubmit, values, errors, touched, setFieldValue }) => (
          <div className=" w-fit h-fit bg-white flex flex-col rounded-lg shadow-md p-6 max-h-fit">
            <h1 className="text-center mb-4 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-600">Edit Task</h1>


            <form onSubmit={handleSubmit}
              className="flex gap-3 flex-col">
              <Label className="text-sm text-gray">
                Task
              </Label>
              <Input
                onChange={handleChange}
                name="task"
                size="lg"
                label="Edit task..."
                value={values.task}
                className="flex-1 min-w-0"
              />
              {errors.task && touched.task && <p className="text-pink-700 text-sm">{errors.task}</p>}

              <Label className="text-sm text-gray">Completed</Label>
              <div className="flex items-center gap-4 text-sm">
                <RadioGroup value={values.done ? 'true' : 'false'} onValueChange={(val) => setFieldValue('done', val === 'true')}>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="true" id="done-yes" />
                    <Label htmlFor="done-yes" className="text-sm font-medium text-gray-700">Yes</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="false" id="done-no" />
                    <Label htmlFor="done-no" className="text-sm font-medium text-gray-700">No</Label>
                  </div>
                </RadioGroup>
              </div>
              {errors.done && touched.done && <p className="text-pink-700 text-sm">{errors.done}</p>}

              {isLoading ? (<Button type="submit" className="mt-6 !mb-0 bg-blue-600 w-full " disabled>
                <Loader2Icon className="animate-spin" />
                Please wait
              </Button>) : (<Button type="submit" className="mt-6 !mb-0 bg-blue-600 w-full ">
                Update Task
              </Button>)}
            </form>


          </div>
        )}

      </Formik>
    </div>
  )
}
