import { Draggable } from "react-beautiful-dnd";
import coverImage from './background.jpg'
import Avatar from './layouts/Avatar'

const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id.toString()} index={index} key={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="shadow-lg rounded m-1 bg-purple-400 p-2 text-white"
        >
          <div className="header">
            <div className="cover-image">
              <img className="w-full h-20" src={coverImage} alt="coverImage" />
              <div className="flex justify-between">
                <h5 className="p-2 text-left">{task.title}</h5>
                <Avatar members={[task.assignee]} />
              </div>
            </div>
          </div>
          <div className="body">
          <p>{task.desc}</p>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
