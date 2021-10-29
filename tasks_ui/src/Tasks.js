import StageList from "./StageList";
import Layout from "./layouts/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import TaskItem from "./StageItem";

const Tasks = () => {
  

  return (
    <Layout title="Tasks">
     <TaskItem />
    </Layout>
  );
};

export default Tasks;
