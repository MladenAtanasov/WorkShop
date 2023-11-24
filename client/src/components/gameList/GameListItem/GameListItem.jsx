import { Link } from "react-router-dom";

export const GameListItem = ({ title, category, imageUrl, _id }) => {
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={imageUrl} />
                <h6>{category}</h6>
                <h2>{title}</h2>
                <Link to={`/games/${_id}`} className="details-button">
                    Details
                </Link>
            </div>
        </div>
    );
};
