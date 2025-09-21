'use client'
import { Formik } from 'formik';
import React, { useTransition, useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Input } from './ui/input.jsx';
import { addTask } from '../lib/action.js';
import { Loader2Icon } from 'lucide-react';

export const valSchema = Yup.object({
  task: Yup.string().min(3).max(20).required("Task is required"),
  done: Yup.boolean().default(false)
});

export default function AddTask() {
  const [isLoading, startTransition] = useTransition();

  return (
    <div>
      <Formik
        initialValues={{ task: '', done: false }}
        validationSchema={valSchema}
        onSubmit={(val, { resetForm }) => {
          startTransition(async () => {
            const newTask = await addTask(val);
            resetForm();
          });
        }}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <div>
            <h1 className="text-center mb-4 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-600">
              To-Do List
            </h1>

            <form onSubmit={handleSubmit} className="flex space-x-4">
              <Input
                onChange={handleChange}
                name="task"
                placeholder="Add a new task..."
                disabled={isLoading}
                value={values.task}
                className="flex-1 min-w-0"
              />
              {isLoading ? (<button className="text-blue-600 hover:text-blue-800 mr-2 disabled:opacity-50" disabled>
                <Loader2Icon className="animate-spin" />
              </button>) : (<button
                type="submit"
                disabled={isLoading}
                aria-label="Add item"
                className="text-blue-600 hover:text-blue-800 mr-2 disabled:opacity-50"
              >
                <i className="fa-solid fa-plus"></i>
              </button>)}
            </form>

            {errors.task && touched.task && (
              <h1 className="text-pink-700">{errors.task}</h1>
            )}
          </div>
        )}
      </Formik>
    </div>
  );
}
