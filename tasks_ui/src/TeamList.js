import { useState } from "react"
import Layout from "./layouts/Layout"
import Team from "./Team"
import CreateModal from "./layouts/Team/CreateModal";

const teams = [
    {
        name: 'Team A', 
        desc: "This is Team A", 
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60', 
        members: []
    },

    {
        name: 'Team B', 
        desc: "This is Team B", 
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        members: []
    },
    {
        name: 'Team C', 
        desc: "This is Team C", 
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        members: []
    },
    {
        name: 'Team D', 
        desc: "This is Team D", 
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        members: []
    }
]


const TeamList = () => {
    const [state, setstate] = useState(false)

    const setOpen = () => {
      setstate(!state)
    }

    return(
        <Layout 
            open={state} 
            setOpen={setOpen} 
            title="Teams">
                <div className="grid grid-cols-3 gap-4 bg-gray-100">
                    {teams.map((team) => <Team team={team} />)}
                </div>

            <CreateModal
                open={state} 
                setOpen={setOpen} />
        </Layout>
    )
}

export default TeamList