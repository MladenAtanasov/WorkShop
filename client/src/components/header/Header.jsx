import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <section id="createPage">
            <form className="createForm">
                <header>
                    <h1>
                        <Link className="home" to="/">
                            GamesPlay
                        </Link>
                    </h1>
                    <nav>
                        <Link to="/games">All games</Link>
                        <div id="user">
                            <Link to="/games/create">Create Game</Link>
                            <Link to="/logout">Logout</Link>
                        </div>
                        <div id="guest">
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </div>
                    </nav>
                </header>
            </form>
        </section>
    );
};
