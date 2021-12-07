import axios from "axios";

const LABELS_BASE_URL = "http://localhost:8000/api/labels/";

const fetchLabels = async (setOptions, token) => {
  if (token) {
    const res = await axios.get(LABELS_BASE_URL, {
      headers: { Authorization: `Token ${token}` },
    });

    if (res.status === 200) {
      setOptions(res.data);
    }
  }
};

export { fetchLabels };
