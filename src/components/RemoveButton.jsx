'use client'
import React, { useTransition } from 'react'
import { removeTask } from '../lib/action.js';
import { Loader2Icon } from 'lucide-react';

export default function RemoveButton({id}) {
   const [isPending, startTransition] = useTransition();
  const handleRemove = () => {
    startTransition(async () => {
      try {
        await removeTask(id);
      } catch (err) {
        console.log(err.message)
      }
    })
  };
  return (
    <div>
      {isPending ? (<button  className="text-pink-500 hover:text-pink-700"disabled>
        <Loader2Icon className="animate-spin" />
        </button>) : (
          <button className="text-pink-500 hover:text-pink-700"
        onClick={handleRemove}>
        <i className="fas fa-trash" />
      </button>)}
     
    </div>
  )
}
