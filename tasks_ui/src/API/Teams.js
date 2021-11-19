import axios from "axios";

const TEAMS_BASE_URL = "http://localhost:8000/api/teams/";
const AUTH = {
  username: "siawashkasra",
  password: "kasra@123",
};

const HEADERS = {
  Accept: "application/json",
};

// Get team by ID
const getTeam = async (id, setTeam) => {
  const response = await axios.get(`${TEAMS_BASE_URL}${id}/`, {
    auth: AUTH,
    headers: HEADERS,
  });
  if (response.status === 200) {
    setTeam(response.data);
  }
};

const getTeamData = async (setTeam) => {
  const response = await axios.get(TEAMS_BASE_URL, {
    auth: AUTH,
  });
  setTeam(response.data);
};

const uploadCover = async (id, cover, setTeam) => {
  const formData = new FormData();
  formData.append("cover", cover);
  const res = await axios.patch(TEAMS_BASE_URL + id + "/", formData, {
    auth: AUTH,
  });
  if (res.status === 201) {
    getTeamData(setTeam);
  }
};

const create = async (data, setTeams) => {
  const newTeam = {
    name: data.name,
    desc: data.desc,
    members: data.members,
  };

  const res = await axios.post(TEAMS_BASE_URL, newTeam, {
    auth: AUTH,
  });
  if (res.status === 201) {
    uploadCover(res.data["id"], data.cover, setTeams);
  }
};

const update = async (data, setTeams) => {
  const updatedTeam = {
    id: data.id,
    name: data.name,
    desc: data.desc,
    members: data.members,
  };
  const res = await axios.put(TEAMS_BASE_URL + data.id + "/", updatedTeam, {
    auth: AUTH,
  });
  if (res.status === 200) {
    uploadCover(res.data["id"], data.cover, setTeams);
  }
};

export { getTeamData, getTeam, create, update };
