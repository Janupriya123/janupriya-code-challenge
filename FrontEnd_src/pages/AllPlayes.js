import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlayerService from "../services/player.service";

function GetPlayer() { 
    const navigate=useNavigate();
    const [playerId,setPlayerId]=useState("");
    const [player,setPlayer]=useState(null);
    const getPlayer=()=>{
        if (playerId==="") {
            alert("Enter Player ID");
            return;
        }
        PlayerService.get(playerId)
            .then((response)=>{
                setPlayer(response.data);
            })
            .catch((e)=>{
                console.log(e);
                alert("Player Not Found");
                setPlayer(null);
            });
    };

    return (
        <div className="container mt-4">
            <h2>Search Player By ID</h2>
            <div className="mb-3">
                <label>Player ID</label>
                <input type="number"  className="form-control" value={playerId} onChange={(e) => setPlayerId(e.target.value)}/>
            </div>

            <button className="btn btn-primary me-2"  onClick={getPlayer}>Search</button>
            <button className="btn btn-secondary" onClick={() => navigate("/")}>Back</button>
            {
                player && ( <table className="table table-bordered mt-4">
                        <tbody>
                            <tr>
                                <th>Player ID</th>
                                <td>{player.playerId}</td>
                            </tr>
                            <tr>
                                <th>Player Name</th>
                                <td>{player.playerName}</td>
                            </tr>
                            <tr>
                                <th>Jersey Number</th>
                                <td>{player.jerseyNumber}</td>
                            </tr>
                            <tr>
                                <th>Role</th>
                                <td>{player.role}</td>
                            </tr>
                            <tr>
                                <th>Total Matches</th>
                                <td>{player.totalMatches}</td>
                            </tr>
                            <tr>
                                <th>Team Name</th>
                                <td>{player.teamName}</td>
                            </tr>
                            <tr>
                                <th>Country Name</th>
                                <td>{player.countryName}</td>
                            </tr>
                            <tr>
                                <th>Description</th>
                                <td>{player.description}</td>
                            </tr>
                        </tbody>
                  </table>
                )
            }
      </div>
    );
}
export default GetPlayer;
