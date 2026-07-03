import http from "../http-common";

class PlayerService {
    getAll() 
    {
        return http.get("/players");
    }

    get(playerId) 
    {
        return http.get(`/players/${playerId}`);
    }

    create(data)
     {
        return http.post("/players",data);
    }

    update(playerId, data) {
        return http.put(`/players/${playerId}`,data);
    }

    delete(playerId) 
    {
        return http.delete(`/players/${playerId}`);
    }

    getPlayerNameAndRole(teamName) 
    {
        return http.get(`/players/getNameAndRole/${teamName}`);
    }
}
export default new PlayerService();
