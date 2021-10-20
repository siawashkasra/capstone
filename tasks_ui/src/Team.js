import Layout from "./layouts/Layout";
import Member from "./Member";
import { useState } from "react";
import CreateModal from "./layouts/Team/CreateModal";

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


  const Team = () => {
    const [state, setstate] = useState(false)

    const setOpen = () => {
      setstate(!state)
    }
      return(
          <Layout title="Team" setOpen={setOpen}>
            { people.map((member) => <Member member={member} />)}
            <CreateModal open={state} setOpen={setstate} />
          </Layout>
      )
  }


  export default Team;