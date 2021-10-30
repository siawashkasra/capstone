const removeItem = (stage, source, stages) => {
    const sourceTasks = Array.from(stage[0].tasks);
    sourceTasks.splice(source.index, 1);
    let newStageState = stages.map((stage) =>
      stage.id === parseInt(source.droppableId)
        ? { ...stage, tasks: [...sourceTasks] }
        : stage
    );

    return newStageState
}


const reOrder = (stage, source, destination, draggableId, setStage, stages) => {
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
    let newOrder = [];
    for (let index = 0; index < tempTasks.length; index++) {
      newOrder.push({ id: tempTasks[index].id, order: index });
    }
    return newOrder
}


const shift = (stage, source, destination, stages, setStage) => {
    let newTasks = [];
      const task = stage[0].tasks[source.index]  
      const shiftedTask = { ...task, stage: parseInt(destination.droppableId) };
      newTasks.push(shiftedTask);
      let newStageState = removeItem(stage, source, stages)
      newStageState = newStageState.map((stage) =>
        stage.id === parseInt(destination.droppableId)
          ? { ...stage, tasks: [...stage.tasks, ...newTasks] }
          : stage
      );
      setStage(newStageState);
      return shiftedTask
}

export { reOrder, shift }