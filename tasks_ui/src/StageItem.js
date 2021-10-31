import TaskList from "./TaskList";
import { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { dragAndDrop, shift } from "./utilities/Utilities";
import { getData } from "./API/Tasks";

const TaskItem = () => {
  const [stages, setStage] = useState([]);

  useEffect(() => {
    getData(setStage);
  }, []);

  const onDragEnd = (result) => {
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
    const stage = stages.filter(
      (stage) => stage.id === parseInt(source.droppableId)
    );

    if (
      destination.droppableId === source.droppableId &&
      destination.index !== source.index
    ) {
      dragAndDrop(stage, source, destination, draggableId, setStage, stages);
    }

    if (destination.droppableId !== source.droppableId) {
      shift(stage, source, destination, stages, setStage);
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
