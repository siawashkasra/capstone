import { persistShift, persistOrder, getData } from "../API/Tasks";
import Person from "../layouts/Person";
import moment from "moment";

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

const reOrder = async (tasks, setStage, token) => {
  let newOrder = [];
  if (tasks.length > 1) {
    for (let index = 0; index < tasks.length; index++) {
      newOrder.push({ id: tasks[index].id, order: index });
    }
  }
  const status = await persistOrder(newOrder, token);
  if (status === 200) {
    getData(setStage, token);
  }
};

const shift = (
  stage,
  source,
  destination,
  draggableId,
  setStage,
  stages,
  token
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
  reOrder(tempTasks, setStage, token);
};

const move = async (stage, source, destination, stages, setStage, token) => {
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
  const status = await persistShift(shiftedTask, token);
  if (status === 200) {
    reOrder(unOrderedTasks, setStage, token);
  }
};

// generate random color using chroma.js
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const getCompatibleOptions = (options) => {
  let compatibleOptions = [];
  compatibleOptions = options.map((option) => {
    return {
      id: option.id,
      value: option.id,
      label: <Person person={option} />,
      color: getRandomColor(),
    };
  });
  return compatibleOptions;
};

const generateNewID = (list) => {
  // loop over the list and get the id
  let id = 0;
  list.forEach((task) => {
    if (task.id > id) {
      id = task.id;
      id = id + 1;
      // if id is greater than 0, add 1 to it
    } else if (task.id === 0) {
      id = 1;
    }
  });
  return id;
};

const extractMembers = (members, options) => {
  // filter options to get only the members matching members values
  // loop over the members and get the value
  let extractedMembers = [];
  members.forEach((member) => {
    const memberOption = options.find((option) => option.id === member.id);
    if (memberOption) {
      extractedMembers.push(memberOption);
    }
  });
  return extractedMembers;
};

const castDate = (date) => {
  return moment(date).format("YYYY-MM-DD");
};

const setDueDateColor = (dueDate) => {
  if (dueDate) {
    const now = moment();
    const due = moment(dueDate);
    const diff = due.diff(now, "days");
    if (diff < 0) {
      return "red-800 text-white";
    } else if (diff < 3) {
      return "red-300";
    } else if (diff < 5) {
      return "yellow-300";
    } else {
      return "green-300 text-white";
    }
  }
};

export {
  shift,
  move,
  getCompatibleOptions,
  generateNewID,
  extractMembers,
  castDate,
  setDueDateColor,
};
