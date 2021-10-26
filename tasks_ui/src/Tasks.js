import { arrayMoveImmutable as arrayMove } from "array-move";
import StageList from "./StageList";
import Layout from "./layouts/Layout";
import { useEffect, useState } from "react";
import axios from "axios";

const Tasks = () => {
  const [stages, setStage] = useState([]);

  const fetchTaskStage = async () => {
    const response = await axios.get("http://localhost:8000/task-stages/", {
      headers: {
        Accept: "application/json",
      },
      auth: {
        username: "siawashkasra",
        password: "kasra@123",
      },
    });

    setStage(response.data);
  };

  useEffect(() => {
    fetchTaskStage();
    console.log("rendering");
  }, []);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setStage(arrayMove(stages, oldIndex, newIndex));
  };

  return (
    <Layout title="Tasks">
      {stages.length !== 0 ? (
        <StageList stages={stages} onSortEnd={onSortEnd} axis="xy" />
      ) : (
        <p>Please create a Task</p>
      )}
    </Layout>
  );
};

export default Tasks;
