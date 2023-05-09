import React from "react";
import { Link } from "react-router-dom";

const AddNewUser = () => {
  return (
    <div className="w-7/12 mx-auto my-10">
      <h2 className="text-5xl font-bold">Add A New User</h2>

      <form className="grid grid-cols-6 my-10 gap-10">
        {/* name  */}
        <div className="name col-span-4">
          {/* <p className="text-xl ">Enter Your Name</p> */}
          <input
            className="border-l-2 w-full border-b-2 border-base-300 outline-none text-lg p-2 focus:border-green-400"
            type="text"
            name="name"
            id=""
            placeholder="Full Name"
          />
        </div>

        {/* age  */}
        <div className="name col-span-2">
          {/* <p className="text-xl ">Enter Your Contact Number</p> */}
          <input
            className="border-l-2 w-full border-b-2 border-base-300 outline-none text-lg p-2 focus:border-green-400"
            type="text"
            name="color"
            id=""
            placeholder="Your Favourite color"
          />
        </div>
        <div className="name col-span-2">
          {/* job  */}
          {/* <p className="text-xl ">Enter Your Contact Number</p> */}
          <input
            className="border-l-2 w-full border-b-2 border-base-300 outline-none text-lg p-2 focus:border-green-400"
            type="text"
            name="job"
            id=""
            placeholder="Your Profession"
          />
        </div>
        {/* gender  */}
        <div className="name col-span-2 place-items-center flex text-slate-700">
          <span className="text-xl mr-6 text-slate-600">Gender </span>
          <input
            type="radio"
            name="gender"
            className="radio radio-accent"
            value={"male"}
            defaultChecked
          />{" "}
          <span className="text-xl mr-6 ml-1">Male</span>
          <input
            type="radio"
            name="gender"
            className="radio radio-accent"
            value="female"
          />
          <span className="text-xl mr-6 ml-1">Female</span>
        </div>

        <div className="name col-span-3 place-items-center flex text-slate-700">
          <span className="text-xl mr-6 text-slate-600">
            Choose Work Status{" "}
            <select
              name="status"
              id=""
              className="mt-5 select select-bordered w-full max-w-xs"
            >
              <option value="true">I am Available</option>
              <option value="false">I am not Available</option>
            </select>
          </span>
        </div>
        <div className="col-span-6 space-x-5">
          <button
            type="submit"
            className="btn btn-dark hover:border-b-4 border-b-emerald-500"
          >
            Add New User
          </button>

          <Link to="/">
            <button className="btn btn-dark hover:border-b-4 border-b-emerald-500">
              Back To User List
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddNewUser;
