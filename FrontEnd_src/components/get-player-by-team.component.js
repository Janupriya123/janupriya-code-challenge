import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlayerService from "../services/player.service";

function GetPlayerByTeam() {
    const navigate=useNavigate();
    const [teamName,setTeamName]=useState("");
    const [players,setPlayers]=useState([]);
    const getPlayerByTeam=()=> {

        if (teamName.trim()==="") 
            {
            alert("Enter Team Name");
            return;
        }

        PlayerService.getPlayerNameAndRole(teamName)
            .then((response) => {
                setPlayers(response.data);
            })
            .catch((e)=>{
                console.log(e);
                alert("No Players Found");
                setPlayers([]);
            });
    };

    return (
        <div className="container mt-4">
            <h2>Search Players By Team Name</h2>
            <div className="mb-3">
                <label>Team Name</label>
                <input type="text" className="form-control" value={teamName} onChange={(e) => setTeamName(e.target.value)} />
            </div>

            <button className="btn btn-primary me-2" onClick={getPlayerByTeam}>Search</button>
            <button className="btn btn-secondary" onClick={() => navigate("/")}>Back</button>
            {
                players.length>0 &&(
                    <table className="table table-bordered mt-4">
                        <thead className="table-dark">
                            <tr>
                                <th>Player Name</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                players.map((player,index)=>(
                                    <tr key={index}>
                                        <td>{player.playerName}</td>
                                        <td>{player.role}</td>
                                    </tr>
                                ))
                            }
                     </tbody>
                    </table>
                )
            }
        </div>
    );
}
export default GetPlayerByTeam;
