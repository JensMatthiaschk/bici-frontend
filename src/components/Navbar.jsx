import react from "react";
import { NavLink } from "react-router-dom";
import { clearToken } from "../authservice";
import { useContext } from "react";
import { MapContext } from "./mapContext";
import NavbarMap from "./NavbarMap";
import { UserContext } from "./userContext";

export default function Navbar() {
    const { filter, setFilter, user } = useContext(MapContext);
    const { userProfileData, setUserProfileData } = useContext(UserContext);

    //add array to filter

    const filterColor = {
        camping: "btn btn btn-ghost normal-case text-xl red-800",
        events: "yellow-400",
        host: "fuchsia-800",
        repair: "amber-500",
        shower: "blue-700",
        swim: "cyan-400",
    };
    console.log(window.location.pathname);

    return (
        <div className="navbar bg-transparent flex justify-between fixed z-10 w-full">
            {window.location.pathname === "/map" ? (
                <NavbarMap />
            ) : (
                <NavLink to="/map">
                    {" "}
                    <div className="flex-1">
                        <a className="btn glass normal-case text-lg">Map</a>
                    </div>
                </NavLink>
            )}
            <div className="flex-none gap-2 relative right-16 top-16 sm:right-4 sm:top-4">
                <div className="dropdown dropdown-end ml-2">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-14 rounded-full">
                            {userProfileData ? (
                                <img
                                    src={`${userProfileData.avatar_img?.aws_url
                                        ? userProfileData.avatar_img.aws_url
                                        : ""
                                        }`}
                                />
                            ) : (
                                <img src="https://placeimg.com/80/80/people" />
                            )}
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 "
                    >
                        <li>
                            <label htmlFor="ProfileForm">Edit Profile</label>
                        </li>
                        <li>
                            <a>Settings</a>
                        </li>
                        <li onClick={() => clearToken()}>
                            <NavLink to="../Login">Logout</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
