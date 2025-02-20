import { MdDelete } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";

const TaskCard = () => {
  return (
    <div className="border border-black p-3 rounded-lg shadow-lg bg-gray-400 cursor-pointer">
      <h1 className="font-bold text-xl">This is Title</h1>

      <p className="mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste eius sapiente maxime porro dolorum quis sint? Saepe repellendus aliquam quos.</p>

      <div className="flex justify-between items-center mt-3">
        <div>
            <button className="bg-green-500 py-1 px-5 rounded-3xl font-semibold text-white">Done</button>
        </div>

        <div className="flex gap-2 items-center">
            <button className="bg-gray-500 rounded-full p-2 text-xl text-red-800"><MdDelete /></button>
            <button className="bg-gray-500 rounded-full p-2 text-xl text-blue-800"><FaPencilAlt /></button>
        </div>
      </div>
    </div>
  )
}

export default TaskCard
