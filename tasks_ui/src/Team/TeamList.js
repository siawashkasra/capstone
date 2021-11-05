import { useState, useEffect } from "react";
import Layout from "../layouts/Layout";
import Team from "./Team";
import Modal from "../layouts/Modal";
import { getTeamData, createTeam } from "../API/Teams";
import Form from "./CreateForm";

const TeamList = () => {
  const [state, setstate] = useState(false);
  const [teams, setTeam] = useState([]);

  const setOpen = () => {
    setstate(!state);
  };

  const createTeamClosure = (newTeam) => {
    createTeam(newTeam, setTeam);
  };

  useEffect(() => {
    getTeamData(setTeam);
  }, []);

  return (
    <Layout open={state} setOpen={setOpen} title="Teams">
      <div className="grid grid-cols-3 gap-4 bg-gray-100">
        {teams.map((team) => (
          <Team key={team.id} team={team} />
        ))}
      </div>
      <Modal
        title="Create a Team"
        open={state}
        setOpen={setOpen}
        setTeam={setTeam}
      >
        <Form
          setTeam={setTeam}
          createTeam={createTeam}
          setOpen={setOpen}
          createTeamClosure={createTeamClosure}
        />
      </Modal>
    </Layout>
  );
};

export default TeamList;
