import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlayerList from "./components/player-list.component";
import AddPlayer from "./components/add-player.component";
import UpdatePlayer from "./components/update-player.component";
import GetPlayer from "./components/get-player.component";
import GetPlayerByTeam from "./components/get-player-by-team.component";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlayerList />} />
        <Route path="/add-player" element={<AddPlayer />} />
        <Route path="/update-player/:playerId" element={<UpdatePlayer />} />
        <Route path="/get-player-by-team" element={<GetPlayerByTeam />} />
        <Route path="/get-player" element={<GetPlayer />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
