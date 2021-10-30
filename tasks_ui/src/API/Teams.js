import axios from "axios";
const TEAMS_BASE_URL = "http://localhost:8000/teams/";
const AUTH = {
  username: "siawashkasra",
  password: "kasra@123",
};
const HEADERS = {
  Accept: "application/json",
};

const getTeamData = async (setTeam) => {
  const response = await axios.get(TEAMS_BASE_URL, {
    headers: HEADERS,
    auth: AUTH,
  });
  setTeam(response.data);
};

const createTeam = async (newTeam, setTeam) => {
  const res = await axios.post(TEAMS_BASE_URL, newTeam, {
    auth: AUTH,
  });
  if (res.status === 201) {
    getTeamData(setTeam);
  }
};

export { getTeamData, createTeam };
