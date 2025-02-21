
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
import { useNavigate, useParams } from "react-router";
import HelmetTitle from "../../components/shared/HelmetTitle";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";

const UpdateTask = () => {

  const [loading, setLoading] = useState(false);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const {user} = useAuth();
  const {id} = useParams();

  const [singleTaskData, setSingleTaskData] = useState({});
  const [updateCategory, setUpdateCategory] = useState('');
  
  const {data : task = {}} = useQuery({
    queryKey : ['single-task'],
    queryFn : async () => {
        const {data} = await axiosPublic(`/add-task/getTaskById/getSingleTask/${id}`);
        return data;
    }
  })

  useEffect(() => {
    if (task) {
      setSingleTaskData(task);
      setUpdateCategory(task?.category || "");
    }
  }, [task]);

  const {title, description} = singleTaskData;

  const {mutateAsync} = useMutation({
    mutationKey : ['add-task'],
    mutationFn : async(taskData) => {
      const {data} = await axiosPublic.patch(`add-task/updateSingleTask/${id}`, taskData);
      return data;
    }
  })

  const handleSubmit = async e => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const category = updateCategory;
    const description = form.description.value;
    const data = {title, category, description};
    data.userEmail = user?.email;

    try {
      await mutateAsync(data);
      toast.success('Task Updated Successfully!');
      navigate('/dashboard/my-tasks');
    } catch (error) {
      console.log(`error from Updated task : ${error}`);
      toast.error('An error occurred! Please try again.')
    }finally{
      setLoading(false);
    }
  }

  return (
    <section>

      <HelmetTitle title="Update Task"></HelmetTitle>

      <form onSubmit={handleSubmit}>

        {/* course price and discount */}
        <div className="flex flex-col gap-6 lg:gap-0 sm:flex-row items-center justify-between mt-5">

          {/* course price */}
          <div className="lg:w-[48%] w-full">
            <h1 className="font-bold mb-2">Title</h1>

            <input 
              type="text" 
              className="w-full p-3 bg-inherit border border-emerald-500 outline-0 focus:border-2 rounded-lg"
              placeholder="Enter task title" 
              name="title"
              defaultValue={title}
              />
          </div>

          {/* discount */}
          <div className="lg:w-[48%] w-full">
            <h1 className="font-bold mb-2">Category</h1>

            <select
            className="w-full p-3 bg-inherit border border-emerald-500 outline-0 focus:border-2 rounded-lg"
            name="category"
            value={updateCategory}
            onChange={(e) => setUpdateCategory(e.target.value)}
            >
                <option value="">Select Category</option>
                <option value="To-Do">To-Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
            </select>
          </div>
          
        </div>

        {/* course details */}
        <div className="w-full mt-6">
            <h1 className="font-bold mb-2">Description</h1>

            <textarea
            className="w-full p-3 border border-emerald-500 outline-0 focus:border-2 rounded-lg h-40 bg-[#00ffb72d]"
            placeholder="Write Details About The Task..."
            name="description"
            defaultValue={description}
            ></textarea>
        </div>

        <button 
        disabled={loading}
        className='bg-gradient-to-r from-emerald-700 to-emerald-400 hover:from-emerald-400 hover:to-emerald-700 py-3 w-full mt-6 rounded-lg font-bold transition-[0.5s] disabled:cursor-not-allowed disabled:bg-emerald-300 text-lg text-white'
        >
            {
                loading ? 
                <ImSpinner9 className='animate-spin mx-auto text-2xl text-white' /> 
                : 
                "Add Task"
            }
        </button>

      </form>

    </section>
  )
}

export default UpdateTask
