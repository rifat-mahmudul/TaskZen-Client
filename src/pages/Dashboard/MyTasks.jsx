import { useQuery } from "@tanstack/react-query";
import TaskCard from "../../components/Dashboard/TaskCard"
import useAxiosPublic from "../../hooks/useAxiosPublic"
import useAuth from "../../hooks/useAuth";

const MyTasks = () => {

  const axiosPublic = useAxiosPublic();
  const {user} = useAuth();

  const {data : todoTask = []} = useQuery({
    queryKey : ['todo-tasks', user?.email],
    queryFn : async () => {
      const {data} = await axiosPublic(`/add-task/getTodoTask/${user?.email}`);
      return data;
    }
  })

  const {data : inProgressTask = []} = useQuery({
    queryKey : ['in-progress-tasks', user?.email],
    queryFn : async () => {
      const {data} = await axiosPublic(`/add-task/getInProgressTask/${user?.email}`);
      return data;
    }
  })


  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          <div
          className="bg-gray-300 p-4 rounded-lg min-h-screen" 
          >
            <h1 className="text-center font-bold text-2xl mb-3">To Do</h1>

            <div className="flex flex-col gap-5">
              {
                todoTask.map(task => (
                  <TaskCard 
                  key={task._id}
                  task={task}
                  ></TaskCard>
                ))
              }
            </div>

          </div>
          
          <div
          className="bg-gray-300 p-4 rounded-lg min-h-screen"
          >
            <h1 className="text-center font-bold text-2xl mb-3">In Progress</h1>
              <div className="flex flex-col gap-5">
                {
                  inProgressTask.map(task => (
                    <TaskCard 
                    key={task._id}
                    task={task}
                    ></TaskCard>
                  ))
                }
              </div>
          </div>

          <div
          className="bg-gray-300 p-4 rounded-lg min-h-screen"
          >
            <h1 className="text-center font-bold text-2xl mb-3">Done</h1>
            <TaskCard></TaskCard>
          </div>

        </div>
    </section>
  )
}

export default MyTasks
