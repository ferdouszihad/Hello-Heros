import React from "react";
import { Link } from "react-router-dom";

const Users = () => {
  return (
    <div className="w-9/12 mx-auto my-10">
      <Link to="/add-user" className="my-3">
        <button className="btn btn-info">Add new User 👨‍💻</button>
      </Link>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Edit</th>
              <th>Deleter</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>Male</td>
              <td>Available</td>
              <td>🖊</td>
              <td>❌</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
