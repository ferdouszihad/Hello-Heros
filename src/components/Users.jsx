import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import UserSingle from "./UserSingle";

const Users = () => {
  const [users, setUsers] = useState(useLoaderData());

  const handleDeleteUnavailable = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://book-bd-admin-server.vercel.app/not-available-users`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const filter = users.filter((user) => user.status != "false");
            setUsers(filter);
            Swal.fire(
              "Deleted!",
              `${data.deletedCount} Users has been Removed.`,
              "success"
            );
          });
      }
    });
  };

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://book-bd-admin-server.vercel.app/users/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const filter = users.filter((user) => user._id != _id);
              setUsers(filter);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="w-9/12 mx-auto my-10 space-y-10">
      <div className="logo my-10 flex justify-center items-center">
        <img
          src="https://media.licdn.com/dms/image/C4D0BAQFDGvg03AZijA/company-logo_200_200/0/1519922021438?e=1689206400&v=beta&t=asa-ezIpxtS2M8at0RZJA89XtpZegnlAqoMOOXTkaQY"
          alt=""
          width={50}
        />
        <h2 className="text-3xl">All Donor List</h2>
      </div>
      <div className="flex justify-between gap-5">
        <Link to="/add-user">
          <button className="btn btn-info">Add new User 👨‍💻</button>
        </Link>
        <button className="btn btn-danger" onClick={handleDeleteUnavailable}>
          Delete Not Available Persons
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead className="">
            <tr>
              <th className="bg-yellow-500"></th>
              <th className="bg-stone-800 text-white">Name</th>
              <th className="bg-stone-800 text-white">Contact</th>
              <th className="bg-stone-800 text-white">Blood Group</th>
              <th className="bg-stone-800 text-white">Gender</th>
              <th className="bg-stone-800 text-white">Age</th>
              <th className="bg-stone-800 text-white">Status</th>
              <th className="bg-stone-800 text-white">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserSingle
                id={users.indexOf(user) + 1}
                key={user._id}
                handleDelete={handleDelete}
                user={user}
              ></UserSingle>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
