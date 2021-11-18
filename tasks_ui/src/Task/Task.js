import { Draggable } from "react-beautiful-dnd";
import Avatar from "../layouts/Avatar";
import { BellIcon } from "@heroicons/react/outline";
import chroma from "chroma-js";
import Modal from "../layouts/Modal";
import { useState } from "react";
import Form from "./UpdateForm";
import { TrashIcon } from "@heroicons/react/solid";
import moment from "moment";

const Task = ({
  task,
  index,
  handleUpdate,
  handleDelete,
  members,
  options,
}) => {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    // event has already been used for drag and drop
    if (e.defaultPrevented) {
      return;
    }
    setOpen(true);
  };

  return (
    <>
      <Draggable draggableId={task.id.toString()} index={index} key={index}>
        {(provided) => (
          <div
            className={task.stage.stage === "completed" ? "line-through" : ""}
          >
            <div
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              onDoubleClick={handleClick}
              className="shadow-2xl m-1 bg-white px-4 pt-4 pb-1 text-purple-700 transform transition-transform"
            >
              <div className="header">
                <div className="flex justify-between">
                  <h5 className="p-2 text-left">{task.title}</h5>
                  <Avatar members={[task.assignee]} />
                </div>
                <div className="flex w-32 bg-red-300 p-1 rounded-r-lg">
                  <span>{moment(task.due_to).format("ll")}</span>
                  <BellIcon className="w-4" color="red" />
                </div>
              </div>
              <div className="body flex justify-end">
                <div className="flex flex-col">
                  {task.labels.map((label, index) => (
                    <div
                      className="p-0.5 w-20 m-0.5"
                      key={index}
                      style={{
                        backgroundColor: chroma(label.color).alpha(0.5).css(),
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="flex justify-end">
                <TrashIcon
                  onClick={() => handleDelete(task.id)}
                  className="w-8 text-yellow-200 hover:text-red-700 transform transition-transform hover:scale-150"
                />
              </div>
            </div>
          </div>
        )}
      </Draggable>
      <Modal title="Task" open={open} setOpen={setOpen}>
        <Form
          task={task}
          handleUpdate={handleUpdate}
          setOpen={setOpen}
          members={members}
          options={options}
        />
      </Modal>
    </>
  );
};

export default Task;
