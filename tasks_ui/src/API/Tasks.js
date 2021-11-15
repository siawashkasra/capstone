import axios from "axios";
import moment from "moment";

const STAGE_BASE_URL = "http://localhost:8000/api/task-stages/";
const RE_ORDER_TASKS_URL = "http://localhost:8000/api/tasks/reorder/";
const TASKS_BASE_URL = "http://localhost:8000/api/tasks/";

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

const create = async (newTask, setStage) => {
  const res = await axios.post(TASKS_BASE_URL, newTask, {
    auth: AUTH,
  });

  if (res.status === 201) {
    getData(setStage);
  }
};

const update = async (updatedTask, setStage) => {
  const res = await axios.put(
    TASKS_BASE_URL + updatedTask.id + "/",
    { ...updatedTask, due_to: moment(updatedTask.due_to).format() },
    {
      auth: AUTH,
    }
  );
  if (res.status === 200) {
    getData(setStage);
  }
};


const remove = async (taskId, setStage) => {
  const res = await axios.delete(TASKS_BASE_URL + taskId + "/", {
    auth: AUTH,
  });
  if (res.status === 204) {
    getData(setStage);
  }
};

export { getData, persistOrder, persistShift, create, update, remove };
