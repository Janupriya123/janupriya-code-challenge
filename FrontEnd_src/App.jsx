import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import PlayerList from "./pages/PlayerList";
import AddPlayer from "./pages/AddPlayer";
import UpdatePlayer from "./pages/UpdatePlayer";
import GetPlayer from "./pages/GetPlayer";
import GetPlayerByTeam from "./pages/GetPlayerByTeam";

function App(){
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<PlayerList/>}/>
                <Route path="/players" element={<PlayerList/>}/>
                <Route path="/add-player" element={<AddPlayer/>}/>
                <Route path="/update-player/:playerId" element={<UpdatePlayer/>}/>
                <Route path="/get-player" element={<GetPlayer/>}/>
                <Route path="/get-player-by-team" element={<GetPlayerByTeam/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
