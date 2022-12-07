import React, { useContext } from "react";
import { useEffect } from "react";
import { MapContext } from "./mapContext";

const NavbarMap = () => {
  const { filter, setFilter } = useContext(MapContext);

  useEffect(() => console.log("filter", filter), [filter]);

  const filterColor = {
    camping: `bg-red-800 rounded-l-lg`,
    events: "bg-yellow-400 ",
    host: "bg-fuchsia-800 border-l-2  border-black",
    repair: "bg-amber-500 border-l-2  border-black",
    shower: "bg-emerald-600 border-l-2  border-black",
    swim: "bg-blue-700 rounded-r-lg border-l-2  border-black ",
  };
  const filterCK = Object.values(filterColor);

  return (
    <div className="border-2 border-black rounded-xl text-center">
      {Object.keys(filter).map((key, fc) => {
        console.log(key, filter[key], filterCK[fc]);
        return (
          <label
            key={key}
            className={`w-14 border-l-2  border-black normal-case text-xl 
            ${key === "camping" && !filter[key] ? "rounded-l-lg" : ""}

                
                ${filter[key] ? filterCK[fc] : ""}`}
          >
            <span className="label-text text-xs text-center font-bold">
              {key}
            </span>
            <input
              type="checkbox"
              className="checkbox mx-2 hidden "
              id={key}
              name={key}
              checked={filter[key]}
              onChange={(e) => {
                setFilter({
                  ...filter,
                  [e.target.name]: !filter[e.target.name],
                });
              }}
            />
          </label>
        );
      })}
    </div>
  );
};

export default NavbarMap;
