import Member from "./Member";

const people = [
    {
      name: 'Jane Cooper',
      title: 'Regional Paradigm Technician',
      department: 'Optimization',
      role: 'Admin',
      email: 'jane.cooper@example.com',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    // More people...
  ]


  const Team = ({team}) => {
 
      return(
            <div className="bg-white m-4 p-5 border shadow rounded-lg">
              <div className="head flex justify-between">
                <h5>{team.name}</h5>
                <img className="h-10 w-10 rounded-full" src={team.image} alt={team.name} />
              </div>
              <div className="body">
                <p>{team.desc}</p>
              </div>
            </div>
      )
  }


  export default Team;