
import { useMutation } from "@tanstack/react-query";
import { useState } from "react"
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
import { useNavigate } from "react-router";
import HelmetTitle from "../../components/shared/HelmetTitle";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";

const AddTask = () => {

  const [loading, setLoading] = useState();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const {user} = useAuth();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const {mutateAsync} = useMutation({
    mutationKey : ['add-task'],
    mutationFn : async(taskData) => {
      const {data} = await axiosPublic.post('/add-task', taskData);
      return data;
    }
  })

  const onSubmit = async data => {
    setLoading(true);
    data.userEmail = user?.email;

    try {
      await mutateAsync(data);
      toast.success('Task Added Successfully!');
      navigate('/dashboard/my-tasks');
    } catch (error) {
      console.log(`error from post task : ${error}`);
      toast.error('An error occurred! Please try again.')
    }finally{
      setLoading(false);
    }
  }

  return (
    <section>

      <HelmetTitle title="Add Task"></HelmetTitle>

      <form onSubmit={handleSubmit(onSubmit)}>

        {/* course price and discount */}
        <div className="flex flex-col gap-6 lg:gap-0 sm:flex-row items-center justify-between mt-5">

          {/* course price */}
          <div className="lg:w-[48%] w-full">
            <h1 className="font-bold mb-2">Title</h1>

            <input 
              type="text" 
              className="w-full p-3 bg-inherit border border-emerald-500 outline-0 focus:border-2 rounded-lg"
              placeholder="Enter task title" 
              {
                ...register('title', {
                  required : "Title is Required",
                    maxLength : {
                        value : 50,
                        message : "Title maximum 50 characters"
                    }
                })
              }
              />
              {
                errors.title &&
                <p className='text-xs mt-2 text-red-500'>{errors.title.message}</p>
              }
          </div>

          {/* discount */}
          <div className="lg:w-[48%] w-full">
            <h1 className="font-bold mb-2">Category</h1>

            <select
            className="w-full p-3 bg-inherit border border-emerald-500 outline-0 focus:border-2 rounded-lg"
            {...register("category", { required: "Category is Required" })}
            >
                <option value="">Select Category</option>
                <option value="To-Do">To-Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
            </select>

            {
            errors.category &&
            <p className='text-xs mt-2 text-red-500'>{errors.category.message}</p>
            }
          </div>
          
        </div>

        {/* course details */}
        <div className="w-full mt-6">
            <h1 className="font-bold mb-2">Description</h1>

            <textarea
            className="w-full p-3 border border-emerald-500 outline-0 focus:border-2 rounded-lg h-40 bg-[#00ffb72d]"
            placeholder="Write Details About The Task..."
            {
              ...register('description', {
                required : "Description is Required",
                maxLength : {
                    value : 200,
                    message : "Description maximum 50 characters"
                }
              })
            }
            ></textarea>
            {
              errors.description &&
              <p className='text-xs mt-2 text-red-500'>{errors.description.message}</p>
            }
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

export default AddTask
