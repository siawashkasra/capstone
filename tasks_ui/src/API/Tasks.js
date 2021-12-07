import axios from "axios";

const STAGE_BASE_URL = "http://localhost:8000/api/task-stages/";
const RE_ORDER_TASKS_URL = "http://localhost:8000/api/tasks/reorder/";
const TASKS_BASE_URL = "http://localhost:8000/api/tasks/";
const BY_STAGE = TASKS_BASE_URL + "by-stage/";

const AUTH = {
  username: "siawashkasra",
  password: "kasra@123",
};

const HEADERS = {
  Accept: "application/json",
};

const getTasks = async (setTasks, token) => {
  if (token) {
    const response = await axios.get(TASKS_BASE_URL, {
      headers: { Authorization: `Token ${token}` },
    });
    setTasks(response.data);
  }
};

const getTask = async (taskId, setTask) => {
  const response = await axios.get(`${TASKS_BASE_URL}${taskId}/`, {
    headers: HEADERS,
    auth: AUTH,
  });
  setTask(response.data);
};

const getTasksbyStage = async (stageId, token) => {
  if (token) {
    const response = await axios.get(`${BY_STAGE}${stageId}`, {
      headers: { Authorization: `Token ${token}` },
    });
    return response.data;
  }
};

const getData = async (setStage, token) => {
  if (token) {
    const response = await axios.get(STAGE_BASE_URL, {
      headers: { Authorization: `Token ${token}` },
    });

    let data = [];
    data = Array.from(response.data);
    for (let i = 0; i < data.length; i++) {
      data[i]["tasks"] = await getTasksbyStage(data[i]["id"], token);
    }
    setStage(data);
  }
};

const persistOrder = async (newOrder, token) => {
  const res = await axios.patch(RE_ORDER_TASKS_URL, newOrder, {
    headers: { Authorization: `Token ${token}` },
  });
  return res.status;
};

const persistShift = async (task, token) => {
  const res = await axios.patch(
    TASKS_BASE_URL + task.id + "/",
    {
      id: task.id,
      stage: task.stage,
    },
    {
      headers: { Authorization: `Token ${token}` },
    }
  );
  return res.status;
};

const create = async (newTask, setStage, token) => {
  const res = await axios.post(TASKS_BASE_URL, newTask, {
    headers: { Authorization: `Token ${token}` },
  });

  if (res.status === 201) {
    getData(setStage, token);
  }
};

const update = async (updatedTask, setStage, token) => {
  const res = await axios.put(
    TASKS_BASE_URL + updatedTask.id + "/",
    updatedTask,
    {
      headers: { Authorization: `Token ${token}` },
    }
  );
  if (res.status === 200) {
    getData(setStage, token);
  }
};

const remove = async (taskId, setStage, token) => {
  const res = await axios.delete(TASKS_BASE_URL + taskId + "/", {
    headers: { Authorization: `Token ${token}` },
  });
  if (res.status === 204) {
    getData(setStage, token);
  }
};

export {
  getTasks,
  getTask,
  getData,
  getTasksbyStage,
  persistOrder,
  persistShift,
  create,
  update,
  remove,
};
