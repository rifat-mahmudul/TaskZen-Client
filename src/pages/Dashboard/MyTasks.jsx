import TaskCard from "../../components/Dashboard/TaskCard"

const MyTasks = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          <div
          className="bg-gray-300 p-4 rounded-lg min-h-screen" 
          >
            <h1 className="text-center font-bold text-2xl mb-3">To Do</h1>
            <TaskCard></TaskCard>
          </div>
          
          <div
          className="bg-gray-300 p-4 rounded-lg min-h-screen"
          >
            <h1 className="text-center font-bold text-2xl mb-3">In Progress</h1>
            <TaskCard></TaskCard>
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
