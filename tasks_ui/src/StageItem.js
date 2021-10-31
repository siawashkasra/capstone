import TaskList from "./TaskList";
import { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { dragAndDrop, shift } from "./utilities/Utilities";
import { getData } from "./API/Tasks";
import { PlusIcon } from "@heroicons/react/outline";
import CreateModal from "./layouts/Team/CreateModal";

const TaskItem = () => {
  const [stages, setStage] = useState([]);
  const [open, setOpen] = useState(false)

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
    <>
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex justify-between">
        {stages.map((stage, index) => (
          <div className="m-2 shado w-full">
            <div className="flex justify-between shadow-lg stage-header p-2 bg-purple-500 text-white text-left rounded-md">
              <h5>{stage.stage}</h5>
              <span className="p-1 bg-purple-600 rounded-lg transform hover:scale-150 transition-transform hover:rotate-45 shadow">
                <PlusIcon className="w-5" onClick={() => setOpen(true)} />
              </span>
            </div>
            <div className="stage-body p-1 text-center w-full">
              <TaskList tasks={stage.tasks} id={stage.id} />
            </div>
          </div>
        ))}
      </div>
    </DragDropContext>
    <CreateModal
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};

export default TaskItem;
