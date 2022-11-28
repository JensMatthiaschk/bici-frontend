import React from "react";
import { Form } from "react-router-dom";

export default function Searchbar() {
  return (
    <div>
      <Form method="get" action="/a">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
            name="query"
          />
          <button className="btn btn-primary btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </Form>
    </div>
  );
}