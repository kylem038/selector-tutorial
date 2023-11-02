import { NavLink } from "react-router-dom";
import HomePage from "./Home";
import "../styles/Root.css";

const Root = () => {
    return (
        <div className="Root">
            <nav>
                <ul>
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'counter'}>Counter</NavLink></li>
                    <li><NavLink to={'todos'}>To-dos</NavLink></li>
                    <li><NavLink to={'profile'}>Profile</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Root;