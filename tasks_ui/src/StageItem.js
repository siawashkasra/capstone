import TaskList from "./TaskList";
import { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { reOrder, shift as shiftTask } from "./utilities/Utilities";
import { getData, persistOrder, persistShift } from "./API/Tasks";

const TaskItem = () => {
  const [stages, setStage] = useState([]);

  useEffect(() => {
    getData(setStage)
    console.log("rendering");
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
      persistOrder(
        reOrder(stage, source, destination, draggableId, setStage, stages), setStage
      );
    }

    if (destination.droppableId !== source.droppableId) {
      persistShift(shiftTask(stage, source, destination, stages, setStage), setStage);
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
