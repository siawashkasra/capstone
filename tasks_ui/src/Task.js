import { Draggable } from "react-beautiful-dnd";

const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id.toString()} index={index} key={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="m-1 bg-gray-300 p-2"
        >
          <h5>{task.title}</h5>
          <h5>{task.assignee.first_name}</h5>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
