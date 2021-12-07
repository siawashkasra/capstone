import axios from "axios";

const TEAMS_BASE_URL = "http://localhost:8000/api/teams/";
const AUTH = {
  username: "siawashkasra",
  password: "kasra@123",
};

// Get team by ID
const getTeam = async (id, setTeam, token) => {
  if (token) {
    const response = await axios.get(`${TEAMS_BASE_URL}${id}/`, {
      headers: { Authorization: `Token ${token}` },
    });
    if (response.status === 200) {
      setTeam(response.data);
    }
  }
};

const getTeamData = async (setTeam, token) => {
  if (token) {
    const response = await axios.get(TEAMS_BASE_URL, {
      headers: { Authorization: `Token ${token}` },
    });
    setTeam(response.data);
  }
};

const uploadCover = async (id, cover, setTeam, token) => {
  const formData = new FormData();
  formData.append("cover", cover);
  const res = await axios.patch(TEAMS_BASE_URL + id + "/", formData, {
    headers: { Authorization: `Token ${token}` },
  });
  if (res.status === 201) {
    getTeamData(setTeam, token);
  }
};

const create = async (data, setTeams, token) => {
  const newTeam = {
    name: data.name,
    desc: data.desc,
    members: data.members,
  };

  const res = await axios.post(TEAMS_BASE_URL, newTeam, {
    headers: { Authorization: `Token ${token}` },
  });
  if (res.status === 201) {
    uploadCover(res.data["id"], data.cover, setTeams, token);
  }
};

const update = async (data, setTeams, token) => {
  const updatedTeam = {
    id: data.id,
    name: data.name,
    desc: data.desc,
    members: data.members,
  };
  const res = await axios.put(TEAMS_BASE_URL + data.id + "/", updatedTeam, {
    headers: { Authorization: `Token ${token}` },
  });
  if (res.status === 200) {
    uploadCover(res.data["id"], data.cover, setTeams, token);
  }
};

const remove = async (id, setTeams, token) => {
  const res = await axios.delete(TEAMS_BASE_URL + id + "/", {
    headers: { Authorization: `Token ${token}` },
  });
  if (res.status === 200) {
    getTeamData(setTeams, token);
  }
};

export { getTeamData, getTeam, create, update, remove };
