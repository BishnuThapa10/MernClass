
import AddTask from "../components/AddTask.jsx";
import TaskList from "../components/TaskList.jsx";

export default function Home() {
  return (
    <div className='p-2 min-h-screen flex justify-center bg-gray-50'>
      <div className=" w-80 max-w-screen-lg sm:w-96 bg-white flex flex-col rounded-lg shadow-md p-6">
        <AddTask />
        <TaskList />
      </div>

    </div>
  );
}
