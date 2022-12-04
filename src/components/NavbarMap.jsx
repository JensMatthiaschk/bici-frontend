import React, { useContext } from 'react'
import { MapContext } from './mapContext'

const NavbarMap = () => {
    const { filter, setFilter } = useContext(MapContext)
    console.log('filter', filter)
    //add array to filter   


    const filterColor = {
        camping: 'btn  w-14  galss normal-case text-xl bg-red-800',
        events: 'btn  w-14  normal-case text-xl bg-yellow-400',
        host: 'btn  w-14  normal-case text-xl bg-fuchsia-800',
        repair: 'btn  w-14  normal-case text-xl bg-amber-500',
        shower: 'btn  w-14  normal-case text-xl bg-blue-700',
        swim: 'btn  w-14  normal-case text-xl bg-cyan-400',
    }
    const filterCK = Object.values(filterColor)


    return (
        <div>
            {Object.keys(filter).map((key, fc) => {
                return (
                    <label key={key} className={filterCK[fc]} >
                        {console.log(filterCK[fc])}
                        <span className="label-text">{key}</span>
                        <input type="checkbox" className="checkbox checkbox-accent" id={key} name={key} value={key}
                            checked={filter[key]}

                            onChange={(e) => {
                                setFilter({ ...filter, [e.target.name]: !filter[e.target.name] })
                            }} />

                    </label>)
            })}



        </div>
    )
}

export default NavbarMap