import Layout from "./layouts/Layout";
import { getMemberDetails } from "./API/Members";
import { useState, useEffect } from "react";

const MemberDetails = (props) => {
  const id = parseInt(props.match.params.id);
  const [member, setDetails] = useState({});

  useEffect(() => {
    getMemberDetails(id, setDetails);
  }, [id]);

  return (
    <Layout>
      {/* <h1>Member Details</h1> */}
      <div className="container flex justify-between gap-5">
        <div className="card shadow-lg p-10 rounded-2xl">
          <div className="card-header text-center">
            <img className="h-50 w-48" src={member.avatar} alt={member.first_name} />
            <h1 className="p-2 text-2xl font-bold">
              {member.first_name} {member.last_name}
            </h1>
            <span className="p-2 text-purple-400 block"> {member.email} </span>
            <span className="p-2"> {member.about} </span>
          </div>
        </div>
        <div className="flex justify-between shadow-lg p-10 rounded-2xl flex-grow">
          <div className="">
            <h1 className="p-2 text-2xl font-bold text-center text-purple-400">
              Tasks
            </h1>
            {member.tasks && member.tasks.length > 0
              ? member.tasks.map((task) => (
                  <div className="card" key={task.id}>
                    <div className="card-header">
                      <h1 className="p-2 text-2xl font-bold">{task.title}</h1>
                      <span className="p-2 text-purple-400 block">
                        {" "}
                        {task.desc}{" "}
                      </span>
                      <span className="p-2"> {task.due_to} </span>
                    </div>
                  </div>
                ))
              : <h1>No Tasks Found</h1> }
          </div>
          <div className="">
            <h1 className="p-2 text-2xl font-bold text-center text-purple-400">
              Teams In
            </h1>
            {member.team && member.team.length > 0
              ? member.team.map((team) => (
                  <div className="card" key={team.id}>
                    <div className="card-header">
                      <h1 className="p-2 text-2xl font-bold">{team.name}</h1>
                      <span className="p-2 text-purple-400 block">
                        {" "}
                        {team.desc}{" "}
                      </span>
                    </div>
                  </div>
                ))
              : <h1>No Team Found</h1> }
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MemberDetails;
