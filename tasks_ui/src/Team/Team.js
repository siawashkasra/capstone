import Avatar from "../layouts/Avatar";
import { useState, useEffect } from "react";
import { fetchMember } from "../API/Members";

const Team = ({ team }) => {
  const [ members, setMembers ] = useState([]);

  useEffect(() => {
    fetchMember(team.id, setMembers)
  }, [team])

  return (
    <div className="bg-white m-4 p-5 border rounded-lg shadow-2xl">
      <div className="head flex justify-between">
        <h5 className="pr-2 font-bold">{team.name}</h5>
        <div className="flex"><Avatar members={members} /></div>
      </div>
      <div className="body">
        <p>{team.desc}</p>
      </div>
    </div>
  );
};

export default Team;
