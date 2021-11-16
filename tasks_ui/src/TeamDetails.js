import { useState } from "react";
import Layout from "./layouts/Layout";
import Member from "./Member";
import { getTeam } from "./API/Teams";
import { useEffect } from "react";
import { fetchMember } from "./API/Members";
import Header from "./layouts/Header";

const TeamDetails = (props) => {
  const id = props.match.params.id;
  const [team, setTeam] = useState({});
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTeam(id, setTeam);
  }, [id]);

  useEffect(() => {
    fetchMember(id, setMembers);
  }, [id]);

  return (
    <Layout>
      <Header title="Team" entity={team} />
      <div className="team-details">
        {members.map((member) => (
          <Member member={member} />
        ))}
      </div>
    </Layout>
  );
};

export default TeamDetails;
