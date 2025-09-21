
import axios from 'axios';
import React from 'react'
import EditForm from '../../../components/EditForm.jsx';


export default async function Page({params}) {
  const { id } = await params;
  const response = await axios.get(`https://688c1982cd9d22dda5cc12e7.mockapi.io/task/${id}`)
  return (
    <div>

      <EditForm task = {response.data} />

    </div>
  )
}

// Required for static export
export async function generateStaticParams() {
  // Fetch all tasks to know which [id] pages to pre-render
  const response = await axios.get(
    "https://688c1982cd9d22dda5cc12e7.mockapi.io/task"
  );

  const tasks = response.data;

  return tasks.map((task) => ({
    id: task.id,
  }));
}
