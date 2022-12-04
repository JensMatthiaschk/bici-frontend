
import react from 'react'
import { NavLink } from "react-router-dom";
import { clearToken } from '../authservice'
import { useContext } from 'react';
import { MapContext } from './mapContext'
import NavbarMap from './NavbarMap';

export default function Navbar() {

    const { filter, setFilter } = useContext(MapContext)

    //add array to filter   


    const filterColor = {
        camping: 'btn btn btn-ghost normal-case text-xl red-800',
        events: 'yellow-400',
        host: 'fuchsia-800',
        repair: 'amber-500',
        shower: 'blue-700',
        swim: 'cyan-400',
    }
    console.log(window.location.pathname)


    return (
        <div className="navbar bg-base-100 flex justify-center">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Bici</a>
            </div>
            {window.location.pathname === '/map' ? <NavbarMap /> : <div>"profile"</div>}

            <div className="flex-none gap-2">

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-14 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>

                            <label htmlFor="ProfileForm">
                                Edit Profile
                            </label>
                        </li>
                        <li><a>Settings</a></li>
                        <li onClick={() => clearToken()}><NavLink to="../Login">Logout</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
} 