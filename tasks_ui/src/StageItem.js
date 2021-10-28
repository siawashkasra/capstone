import TaskList from "./TaskList";
import { useEffect, useState } from "react";
import axios from "axios";
import { DragDropContext } from "react-beautiful-dnd";

const TaskItem = ({ stage, index }) => {
  const [tasks, setTask] = useState([]);
  const [refresh, setRefresh] = useState(false)

  const fetchTasks = async () => {
    const response = await axios.get(
      `http://localhost:8000/tasks?stage=${stage.id}`,
      {
        headers: {
          Accept: "application/json",
        },
        auth: {
          username: "siawashkasra",
          password: "kasra@123",
        },
      }
    );
    setTask(response.data);
  };

  const reorder = async (newOrder) => {
    const res = await axios.patch(
      "http://localhost:8000/tasks/reorder/",
      newOrder,
      {
        auth: {
          username: "siawashkasra",
          password: "kasra@123",
        },
      }
    );
    console.log(res)
    if(res.status === 200) {
      setRefresh(true)
    }
  };

 useEffect(() => {
   fetchTasks()
 }, [])

 useEffect(() => {
}, [refresh])


  const onDragEnd = (result) => {
    setRefresh(false)
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.draggableId === source.draggableId &&
      destination.index === source.index
    ) {
      return;
    }
    let tempTasks = Array.from(tasks)
    tempTasks.splice(source.index, 1)
    tempTasks.splice(destination.index, 0, tasks[draggableId])
    setTask(tempTasks)
    let newOrder = []
    for(let index = 0; index< tempTasks.length; index++) {
        newOrder.push({id: tempTasks[index].id, order: index})
    }
    reorder(newOrder)
  };
  
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="card m-2 shado w-full">
        <div className="stage-header p-2 bg-gray-800 text-white text-center">
          <h5>{stage.stage}</h5>
        </div>
        <div className="stage-body p-1 text-center">
          <TaskList tasks={tasks} id={index} />
        </div>
      </div>
    </DragDropContext>
  );
};

export default TaskItem;
