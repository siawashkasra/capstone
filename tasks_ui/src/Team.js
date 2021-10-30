import Avatar from "./layouts/Avatar";

const Team = ({ team }) => {
  return (
    <div className="bg-white m-4 p-5 border shadow rounded-lg">
      <div className="head flex justify-between">
        <h5>{team.name}</h5>
        <Avatar members={team.members} />
      </div>
      <div className="body">
        <p>{team.desc}</p>
      </div>
    </div>
  );
};

export default Team;
