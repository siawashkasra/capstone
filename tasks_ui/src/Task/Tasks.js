import Layout from "../layouts/Layout";
import TaskGroup from "./TaskGroup";
import { useAuth } from "../API/use-auth";

const Tasks = (props) => {
  const auth = useAuth();

  if (!auth.token) {
    props.history.push("/login");
  }
  return (
    <Layout>
      <TaskGroup />
    </Layout>
  );
};

export default Tasks;
