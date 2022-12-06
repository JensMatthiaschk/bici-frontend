import React, { useEffect, useState } from "react";
import { getMapComments } from "../mapservice";
import { getProfilePins } from "./map/pinutiles";
import moment from "moment/moment";

const ProfileDashboard = () => {
  const [actualPin, setActualPin] = useState([]);
  const [allPins, setAllPins] = useState(false);
  const [com, setCom] = useState(false);
  const [commentData, setCommentData] = useState([]);
  const filterColor = {
    camping: " bg-red-800",
    events: " bg-yellow-400",
    host: " bg-fuchsia-800",
    repair: " bg-amber-500",
    shower: " bg-emerald-600",
    swim: " bg-blue-700",
  };

  useEffect(() => {
    getProfilePins().then((pins) => setAllPins(pins));
  }, []);

  useEffect(() => {
    const data = { pinId: actualPin };
    console.log("data", data);
    const comments = getMapComments(data).then((data) =>
      setCommentData(data.data)
    );
  }, [actualPin]);

  console.log("actualPin", actualPin);
  console.log(allPins);
  console.log("comment", commentData);
  if (!allPins) {
    console.log("not");
    return <p>...loading</p>;
  } else {
    return (
      <>
        <div className="">
          <div className="card lg:card-side lg:w-full bg-base-100 shadow-xl">
            <figure>
              <div className="overflow-x-auto w-full overflow-scroll h-96">
                {
                  //tennary operator to check if com is true or false
                  !com ? (
                    <table className="table w-full">
                      <thead>
                        <tr>
                          {/*                           <th className="px-4">Location</th>
                           */}
                          <th className="px-4 w-2/12">Title</th>
                          <th className="px-4">Type</th>
                          <th className="px-4">Edit/Delte</th>
                        </tr>
                      </thead>
                      <tbody>
                        {allPins.data.map((pin) => {
                          return (
                            <tr>
                              {/* <td className="px-4">
                                City-Name
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                  {" "}
                                  {pin.location.coordinates}
                                </span>
                              </td> */}
                              <td className="px-4 w-2/12">{pin.title}</td>
                              <td className="px-4 ">
                                <div className="flex flex-col">
                                  {
                                    //filter for pin where value is true and return the key of the object
                                    Object.keys(pin)
                                      .filter((key) => pin[key] === true)
                                      .map((key) => {
                                        return (
                                          <span
                                            className={`badge badge-ghost badge-sm flex-col ${filterColor[key]}`}
                                          >
                                            {key}
                                          </span>
                                        );
                                        // where key true return value of same
                                      })
                                  }
                                </div>
                              </td>
                              <th className="px-4">
                                <button
                                  onClick={() => {
                                    setActualPin(pin._id);
                                  }}
                                  className="btn btn-ghost btn-xs"
                                >
                                  details
                                </button>
                              </th>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  ) : (
                    <table className="table w-full">
                      <thead>
                        <tr>
                          <th className="px-4">Comments</th>

                          <th className="px-4">Edit/Delte</th>
                        </tr>
                      </thead>
                      <tbody>
                        {commentData &&
                          commentData.map((e) => {
                            return (
                              <tr key={e._id}>
                                <td className="px-4">
                                  <div className="flex flex-col w-full mb-4 mt-4">
                                    <div className="flex space-x-3">
                                      <div className="flex flex-shrink-0">
                                        <img
                                          src="https://images.unsplash.com/photo-1507965613665-5fbb4cbb8399?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                          alt=""
                                          className="h-8 w-8 object-fill rounded-full"
                                        />
                                      </div>
                                      <div className="flex space-x-2 flex-col mb-5 w-full">
                                        <div className="block w-full">
                                          <div className="bg-gray-100 w-full rounded-xl px-2 pb-2">
                                            <div className="font-medium">
                                              <a
                                                href="#"
                                                className="hover:underline text-sm"
                                              >
                                                <small> {e.user.name}</small>
                                              </a>
                                            </div>
                                            <div className="text-xs w-full">
                                              {e.comment}
                                            </div>
                                          </div>
                                          <div className="flex justify-start items-center text-xs w-full">
                                            <div className="font-semibold text-gray-700 px-2 flex items-center justify-center space-x-1">
                                              <a
                                                href="#"
                                                className="hover:underline"
                                              >
                                                <small>Like</small>
                                              </a>
                                              <small className="self-center">
                                                .
                                              </small>
                                              <a
                                                href="#"
                                                className="hover:underline"
                                              >
                                                <small>Reply</small>
                                              </a>
                                              <small className="self-center">
                                                .
                                              </small>
                                              <a
                                                href="#"
                                                className="hover:underline"
                                              >
                                                <small>
                                                  {moment(e.createdAt)
                                                    .startOf("hour")
                                                    .fromNow()}
                                                </small>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </td>

                                <th className="px-4">
                                  <button
                                    onClick={() => { }}
                                    className="btn btn-alert  btn-xs"
                                  >
                                    report
                                  </button>
                                </th>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  )
                }
              </div>
            </figure>
            <div className="card-body h-96">
              {
                // filter for pin where value for _id is equal to actualPin and return index of the object
                allPins.data
                  .filter((pin) => pin._id === actualPin)
                  .map((pin, index) => {
                    return (
                      <>
                        <div className="flex flex-row">
                          <p>Pin Details</p>
                          <button
                            onClick={() => setCom(!com)}
                            className="btn btn-primary btn-xs"
                          >
                            Comments
                          </button>
                        </div>
                        <figure>
                          <img
                            src="https://placeimg.com/200/200/arch"
                            alt="Album"
                          />
                        </figure>
                        <h2 className="card-title">{pin.title}</h2>
                        <div key={index}>
                          <p>{pin.description}</p>
                          <p>{pin.location.coordinates}</p>
                          <p>{pin.location.type}</p>
                        </div>
                      </>
                    );
                  })
              }

              <div className="card-actions justify-end">
                <button
                  onClick={() => setCom(!com)}
                  className="btn btn-primary btn-xs"
                >
                  Comments
                </button>
              </div>
            </div>
          </div>

          {/* <div className="card lg:card-side bg-base-100 shadow-xl">
                 <figure><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
                 <div className="card-body">
                     <h2 className="card-title">New album is released!</h2>
                     <p>Click the button to listen on Spotiwhy app.</p>
                     <div className="card-actions justify-end">
                         <button className="btn btn-primary">Listen</button>
                     </div>
                 </div>
             </div> 
 
 
  */}
        </div>
      </>
    );
  }
};

export default ProfileDashboard;
