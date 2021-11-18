import Input from "../layouts/Input";
import TextArea from "../layouts/TextArea";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "../layouts/Select";
import MultiSelect from "../layouts/MultiSelect";

const TaskDetailsForm = ({ task }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.desc);
  const [startDate, setStartDate] = useState(new Date(task.due_to));
  const [selected, setSelected] = useState(task.assignee);
  const [labels, setLabels] = useState(task.labels);

  return (
    <div className="mt-2 w-96 relative">
      <div className="mt-10 sm:mt-0">
        <div className="mt-5 md:mt-0">
          <form>
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
                      readOnly={true}
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
                      selected={startDate}
                      dateFormat="MMM dd, yy"
                      onChange={(date) => setStartDate(date)}
                      placeholderText="Select due date"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required
                      readOnly={true}
                    />
                  </div>

                  <div className="col-span-6">
                    <Select
                      members={[]}
                      selected={selected}
                      setSelected={setSelected}
                      readonly={true}
                    />
                  </div>
                  <div className="col-span-6">
                    <MultiSelect
                      options={[]}
                      values={labels}
                      setValues={setLabels}
                      readOnly={true}
                    />
                  </div>
                  <div className="col-span-6">
                    <TextArea
                      label="Description"
                      description={description}
                      setDescription={setDescription}
                      readOnly={true}
                    />
                  </div>
                </div>
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

export default TaskDetailsForm;
