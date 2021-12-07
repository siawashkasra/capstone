import TaskList from "./TaskList";
import { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { shift, move } from "../utilities/Utilities";
import { getData, create } from "../API/Tasks";
import { PlusIcon } from "@heroicons/react/outline";
import Modal from "../layouts/Modal";
import Form from "./CreateForm";
import { fetchMembers } from "../API/Members";
import { fetchLabels } from "../API/Labels";
import Loading from "../layouts/Loading";
import { useAuth } from "../API/use-auth";

const TaskGroup = () => {
  const [stages, setStage] = useState([]);
  const [open, setOpen] = useState(false);
  const [members, setMembers] = useState([]);
  const [options, setOptions] = useState([]);
  const [currStage, setCurrStage] = useState(stages[0]);

  const auth = useAuth();

  const handleClick = (currSt) => {
    setOpen(true);
    setCurrStage(currSt);
  };

  const handleCreate = (newTask) => {
    setStage(
      stages.map((stage) =>
        stage.id === newTask.stage.id
          ? { ...stage, tasks: [...stage.tasks, newTask] }
          : stage
      )
    );
    create(newTask, setStage, auth.token);
  };

  useEffect(() => {
    fetchLabels(setOptions, auth.token);
  }, []);

  useEffect(() => {
    fetchMembers(setMembers, auth.token);
  }, []);

  useEffect(() => {
    getData(setStage, auth.token);
  }, [stages.length, auth.token]);

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
      shift(stage, source, destination, draggableId, setStage, stages, auth.token);
    }

    if (destination.droppableId !== source.droppableId) {
      move(stage, source, destination, stages, setStage, auth.token);
    }
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex justify-between">
          {stages.length > 0 ? (
            stages.map((stage, index) => (
              <div key={index} className="m-2 shado w-full">
                <div className="flex justify-between shadow-lg stage-header p-2 bg-black text-white text-left rounded-md">
                  <h5 className="">{stage.stage}</h5>
                  <span className="p-1 bg-gray-900 rounded-lg transform hover:scale-150 transition-transform hover:rotate-45 shadow-lg">
                    <PlusIcon
                      className="w-5"
                      onClick={() => handleClick(stage)}
                    />
                  </span>
                </div>
                <div className="stage-body p-1 text-center w-full">
                  <TaskList
                    initialTasks={stage.tasks}
                    id={stage.id}
                    setStage={setStage}
                    members={members}
                    options={options}
                  />
                </div>
              </div>
            ))
          ) : (
            <Loading />
          )}
        </div>
      </DragDropContext>
      <Modal title="Create a Task" open={open} setOpen={setOpen}>
        <Form
          setOpen={setOpen}
          handleCreate={handleCreate}
          members={members}
          options={options}
          currStage={currStage}
        />
      </Modal>
    </>
  );
};

export default TaskGroup;
