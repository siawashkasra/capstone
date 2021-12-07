import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";
import { useLayoutEffect, useState } from "react";
import { update, remove } from "../API/Tasks";
import { useAuth } from "../API/use-auth";

const TaskList = ({ setStage, initialTasks, id, members, options }) => {
  const auth = useAuth();
  const [tasks, setTasks] = useState(initialTasks);

  useLayoutEffect(() => {
    setTasks(initialTasks);
  }, [initialTasks]);

  const handleUpdate = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    update(updatedTask, setStage, auth.token);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    remove(id, setStage, auth.token);
  };

  return (
    <Droppable droppableId={id.toString()}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {tasks.map((task, index) => (
            <Task
              key={task.id}
              task={task}
              index={index}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
              members={members}
              options={options}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TaskList;
