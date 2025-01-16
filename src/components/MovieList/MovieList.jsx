import { NavLink, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
    
    const location = useLocation();
    console.log(location);
    
    const MovieLink = ({ id, title }) => {
        const to = location.pathname === `/` ? `/movies/${id.toString()}` : `${id.toString()}`;
        return (
            <NavLink to={to} state={{ from: location }}>
                {title}
            </NavLink>
        )
    }
    
     
    return (
        <div>
            <ul>
                {movies.map(item => <li key={item.id}><MovieLink id={item.id} title={item.title}  /></li>)}
            </ul>
        </div>
    )
}

export default MovieList;