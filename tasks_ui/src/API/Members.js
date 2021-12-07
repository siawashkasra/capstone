import axios from "axios";

const BASE_MEMBERS_URL = "http://localhost:8000/api/members/";
const MEMBERS_BY_TEAM = `/getMembersByTeam/`;

const fetchMembers = async (setMembers, token) => {
  if (token) {
    const res = await axios.get(BASE_MEMBERS_URL, {
      headers: { Authorization: `Token ${token}` },
    });

    if (res.status === 200) {
      setMembers(res.data);
    }
  }
};

const fetchMember = async (id, setMembers, token) => {
  if (token) {
    const res = await axios.get(BASE_MEMBERS_URL + id + MEMBERS_BY_TEAM, {
      headers: { Authorization: `Token ${token}` },
    });
    if (res.status === 200) {
      setMembers(res.data);
    }
  }
};

const getMemberDetails = async (id, setDetails, token) => {
  const res = await axios.get(BASE_MEMBERS_URL + id, {
    headers: { Authorization: `Token ${token}` },
  });
  if (res.status === 200) {
    setDetails(res.data);
  }
};

export { fetchMembers, fetchMember, getMemberDetails };
