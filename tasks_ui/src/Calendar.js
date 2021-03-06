import Layout from "./layouts/Layout";
import { Calendar as Cal, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useEffect, useState } from "react";
import { getTasks } from "./API/Tasks";
import { castDate } from "./utilities/Utilities";
import Modal from "./layouts/Modal";
import TaskDetailsForm from "./Task/TaskDetailsModal";
import { useAuth } from "./API/use-auth";

const localizer = momentLocalizer(moment);

const Calendar = (props) => {
  const auth = useAuth();

  if (!auth.token) {
    props.history.push("/login");
  }

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getTasks(setTasks, auth.token);
  }, []);

  const getEventDetails = (event) => {
    const task = tasks.find((t) => t.id === event.id);
    setTask(task);
    setOpen(true);
  };

  const addOneDay = (date) => {
    const formated = castDate(date);
    return moment(formated).add(1, "day").toDate();
  };
  const events = tasks.map((task) => {
    return {
      id: task.id,
      allDay: true,
      title: task.title,
      start: castDate(task.start_date),
      end: addOneDay(task.due_to),
      resource: task.assignee.first_name,
    };
  });

  return (
    <Layout>
      <Cal
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        onDoubleClickEvent={(event) => getEventDetails(event)}
      />
      <Modal title="Task" open={open} setOpen={setOpen}>
        <TaskDetailsForm task={task} />
      </Modal>
    </Layout>
  );
};

export default Calendar;
