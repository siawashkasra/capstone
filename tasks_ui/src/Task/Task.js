import { Draggable } from "react-beautiful-dnd";
import Avatar from "../layouts/Avatar";
import { BellIcon } from "@heroicons/react/outline";
import chroma from "chroma-js";

const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id.toString()} index={index} key={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="card shadow-2xl m-1 bg-white p-4 text-purple-700 transform transition-transform"
        >
          <div className="header">
              <div className="flex justify-between">
                <h5 className="p-2 text-left">{task.title}</h5>
                <Avatar members={[task.assignee]} />
              </div>
              <div className="flex w-28 bg-red-300 p-1 rounded-r-lg">
                <span>{task.due_to}</span>
                <BellIcon className="w-4" color="red" />
              </div>
          </div>
          <div className="body flex justify-end">
          <div className="flex flex-col">
            {task.labels.map((label, index) => (
              <div className="p-0.5 w-20 m-0.5" key={index} style={{ backgroundColor: chroma(label.color).alpha(0.5).css() }}></div>
            ))}
          </div>
          </div>
          
        </div>
      )}
    </Draggable>
  );
};

export default Task;
