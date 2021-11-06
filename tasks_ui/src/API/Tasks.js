import axios from "axios";

const STAGE_BASE_URL = "http://localhost:8000/task-stages/";
const RE_ORDER_TASKS_URL = "http://localhost:8000/tasks/reorder/";
const TASKS_BASE_URL = "http://localhost:8000/tasks/";

const AUTH = {
  username: "siawashkasra",
  password: "kasra@123",
};

const HEADERS = {
  Accept: "application/json",
};

const getData = async (setStage) => {
  const response = await axios.get(STAGE_BASE_URL, {
    headers: HEADERS,
    auth: AUTH,
  });
  setStage(response.data);
};

const persistOrder = async (newOrder) => {
  const res = await axios.patch(RE_ORDER_TASKS_URL, newOrder, {
    auth: AUTH,
  });
  return res.status;
};

const persistShift = async (task) => {
  const res = await axios.patch(
    TASKS_BASE_URL + task.id + "/",
    {
      id: task.id,
      stage: task.stage,
    },
    {
      auth: AUTH,
    }
  );
  return res.status;
};

const createTask = async (newTask, setStage) => {
    const res = await axios.post(TASKS_BASE_URL, newTask, {
    auth: AUTH
  })

  if (res.status === 201) {
    getData(setStage)
  }
}

export { getData, persistOrder, persistShift, createTask };
