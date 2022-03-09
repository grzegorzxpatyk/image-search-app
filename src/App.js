import { NavLink, Outlet } from 'react-router-dom';
import './App.scss';

function App() {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column text-center text-white bg-dark h-100">
            <nav className="d-flex flex-row justify-content-evenly w-100 fixed-top">
                <NavLink to="/">Search</NavLink>
                <NavLink to="/results">Results</NavLink>
            </nav>
            <Outlet />
        </div>
    );
}

export default App;
