import { useState, useEffect } from "react"
import Layout from "./layouts/Layout"
import Team from "./Team"
import CreateModal from "./layouts/Team/CreateModal";
import axios from 'axios'

const TeamList = () => {
    const [state, setstate] = useState(false)
    const [teams, setTeam] = useState([]) 

    const setOpen = () => {
      setstate(!state)
    }

    

    useEffect( () => {

        async function getTeamList() {
            const response = await axios.get('http://localhost:8000/teams/', {
                headers: {
                    Accept: "application/json" 
                },
                auth: {
                    username: 'siawashkasra',
                    password: 'kasra@123'
                }
            })
            setTeam(response.data)
        }

        getTeamList()

      }, []);

    return(
        <Layout 
            open={state} 
            setOpen={setOpen} 
            title="Teams">
                <div className="grid grid-cols-3 gap-4 bg-gray-100">
                    {teams.map((team) => <Team key={team.id} team={team} />)}
                </div>

            <CreateModal
                open={state} 
                setOpen={setOpen} />
        </Layout>
    )
}

export default TeamList