import axios from "axios";

const BASE_MEMBERS_URL = "http://localhost:8000/api/members/";
const MEMBERS_BY_TEAM = `/getMembersByTeam/`;

const AUTH = {
  username: "siawashkasra",
  password: "kasra@123",
};

const HEADERS = {
  Accept: "application/json",
};

const fetchMembers = async (setMembers) => {
  const res = await axios.get(BASE_MEMBERS_URL, {
    auth: AUTH,
    headers: HEADERS,
  });

  if (res.status === 200) {
    setMembers(res.data);
  }
};

const fetchMember = async (id, setMembers) => {
  const res = await axios.get(BASE_MEMBERS_URL + id + MEMBERS_BY_TEAM, {
    auth: AUTH,
    headers: HEADERS,
  });
  if (res.status === 200) {
    setMembers(res.data);
  }
};

const getMemberDetails = async (id, setDetails) => {
  const res = await axios.get(BASE_MEMBERS_URL + id, {
    auth: AUTH,
    headers: HEADERS,
  });
  if (res.status === 200) {
    setDetails(res.data);
  }
};

export { fetchMembers, fetchMember, getMemberDetails };
