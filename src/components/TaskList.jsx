
import { Card } from "./ui/card.jsx";
import Link from "next/link.js";
import axios from "axios";
import RemoveButton from "./RemoveButton.jsx";

export default async function TaskList() {

  const response = await axios.get("https://688c1982cd9d22dda5cc12e7.mockapi.io/task");
  const tasks = response.data;

  return (
    <div className="space-y-1 py-2">
      {tasks.map((task, i) => (
        <Card
          key={task.id ?? i}
          className={`w-full p-1 shadow-md ${task.done ? `opacity-50` : ``}`}
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2 ml-4 shrink-0">
              <button
                className={`${
                  task.done
                    ? `text-green-500 hover:text-green-700`
                    : `text-gray-400`
                }`}
              >
                <i className="fa-regular fa-circle-check" />
              </button>
              <span
                className={`${
                  task.done
                    ? `line-through text-gray-400`
                    : `text-sm text-gray-600`
                }`}
              >
                {task.task}
              </span>
            </div>

            <div className="flex items-center gap-2 ml-4 shrink-0">
              <Link href={`/task_edit/${task.id}`}>
                <button className="text-green-500 hover:text-green-700">
                  <i className="fa-regular fa-pen-to-square" />
                </button>
              </Link>
              <RemoveButton id={task.id}/>
             
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
