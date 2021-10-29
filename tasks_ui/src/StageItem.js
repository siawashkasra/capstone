import TaskList from "./TaskList";
import { useEffect, useState } from "react";
import axios from "axios";
import { DragDropContext } from "react-beautiful-dnd";

const TaskItem = () => {
  // const [tasks, setTask] = useState([]);
  // const [refresh, setRefresh] = useState(false);
  const [stages, setStage] = useState([]);

  const fetchTaskStage = async () => {
    const response = await axios.get("http://localhost:8000/task-stages/", {
      headers: {
        Accept: "application/json",
      },
      auth: {
        username: "siawashkasra",
        password: "kasra@123",
      },
    });
    setStage(response.data);
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
    if (res.status === 200) {
      fetchTaskStage()
    }
  };

  useEffect(() => {
    fetchTaskStage();
    console.log("rendering");
  }, []);


  const onDragEnd = (result) => {
    console.log("onDratEnd", result)
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const stage = stages.filter((stage) => stage.id === parseInt(source.droppableId))
    
    if(destination.droppableId === source.droppableId && destination.index !== source.index) {
      let tempTasks = Array.from(stage[0].tasks);
      tempTasks.splice(source.index, 1);
      tempTasks.splice(destination.index, 0, stage[0].tasks.filter(task => task.id === parseInt(draggableId))[0]);
      setStage(stages.map((stage) => stage.id === parseInt(source.droppableId) ? {...stage, tasks: tempTasks}: stage))    
      let newOrder = [];
      for (let index = 0; index < tempTasks.length; index++) {
        newOrder.push({ id: tempTasks[index].id, order: index });
      }
      reorder(newOrder);
    }

    if(destination.droppableId !== source.droppableId) {
      let tasks = []
      const task = stage[0].tasks.find(task => task.id === parseInt(draggableId))
      const shiftedTask = {...task, stage: parseInt(destination.droppableId)}
      tasks.push(shiftedTask)  
      const newStageState = stages.map((stage) => stage.id === parseInt(destination.droppableId) ? {...stage, tasks: tasks} : stage)
      console.log(newStageState)
      setStage(newStageState)
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex justify-between">
        {stages.map((stage, index) => (
          <div className="card m-2 shado w-full">
            <div className="stage-header p-2 bg-gray-800 text-white text-center">
              <h5>{stage.stage}</h5>
            </div>
            <div className="stage-body p-1 text-center w-full">
              <TaskList tasks={stage.tasks} id={stage.id} />
            </div>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
};

export default TaskItem;
