import axios from "axios";

const BASE_MEMBERS_URL = 'http://localhost:8000/members/'

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
        headers: HEADERS
    })

    if (res.status === 200) {
        setMembers(res.data)
    }
}


export {fetchMembers}