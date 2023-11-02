import { NavLink } from "react-router-dom";
import HomePage from "./Home";
import "../styles/Root.css";

const Root = () => {
    return (
        <div className="Root">
            <nav>
                <ul style={{ borderBottom: '1px solid white', paddingBottom: '2rem' }}>
                    <li><NavLink style={{ textDecoration: 'none', color: 'lightgrey' }} to={'/'}>Home</NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none', color: 'lightgrey' }} to={'counter'}>Counter</NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none', color: 'lightgrey' }} to={'todos'}>To-dos</NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none', color: 'lightgrey' }} to={'profile'}>Profile</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Root;