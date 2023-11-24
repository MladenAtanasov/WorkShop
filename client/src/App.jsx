import { Routes, Route } from "react-router-dom";

import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { GameList } from "./components/gameList/GameList";
import { GameCreate } from "./components/gameCreate/GameCreate";
import { Login } from "./components/login/Login";
import { Register } from "./components/register/Register";
import { Deatails } from "./components/Details/Details";

function App() {
    return (
        <div id="box">
            <Header />

                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/games" element={<GameList />}></Route>
                    <Route path="/games/create" element={<GameCreate />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/games/:gameId" element={<Deatails />}></Route>
                </Routes>
        </div>
    );
}

export default App;
