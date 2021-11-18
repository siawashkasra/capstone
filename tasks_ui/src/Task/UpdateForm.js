import Input from "../layouts/Input";
import TextArea from "../layouts/TextArea";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "../layouts/Select";
import Modal from "../layouts/Modal";
import File from "../layouts/File";
import MultiSelect from "../layouts/MultiSelect";
import { castDate } from "../utilities/Utilities";


const Form = ({ task, handleUpdate, setOpen, members, options }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.desc);
  const [startDate, setStartDate] = useState(new Date(task.start_date));
  const [dueDate, setDueDate] = useState(new Date(task.due_to));
  const [openModal, setOpenModal] = useState(false);
  const [selected, setSelected] = useState(task.assignee);
  const [labels, setLabels] = useState(task.labels);
  const [file, setFile] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTask = {
      id: task.id,
      title: title,
      desc: description,
      due_to: castDate(dueDate),
      assignee: selected,
      labels: labels,
      stage: task.stage,
    };
    handleUpdate(updatedTask);
    setOpen(false);
  };

  return (
    <div className="mt-2 w-96 relative">
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="mt-5 md:mt-0">
          <form onSubmit={handleSubmit}>
            <div className="overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <Input
                      type="text"
                      name="title"
                      id="title"
                      label="Title"
                      title={title}
                      setTitle={setTitle}
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="due-to"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Start Date
                    </label>
                    <DatePicker
                      selected={startDate}
                      dateFormat="MMM dd, yy"
                      onChange={(date) => setStartDate(date)}
                      placeholderText="Select due date"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="due-to"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Due to
                    </label>
                    <DatePicker
                      selected={dueDate}
                      dateFormat="MMM dd, yy"
                      onChange={(date) => setDueDate(date)}
                      placeholderText="Select due date"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div className="col-span-6">
                    <Select
                      members={members}
                      selected={selected}
                      setSelected={setSelected}
                    />
                  </div>
                  <div className="col-span-6">
                    <MultiSelect
                      options={options}
                      values={labels}
                      setValues={setLabels}
                    />
                  </div>
                  <div className="col-span-6">
                    <TextArea
                      label="Description"
                      description={description}
                      setDescription={setDescription}
                    />
                  </div>
                </div>
                {/* <div className="flex justify-end py-3 sm:px-6">
                  <button
                    onClick={() => setOpenModal(true)}
                    className="p-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    Attachments
                  </button>
                </div> */}
                <Modal open={openModal} setOpen={setOpenModal}>
                  <File file={file} setFile={setFile} />
                </Modal>
              </div>
              <div className="flex justify-end px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="m-2 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      {/* Ends here */}
    </div>
  );
};

export default Form;
