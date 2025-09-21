
'use server';

import axios from "axios";
import { revalidatePath } from "next/cache.js";


export async function addTask(val) {

  try {
    await axios.post('https://688c1982cd9d22dda5cc12e7.mockapi.io/task', val);
    revalidatePath('/');

    return { success: true, message: 'Task added successfully' }

  } catch (err) {

    return { success: false, message: err.message }

  }

}

export async function updateTask(id, val) {

  try {
    await axios.put(`https://688c1982cd9d22dda5cc12e7.mockapi.io/task/${id}`, val);
    revalidatePath('/');

    return { success: true, message: 'Task updated successfully' }

  } catch (err) {

    return { success: false, message: err.message }

  }

}


export async function removeTask(id) {

  try {
    await axios.delete(`https://688c1982cd9d22dda5cc12e7.mockapi.io/task/${id}`);
    revalidatePath('/');

    return { success: true, message: 'Task removed successfully' }

  } catch (err) {

    return { success: false, message: err.message }

  }

}