import { useState, useEffect } from "react";
import Layout from "../layouts/Layout";
import Team from "./Team";
import Modal from "../layouts/Modal";
import { getTeamData } from "../API/Teams";
import Form from "./CreateForm";
import { fetchMembers } from "../API/Members";
import { create } from "../API/Teams"

const TeamList = () => {
  const [open, setOpen] = useState(false);
  const [teams, setTeam] = useState([]);
  const [options, setOptions] = useState([]);

  const handleCreate = (newTeam) => {
    const currTeam = Array.from(teams)
    currTeam.unshift(newTeam)
    setTeam(currTeam);
    create(newTeam, setTeam);
  }

  useEffect(() => {
    fetchMembers(setOptions);
  }, []);

  useEffect(() => {
    getTeamData(setTeam);
  }, []);

  return (
    <Layout title="Teams" setOpen={setOpen}>
      <div className="grid grid-cols-3 gap-4">
        {teams.map((team, index) => (
          <Team key={index} team={team} />
        ))}
      </div>
      <Modal
        title="Create a Team"
        open={open}
        setOpen={setOpen}
      >
        <Form
          setOpen={setOpen}
          options={options}
          handleCreate={handleCreate}
          teams={teams}
        />
      </Modal>
    </Layout>
  );
};

export default TeamList;
