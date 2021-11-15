import axios from "axios";

const LABELS_BASE_URL = "http://localhost:8000/api/labels/"

const AUTH = {
    username: "siawashkasra",
    password: "kasra@123",
  };
  
  const HEADERS = {
    Accept: "application/json",
  };


const fetchLabels = async (setOptions) => {
    const res = await axios.get(LABELS_BASE_URL, {
        auth: AUTH,
        headers: HEADERS
    })

    if(res.status === 200) {
      setOptions(res.data)
    }
}


export { fetchLabels }