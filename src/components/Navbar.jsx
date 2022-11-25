import react from 'react'
import { NavLink } from "react-router-dom";
import { clearToken } from '../authservice'

export default function Navbar() {


    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Bici-App</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered" />
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-14 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            {/* <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a> */}
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