import { useState } from "react";
import Layout from "./layouts/Layout";
import Member from "./Member";
import { getTeam } from "./API/Teams";
import { useEffect } from "react";
import { fetchMember } from "./API/Members";
import Header from "./layouts/Header";
import { useAuth } from "./API/use-auth";

const TeamDetails = (props) => {
  const auth = useAuth();
  const id = props.match.params.id;
  const [team, setTeam] = useState({});
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getTeam(id, setTeam, auth.token);
  }, [id]);

  useEffect(() => {
    fetchMember(id, setMembers, auth.token);
  }, [id]);

  return (
    <Layout>
      <Header title="Team" name={team.name} />
      <div className="team-details">
        {members.map((member, index) => (
          <Member key={index} member={member} />
        ))}
      </div>
    </Layout>
  );
};

export default TeamDetails;
