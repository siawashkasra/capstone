import { persistShift, persistOrder, getData } from "../API/Tasks";

const removeItem = (stage, source, stages) => {
  const sourceTasks = Array.from(stage[0].tasks);
  sourceTasks.splice(source.index, 1);
  let newStageState = stages.map((stage) =>
    stage.id === parseInt(source.droppableId)
      ? { ...stage, tasks: [...sourceTasks] }
      : stage
  );

  return newStageState;
};

const reOrder = async (tasks, setStage) => {
  let newOrder = [];
  if (tasks.length > 1) {
    for (let index = 0; index < tasks.length; index++) {
      newOrder.push({ id: tasks[index].id, order: index });
    }
  }
  const status = await persistOrder(newOrder);
  if (status === 200) {
    getData(setStage);
  }
};

const dragAndDrop = (
  stage,
  source,
  destination,
  draggableId,
  setStage,
  stages
) => {
  let tempTasks = Array.from(stage[0].tasks);
  tempTasks.splice(source.index, 1);
  tempTasks.splice(
    destination.index,
    0,
    stage[0].tasks.filter((task) => task.id === parseInt(draggableId))[0]
  );

  setStage(
    stages.map((stage) =>
      stage.id === parseInt(source.droppableId)
        ? { ...stage, tasks: tempTasks }
        : stage
    )
  );
  reOrder(tempTasks, setStage);
};

const shift = async (stage, source, destination, stages, setStage) => {
  const task = stage[0].tasks[source.index];
  const shiftedTask = { ...task, stage: parseInt(destination.droppableId) };
  let newStageState = removeItem(stage, source, stages);

  const newTaskStage = newStageState.find(
    (stage) => stage.id === parseInt(destination.droppableId)
  );
  const unOrderedTasks = newTaskStage.tasks;
  unOrderedTasks.splice(destination.index, 0, shiftedTask);
  newStageState = newStageState.map((stage) =>
    stage.id === parseInt(destination.droppableId)
      ? {
          ...stage,
          tasks: unOrderedTasks,
        }
      : stage
  );
  setStage(newStageState);
  const status = await persistShift(shiftedTask);
  if (status === 200) {
    reOrder(unOrderedTasks, setStage);
  }
};

export { dragAndDrop, shift };
