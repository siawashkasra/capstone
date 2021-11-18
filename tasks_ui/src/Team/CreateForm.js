import Input from "../layouts/Input";
import TextArea from "../layouts/TextArea";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import MultiSelect from "../layouts/MultiSelect";
import File from "../layouts/File";
import { getCompatibleOptions, generateNewID } from "../utilities/Utilities";

const Form = ({ setOpen, options, handleCreate, teams }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [members, setMembers] = useState([]);
  const [cover, setCover] = useState([]);

  let ids = []
  members.forEach((member) => {
    ids = [...ids, member.id]
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTeam = {
      id: generateNewID(teams),
      cover,
      name,
      desc,
      members: ids
    };
    handleCreate(newTeam);
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
            <div className="sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <label
                      htmlFor="due-to"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Select members
                    </label>
                    <MultiSelect
                      options={getCompatibleOptions(options)}
                      values={members}
                      setValues={setMembers}
                    />
                  </div>
                  <div className="col-span-6">
                    <Input
                      type="text"
                      id="title"
                      label="Title"
                      title={name}
                      setTitle={setName}
                    />
                  </div>
                  <div className="col-span-6">
                    <TextArea
                      label="Description"
                      description={desc}
                      setDescription={setDesc}
                    />
                  </div>
                  <div className="col-span-6">
                    <File setCover={setCover} />
                  </div>
                </div>
              </div>
              <div className="flex justify-end px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="m-2 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Save
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
