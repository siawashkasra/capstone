import { Draggable } from "react-beautiful-dnd";
import coverImage from "../background.jpg";
import Avatar from "../layouts/Avatar";
import { BellIcon } from "@heroicons/react/outline";

const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id.toString()} index={index} key={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="card shadow-2xl rounded-2xl m-1 bg-white p-4 text-purple-700 transform transition-transform"
        >
          <div className="header">
            <div className="cover-image">
              <img className="w-full h-20" src={coverImage} alt="coverImage" />
              <div className="flex justify-between items-baseline">
                <h5 className="p-2 text-left">{task.title}</h5>
                {/* <div className={priorities[task.priority]}>{task.priority}</div> */}
              </div>
              <div className="flex w-28 bg-red-300 p-1 rounded-r-lg">
                  <span>{task.due_to}</span>
                  <BellIcon className="w-4" color='red'/>
              </div>
            </div>
          </div>
          <div className="body">
            <Avatar members={[task.assignee]} />
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
