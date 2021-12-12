import { useState, useEffect } from "react";
import Layout from "../layouts/Layout";
import Team from "./Team";
import Modal from "../layouts/Modal";
import { getTeamData } from "../API/Teams";
import Form from "./CreateForm";
import { fetchMembers } from "../API/Members";
import { create, update, remove } from "../API/Teams";
import Header from "../layouts/Header";
import Loading from "../layouts/Loading";
import { useAuth } from "../API/use-auth";

const TeamList = (props) => {
  const auth = useAuth();

  if (!auth.token) {
    props.history.push("/login");
  }

  const [open, setOpen] = useState(false);
  const [teams, setTeams] = useState([]);
  const [options, setOptions] = useState([]);

  const handleCreate = (newTeam) => {
    const currTeam = Array.from(teams);
    currTeam.unshift(newTeam);
    setTeams(currTeam);
    create(newTeam, setTeams, auth.token);
  };

  useEffect(() => {
    fetchMembers(setOptions, auth.token);
  }, []);

  useEffect(() => {
    getTeamData(setTeams, auth.token);
  }, []);

  const handleUpdate = (updatedTeam) => {
    setTeams(
      teams.map((team) => (team.id === updatedTeam.id ? updatedTeam : team))
    );
    update(updatedTeam, setTeams, auth.token);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    setTeams(teams.filter((team) => team.id !== id));
    remove(id, setTeams, auth.token);
  };

  return (
    <Layout>
      {teams ? (
        <>
          <Header title="Your Teams" create={true} setOpen={setOpen} />
          <div className="grid grid-cols-3 gap-4">
            {teams.map((team, index) => (
              <Team
                key={index}
                team={team}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        </>
      ) : (
        <Loading />
      )}
      <Modal title="Create a Team" open={open} setOpen={setOpen}>
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
