import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";
import { useLayoutEffect, useState } from "react";

const TaskList = ({ initialTasks, id }) => {
  const [tasks, setTasks] = useState(initialTasks);

  useLayoutEffect(() => {
    setTasks(initialTasks);
  }, [initialTasks]);

  return (
    <Droppable droppableId={id.toString()}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {tasks.map((task, index) => (
            <Task key={task.id} task={task} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TaskList;
