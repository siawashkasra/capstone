import { SortableElement } from "react-sortable-hoc";

const TaskItem = SortableElement(({ stage }) => {
  return (
      <div className="card bg-purple-700 p-3 m-2 shadow text-white text-center rounded-sm w-full">
          <div className="card-header">
            <h5>{stage.stage}</h5>
          </div>
      </div>
  )
});

export default TaskItem;
