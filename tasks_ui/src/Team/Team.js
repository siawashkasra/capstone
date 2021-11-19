import Avatar from "../layouts/Avatar";
import { useState, useEffect } from "react";
import { fetchMember } from "../API/Members";
import { Link } from "react-router-dom";
import { PencilIcon } from "@heroicons/react/outline";
import { TrashIcon } from "@heroicons/react/outline";
import Modal from "../layouts/Modal";
import Form from "./UpdateForm";
import { fetchMembers } from "../API/Members";

const Team = ({ team, handleUpdate, handleDelete }) => {
  const [members, setMembers] = useState([]);
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetchMember(team.id, setMembers);
  }, [team]);

  useEffect(() => {
    fetchMembers(setOptions);
  }, []);

  const handleModal = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <>
      <Link to={`/teams/${team.id}`}>
        <div className="bg-white m-4 p-5 border rounded-lg shadow-2xl text-purple-700">
          <div className="head flex justify-between">
            <h5 className="pr-2 font-bold">{team.name}</h5>

            <div className="flex">
              <Avatar members={members} />
            </div>
          </div>
          <div className="body flex justify-between">
            <p>{team.desc}</p>
            <div className="flex justify-between pt-5 ">
              <span>
                <PencilIcon
                  onClick={(e) => handleModal(e)}
                  className="w-6 text-indigo-700 transform transition-transform hover:scale-150 hover:skew-x-12"
                />
              </span>
              <span>
                <TrashIcon
                  onClick={(e) => handleDelete(e, team.id)}
                  className="w-6 text-red-700 transform transition-transform hover:scale-150"
                />
              </span>
            </div>
          </div>
        </div>
      </Link>
      <Modal title="Update" open={open} setOpen={setOpen}>
        <Form
          setOpen={setOpen}
          teamMembers={members}
          options={options}
          handleUpdate={handleUpdate}
          team={team}
        />
      </Modal>
    </>
  );
};

export default Team;
