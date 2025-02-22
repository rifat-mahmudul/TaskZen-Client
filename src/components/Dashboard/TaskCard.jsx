/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from 'react-hot-toast'
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router";

const TaskCard = ({task}) => {


    const axiosPublic = useAxiosPublic();
    const queryClient = useQueryClient();

    const {title, category, description, timeStamp, _id} = task;

    const {mutateAsync} = useMutation({
      mutationFn: async () => {
        await axiosPublic.delete(`/add-task/deleteTask/${_id}`);
      },
      onSuccess : () => {
        queryClient.invalidateQueries(["todo-tasks"]);
        queryClient.invalidateQueries(["in-progress-tasks"]);
        queryClient.invalidateQueries(["done-tasks"]);
      }
    })

    const handleDelete = async () => {
      await mutateAsync();
      toast.success('Task Deleted Successfully');
    }

    if(!task) return null;

  return (
    <div className="border border-black p-3 rounded-lg shadow-lg bg-gray-400 cursor-pointer">
      <h1 className="font-bold text-xl">{title}</h1>

      <p className="mt-2">{description}</p>
      <p className="mt-2">Task Added : {new Date(timeStamp).toLocaleDateString()}</p>

      <div className="flex justify-between items-center mt-3">
        <div>
            <button 
            className={`py-1 px-5 rounded-3xl font-semibold text-white ${category === 'To-Do' ? 'bg-green-500' : category === 'In Progress' ? 'bg-orange-500' : 'bg-blue-500'}`}
            >
              {category}
            </button>
        </div>

        <div className="flex gap-2 items-center">
            <button 
            onClick={handleDelete}
            className="bg-gray-500 rounded-full p-2 text-xl text-red-800"><MdDelete /></button>

            <Link to={`/dashboard/update-task/${_id}`}>
              <button className="bg-gray-500 rounded-full p-2 text-xl text-blue-800"><FaPencilAlt /></button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default TaskCard
