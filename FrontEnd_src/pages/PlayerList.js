import { useEffect, useState } from "react"; 
import { useNavigate } from "react-router-dom";
import PlayerService from "../services/player.service";

function PlayerList() {
    const navigate=useNavigate();
    const [players,setPlayers]=useState([]);
    useEffect(()=>{
        retrievePlayers();
    },[]);

    const retrievePlayers=()=>{
        PlayerService.getAll()
            .then((response)=>{
                setPlayers(response.data);
            })
            .catch((e)=>{
                console.log(e);
            });
    };

    const deletePlayer=(playerId)=>{
        PlayerService.delete(playerId)
            .then(()=>{
                retrievePlayers();
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Cricket Team Management System</h2>
            <button className="btn btn-success me-2 mb-3" onClick={() => navigate("/add-player")}>Add Player</button>
            <button className="btn btn-primary me-2 mb-3" onClick={() => navigate("/get-player")}>Search By ID</button>
            <button className="btn btn-info mb-3" onClick={() => navigate("/get-player-by-team")}>Search By Team</button>
            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>Player ID</th>
                        <th>Player Name</th>
                        <th>Jersey Number</th>
                        <th>Role</th>
                        <th>Total Matches</th>
                        <th>Team Name</th>
                        <th>Country Name</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        players.map((player)=>(
                            <tr key={player.playerId}>
                                <td>{player.playerId}</td>
                                <td>{player.playerName}</td>
                                <td>{player.jerseyNumber}</td>
                                <td>{player.role}</td>
                                <td>{player.totalMatches}</td>
                                <td>{player.teamName}</td>
                                <td>{player.countryName}</td>
                                <td>{player.description}</td>
                                <td>
                                   <button className="btn btn-warning btn-sm me-2" onClick={() => navigate(`/update-player/${player.playerId}`)}> Edit</button>
                                    <button className="btn btn-danger btn-sm" onClick={() => deletePlayer(player.playerId)}>Delete</button>
                             </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}
export default PlayerList;
